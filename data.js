// All site content lives here. Edit this file to update the portfolio —
// no other file needs to change.
//
// Anything marked TODO is something only Elie knows (handles, trips, photos).
// Empty URLs are hidden automatically, so the site never shows a dead link.

window.SITE = {
  name: "Elie Krugolets",
  short: "Elie.",
  initials: "e/k",
  headline: "Finance student, builder, operator.",
  photo: "photo.jpg", // passport photo on the About page
  location: "Brooklyn, New York",
  timezone: "America/New_York",
  email: "eliekrugz@gmail.com",

  // Short links in the header. A platform with no url stays hidden.
  socials: [
    { label: "IN", name: "LinkedIn", url: "https://www.linkedin.com/in/elie-krugolets-288738335" },
    { label: "IG", name: "Instagram", url: "https://www.instagram.com/eliemmos/" },
    { label: "TT", name: "TikTok", url: "https://www.tiktok.com/@eliemmos" },
    { label: "GH", name: "GitHub", url: "https://github.com/eliekrugz-ux" },
  ],

  // The Socials page, laid out like a creator media kit.
  // Numbers are from each profile on the date in `statsAsOf`; update them when they grow.
  mediaKit: {
    handle: "@eliemmos",
    avatar: "avatars/profile.jpg", // the profile picture used on Instagram and TikTok
    bio: "NYC-based creator making lifestyle, fashion, travel and fintech content.",
    niches: ["Lifestyle", "Fashion", "Travel", "Finance & fintech", "Startups", "NYC"],
    statsAsOf: "Sept 2026",
    // Per-account numbers, added up from each public post on the date in `statsAsOf`.
    // Instagram likes/comments cover the posts visible to the public (12 of 19 on @eliemmos).
    // TikTok numbers were confirmed from Elie's screenshots on 2026-09-24.
    accounts: [
      // Views are the 4 reels (515K + 17.9K + 16.8K + 2,009); likes/comments add the reels to the 12 public photo posts.
      // Shares include reposts (15.7K + 1,160, 708 + 30, 134 + 13). From Elie's screenshots, 2026-09-24.
      { platform: "Instagram", handle: "@eliemmos", role: "Main", url: "https://www.instagram.com/eliemmos/", avatar: "avatars/profile.jpg",
        followers: 646, posts: 19, views: 551709, likes: 30786, comments: 765, shares: 17745, saves: 1564 },
      { platform: "TikTok", handle: "@eliemmos", role: "Main", url: "https://www.tiktok.com/@eliemmos", avatar: "avatars/profile.jpg",
        followers: 313, posts: 3, views: 137379, likes: 18924, comments: 224, shares: 3218, saves: 817 },
      // Whole account: "How executives become successful" (920 views) + the Onsen Retreat reel (3,565). Shares include reposts.
      { platform: "Instagram", handle: "@eliemmos.mp4", role: "UGC & professional", url: "https://www.instagram.com/eliemmos.mp4/", avatar: "avatars/profile.jpg",
        followers: 33, posts: 2, views: 4485, likes: 115, comments: 13, shares: 38 },
      // Flip UGC lives here for now; the Flip brand card shows the same videos.
      { platform: "TikTok", handle: "@eliemmos.mp4", role: "UGC & professional", url: "https://www.tiktok.com/@eliemmos.mp4", avatar: "avatars/profile.jpg",
        followers: 1, posts: 2, views: 268, likes: 3, comments: 0, shares: 0, saves: 0 },
    ],
    brands: [
      { name: "Flip", logo: "brands/flip.png", what: "The AI money manager you text in iMessage", role: "UGC creator", when: "2026 · current",
        // Numbers from Elie's Flip UGC on @eliemmos.mp4 (TikTok, 2026-09-24). Not counted in his own totals.
        stats: { views: 268, likes: 3, videos: 2 },
        statsNote: "UGC videos on @eliemmos.mp4 · TikTok",
        theme: { bg: "linear-gradient(155deg, #243b61 0%, #0f1d36 45%, #070d1a 100%)", line: "#2a3f63", accent: "#bcd3f2", ink: "#0b1628", font: "'Faculty Glyphic', serif" },
        links: [["My Flip videos", "https://www.tiktok.com/@eliemmos.mp4"], ["Flip on Instagram", "https://www.instagram.com/fliptexts/"], ["Flip on TikTok", "https://www.tiktok.com/@fliptexts"]] },
      { name: "Onsen Retreat", logo: "brands/onsen-wordmark.svg", what: "A one-week creative retreat in Beppu, Japan", role: "Promoter", when: "2026",
        // Numbers from the Onsen reel on Instagram @eliemmos.mp4 (screenshot, 2026-09-24); shares include 2 reposts.
        stats: { views: 3565, likes: 71, comments: 9, shares: 17 },
        statsNote: "Promo reel on @eliemmos.mp4 · Instagram",
        theme: { light: true, logoBg: "#f0ece3", bg: "linear-gradient(155deg, #f4f0e7 0%, #ebe5d8 100%)", line: "#f4b37c", accent: "#0f0f0f", ink: "#f0ece3", font: "'Inclusive Sans', sans-serif" },
        links: [["My Onsen video", "https://www.instagram.com/reel/DaRwv4oA0PD/"], ["onsen-retreat.com", "https://onsen-retreat.com"], ["Onsen on Instagram", "https://www.instagram.com/onsenretreat/"]] },
      { name: "Forge", logo: "brands/forge.png", what: "Your people, all in one place", role: "Founder · content & street interviews", when: "2026 · current",
        // @forgenetwork.app on TikTok (11,779 views, likes, comments, saves) + Instagram (1,897 reel views).
        // Screenshots, 2026-09-24. Not counted in Elie's own totals.
        stats: { views: 13676, likes: 336, comments: 6, saves: 21 },
        statsNote: "3 campus street interviews at Baruch and NYU · TikTok + Instagram",
        theme: { logoBg: "#faf9f5", bg: "linear-gradient(155deg, #26211d 0%, #1a1917 50%, #131315 100%)", line: "#3a2d25", accent: "#e08a5c", ink: "#17130f", font: "'Source Serif 4', Georgia, serif" },
        links: [["Instagram", "https://www.instagram.com/forgenetwork.app/"], ["TikTok", "https://www.tiktok.com/@forgenetwork.app"], ["Website", "https://forgenetwork.app"]] },
    ],
    services: [
      ["UGC video ads", "Short-form TikTok and Reels content for brands, delivered raw or edited."],
      ["App demos & walkthroughs", "Screen-and-face videos showing how a product actually works."],
      ["Street interviews", "On-campus and NYC street interviews, like the ones I run for Forge."],
      ["Lifestyle & fashion posts", "Product placement in everyday NYC, travel and outfit content."],
    ],
    elsewhere: [
      { name: "LinkedIn", handle: "elie-krugolets", url: "https://www.linkedin.com/in/elie-krugolets-288738335", blurb: "Career updates, wins, and what I'm building." },
      { name: "GitHub", handle: "eliekrugz-ux", url: "https://github.com/eliekrugz-ux", blurb: "The code behind Forge and my other projects." },
    ],
  },

  // Recent posts for the Socials page, newest first.
  posts: [
    { date: "06.17.26", platform: "LinkedIn", url: "https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7473142007708856320", text: "Selected as an MCU Foundation Scholar, a scholarship supporting my next chapter at Baruch." },
    { date: "06.11.26", platform: "LinkedIn", url: "https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7470643894599258112", text: "Looking back on my year as Key Club President at Murrow: the Sip N' Paint fundraiser with eight schools, and the Leadership Training Conference in Albany." },
    { date: "02.15.26", platform: "LinkedIn", url: "https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7428619708007931904", text: "STRYDE, Inc. took 1st place at the Virtual Enterprise Citywide Business Plan Competition. Proud to serve as COO of this team." },
  ],

  about: [
    "Hey, I'm Elie.",
    "I'm 18 and studying Finance at Baruch College (CUNY), class of 2030, with an intended minor in Computer Science. Right now I'm applying to finance and entrepreneurship clubs on campus.",
    "I was born and raised in Brooklyn, the middle of three kids with two sisters, in a family of Jewish immigrants from Soviet Ukraine.",
    "Professionally, I'm drawn to finance, social media marketing, operations and building things. In high school, I served as COO of a 15-person virtual company, led our Key Club chapter, and won New York City's Business Plan Competition. Since then, I've launched two products of my own: Forge and Signlr.",
    "Outside of business, I love posting on Instagram and TikTok, and I've recently gotten into creating UGC (user-generated content). I also have a deep passion for fashion and travel.",
  ],

  // One line under the name on the home page.
  focus: ["Entrepreneurship", "Social Media", "Finance"],

  // The stock-ticker bar under the header. `up: true` gets a green ▲.
  // {views} and {interactions} fill in from the media kit totals.
  ticker: [
    { text: "NYC Business Plan Competition", value: "1st place", up: true },
    { text: "Forge", value: "live · forgenetwork.app", up: true },
    { text: "Signlr", value: "live · signlr.app", up: true },
    { text: "MCU Foundation", value: "Scholar", up: true },
    { text: "Ad Club of New York pitch", value: "1st place", up: true },
    { text: "Content views", value: "{views}+", up: true },
    { text: "Interactions", value: "{interactions}+", up: true },
    { text: "Countries visited", value: "19" },
    { text: "AP Scholar", value: "2025" },
    { text: "JPMorganChase IB simulation", value: "complete" },
    { text: "Seal of Biliteracy", value: "Russian" },
  ],

  // The passport on the About page.
  passport: [
    ["Surname", "Krugolets"],
    ["Given name", "Elie"],
    ["Born", "MMVIII"],
    ["Place of origin", "Brooklyn, New York"],
    ["Studying", "Finance BBA · Baruch '30"],
    ["Minor", "Computer Science (intended)"],
    ["Languages", "English · Russian"],
    ["Plays", "Trombone · Guitar"],
  ],

  // tags: build · finance · lead · school · work · award · travel · life
  timeline: [
    { date: "09.26", text: "Takes Forge to campus: street interviews, posters, carousels", tags: ["build"], detail: "Got Forge's first users in its opening week through street interviews at NYC colleges and organic content. I designed the whole launch kit myself: posters with QR codes, an Instagram carousel, and LinkedIn and story graphics." },
    { date: "09.26", text: "Launches forgenetwork.app", tags: ["build"], link: "https://forgenetwork.app" },
    { date: "08.26", text: "Starts at Baruch College, Finance BBA", tags: ["school", "finance"], detail: "Bachelor of Business Administration in Finance with an intended minor in Computer Science, class of 2030." },
    { date: "08.26", text: "Starts building Forge", tags: ["build"], detail: "An AI networking platform: one-click LinkedIn import, tags and notes. \"Find My Path\" ranks your contacts by how much they can help with a goal and drafts the outreach, and \"Ask Lucky\" answers plain-English questions about your network." },
    { date: "07.26", text: "Completes the JPMorganChase Investment Banking job simulation", tags: ["finance"], link: "https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/YD2kY95RQxQtXxFTS_Sj7temL583QAYpHXD_6a4be746e3042b5c4db9310f_1783458517108_completion_certificate.pdf" },
    { date: "07.26", text: "Fundamentals of Financial Analysis, London Business School", tags: ["finance"], link: "https://www.coursera.org/account/accomplishments/records/2XECAGE17JEV" },
    { date: "07.26", text: "Builds his own trading-strategy backtesting engine", tags: ["build", "finance"] },
    { date: "07.26", text: "Builds a scanner that pulls internships straight from company career APIs", tags: ["build"] },
    { date: "07.26", text: "Builds an AI pipeline that makes free websites for local businesses", tags: ["build"] },
    { date: "06.26", text: "Graduates Edward R. Murrow High School with a 95.08 GPA", tags: ["school"], detail: "Advanced Regents Diploma with First Honors. Murrow CTE Entrepreneurship and Murrow Music Institute. AP Calculus AB, AP Macroeconomics, AP World & US History." },
    { date: "06.26", text: "Named a Municipal Credit Union Foundation Scholar", tags: ["award", "finance"] },
    { date: "06.26", text: "Earns the NYS Seal of Biliteracy in Russian", tags: ["award", "school"] },
    { date: "06.26", text: "Anthropic certifications: Claude 101, AI Fluency", tags: ["build"], link: "https://verify.skilljar.com/c/89decga5kott" },
    { date: "06.26", text: "Finishes his term as Key Club President", tags: ["lead", "school"], detail: "Led a Sip N' Paint fundraiser in Prospect Park with eight schools, plus food drives and service projects. Attended the 2026 Leadership Training Conference in Albany." },
    { date: "06.26", text: "Builds a full Roblox game, Aura Garden", tags: ["build"] },
    { date: "06.26", text: "Builds GuardOps, an operations app for security companies", tags: ["build"] },
    { date: "05.26", text: "Legal Clerk at the Law Offices of Nataliya Borushchak", tags: ["work"], detail: "I organize physical and digital case files for no-fault and personal-injury claims, and I get to see how a claim goes from filing to settlement." },
    { date: "05.26", text: "Ships Signlr, an AI trading-signals platform", tags: ["build", "finance"], link: "https://signlr.app" },
    { date: "02.26", text: "STRYDE, Inc. wins 1st at the NYC Business Plan Competition", tags: ["award", "lead", "finance"], detail: "Virtual Enterprise Citywide Business Plan Competition. I was COO." },
    { date: "11.25", text: "Marketing & Social Media Intern at BullTaxAccountants", tags: ["work"], detail: "Through the Industry Scholar Program. I posted 5+ times a week around tax-season campaigns." },
    { date: "10.25", text: "1st place, Advertising Club of New York pitch competition", tags: ["award"] },
    { date: "09.25", text: "Becomes COO of STRYDE, Inc. (Virtual Enterprise)", tags: ["lead", "finance"], detail: "15+ people across 4 teams, $550K+ in virtual capital, competing regionally, nationally and internationally." },
    { date: "07.25", text: "AP Scholar Award", tags: ["award", "school"] },
    { date: "07.25", text: "First retail job: Sales Associate at TJX", tags: ["work"], detail: "Up to $5,000 in transactions a shift." },
    { date: "05.25", text: "Microsoft Office Specialist: Word Expert + Office Associate", tags: ["award"] },
    { date: "04.25", text: "Elected Key Club President", tags: ["lead", "school"] },
    { date: "03.25", text: "Microsoft Office Specialist: Excel Associate", tags: ["award", "finance"] },
    { date: "07.24", text: "DYCD summer internship in financial literacy", tags: ["work", "finance"], detail: "Six weeks on accounting, investing and home economics, plus 5+ investment case studies." },
    { date: "02.24", text: "Starts college classes at Kingsborough through College Now", tags: ["school"], detail: "Business Administration and Political Science, dual enrollment." },
    { date: "02.24", text: "First job: Clerk at Effective Dialogue", tags: ["work"] },
    { date: "09.23", text: "Joins Key Club's Events & Fundraising Committee", tags: ["lead"] },
    { date: "09.22", text: "Starts at Edward R. Murrow High School", tags: ["school"] },
    { date: "2008", text: "Elie is born", tags: ["life"], detail: "MMVIII ⚜" },
    // TODO: add the personal ones: first trip abroad, first stock bought, first trombone concert, birthday...
  ],

  work: [
    {
      name: "Forge", ticker: "FRGE", since: "08.26", role: "Founder · solo developer",
      url: "https://forgenetwork.app",
      summary: "An AI networking platform for students. One-click LinkedIn import, tags and notes, and contacts stay local by default. \"Find My Path\" ranks your contacts by how much they can help with a goal and drafts the outreach, and \"Ask Lucky\" answers plain-English questions about your network. I got the first users in the opening week through street interviews at NYC colleges.",
      stack: "JavaScript · Supabase · Claude API · Vercel",
    },
    {
      name: "Signlr", ticker: "SGNL", since: "05.26", role: "Founder · solo developer",
      url: "https://signlr.app",
      summary: "A fintech SaaS that turns market data into AI-assisted trade plans for retail traders, built on my own quantitative indicators. It also has a live stock screener, subscription billing and user accounts.",
      stack: "Node.js · Supabase · Stripe · Alpaca · OpenYield · Claude API",
    },
  ],

  journeys: {
    finance: {
      title: "Finance",
      intro: "I didn't come from finance. I've been learning it one step at a time, and each step made the next one make sense.",
      steps: [
        { when: "2026 →", title: "Baruch", text: "BBA at Baruch College, backed by the MCU Foundation scholarship. Next step: a finance internship." },
        { when: "2026", title: "Building with markets", text: "I built Signlr and a backtesting engine to test ideas against real data instead of opinions." },
        { when: "2026", title: "Going deeper", text: "JPMorganChase's investment banking simulation, Financial Analysis from London Business School, and self-study in DCF valuation and M&A." },
        { when: "2025–26", title: "Running a company's books", text: "As COO of STRYDE, Inc. I managed $550K+ in virtual capital and balance sheets, then pitched our business plan to 1st place in NYC." },
        { when: "2025", title: "Handling real money", text: "At TJX I ran a register with up to $5K a shift and balanced the drawer every night. I got my Excel certification that spring." },
        { when: "2024", title: "Learning the basics", text: "A six-week DYCD internship on financial literacy: budgeting, accounting, investing, debt. It's the first time money felt like something I could understand, not just spend." },
      ],
    },
    highschool: {
      title: "High School",
      intro: "Edward R. Murrow High School, Brooklyn, 2022–2026. Four years, a 95.08 GPA, and a lot of after-school hours.",
      steps: [
        { when: "Graduation", title: "Next chapter", text: "Advanced Regents Diploma and the MCU Foundation Scholarship, then on to Baruch." },
        { when: "Senior", title: "Leading", text: "COO of STRYDE, Inc., 1st place at the Ad Club of NY pitch and the NYC Business Plan Competition, first trombonist, and the Seal of Biliteracy in Russian." },
        { when: "Junior", title: "Stepping up", text: "Elected Key Club President. Earned three Microsoft Office Specialist certifications and the AP Scholar Award." },
        { when: "Sophomore", title: "Starting early", text: "Took college courses at Kingsborough through College Now, started my first job as a clerk, and joined Key Club's events & fundraising committee." },
        { when: "Freshman", title: "Finding my people", text: "Joined Key Club and started playing trombone in the wind ensemble." },
      ],
    },
  },

  // Travel map. `map` is the country name in the map data (vendor/countries-50m.json);
  // `at` is [longitude, latitude] for a pin, used for small places that are hard to see.
  travel: {
    home: [-73.94, 40.6],
    places: [
      { name: "United States", region: "North America", map: "United States of America" },
      { name: "Canada", region: "North America", map: "Canada" },
      { name: "Mexico", region: "North America", map: "Mexico" },
      { name: "England", region: "Europe", map: "United Kingdom", at: [-0.13, 51.51] },
      { name: "Scotland", region: "Europe", map: "United Kingdom", at: [-3.19, 55.95] },
      { name: "Northern Ireland", region: "Europe", map: "United Kingdom", at: [-5.93, 54.6] },
      { name: "Ireland", region: "Europe", map: "Ireland", at: [-6.26, 53.35] },
      { name: "France", region: "Europe", map: "France", at: [2.35, 48.86] },
      { name: "Spain", region: "Europe", map: "Spain", at: [-3.7, 40.42] },
      { name: "Italy", region: "Europe", map: "Italy", at: [12.5, 41.9] },
      { name: "Vatican City", region: "Europe", map: "Vatican", at: [12.45, 41.9] },
      { name: "Bermuda", region: "Caribbean & Atlantic", map: "Bermuda", at: [-64.78, 32.3] },
      { name: "Bahamas", region: "Caribbean & Atlantic", map: "Bahamas", at: [-77.35, 25.05] },
      { name: "Jamaica", region: "Caribbean & Atlantic", map: "Jamaica", at: [-76.8, 18.1] },
      { name: "Haiti", region: "Caribbean & Atlantic", map: "Haiti", at: [-72.34, 18.54] },
      { name: "Dominican Republic", region: "Caribbean & Atlantic", map: "Dominican Rep.", at: [-69.93, 18.49] },
      { name: "Puerto Rico", region: "Caribbean & Atlantic", map: "Puerto Rico", at: [-66.1, 18.47] },
      { name: "Saint Martin", region: "Caribbean & Atlantic", map: ["St-Martin", "Sint Maarten"], at: [-63.05, 18.07] },
      { name: "Aruba", region: "Caribbean & Atlantic", map: "Aruba", at: [-69.97, 12.52] },
    ],
    states: ["New York", "New Jersey", "Connecticut", "Massachusetts", "Pennsylvania", "Rhode Island", "Vermont", "Delaware", "Maryland", "District of Columbia", "Virginia", "North Carolina", "Georgia", "Florida", "Louisiana", "Illinois"],
  },

  // The Resume page mirrors Elie_Krugolets_Resume.pdf section by section, word for word
  // (phone number left off the page; it's still in the PDF). Update both together.
  resume: {
    pdf: "Elie_Krugolets_Resume.pdf", // the exact PDF the Print and Download buttons use
    sections: [
      { title: "Education and Honors", items: [
        { org: "Baruch College – City University of New York", where: "New York, NY", when: "Expected June 2030",
          lines: ["Major: Finance Bachelor of Business Administration | Intended Minor: Computer Science"] },
        { org: "Edward R. Murrow High School", where: "Brooklyn, NY", role: "Murrow CTE Entrepreneurship & Murrow Music Institute", when: "Sep 2022 – Jun 2026",
          lines: ["Cumulative GPA: 95.08", "Honors: ERM First Honors Award Recipient, AP Scholar Award Recipient, Municipal Credit Union Scholar"] },
      ] },
      { title: "Technical Projects", items: [
        { org: "Forge – AI-Powered Networking Platform (forgenetwork.app)", where: "Remote", role: "Solo Developer – Founder", when: "Aug 2026", points: [
          "Designed and shipped a full-stack, AI-powered personal networking platform (one-click LinkedIn import, tagging, and notes) independently on Anthropic Claude Code, owning frontend, backend, and deployment (Supabase, local-first browser storage, Anthropic Claude API)",
          "Built \"Find My Path\" and \"Ask Lucky,\" AI features that rank a user's own contacts by relevance to a goal, draft personalized outreach, and answer plain-English questions about their network",
          "Drove early adoption through organic content marketing and on-campus street interviews across NYC colleges, acquiring the platform's first users within its opening week",
        ] },
        { org: "Signlr – AI-Powered Trading Signals Platform (signlr.app)", where: "Remote", role: "Solo Developer – Founder", when: "May 2026", points: [
          "Built and shipped a full-stack fintech SaaS product independently alongside Anthropic Claude Code, handling architecture, backend, frontend, and infrastructure end to end (Node.js, Supabase, Stripe, Anthropic Claude API)",
          "Incorporated quantitative indicators derived from OpenYield and Alpaca's APIs to generate AI-assisted trade plans for retail traders",
          "Integrated Alpaca's market data API to power a live stock screener and implemented Stripe subscription billing, user authentication, and rate-limited API infrastructure",
        ] },
      ] },
      { title: "Leadership Experience", items: [
        { org: "Murrow Virtual Enterprise", where: "Brooklyn, NY", role: "Chief Operating Officer", when: "Sep 2025 – Jun 2026", points: [
          "Leading 4 corporate departments and coordinating 15+ members in a student-run firm competing at the national level",
          "Managing over $550K+ in virtual capital, overseeing budgeting, financial decisions, and performance tracking",
          "Streamlined internal workflows and cross-departments communication to improve execution during competitions",
        ] },
        { org: "Key Club International, Edward R. Murrow Chapter", where: "Brooklyn, NY", role: "President/Volunteer", when: "Sep 2022 – Jun 2026", points: [
          "Lead and organize 8+ community service projects and club activities per month",
          "Manage and plan meeting agendas for over 80 participating members",
          "Oversee club operations, including 3+ executive board meetings and member outreach monthly",
        ] },
      ] },
      { title: "Professional Experience", items: [
        { org: "Law Offices of Nataliya Borushchak, PC", where: "Brooklyn, NY", role: "Legal Clerk", when: "May 2026 – Present", points: [
          "File and organize both physical and digital case documents, including no-fault and trip-and-fall personal injury claims",
          "Gaining hands-on exposure to the personal injury settlement process, from initial claim filing through settlement and resolution",
        ] },
        { org: "BullTaxAccountants – Industry Scholar Program", where: "Brooklyn, NY", role: "Marketing & Social Media Intern", when: "Fall 2025", points: [
          "Conducted market research and created weekly social media content to strengthen firm visibility and audience engagement",
          "Managed 5+ posts per week across platforms, aligning content with firm messaging and seasonal tax campaigns",
          "Analyzed engagement trends and competitor strategies to refine posting strategy and improve reach",
        ] },
        { org: "The TJX Companies, Inc", where: "Brooklyn, NY", role: "Sales Associate", when: "Jul 2025 – Nov 2025", points: [
          "Operated POS system accurately for cash, credit, and returns while following company policies",
          "Processed daily transactions totaling up to $5,000 in sales revenue per shift, ensuring accuracy and efficiency at the register",
          "Balanced cash drawers and monitored discrepancies, contributing to loss prevention and financial accountability across the store",
        ] },
      ] },
      { title: "Additional Information", info: [
        ["Computer Skills", "Microsoft Office Associate in Excel, PowerPoint, and Word; User-Generated Content (UGC) & Social Media Content Creation"],
        ["Language", "Proficient in both English and Russian as certified by the New York State Seal of Biliteracy"],
        ["Volunteer Experience", "Over 120 hours of community service including city clean-ups, non-profit outreach, and fundraising initiatives"],
        ["Certifications", "Anthropic Claude 101 & AI Fluency; Forage - JP Morgan Investment Banking Job Simulation; London Business School - Fundamentals of Financial Analysis Certification"],
      ] },
    ],
    // Extra section on the site only (not in the PDF): the full skills list from LinkedIn.
    skills: {
      "Finance": ["Financial Analysis", "Financial Data Analysis", "DCF Valuation", "Mergers & Acquisitions (M&A)", "Financial Literacy", "Money Management", "Cash Handling"],
      "Business": ["Business Strategy", "Business Development", "Business Planning", "Entrepreneurship", "Operations Management", "Project Management", "Research Skills"],
      "Leadership": ["Leadership", "Organizational Leadership", "Leadership Development", "Community Outreach", "Networking", "Communication"],
      "Marketing": ["Social Media Marketing", "Product Promotion", "UGC & Social Content"],
      "Tech & tools": ["SaaS Product Development", "AI Integration", "Microsoft Office", "Excel", "PowerPoint", "Microsoft Word"],
      "Languages": ["English", "Russian"],
    },
  },
};
