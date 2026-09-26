(() => {
  const S = window.SITE;
  const app = document.getElementById("app");

  const esc = (s = "") => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const ext = url => `href="${esc(url)}" target="_blank" rel="noopener"`;
  const liveSocials = S.socials.filter(s => s.url);

  const roman = n => [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]]
    .reduce((out, [v, r]) => { while (n >= v) { out += r; n -= v; } return out; }, "");

  const T = S.travel;
  const stateCount = T.states.filter(s => s !== "District of Columbia").length;

  // Every page is a numbered chapter.
  const CHAPTERS = [
    { key: "about", nav: "About", title: "The Passport", teaser: "Who I am" },
    { key: "socials", nav: "Socials", title: "The Media Kit", teaser: "Stats · brands · UGC" },
    { key: "work", nav: "Work", title: "Holdings", teaser: "Forge · Signlr" },
    { key: "record", nav: "Record", title: "The Ledger", teaser: "MMVIII to today" },
    { key: "finance", nav: "Finance", title: "The Finance Journey", teaser: "DYCD to Baruch" },
    { key: "high-school", nav: "High School", title: "The Murrow Years", teaser: "MMXXII to MMXXVI" },
    { key: "travel", nav: "Travel", title: "Journeys", teaser: `${T.places.length} countries · ${stateCount} states` },
    { key: "resume", nav: "Resume", title: "Dossier", teaser: "The full record" },
  ];
  CHAPTERS.forEach((c, i) => { c.num = roman(i + 1); });

  const fleurPaths = `
    <path d="M0 6 C-13 22 -14 44 0 62 C14 44 13 22 0 6 Z" />
    <path d="M-5 60 C-24 60 -36 44 -31 29 C-27 18 -14 19 -13 30 C-12 38 -19 42 -23 37" />
    <path d="M5 60 C24 60 36 44 31 29 C27 18 14 19 13 30 C12 38 19 42 23 37" />
    <path d="M-19 64 H19 M-19 70 H19" />
    <path d="M-6 70 C-9 80 -15 87 -24 90 M6 70 C9 80 15 87 24 90 M0 70 V96" />`;
  const ekMark = `<svg class="ek" viewBox="110 10 136 100" aria-hidden="true"><path d="M160 22 H124 V98 H162 M124 60 H154 M190 20 V100 M190 64 L228 22 M202 52 L232 100" /></svg>`;

  // ---------- chrome ----------
  // Header icons in each brand's own colors.
  const BRAND = {
    LinkedIn: d => `<rect x="2.5" y="2.5" width="19" height="19" fill="#fff"/><path fill="#0A66C2" d="${d}"/>`,
    Instagram: d => `<defs><radialGradient id="ig-grad" cx="28%" cy="108%" r="140%">
        <stop offset="0" stop-color="#fdf497"/><stop offset=".08" stop-color="#fdf497"/><stop offset=".45" stop-color="#fd5949"/>
        <stop offset=".62" stop-color="#d6249f"/><stop offset=".92" stop-color="#285aeb"/></radialGradient></defs>
      <path fill="url(#ig-grad)" d="${d}"/>`,
    TikTok: d => `<path fill="#25F4EE" transform="translate(-.8 -.6)" d="${d}"/><path fill="#FE2C55" transform="translate(.8 .6)" d="${d}"/><path fill="#fff" d="${d}"/>`,
    GitHub: d => `<path fill="#fff" d="${d}"/>`,
  };
  const icon = name => window.ICONS && ICONS[name]
    ? `<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">${(BRAND[name] || (d => `<path fill="currentColor" d="${d}"/>`))(ICONS[name])}</svg>` : "";
  const mailIcon = `<svg class="ico ico-gmail" viewBox="52 42 88 66" aria-hidden="true">
    <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"/>
    <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"/>
    <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"/>
    <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92"/>
    <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"/></svg>`;
  document.getElementById("socials").innerHTML = liveSocials.map(s =>
      `<a ${ext(s.url)} title="${esc(s.name)}" aria-label="${esc(s.name)}">${icon(s.name) || esc(s.label)}</a>`).join("")
    + `<a href="mailto:${esc(S.email)}" title="Email" aria-label="Email">${mailIcon}</a>`;
  document.getElementById("overlay-socials").innerHTML = liveSocials.map(s => `<a ${ext(s.url)}>${esc(s.name)}</a>`).join("")
    + `<a href="mailto:${esc(S.email)}">Email</a>`;

  const navLinks = CHAPTERS.map(c => `<a href="#/${c.key}"><i>${c.num}</i>${esc(c.nav)}</a>`).join("");
  document.getElementById("nav").innerHTML = navLinks;
  document.getElementById("overlay-nav").innerHTML = navLinks;
  document.getElementById("year-roman").textContent = roman(new Date().getFullYear());


  const menuBtn = document.getElementById("menu");
  const overlay = document.getElementById("overlay");
  const setMenu = open => { overlay.hidden = !open; menuBtn.setAttribute("aria-expanded", open); };
  menuBtn.addEventListener("click", () => setMenu(overlay.hidden));
  document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

  // Slow reveals as things scroll into view.
  const io = "IntersectionObserver" in window
    ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" })
    : null;
  const reveal = () => app.querySelectorAll("[data-reveal]").forEach((el, i) => {
    el.style.setProperty("--i", i % 8);
    io ? io.observe(el) : el.classList.add("in");
  });

  const chapterHead = (key, sub) => {
    const c = CHAPTERS.find(c => c.key === key);
    return `
      <header class="ch-head">
        <span class="ch-big" aria-hidden="true">${c.num}</span>
        <span class="ch-num">Chapter ${c.num} · ${esc(c.nav)}</span>
        <h1>${esc(c.title)}</h1>
        ${sub ? `<p>${esc(sub)}</p>` : ""}
      </header>`;
  };

  // Social numbers added up across every account in the media kit.
  const compact = n => n >= 1e6 ? `${+(n / 1e6).toFixed(1)}M` : n >= 1e3 ? `${+(n / 1e3).toFixed(1)}K` : String(n);
  const socialTotal = k => S.mediaKit.accounts.reduce((sum, a) => sum + (a[k] || 0), 0);
  const REACH = {
    followers: socialTotal("followers"),
    views: socialTotal("views"),
    likes: socialTotal("likes"),
    comments: socialTotal("comments"),
    shares: socialTotal("shares"),
    saves: socialTotal("saves"),
  };
  REACH.interactions = REACH.likes + REACH.comments + REACH.shares + REACH.saves;
  const interactionMix = `${compact(REACH.likes)} likes · ${compact(REACH.comments)} comments · ${compact(REACH.shares)} shares · ${compact(REACH.saves)} saves`;

  const fillTotals = v => v.replace(/\{(\w+)\}/g, (m, k) => REACH[k] != null ? compact(REACH[k]) : m);
  const tickerItems = S.ticker.map(t =>
    `<span class="tk">${esc(t.text)} <em class="${t.up ? "up" : ""}">${t.up ? "▲ " : ""}${esc(fillTotals(t.value))}</em></span>`).join("");
  document.getElementById("ticker").innerHTML = tickerItems + tickerItems; // doubled for a seamless loop

  // ---------- home ----------
  function renderHome() {
    const stats = [
      ["Products live", "2", true],
      ["Countries", String(T.places.length)],
      ["Content views", `${compact(REACH.views)}+`, true],
      ["Interactions", `${compact(REACH.interactions)}+`, true, interactionMix],
    ];
    app.innerHTML = `
      <section class="hero">
        <svg class="crest" viewBox="-40 0 80 100" aria-hidden="true">${fleurPaths}</svg>
        <h1 class="hero-name">${esc(S.name)}</h1>
        <p class="hero-focus">${S.focus.map(esc).join(" · ")}</p>
        <p class="hero-est">Brooklyn · Est. MMVIII</p>
        <button class="hero-cue" id="cue">Contents ↓</button>
      </section>
      <section class="market" data-reveal aria-label="At a glance">
        ${stats.map(([k, v, up, note]) => `<div${note ? ` title="${esc(note)}"` : ""}><span>${esc(k)}</span><b>${up ? `<em>▲</em>` : ""}${esc(v)}</b>${note ? `<small>${esc(note)}</small>` : ""}</div>`).join("")}
      </section>
      <section class="contents" id="contents">
        <h2 class="label">Contents</h2>
        <ol>${CHAPTERS.map(c => `
          <li data-reveal><a href="#/${c.key}">
            <span class="c-num">${c.num}.</span>
            <span class="c-title">${esc(c.title)}</span>
            <span class="c-teaser">${esc(c.teaser)}</span>
          </a></li>`).join("")}
        </ol>
      </section>`;
    document.getElementById("cue").addEventListener("click", () =>
      document.getElementById("contents").scrollIntoView({ behavior: "smooth" }));
  }

  // ---------- I. about ----------
  function renderAbout() {
    const mrz1 = `P<BKN${S.name.split(" ").reverse().join("<<").toUpperCase()}`.padEnd(44, "<").slice(0, 44);
    const mrz2 = `EK2008<<${S.focus.join("<").toUpperCase().replace(/ /g, "<")}`.padEnd(44, "<").slice(0, 44);
    app.innerHTML = `
      ${chapterHead("about")}
      <section class="about">
        <div class="passport" data-reveal>
          <div class="pp-head">
            <svg viewBox="-40 0 80 100" aria-hidden="true"><use href="#fleur" /></svg>
            <span>Passport · Passeport · Паспорт</span>
          </div>
          <div class="pp-body">
            <div class="pp-photo">
              ${S.photo ? `<img src="${esc(S.photo)}" alt="${esc(S.name)}" onerror="this.remove()">` : ""}
              ${ekMark}
            </div>
            <dl>${S.passport.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
          </div>
          <div class="pp-mrz" aria-hidden="true">${esc(mrz1)}<br>${esc(mrz2)}</div>
          <div class="pp-stamp" aria-hidden="true"><span>Brooklyn</span><svg viewBox="-40 0 80 100"><use href="#fleur" /></svg><span>New York</span></div>
        </div>
        <div class="story">
          ${S.about.map(p => `<p data-reveal>${esc(p)}</p>`).join("")}
          <div class="story-links" data-reveal>
            <a href="mailto:${esc(S.email)}">✉ ${esc(S.email)}</a>
            ${liveSocials.map(s => `<a ${ext(s.url)}>↗ ${esc(s.name)}</a>`).join("")}
          </div>
        </div>
      </section>`;
  }

  // ---------- II. socials ----------
  function renderSocials() {
    const K = S.mediaKit;
    const mailto = `mailto:${S.email}?subject=${encodeURIComponent("Collaboration with Elie")}`;
    const brandMark = b => b.logo
      ? `<img src="${esc(b.logo)}" alt="${esc(b.name)} logo" loading="lazy">`
      : `<span aria-hidden="true">${esc(b.name[0])}</span>`;
    const brandStyle = t => t ? `style="--b-bg:${t.bg};--b-line:${t.line};--b-accent:${t.accent};--b-ink:${t.ink};--b-font:${t.font};--b-logo-bg:${t.logoBg || "transparent"};--b-logo-pad:${t.logoBg ? "13px" : "0"}"` : "";
    app.innerHTML = `
      ${chapterHead("socials", "Stats, brand work and services, all in one place.")}

      <section class="mk-hero" data-reveal>
        <div class="mk-id">
          <div class="mk-avatar">
            ${K.avatar ? `<img src="${esc(K.avatar)}" alt="${esc(S.name)}, profile picture" onerror="this.remove()">` : ""}
            ${ekMark}
          </div>
          <div>
            <h2 class="mk-name">${esc(S.name)}</h2>
            <p class="mk-handle">${esc(K.handle)} · ${esc(S.location)}</p>
            <p class="mk-bio">${esc(K.bio)}</p>
            <div class="mk-niches">${K.niches.map(n => `<span>${esc(n)}</span>`).join("")}</div>
          </div>
        </div>
        <div class="mk-totals">
          <div><b>${REACH.followers.toLocaleString()}</b><span>Followers</span></div>
          <div><b>${compact(REACH.views)}+</b><span>Content views</span></div>
          <div title="${esc(interactionMix)}"><b>${compact(REACH.interactions)}+</b><span>Interactions</span></div>
          <p class="mk-mix">${esc(interactionMix)}</p>
          <a class="mk-cta" href="${esc(mailto)}">Work with me →</a>
        </div>
      </section>

      <div class="mk-h" data-reveal><h2>Platforms</h2><span>Stats as of ${esc(K.statsAsOf)}</span></div>
      <div class="mk-platforms">${K.accounts.map(a => `
        <a class="pcard p-${a.platform.toLowerCase()}" ${ext(a.url)} data-reveal>
          <div class="pcard-top">${icon(a.platform)}<span>${esc(a.platform)}</span><em>${esc(a.role)}</em></div>
          <div class="pcard-profile">
            ${a.avatar ? `<img src="${esc(a.avatar)}" alt="" loading="lazy"${a.avatarIsLogo ? ` class="is-logo"` : ""}>` : ""}
            <span class="pcard-handle">${esc(a.handle).replace(/\./g, "<wbr>.")}</span>
          </div>
          <div class="pcard-big"><b>${compact(a.followers)}</b><span>${a.followers === 1 ? "follower" : "followers"}</span></div>
          <dl class="pcard-stats">
            ${[["Views", a.views], ["Likes", a.likes], ["Comments", a.comments], [a.platform === "TikTok" ? "Videos" : "Posts", a.posts]]
              .filter(([, v]) => v != null).slice(0, 3)
              .map(([k, v]) => `<div><dt>${k}</dt><dd>${compact(v)}</dd></div>`).join("")}
          </dl>
          <span class="pcard-go">View profile ↗</span>
        </a>`).join("")}
      </div>

      <div class="mk-h" data-reveal><h2>Brands I've worked with</h2></div>
      <div class="mk-brands">${K.brands.map(b => `
        <article class="bcard${b.theme ? " branded" : ""}${b.theme && b.theme.light ? " light" : ""}" ${brandStyle(b.theme)} data-reveal>
          <div class="bcard-logo">${brandMark(b)}</div>
          <div class="bcard-body">
            <div class="bcard-head"><h3>${esc(b.name)}</h3><span class="pill">${esc(b.role)}</span></div>
            <p>${esc(b.what)}</p>
            ${b.stats ? `
              <dl class="bcard-stats">${Object.entries(b.stats).map(([k, v]) =>
                `<div><dt>${esc(k)}</dt><dd>${compact(v)}</dd></div>`).join("")}</dl>
              ${b.statsNote ? `<p class="bcard-note">${esc(b.statsNote)}</p>` : ""}` : ""}
            <div class="bcard-foot"><span>${esc(b.when)}</span>${b.links.map(([l, u]) => `<a ${ext(u)}>${esc(l)} ↗</a>`).join("")}</div>
          </div>
        </article>`).join("")}
      </div>

      <div class="mk-h" data-reveal><h2>Services</h2><span>Rates on request</span></div>
      <ol class="mk-services">${K.services.map(([t, d], i) => `
        <li data-reveal><span class="svc-n">${String(i + 1).padStart(2, "0")}</span><h3>${esc(t)}</h3><p>${esc(d)}</p></li>`).join("")}
      </ol>

      <div class="mk-h" data-reveal><h2>Also on</h2></div>
      <div class="mk-elsewhere">${K.elsewhere.map(e => `
        <a ${ext(e.url)} data-reveal>${icon(e.name)}<b>${esc(e.name)}</b><span>${esc(e.handle)}</span><em>${esc(e.blurb)}</em><i>↗</i></a>`).join("")}
      </div>

      ${S.posts && S.posts.length ? `
        <div class="mk-h" data-reveal><h2>Latest on LinkedIn</h2></div>
        <ol class="posts">${S.posts.map(p => `
          <li data-reveal><a ${ext(p.url)}>
            <span class="d">${esc(p.date)}</span>
            <span><span class="label">${esc(p.platform)}</span><p>${esc(p.text)}</p></span>
          </a></li>`).join("")}
        </ol>` : ""}

      <section class="mk-contact" data-reveal>
        <span class="label">Collaborations</span>
        <h2>Let's make something together.</h2>
        <a class="mk-cta" href="${esc(mailto)}">${esc(S.email)} →</a>
      </section>`;
  }

  // ---------- III. work ----------
  function renderWork() {
    app.innerHTML = `
      ${chapterHead("work", "Products I designed, built and launched myself.")}
      <section class="term" data-reveal>
        <div class="term-bar"><span><em>●</em> Holdings</span><span>${S.work.length} positions · all live</span></div>
        <div class="term-row term-cols" aria-hidden="true">
          <span>Ticker</span><span>Name</span><span>Since</span><span>Role</span><span>Status</span>
        </div>
        ${S.work.map((w, i) => `
          <div class="holding">
            <button class="term-row" aria-expanded="true" data-w="${i}">
              <span class="tk-sym">${esc(w.ticker)}</span>
              <span class="h-name">${esc(w.name)}</span>
              <span>${esc(w.since)}</span>
              <span>${esc(w.role)}</span>
              <span class="h-status">▲ Live</span>
            </button>
            <div class="h-detail">
              <p>${esc(w.summary)}</p>
              <div class="h-stack">${esc(w.stack)}</div>
              ${w.url ? `<a class="h-visit" ${ext(w.url)}>Visit ${esc(w.url.replace(/^https?:\/\//, ""))} ↗</a>` : ""}
            </div>
          </div>`).join("")}
      </section>`;
    app.querySelectorAll("[data-w]").forEach(b => b.addEventListener("click", () => {
      const d = b.nextElementSibling;
      d.hidden = !d.hidden;
      b.setAttribute("aria-expanded", !d.hidden);
    }));
  }

  // ---------- IV. record ----------
  const TAGS = [["all", "All"], ["build", "Build"], ["finance", "Finance"], ["lead", "Leadership"], ["award", "Awards"], ["work", "Work"], ["school", "School"], ["life", "Life"]];
  let filter = "all";
  const yearOf = d => { const p = d.split("."); return p.length === 1 ? +p[0] : 2000 + +p[p.length - 1]; };

  function renderRecord() {
    const used = new Set(S.timeline.flatMap(e => e.tags));
    const items = S.timeline.filter(e => filter === "all" || e.tags.includes(filter));
    const years = [...new Set(items.map(e => yearOf(e.date)))];
    app.innerHTML = `
      ${chapterHead("record", "Everything so far, newest first. Click a line with + to read more.")}
      <div class="tabs" role="group" aria-label="Filter">${TAGS.filter(([k]) => k === "all" || used.has(k)).map(([k, l]) =>
        `<button data-f="${k}" aria-pressed="${k === filter}">${l}</button>`).join("")}</div>
      <div class="ledger">${years.map(y => `
        <section class="yr" data-reveal>
          <div class="yr-head"><span class="yr-num">${roman(y)}</span><span class="yr-ar">${y}</span></div>
          <ol>${items.filter(e => yearOf(e.date) === y).map(e => {
            const tags = e.tags.map(t => `<span class="tag${t === "award" ? " award" : ""}">${t === "award" ? "▲ " : ""}${esc(t === "lead" ? "leadership" : t)}</span>`).join("");
            const text = e.link
              ? `<a class="e-text" ${ext(e.link)}>${esc(e.text)} ↗</a>`
              : e.detail ? `<button class="e-text" aria-expanded="false">${esc(e.text)}<span class="more">+</span></button>`
              : `<span class="e-text">${esc(e.text)}</span>`;
            return `<li><span class="e-date">${esc(e.date)}</span><div>${text}${e.detail ? `<p class="e-detail" hidden>${esc(e.detail)}</p>` : ""}</div><span class="e-tags">${tags}</span></li>`;
          }).join("")}</ol>
        </section>`).join("")}
      </div>`;
    app.querySelectorAll("[data-f]").forEach(b => b.addEventListener("click", () => { filter = b.dataset.f; renderRecord(); reveal(); }));
    app.querySelectorAll("button.e-text").forEach(b => b.addEventListener("click", () => {
      const d = b.nextElementSibling;
      d.hidden = !d.hidden;
      b.setAttribute("aria-expanded", !d.hidden);
      b.querySelector(".more").textContent = d.hidden ? "+" : "–";
    }));
  }

  // ---------- V & VI. journeys ----------
  function renderJourney(key, j) {
    app.innerHTML = `
      ${chapterHead(key, j.intro)}
      <ol class="steps">${j.steps.map(s => `
        <li data-reveal><span class="w">${esc(s.when)}</span><div><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></div></li>`).join("")}
      </ol>`;
  }

  // ---------- VII. travel ----------
  const scripts = {};
  const loadScript = src => scripts[src] || (scripts[src] = new Promise((ok, fail) => {
    const s = document.createElement("script");
    s.src = src; s.onload = ok; s.onerror = fail;
    document.head.appendChild(s);
  }));
  const miles = ([lon1, lat1], [lon2, lat2]) => {
    const r = Math.PI / 180, a = Math.sin((lat2 - lat1) * r / 2) ** 2
      + Math.cos(lat1 * r) * Math.cos(lat2 * r) * Math.sin((lon2 - lon1) * r / 2) ** 2;
    return 3959 * 2 * Math.asin(Math.sqrt(a));
  };

  function renderTravel() {
    const far = T.places.filter(p => p.at).map(p => ({ p, d: miles(T.home, p.at) })).sort((a, b) => b.d - a.d)[0];
    const shapes = ["circle", "rect", "oval"];
    const tilt = i => ((i * 37) % 13) - 6;
    const regions = [...new Set(T.places.map(p => p.region))];
    let n = 0;
    app.innerHTML = `
      ${chapterHead("travel", "Every stamp so far. Brooklyn is home base.")}
      <section class="market" data-reveal>
        <div><span>Countries & territories</span><b>${T.places.length}</b></div>
        <div><span>U.S. states + D.C.</span><b>${stateCount}</b></div>
        <div><span>Farthest from home</span><b>${Math.round(far.d).toLocaleString()} mi</b></div>
        <div><span>Farthest stamp</span><b class="small">${esc(far.p.name)}</b></div>
      </section>
      <div class="map-wrap" data-reveal>
        <div class="map-tabs" role="group" aria-label="Map view">
          ${[["world", "World"], ["usa", "USA"], ["europe", "Europe"], ["caribbean", "Caribbean"]].map(([v, l]) =>
            `<button data-view="${v}" aria-pressed="${v === "world"}">${l}</button>`).join("")}
        </div>
        <div class="map-zoom" role="group" aria-label="Zoom">
          <button data-zoom="in" aria-label="Zoom in">+</button>
          <button data-zoom="out" aria-label="Zoom out">−</button>
        </div>
        <div class="map"><p class="map-loading">Loading map…</p></div>
        <div class="map-tip" hidden></div>
        <span class="map-hint">Drag to move · click a stamp to fly there</span>
      </div>
      ${regions.map(r => `
        <section class="stamp-group">
          <h2 class="label">${esc(r)}</h2>
          <div class="stamps">${T.places.filter(p => p.region === r).map(p => { const i = n++; return `
            <button class="stamp s-${shapes[i % 3]}" style="--r:${tilt(i)}deg" data-place="${esc(p.name)}">
              <small>${esc(r === "Caribbean & Atlantic" ? "Caribbean" : r)}</small><b>${esc(p.name)}</b><small>⚜ Visited</small>
            </button>`; }).join("")}
          </div>
        </section>`).join("")}
      <section class="stamp-group">
        <h2 class="label">U.S. states</h2>
        <div class="stamps">${T.states.map((s, i) => `
          <button class="stamp s-rect dom" style="--r:${tilt(i + 5)}deg" data-place="${esc(s)}"><small>USA</small><b>${esc(s === "District of Columbia" ? "Washington, D.C." : s)}</b></button>`).join("")}
        </div>
      </section>`;
    const root = app;
    loadScript("vendor/d3.min.js")
      .then(() => loadScript("vendor/topojson-client.min.js"))
      .then(() => loadScript("travel.js"))
      .then(() => window.TravelMap(root, T))
      .then(() => root.querySelector(".map-loading")?.remove())
      .catch(() => { const l = root.querySelector(".map-loading"); if (l) l.textContent = "The map couldn't load."; });
  }

  // ---------- VIII. resume ----------
  function renderResume() {
    const R = S.resume;
    // Same layout as the PDF: org + location, then role + dates, then lines and bullets.
    const item = x => `
      <div class="ritem">
        <div class="r-row"><b>${esc(x.org)}</b><span>${esc(x.where || "")}</span></div>
        ${x.role || x.when ? `<div class="r-row r-sub"><i>${esc(x.role || "")}</i><span>${esc(x.when || "")}</span></div>` : ""}
        ${(x.lines || []).map(l => `<p class="r-line">${esc(l)}</p>`).join("")}
        ${x.points ? `<ul>${x.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}
      </div>`;
    const section = s => `
      <div class="rsec" data-reveal>
        <h2 class="r-title">${esc(s.title)}</h2>
        ${s.items ? s.items.map(item).join("") : ""}
        ${s.info ? `<div class="r-info">${s.info.map(([k, v]) => `<p><b>${esc(k)}:</b> ${esc(v)}</p>`).join("")}</div>` : ""}
      </div>`;
    const sec = (label, body) => `<div class="rsec" data-reveal><h2 class="r-title">${label}</h2>${body}</div>`;
    app.innerHTML = `
      ${chapterHead("resume", `${S.location} · ${S.email}`)}
      <section class="resume">
        <div class="resume-actions">
          <a class="ghost" href="${esc(R.pdf)}" target="_blank" rel="noopener">View PDF ↗</a>
          <a class="ghost" href="${esc(R.pdf)}" download>Download PDF</a>
          <button class="print-btn" id="print">⎙ Print resume</button>
        </div>
        ${R.sections.map(section).join("")}
        ${sec("Skills", `<div class="skill-groups">${Object.entries(R.skills).map(([g, list]) =>
          `<div class="sg"><span class="sg-name">${esc(g)}</span><div class="chips">${list.map(s => `<span>${esc(s)}</span>`).join("")}</div></div>`).join("")}</div>`)}
      </section>`;
    // Print the actual PDF (not this page) by loading it in a hidden frame.
    // If the browser won't print from a frame, open the PDF so it can be printed from there.
    document.getElementById("print").addEventListener("click", () => {
      document.getElementById("pdf-frame")?.remove();
      const f = document.createElement("iframe");
      f.id = "pdf-frame";
      f.src = R.pdf;
      f.style.cssText = "position:fixed;width:0;height:0;border:0;visibility:hidden";
      f.onload = () => {
        try { f.contentWindow.focus(); f.contentWindow.print(); }
        catch (e) { window.open(R.pdf, "_blank", "noopener"); }
      };
      document.body.appendChild(f);
    });
  }

  // ---------- router ----------
  const routes = {
    "": renderHome,
    about: renderAbout,
    socials: renderSocials,
    work: renderWork,
    record: renderRecord,
    finance: () => renderJourney("finance", S.journeys.finance),
    "high-school": () => renderJourney("high-school", S.journeys.highschool),
    travel: renderTravel,
    resume: renderResume,
  };

  function route() {
    const key = location.hash.replace(/^#\/?/, "").split("?")[0];
    const current = routes[key] ? key : "";
    setMenu(false);
    app.style.animation = "none"; void app.offsetWidth; app.style.animation = "";
    routes[current]();
    reveal();
    document.body.dataset.page = current || "home";
    document.querySelectorAll(".nav a, #overlay-nav a").forEach(a =>
      a.classList.toggle("active", a.getAttribute("href").replace(/^#\/?/, "") === current));
    const c = CHAPTERS.find(c => c.key === current);
    document.title = c ? `${c.num}. ${c.nav} · ${S.name}` : S.name;
    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", route);
  route();
})();
