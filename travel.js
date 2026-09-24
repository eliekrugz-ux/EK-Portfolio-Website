// Interactive travel map. Needs d3 + topojson-client (loaded on demand by app.js).
window.TravelMap = async function (root, T) {
  const [world, us] = await Promise.all([
    fetch("vendor/countries-50m.json").then(r => r.json()),
    fetch("vendor/states-10m.json").then(r => r.json()),
  ]);

  const W = 960, H = 500;
  const countries = topojson.feature(world, world.objects.countries).features
    .filter(f => f.properties.name !== "Antarctica");
  const states = topojson.feature(us, us.objects.states).features;

  // Which places light up each country shape ("United Kingdom" -> England, Scotland, Northern Ireland).
  const byCountry = new Map();
  T.places.forEach(p => [].concat(p.map).forEach(m => byCountry.set(m, [...(byCountry.get(m) || []), p.name])));
  const stateSet = new Set(T.states);

  const projection = d3.geoNaturalEarth1()
    .fitExtent([[8, 8], [W - 8, H - 8]], { type: "FeatureCollection", features: countries });
  const path = d3.geoPath(projection);

  // Split each country into its separate landmasses, so a visit to France doesn't also light up
  // French Guiana or Réunion. A piece counts as visited only if it's near one of that country's
  // pins; countries without pins (Canada, Mexico) light up whole.
  const NEAR_KM = 1500;
  const pinsFor = name => T.places.filter(p => p.at && [].concat(p.map).includes(name)).map(p => p.at);
  const parts = countries.flatMap(f => {
    const polys = f.geometry.type === "MultiPolygon" ? f.geometry.coordinates : [f.geometry.coordinates];
    const name = f.properties.name;
    const visited = name !== "United States of America" && byCountry.has(name);
    const pins = visited ? pinsFor(name) : [];
    return polys.map(coords => {
      const part = { type: "Feature", properties: f.properties, geometry: { type: "Polygon", coordinates: coords } };
      const c = d3.geoCentroid(part);
      part.visited = visited && (!pins.length || pins.some(p => d3.geoDistance(c, p) * 6371 < NEAR_KM));
      return part;
    });
  });
  // The visited pieces of a country, for zooming to it.
  const visitedBounds = name => {
    const ps = parts.filter(p => p.visited && p.properties.name === name);
    return ps.length ? path.bounds({ type: "FeatureCollection", features: ps }) : null;
  };

  const mapEl = root.querySelector(".map");
  const tip = root.querySelector(".map-tip");
  const svg = d3.select(mapEl).append("svg")
    .attr("viewBox", `0 0 ${W} ${H}`)
    .attr("role", "img")
    .attr("aria-label", `Map of places visited: ${T.places.map(p => p.name).join(", ")}`);
  const g = svg.append("g").style("--k", 1);

  g.append("path").datum({ type: "Sphere" }).attr("class", "sphere").attr("d", path);
  g.append("path").datum(d3.geoGraticule10()).attr("class", "graticule").attr("d", path);

  const showTip = (event, html) => {
    const box = mapEl.getBoundingClientRect();
    tip.innerHTML = html;
    tip.hidden = false;
    tip.style.left = `${event.clientX - box.left + 14}px`;
    tip.style.top = `${event.clientY - box.top + 14}px`;
  };
  const hideTip = () => { tip.hidden = true; };

  // Countries. The US is drawn plain here; its visited states light up on the layer above.
  const land = g.append("g").selectAll("path").data(parts).join("path")
    .attr("d", path)
    .attr("class", d => d.visited ? "land visited" : "land")
    .on("mousemove", (e, d) => {
      const names = byCountry.get(d.properties.name);
      if (d.visited && names) showTip(e, `<b>${names.join(" · ")}</b>`);
      else hideTip();
    })
    .on("mouseleave", hideTip);

  const stateEls = g.append("g").selectAll("path").data(states).join("path")
    .attr("d", path)
    .attr("class", d => stateSet.has(d.properties.name) ? "state visited" : "state")
    .on("mousemove", (e, d) => showTip(e, stateSet.has(d.properties.name)
      ? `<b>${d.properties.name}</b>` : `${d.properties.name}<span>not yet</span>`))
    .on("mouseleave", hideTip);

  // Flight arcs from home to every pinned place.
  const pinned = T.places.filter(p => p.at);
  g.append("g").selectAll("path").data(pinned).join("path")
    .attr("class", "arc")
    .attr("pathLength", 1)
    .style("animation-delay", (d, i) => `${300 + i * 70}ms`)
    .attr("d", d => path({ type: "LineString", coordinates: [T.home, d.at] }));

  const pins = g.append("g").selectAll("g").data(pinned).join("g")
    .attr("class", "pin-g")
    .attr("transform", d => `translate(${projection(d.at)})`)
    .on("mousemove", (e, d) => showTip(e, `<b>${d.name}</b><span>${d.region}</span>`))
    .on("mouseleave", hideTip);
  pins.append("circle").attr("class", "pin-ring").style("animation-delay", (d, i) => `${(i % 6) * 0.4}s`);
  pins.append("circle").attr("class", "pin");

  const home = g.append("g").attr("class", "home-g").attr("transform", `translate(${projection(T.home)})`);
  home.append("circle").attr("class", "home-pin");
  home.append("text").attr("class", "home-label").text("HOME");

  const sizePins = k => {
    g.style("--k", k);
    pins.selectAll(".pin").attr("r", 3 / k).attr("stroke-width", 1 / k);
    pins.selectAll(".pin-ring").attr("r", 3 / k).attr("stroke-width", 1 / k);
    home.select(".home-pin").attr("r", 4 / k).attr("stroke-width", 1.2 / k);
    home.select(".home-label").attr("x", 7 / k).attr("y", 3 / k).style("font-size", `${9 / k}px`);
  };
  sizePins(1);

  // Drag to pan, buttons to zoom. The scroll wheel is left alone so the page still scrolls.
  const zoom = d3.zoom().scaleExtent([1, 60])
    .translateExtent([[0, 0], [W, H]])
    .on("zoom", e => { g.attr("transform", e.transform); sizePins(e.transform.k); });
  svg.call(zoom).on("wheel.zoom", null).on("dblclick.zoom", null);

  const zoomToBounds = ([[x0, y0], [x1, y1]], pad = 0.85) => {
    const k = Math.min(60, pad / Math.max((x1 - x0) / W, (y1 - y0) / H));
    const t = d3.zoomIdentity.translate(W / 2, H / 2).scale(k).translate(-(x0 + x1) / 2, -(y0 + y1) / 2);
    svg.transition().duration(1100).ease(d3.easeCubicInOut).call(zoom.transform, t);
  };
  const boxOf = ([lon0, lat0, lon1, lat1]) => {
    const a = projection([lon0, lat1]), b = projection([lon1, lat0]);
    return [[Math.min(a[0], b[0]), Math.min(a[1], b[1])], [Math.max(a[0], b[0]), Math.max(a[1], b[1])]];
  };
  const VIEWS = {
    world: null,
    usa: [-124, 24, -67, 49.5],
    europe: [-11, 36, 16, 59],
    caribbean: [-80.5, 11, -60, 33.5],
  };
  const tabs = root.querySelectorAll("[data-view]");
  const setView = v => {
    tabs.forEach(b => b.setAttribute("aria-pressed", b.dataset.view === v));
    if (!VIEWS[v]) svg.transition().duration(1100).ease(d3.easeCubicInOut).call(zoom.transform, d3.zoomIdentity);
    else zoomToBounds(boxOf(VIEWS[v]));
  };
  tabs.forEach(b => b.addEventListener("click", () => setView(b.dataset.view)));

  root.querySelectorAll("[data-zoom]").forEach(b => b.addEventListener("click", () => {
    tabs.forEach(t => t.setAttribute("aria-pressed", "false"));
    svg.transition().duration(450).ease(d3.easeCubicOut)
      .call(zoom.scaleBy, b.dataset.zoom === "in" ? 2 : 0.5);
  }));

  // The list under the map: hover highlights, click flies there.
  const highlight = name => {
    const place = T.places.find(p => p.name === name);
    const maps = place ? [].concat(place.map) : [];
    land.classed("hl", d => d.visited && maps.includes(d.properties.name));
    stateEls.classed("hl", d => d.properties.name === name || (name === "United States" && stateSet.has(d.properties.name)));
    pins.classed("hl", d => d.name === name);
  };
  root.querySelectorAll("[data-place]").forEach(el => {
    const name = el.dataset.place;
    el.addEventListener("mouseenter", () => highlight(name));
    el.addEventListener("mouseleave", () => highlight(null));
    el.addEventListener("focus", () => highlight(name));
    el.addEventListener("blur", () => highlight(null));
    el.addEventListener("click", () => {
      tabs.forEach(b => b.setAttribute("aria-pressed", "false"));
      const place = T.places.find(p => p.name === name);
      if (place && place.at && place.name !== "Canada") {
        const [lon, lat] = place.at;
        zoomToBounds(boxOf([lon - 3, lat - 2, lon + 3, lat + 2]), 0.6);
      } else if (place) {
        const b = name === "United States" ? boxOf(VIEWS.usa) : [].concat(place.map).map(visitedBounds).find(Boolean);
        if (b) zoomToBounds(b);
      } else {
        const s = states.find(s => s.properties.name === name);
        if (s) zoomToBounds(path.bounds(s), 0.5);
      }
      mapEl.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
};
