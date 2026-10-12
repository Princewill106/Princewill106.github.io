(function () {
  const S = window.SITE;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const wa = text => `https://wa.me/${S.contact.whatsapp}?text=${encodeURIComponent(text)}`;
  const repo = slug => `${S.contact.github}/${slug}`;
  // Sandboxed previews (like the one on claude.ai) block embedded players; the real site does not.
  const canEmbed = !/claude\.ai|claudeusercontent|anthropic/.test(location.hostname);
  const store = {
    get(k) { try { return JSON.parse(sessionStorage.getItem("pw:" + k)); } catch (e) { return null; } },
    set(k, v) { try { sessionStorage.setItem("pw:" + k, JSON.stringify(v)); } catch (e) {} }
  };

  $$("[data-bind]").forEach(n => { if (S[n.dataset.bind]) n.textContent = S[n.dataset.bind]; });
  $("#year").textContent = new Date().getFullYear();
  const talkHref = S.contact.booking || wa("Hi Princewill, I'd like to discuss a project.");
  $$('[data-cta="discuss"]').forEach(a => { a.href = talkHref; a.target = "_blank"; a.rel = "noopener"; });
  // On the live site the CV downloads; inside a sandboxed preview it opens in a new tab instead.
  $$(".cv-link").forEach(a => { if (S.contact.cv) { a.href = S.contact.cv; a.hidden = false; if (canEmbed) a.setAttribute("download", "Princewill-Ogbu-CV.pdf"); } else a.remove(); });
  if (!S.contact.cv) { const r = $(".recruit"); if (r) r.innerHTML = 'Hiring? <a href="#experience">View my experience</a>.'; }

  // headline: each word rises out of its own mask
  let wi = 0;
  const wrapWords = node => [...node.childNodes].forEach(n => {
    if (n.nodeType === 3) {
      const frag = document.createElement("span"); frag.style.display = "contents";
      frag.innerHTML = n.textContent.split(/(\s+)/).map(w => /^\s*$/.test(w) ? w : `<span class="w"><span style="animation-delay:${120 + wi++ * 75}ms">${esc(w)}</span></span>`).join("");
      n.replaceWith(frag);
    } else if (n.nodeType === 1) wrapWords(n);
  });
  if (!reduce) { const h = $("#hero-title"); h.setAttribute("aria-label", h.textContent.replace(/\s+/g, " ").trim()); wrapWords(h); }

  // nav hairline + scroll reveals (anything scrolled past or jumped over is revealed too)
  const nav = $("#nav");
  let pending = [];
  const reveal = () => { const h = innerHeight * .92; pending = pending.filter(n => { if (n.getBoundingClientRect().top < h) { n.classList.add("in"); return false; } return true; }); };
  const onScroll = () => { nav.classList.toggle("scrolled", scrollY > 8); reveal(); };
  addEventListener("scroll", onScroll, { passive: true }); addEventListener("resize", reveal);
  const watch = () => { pending = $$(".reveal:not(.in)"); requestAnimationFrame(onScroll); };

  $("#facts").innerHTML = S.facts.map((f, i) => `<div class="f${i % 4}"><dt>${esc(f.value)}</dt><dd>${esc(f.label)}</dd></div>`).join("");

  /* ---------- live workflow (hero) ---------- */
  const ICONS = {
    chat: '<path d="M4 5h16v10H9l-5 4z"/>', ai: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/>',
    send: '<path d="M4 12l16-7-6 16-3-6z"/>', person: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-5 15-5 16 0"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    book: '<path d="M4 4h12a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4z"/>', flag: '<path d="M5 21V4h11l-2 4 2 4H5"/>',
    sensor: '<path d="M12 3v9"/><circle cx="12" cy="16" r="4"/><path d="M6 7a8 8 0 0 0 0 10M18 7a8 8 0 0 1 0 10"/>',
    chip: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
    drop: '<path d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11z"/>', form: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/>',
    film: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M10 9l5 3-5 3z"/>', spark: '<path d="M12 2v6M12 16v6M2 12h6M16 12h6"/>'
  };
  const SCENES = [
    { name: "WhatsApp order desk", slug: "whatsapp-support-agent", nodes: [
      ["chat", "WhatsApp message", "Where is order 10234?"], ["ai", "AI agent", "Intent: order status"],
      ["send", "Reply in seconds", "Out for delivery"], ["person", "Human handover", "Complaints to staff"]] },
    { name: "Invoice pipeline", slug: "invoice-processing-automation", nodes: [
      ["mail", "Supplier invoice", "PDF arrives by email"], ["ai", "Extract and check", "VAT, totals, duplicates"],
      ["book", "Post to accounts", "3 clean invoices"], ["flag", "Review queue", "Total is wrong"]] },
    { name: "AI video studio", slug: "content-repurposing-engine", nodes: [
      ["form", "Your product brief", "Skincare launch, 30s"], ["ai", "Script and voice", "Hook, beats, voiceover"],
      ["film", "Video for Reels", "9:16, captions on"], ["spark", "4 more cuts", "TikTok, WhatsApp, ads"]] },
    { name: "Smart irrigation", slug: "smart-irrigation-controller", nodes: [
      ["sensor", "Soil sensors", "Moisture 31%"], ["chip", "ESP32 decides", "Below 38%, no rain due"],
      ["drop", "Open valve", "Water for 16 minutes"], ["chat", "Tell the farmer", "WhatsApp update"]] }
  ];
  const svg = $("#flow");
  const LAYOUTS = {
    wide: { vb: "0 0 600 330", W: 180, H: 66, pos: [[0, 132], [212, 132], [420, 40], [420, 224]],
      wires: [[[180, 165], [212, 165], "h"], [[392, 165], [420, 73], "h"], [[392, 165], [420, 257], "h"]], ports: [[[180, 33]], [[0, 33], [180, 33]], [[0, 33]], [[0, 33]]] },
    tall: { vb: "0 0 376 372", W: 180, H: 66, pos: [[98, 0], [98, 140], [0, 300], [196, 300]],
      wires: [[[188, 66], [188, 140], "v"], [[188, 206], [90, 300], "v"], [[188, 206], [286, 300], "v"]], ports: [[[90, 66]], [[90, 0], [90, 66]], [[90, 0]], [[90, 0]]] }
  };
  const curve = ([a, b, d]) => d === "h"
    ? `M${a[0]} ${a[1]} C ${(a[0] + b[0]) / 2} ${a[1]}, ${(a[0] + b[0]) / 2} ${b[1]}, ${b[0]} ${b[1]}`
    : `M${a[0]} ${a[1]} C ${a[0]} ${(a[1] + b[1]) / 2}, ${b[0]} ${(a[1] + b[1]) / 2}, ${b[0]} ${b[1]}`;
  const narrow = window.matchMedia("(max-width: 620px)");
  function drawFlow() {
    const L = narrow.matches ? LAYOUTS.tall : LAYOUTS.wide;
    svg.setAttribute("viewBox", L.vb);
    svg.querySelectorAll(".wire,.node,.pulse").forEach(n => n.remove());
    svg.insertAdjacentHTML("beforeend", L.wires.map((w, i) => `<path class="wire c${i}" id="w${i}" d="${curve(w)}"/>`).join("") +
      L.pos.map((p, i) => `<g class="node c${i}" id="n${i}" transform="translate(${p[0]} ${p[1]})">
        <g class="nb"><rect width="${L.W}" height="${L.H}" rx="14"/><circle class="chip" cx="28" cy="${L.H / 2}" r="17"/>
        <g class="ic" transform="translate(17.5 ${L.H / 2 - 10.5}) scale(.88)"></g>
        <text class="t" x="54" y="${L.H / 2 - 3}"></text><text class="s" x="54" y="${L.H / 2 + 15}"></text>
        ${L.ports[i].map(([x, y]) => `<circle class="port" cx="${x}" cy="${y}" r="5"/>`).join("")}</g></g>`).join("") +
      `<circle class="pulse" id="p0" r="5" opacity="0"/><circle class="pulse" id="p1" r="5" opacity="0"/>`);
  }
  drawFlow();
  const fit = (t, m) => t.length > m ? t.slice(0, m - 1) + "…" : t;
  const tabs = $("#flow-tabs");
  SCENES.forEach((s, i) => { const b = document.createElement("button"); b.type = "button"; b.setAttribute("aria-label", `Show example: ${s.name}`); b.setAttribute("aria-pressed", i === 0); b.onclick = () => play(i, true); tabs.append(b); });
  function paint(i) {
    const s = SCENES[i];
    s.nodes.forEach((n, k) => { const g = $("#n" + k, svg); g.querySelector(".ic").innerHTML = ICONS[n[0]]; g.querySelector(".t").textContent = fit(n[1], 17); g.querySelector(".s").textContent = fit(n[2], 21); });
    const a = $("#flow-link"); a.textContent = s.name; a.href = repo(s.slug);
    [...tabs.children].forEach((b, k) => b.setAttribute("aria-pressed", k === i));
    $("#flow-step").textContent = `${i + 1} / ${SCENES.length}`;
  }
  const N = () => [0, 1, 2, 3].map(k => $("#n" + k, svg)), Wr = () => [0, 1, 2].map(k => $("#w" + k, svg));
  const light = n => { n.classList.add("on"); n.classList.remove("pulse-in"); void n.getBoundingClientRect(); n.classList.add("pulse-in"); };
  function travel(path, dot, ms) {
    return new Promise(res => { const len = path.getTotalLength(), t0 = performance.now(); dot.style.fill = getComputedStyle(path).stroke; dot.setAttribute("opacity", 1);
      (function step(t) { const k = Math.min(1, (t - t0) / ms), e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
        const p = path.getPointAtLength(e * len); dot.setAttribute("cx", p.x); dot.setAttribute("cy", p.y);
        if (k < 1) requestAnimationFrame(step); else { dot.setAttribute("opacity", 0); res(); } })(t0); });
  }
  const wait = ms => new Promise(r => setTimeout(r, ms));
  let scene = 0, run = 0, timer, paused = reduce;
  const showStill = () => { N().forEach(x => x.classList.add("on")); Wr().forEach(x => x.classList.add("live")); };
  async function play(i, manual) {
    const my = ++run; scene = i; clearTimeout(timer);
    const n = N(), w = Wr();
    n.forEach(x => x.classList.remove("on", "pulse-in")); w.forEach(x => x.classList.remove("live")); paint(i);
    if (paused) { showStill(); return; }
    await wait(manual ? 150 : 400); if (my !== run) return;
    light(n[0]); await wait(450); if (my !== run) return;
    w[0].classList.add("live"); await travel(w[0], $("#p0", svg), 700); if (my !== run) return;
    light(n[1]); await wait(650); if (my !== run) return;
    w[1].classList.add("live"); w[2].classList.add("live");
    await Promise.all([travel(w[1], $("#p0", svg), 800), travel(w[2], $("#p1", svg), 950)]); if (my !== run) return;
    light(n[2]); light(n[3]);
    timer = setTimeout(() => play((scene + 1) % SCENES.length), 2600);
  }
  // Pause / play control (the example changes on its own, so visitors must be able to stop it)
  const pauseBtn = $("#flow-pause");
  function setPaused(p) {
    paused = p; pauseBtn.setAttribute("aria-pressed", p); pauseBtn.querySelector("span").textContent = p ? "Play" : "Pause";
    pauseBtn.setAttribute("aria-label", p ? "Play the workflow animation" : "Pause the workflow animation");
    if (p) { run++; clearTimeout(timer); $$(".pulse", svg).forEach(d => d.setAttribute("opacity", 0)); showStill(); } else play(scene, true);
  }
  pauseBtn.onclick = () => setPaused(!paused);
  narrow.addEventListener("change", () => { drawFlow(); play(scene, true); });
  paint(0); showStill(); setPaused(paused);
  if (!paused) setTimeout(() => { if (!paused) play(0); }, 1000);
  document.addEventListener("visibilitychange", () => { if (document.hidden) { run++; clearTimeout(timer); } else if (!paused) play(scene); });

  /* ---------- selected projects (case studies) ---------- */
  const by = Object.fromEntries(S.projects.map(p => [p.slug, p]));
  $("#cases").innerHTML = S.caseStudies.map(c => { const p = by[c.slug] || { title: c.slug };
    return `<article class="case reveal" id="p-${esc(c.slug)}">
      <div class="case-top"><span class="type">${esc(c.type)}</span><span class="area">${esc(c.area || p.area || "")}</span></div>
      <h3>${esc(p.title)}</h3>
      <dl>
        <div><dt>Problem</dt><dd>${esc(c.problem)}</dd></div>
        <div><dt>What I built</dt><dd>${esc(c.built)}</dd></div>
        <div><dt>Evidence: demo output</dt><dd><pre>${c.evidence.map(esc).join("\n")}</pre></dd></div>
        <div><dt>What the demo shows</dt><dd>${esc(c.proves)}</dd></div>
      </dl>
      <div class="case-actions"><a class="btn sm" href="${repo(c.slug)}#sample-output" target="_blank" rel="noopener">View demo output</a><a class="btn ghost sm" href="${repo(c.slug)}" target="_blank" rel="noopener">View code</a>${p.n8n ? '<span class="n8n">Includes an n8n workflow</span>' : ""}</div>
    </article>`; }).join("");

  /* ---------- project library: search, filters, reset; remembered for the visit ---------- */
  const lib = $("#library"), exploreBtn = $("#explore-btn"), search = $("#search"), clearBtn = $("#clear-search"), resetBtn = $("#reset-filters");
  const areas = ["All", ...new Set(S.projects.map(p => p.area))];
  const saved = store.get("lib") || {};
  let area = areas.includes(saved.area) ? saved.area : "All", q = saved.q || "", showAll = !!saved.showAll;
  const more = document.createElement("button"); more.className = "btn ghost"; more.type = "button"; more.style.marginTop = "22px";
  more.onclick = () => { showAll = !showAll; list(); if (!showAll) lib.scrollIntoView({ behavior: reduce ? "auto" : "smooth" }); };
  $("#tiles").after(more);
  function openLib(open, focus) {
    lib.hidden = !open; exploreBtn.setAttribute("aria-expanded", open);
    exploreBtn.textContent = open ? "Hide the project library" : `Explore all ${S.projects.length} projects`;
    if (open && focus) search.focus({ preventScroll: true });
    save();
  }
  exploreBtn.onclick = () => openLib(lib.hidden, true);
  const chips = $("#chips");
  areas.forEach(a => { const b = document.createElement("button"); b.className = "chip"; b.type = "button"; b.textContent = a;
    b.onclick = () => { area = a; list(); }; chips.append(b); });
  search.value = q;
  search.addEventListener("input", e => { q = e.target.value.trim(); list(); });
  clearBtn.onclick = () => { q = ""; search.value = ""; list(); search.focus(); };
  resetBtn.onclick = () => { q = ""; search.value = ""; area = "All"; showAll = false; list(); };
  function save() { store.set("lib", { area, q, showAll, open: !lib.hidden }); }
  function list() {
    const ql = q.toLowerCase();
    [...chips.children].forEach(c => c.setAttribute("aria-pressed", c.textContent === area));
    const rows = S.projects.filter(p => (area === "All" || p.area === area) && (!ql || `${p.title} ${p.tagline} ${p.area}`.toLowerCase().includes(ql)));
    $("#count").textContent = area === "All" && !q ? `All ${S.projects.length} projects` : `${rows.length} of ${S.projects.length} projects`;
    const filtered = !!q || area !== "All";
    const shown = showAll || filtered ? rows : rows.slice(0, 12);
    more.hidden = rows.length <= 12 || filtered;
    more.textContent = showAll ? "Show fewer" : `Show all ${rows.length} projects`;
    clearBtn.hidden = !q; resetBtn.hidden = !filtered;
    const ideas = ["WhatsApp", "school", "invoice"];
    $("#tiles").innerHTML = rows.length ? shown.map(p => `<li><a href="${repo(p.slug)}" target="_blank" rel="noopener">
      <span class="row"><span>${String(p.n).padStart(2, "0")} · Open-source template</span><span>${esc(p.area)}${p.n8n ? " · n8n" : ""}</span></span>
      <b>${esc(p.title)}</b><span class="tl">${esc(p.tagline)}</span></a></li>`).join("")
      : `<li class="none">No projects match "${esc(q)}"${area !== "All" ? ` in ${esc(area)}` : ""}. Try searching all areas for ${ideas.map(t => `<button type="button" class="idea" data-q="${t}">${t}</button>`).join(", ")}.</li>`;
    $$(".idea").forEach(b => b.onclick = () => { area = "All"; q = b.dataset.q; search.value = q; list(); });
    save();
  }
  list();
  if (saved.open) openLib(true, false);

  /* ---------- services ---------- */
  const arrow = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  $("#blocks").innerHTML = S.services.map((s, i) => `<li class="svc reveal ${esc(s.id)}">
    <span class="no" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span><h3>${esc(s.name)}</h3>
    <div class="detail"><p>${esc(s.lede)}</p><ul>${s.includes.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>
    <a class="go" href="${wa(s.ask)}" target="_blank" rel="noopener" aria-label="${esc(s.cta || "Ask about this")} on WhatsApp" title="${esc(s.cta || "Ask about this")}">${arrow}</a></li>`).join("");

  /* ---------- AI video player ---------- */
  const reel = $("#reel-rail"), screen = $("#screen");
  const playIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4l14 8-14 8z"/></svg>';
  const folderId = (S.driveFolder.match(/folders\/([\w-]+)/) || [])[1];
  if (folderId) $("#drive-all").href = S.driveFolder; else $(".more-link").remove();
  const still = (v, big) => (big ? v.poster : v.thumb) || v.thumb || `https://drive.google.com/thumbnail?id=${encodeURIComponent(v.id)}&sz=w${big ? 1280 : 400}`;
  const driveUrl = (v, mode) => `https://drive.google.com/file/d/${encodeURIComponent(v.id)}/${mode}`;
  const setText = (id, text) => { const n = $(id); n.textContent = text || ""; n.hidden = !text; };
  let current = 0, loadTimer;
  function poster(v) {
    screen.innerHTML = `<button class="poster" type="button" aria-label="Play ${esc(v.title)}${v.duration ? `, ${esc(v.duration)}` : ""}"><img src="${esc(still(v, true))}" alt="" onerror="this.remove()"><span class="big-play">${playIcon}</span>${v.duration ? `<span class="badge-dur">${esc(v.duration)}</span>` : ""}</button>`;
    screen.querySelector(".poster").onclick = () => start(v);
  }
  function start(v) {
    clearTimeout(loadTimer);
    if (!canEmbed) {
      screen.insertAdjacentHTML("beforeend", `<div class="screen-msg" role="status"><p>This preview can't play embedded videos. On the live site it plays right here.</p><a class="btn sm" href="${driveUrl(v, "view")}" target="_blank" rel="noopener">Watch on Google Drive ↗</a></div>`);
      screen.querySelector(".poster").hidden = true; return;
    }
    screen.innerHTML = `<div class="loading" role="status"><span class="spin" aria-hidden="true"></span><span>Loading video…</span></div>
      <iframe src="${driveUrl(v, "preview")}" title="${esc(v.title)} (video player)" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
    const f = screen.querySelector("iframe"), l = screen.querySelector(".loading");
    f.addEventListener("load", () => { clearTimeout(loadTimer); l.remove(); });
    loadTimer = setTimeout(() => { if (l.isConnected) l.innerHTML = `<span>Still loading. Your connection may be slow, or Drive may be blocked on this network.</span><a href="${driveUrl(v, "view")}" target="_blank" rel="noopener">Watch on Google Drive ↗</a>`; }, 12000);
  }
  function select(i, autoplay) {
    const v = S.videos[i]; current = i;
    $("#now-title").textContent = v.title; $("#now-kind").textContent = v.kind || "AI video";
    $("#now-dur").textContent = v.duration ? `· ${v.duration}` : "";
    setText("#now-work", v.work); setText("#now-brief", v.brief); setText("#now-made", v.made ? `My part: ${v.made}` : "");
    $("#now-open").href = driveUrl(v, "view");
    reel.querySelectorAll("button").forEach((b, k) => b.setAttribute("aria-current", k === i ? "true" : "false"));
    poster(v); if (autoplay) start(v);
  }
  if (S.videos.length) {
    reel.innerHTML = S.videos.map((v, i) => `<li><button type="button" data-i="${i}" aria-label="${esc(v.title)}, ${esc(v.kind || "AI video")}${v.duration ? `, ${esc(v.duration)}` : ""}">
      <span class="mini"><img src="${esc(still(v, false))}" alt="" loading="lazy" onerror="this.remove()">${v.duration ? `<span class="mini-dur">${esc(v.duration)}</span>` : ""}</span>
      <span class="info"><b>${esc(v.title)}</b><span>${esc(v.kind || "AI video")}${v.work ? ` · ${esc(v.work)}` : ""}</span></span></button></li>`).join("");
    reel.querySelectorAll("button").forEach(b => b.onclick = () => {
      select(Number(b.dataset.i), false);
      if (matchMedia("(max-width: 860px)").matches) screen.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
    });
    select(0, false);
  } else {
    $("#videos .theatre").innerHTML = `<p class="none">Add videos to <code>videos</code> in data.js to fill this player.</p>`;
  }

  /* ---------- robotics & training ---------- */
  $("#robo-grid").innerHTML = S.robotics.map(r => `<article class="bot reveal"><span class="k">${esc(r.kind)}</span>
    <h3>${r.link ? `<a href="${r.link}" target="_blank" rel="noopener">${esc(r.title)} <span aria-hidden="true">↗</span></a>` : esc(r.title)}</h3><p>${esc(r.detail)}</p></article>`).join("");
  $("#workshop").innerHTML = `<span class="k">Training programme</span><h3>${esc(S.workshop.title)}</h3><p>${esc(S.workshop.detail)}</p>
    <a href="${wa("Hi Princewill, I'd like the AI-Enabled School Workshop for our school.")}" target="_blank" rel="noopener">Bring it to my school →</a>`;
  $("#awards").innerHTML = S.awards.map(a => `<li><b>${esc(a.title)}</b><span>${esc(a.event)}${a.year ? `, ${esc(a.year)}` : ""}</span>${a.detail ? `<em>${esc(a.detail)}</em>` : ""}</li>`).join("");

  /* ---------- about ---------- */
  if (S.photo) $("#photo").innerHTML = `<img src="${esc(S.photo)}" alt="Portrait of ${esc(S.name)}"><figcaption>Teaching since 2022</figcaption>`;
  $("#jobs").innerHTML = S.timeline.map(t => `<li><span class="when">${esc(t.when)}${t.type ? `<span class="jtype">${esc(t.type)}</span>` : ""}</span>
    <span><b>${esc(t.what)}</b>, ${esc(t.where)}${t.place ? ` <span class="place">· ${esc(t.place)}</span>` : ""}${t.did ? `<span class="note">${esc(t.did)}</span>` : ""}</span></li>`).join("");
  $("#edu").textContent = S.education || "";
  $("#certs").innerHTML = (S.certifications || []).map(c => `<li>${esc(c)}</li>`).join("");
  if (S.testimonials.length) { $("#testimonials").hidden = false;
    $("#quotes").innerHTML = S.testimonials.map(x => `<figure class="quote"><blockquote>${esc(x.quote)}</blockquote><figcaption><b>${esc(x.name)}</b><br>${esc(x.role)}</figcaption></figure>`).join(""); }

  /* ---------- contact ---------- */
  const c = S.contact;
  $("#wa-main").href = wa("Hi Princewill, I'd like to arrange a call about a project.");
  const pic = S.photo2 || S.photo;
  $("#me").innerHTML = `${pic ? `<img src="${esc(pic)}" alt="">` : ""}<div><b>${esc(S.name)}</b><span>${esc(S.role)} · ${esc(S.location)}</span></div>`;
  const phone = "+" + c.whatsapp.replace(/^(\d{3})(\d{3})(\d{3})(\d+)$/, "$1 $2 $3 $4");
  const rows = [["Email", c.email, `mailto:${c.email}`, "email address"], ["WhatsApp", phone, wa("Hi Princewill"), "phone number"]];
  $("#lines").innerHTML = rows.map(([k, v, h, what]) => `<div class="line"><span>${k}</span><a href="${h}" target="_blank" rel="noopener">${esc(v)}</a><button class="copy" type="button" data-copy="${esc(v)}" data-what="${what}" aria-label="Copy ${what}">Copy</button></div>`).join("");
  const status = $("#copy-status");
  $$("[data-copy]").forEach(b => b.onclick = async () => {
    try { await navigator.clipboard.writeText(b.dataset.copy); b.textContent = "Copied"; status.textContent = `${b.dataset.what[0].toUpperCase() + b.dataset.what.slice(1)} copied.`; }
    catch (e) { const r = document.createRange(); r.selectNodeContents(b.previousElementSibling); const s = getSelection(); s.removeAllRanges(); s.addRange(r); b.textContent = "Selected"; status.textContent = `${b.dataset.what} selected. Press Ctrl+C or Cmd+C to copy.`; }
    setTimeout(() => (b.textContent = "Copy"), 1800);
  });
  $("#socials").innerHTML = [["LinkedIn", c.linkedin], ["GitHub", c.github], ["TikTok", c.tiktok], ["Instagram", c.instagram]].filter(x => x[1]).map(([n, u]) => `<a href="${u}" target="_blank" rel="noopener">${n}</a>`).join("");
  watch();
})();
