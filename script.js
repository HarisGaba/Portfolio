const skillGroups = [
  { index: "01", label: "Web Development", focus: "Primary practice", description: "Building responsive, practical web experiences across frontend, backend, and data layers.", skills: ["HTML5", "CSS3", "JavaScript", "ASP.NET Core", "C#", "Laravel", "SQL Server", "Entity Framework Core", "Responsive Web Development"] },
  { index: "02", label: "CMS & E-Commerce", focus: "Storefront systems", description: "Configuring, customizing, and shaping storefronts around the way people actually browse and buy.", skills: ["WordPress", "Elementor", "Shopify", "Shopify Theme Customization", "E-Commerce Store Development"] },
  { index: "03", label: "App Store Optimization", focus: "Growth research", description: "Improving discoverability with informed research, metadata refinement, and visibility analysis.", skills: ["Keyword Research", "App Metadata Optimization", "Competitor Research", "App Performance Analysis"] },
  { index: "04", label: "Mobile Development", focus: "Mobile making", description: "Exploring focused mobile interfaces and practical development workflows accelerated by AI tools.", skills: ["Mobile Application Development", "AI-Assisted App Development", "Mobile UI Development"] },
  { index: "05", label: "Digital Marketing", focus: "Audience signals", description: "Supporting campaign thinking with clear content research and paid social fundamentals.", skills: ["Meta Ads", "Social Media Marketing", "Content Research"] },
  { index: "06", label: "AI & Automation", focus: "Applied AI", description: "Using generative tools with intent—from research and prompts to more efficient production workflows.", skills: ["Generative AI", "Prompt Engineering", "AI-Assisted Coding", "Workflow Automation"] },
  { index: "07", label: "Design", focus: "Visual communication", description: "Supporting the work with graphic systems, social content, and clear visual identity thinking.", skills: ["Graphic Design", "Social Media Creative Design", "Branding & Visual Content"] }
];

const projects = [
  { number: "01", type: "Storefront system", title: "E-commerce Build", description: "A storefront build shaped around product discovery, responsive hierarchy, and theme customization—where visual clarity supports the route to checkout.", tags: ["WordPress", "Shopify", "Theme Customization"], image: "assets/haris-commerce-still.jpg", wide: true },
  { number: "02", type: "Backend application", title: "ASP.NET Core Application", description: "An application workflow organized around durable backend structure, connected data, and a clean path from interface to database.", tags: ["ASP.NET Core", "EF Core", "SQL Server"], image: "assets/haris-data-still.jpg" },
  { number: "03", type: "Mobile exploration", title: "AI-Assisted Mobile App", description: "A mobile interface exploration using AI-assisted tools to move deliberately from an initial idea toward an approachable, focused experience.", tags: ["Mobile UI", "AI-Assisted Tools", "App Development"], image: "assets/haris-hero-atlas.jpg" },
  { number: "04", type: "Growth work sample", title: "ASO / Marketing Work Sample", description: "A focused record of app discovery work: moving from keyword research and competitor signals to metadata, content, and audience-facing decisions.", tags: ["ASO", "Keyword Research", "Content Strategy"], image: "assets/haris-commerce-still.jpg", wide: true }
];

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
const toast = $("#toast");
let toastTimer;

function showToast(message) { toast.textContent = message; toast.classList.add("show"); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove("show"), 3200); }

function renderSkills(activeIndex = 0) {
  const group = skillGroups[activeIndex];
  $("#skillNav").innerHTML = skillGroups.map((item, index) => `<button class="skill-tab ${index === activeIndex ? "active" : ""}" type="button" role="tab" aria-selected="${index === activeIndex}" data-index="${index}"><span>${item.index}</span><b>${item.label}</b><b>↗</b></button>`).join("");
  $("#skillMeta").textContent = `${group.index} / ${group.focus}`;
  $("#skillTitle").textContent = group.label;
  $("#skillDescription").textContent = group.description;
  $("#skillChips").innerHTML = group.skills.map((skill) => `<span>${skill}</span>`).join("");
  $$(".skill-tab").forEach((button) => button.addEventListener("click", () => renderSkills(Number(button.dataset.index))));
}

function renderProjects() {
  $("#projectList").innerHTML = projects.map((project) => `<article class="project-card ${project.wide ? "wide" : ""}" data-reveal><div class="project-image"><img src="${project.image}" alt="Abstract editorial visual for ${project.title}" data-shift="7" /><span class="project-index">${project.number} / ${project.type}</span></div><div class="project-body"><p class="project-meta">Field entry / ${project.type}</p><h3>${project.title}</h3><p>${project.description}</p><div class="project-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div><button type="button" class="case-link">Discuss this work <span>↗</span></button></div></article>`).join("");
  $$(".case-link").forEach((button) => button.addEventListener("click", () => showToast("A detailed project conversation starts with a direct note.")));
}

function setupMenu() {
  const toggle = $("#menuToggle"), nav = $("#siteNav");
  toggle.addEventListener("click", () => { const open = nav.classList.toggle("open"); toggle.classList.toggle("open", open); toggle.setAttribute("aria-expanded", String(open)); toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation"); });
  $$("#siteNav a").forEach((link) => link.addEventListener("click", () => { nav.classList.remove("open"); toggle.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }));
}

function setupNavigation() {
  const header = $("#siteHeader"), progress = $("#scrollProgress"), navLinks = $$(".site-nav a"), sections = navLinks.map((link) => $(link.getAttribute("href"))).filter(Boolean);
  const observer = new IntersectionObserver((entries) => { const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]; if (current) navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${current.target.id}`)); }, { rootMargin: "-25% 0px -62% 0px", threshold: [0.1, 0.25, 0.55] });
  sections.forEach((section) => observer.observe(section));
  const update = () => { header.classList.toggle("scrolled", window.scrollY > 16); const max = document.documentElement.scrollHeight - window.innerHeight; progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`; };
  update(); window.addEventListener("scroll", update, { passive: true });
}

function setupReveal() {
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("in-view"); observer.unobserve(entry.target); } }), { threshold: 0.13 });
  $$('[data-reveal]').forEach((item) => observer.observe(item));
}

function setupParallax() {
  const media = $$('[data-shift]'); if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const update = () => media.forEach((item) => { const rect = item.getBoundingClientRect(); const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight; item.style.transform = `scale(1.06) translateY(${offset * Number(item.dataset.shift)}px)`; });
  update(); window.addEventListener('scroll', update, { passive: true });
}

function setupContactForm() {
  $("#contactForm").addEventListener("submit", (event) => { event.preventDefault(); const data = new FormData(event.currentTarget); const name = String(data.get("name") || "").trim(), email = String(data.get("email") || "").trim(), message = String(data.get("message") || "").trim(); const subject = encodeURIComponent(`Portfolio enquiry from ${name || "a visitor"}`), body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`); window.location.href = `mailto:fahimgaba9@gmail.com?subject=${subject}&body=${body}`; showToast("Your email draft is ready to send."); event.currentTarget.reset(); });
}

function setupResume() { $$(".resume-link").forEach((link) => link.addEventListener("click", async (event) => { if (window.location.protocol === "file:") return; try { const response = await fetch(link.href, { method: "HEAD" }); if (!response.ok) throw new Error("Resume not found"); } catch (_) { event.preventDefault(); showToast("Add your PDF as assets/Haris-Fahim-Gaba-Resume.pdf to activate the resume download."); } })); }

renderSkills(); renderProjects(); setupMenu(); setupNavigation(); setupReveal(); setupParallax(); setupContactForm(); setupResume(); $("#year").textContent = new Date().getFullYear();
window.addEventListener("load", () => setTimeout(() => { $("#pageLoader").classList.add("done"); document.body.classList.add("is-ready"); }, 380));
