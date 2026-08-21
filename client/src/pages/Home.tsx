// STYLE NOTE: Black-box Commerce Lab — dark editorial operations room, Signal Green #2DFFB3, Space Grotesk headlines, DM Sans body, IBM Plex Mono metadata.
import { useState } from "react";
import { ArrowUpRight, ChevronDown, ExternalLink, Mail, Menu, X } from "lucide-react";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Cases", href: "#cases" },
  { label: "Operations", href: "#operations" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Ohora Operation Hypo", href: "#ohora" },
  { label: "Why Me", href: "#fit" },
];

const projects = [
  {
    number: "01",
    name: "Cracked Soda",
    role: "Shopify Plus / Operations",
    scope: "Performance analytics · Email marketing",
    summary: "Operating the storefront as a connected system: content, product & collection optimization, performance signals, and lifecycle activity moving toward the same commercial goal.",
    impact: ["Shopify Plus operations", "Performance analytics", "Email marketing"],
    image: "/case-studies/cracked-soda.png",
    metrics: [
      { value: "~$2M", label: "Annual GMV" },
      { value: "1.8", label: "Average cart size" },
      { value: "26%", label: "Repeat purchase", detail: "from 15%" },
      { value: "2.9%", label: "Site-wide CVR" },
    ],
  },
  {
    number: "02",
    name: "S.C Studios",
    role: "Shopify / CRO",
    scope: "Store operations · Performance analytics · UX",
    summary: "Translating behavioral data into storefront decisions — from product-page friction to the moments that influence ATC and purchase intent.",
    impact: ["Storefront operations", "Funnel analysis", "CRO hypotheses"],
    image: "/case-studies/sc-studios.png",
    metrics: [
      { value: "~$500K", label: "Annual GMV" },
      { value: "2.2%", label: "Site-wide CVR", detail: "from 0.25%" },
      { value: "15%", label: "Repeat purchase", detail: "from 5%" },
      { value: "15%", label: "Session-to-ATC", detail: "from 2.3%" },
    ],
  },
  {
    number: "03",
    name: "Sanci",
    role: "Shopify / Lifecycle",
    scope: "Store operations · Performance analytics · Email marketing",
    summary: "Connecting the first purchase to the next one with a joined-up approach to product & collection optimization, customer segments, flows, and campaign execution.",
    impact: ["Shopify operations", "Customer segmentation", "Lifecycle marketing"],
    image: "/case-studies/sanci.png",
    metrics: [
      { value: "~$6M", label: "Annual GMV" },
      { value: "20%", label: "Revenue from lifecycle", detail: "from <10%" },
      { value: "15", label: "Automated flows implemented" },
      { value: "2.4%", label: "Site-wide CVR" },
    ],
  },
];

const tools = [
  ["Store", "Shopify", "Shopify Plus"],
  ["Analytics", "GA4", "Shopify Analytics", "Google Tag Manager", "Microsoft Clarity"],
  ["Apps", "Klaviyo", "Smile.io", "Judge.me", "Google & YouTube"],
  ["CRO Tools", "VWO", "Figma"],
  ["Collaboration", "Notion", "ClickUp", "Slack"],
  ["Technical understanding", "HTML / CSS", "Tracking QA"],
];

const operatingModes = [
  { key: "01", title: "Storefront Operations", text: "Shopify admin, theme and content updates, product and collection management, navigation, promotional banners, app configuration, QA, and mobile optimization." },
  { key: "02", title: "Product & Collection Optimization", text: "Collection structure, product positioning, cross-sell, upsell, promotional mechanics, and seasonal campaign execution." },
  { key: "03", title: "CRO & UX", text: "Funnel analysis, PDP optimization, ATC diagnosis, checkout analysis, hypothesis building, and A/B testing." },
  { key: "04", title: "Analytics & Lifecycle", text: "Shopify Analytics, GA4, tracking audits, conversion-data validation, Klaviyo segments, flows, campaigns, and retention." },
];

const ohoraPlan = [
  { days: "00—30", title: "Stabilize & understand", body: "Audit the Shopify setup, validate tracking, QA the catalog and mobile UX, review navigation and collections, inspect checkout, and establish a baseline KPI dashboard." },
  { days: "31—60", title: "Optimize the flow", body: "Prioritize PDP CRO, collection optimization, bundling, promotional mechanics, mobile conversion, search and discovery, abandoned checkout, and lifecycle flows." },
  { days: "61—90", title: "Scale what works", body: "Build the A/B testing roadmap, segmentation and repeat-purchase plan, cross-sell and loyalty opportunities, campaign calendar, and a clear revenue optimization loop." },
];

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="section-label"><span className="section-number">{number}</span><span>{children}</span></div>;
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openCase, setOpenCase] = useState(0);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a href="#top" className="wordmark" aria-label="Hoa Tran Shopify operations portfolio">
          <span className="mark"><span /></span><span>Hoa Tran - Portfolio</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <a className="header-cta" href="mailto:hoatt.business@gmail.com">Get in touch <ArrowUpRight size={15} /></a>
        <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X /> : <Menu />}</button>
      </header>
      {menuOpen && <nav className="mobile-nav">{navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<ArrowUpRight size={15} /></a>)}</nav>}
      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <div className="eyebrow"><span className="live-dot" /> Shopify operations <span className="eyebrow-line" /></div>
            <h1>I turn Shopify stores into <em>better-performing</em> systems.</h1>
            <p className="hero-intro">From storefront operations to conversion optimization, I operate Shopify with revenue in mind, combining hands-on execution with analytics, lifecycle marketing, and a bias toward the highest-impact bottleneck.</p>
            <div className="hero-actions"><a className="button-primary" href="#experience">Inspect the operating model <ArrowUpRight size={16} /></a><a className="text-link" href="mailto:hoatt.business@gmail.com">Contact me <ArrowUpRight size={16} /></a></div>
          </div>
          <div className="hero-readout"><div className="readout-head"><span>EXPERTISE AREAS</span><span className="panel-status"><span className="live-dot" /> focused</span></div><div className="readout-row"><b>01</b><span>Storefront Operations</span><small>Shopify Admin · Product & Collection Optimization</small></div><div className="readout-row"><b>02</b><span>Performance Systems</span><small>Analytics · CRO · Tracking Validation</small></div><div className="readout-row"><b>03</b><span>Lifecycle Growth</span><small>Klaviyo · Segmentation · Retention</small></div><div className="readout-foot">SHOPIFY / CRO / LIFECYCLE / ANALYTICS</div></div>
        </section>

        <section className="proof-strip" aria-label="Experience snapshot">
          <div><strong>03+</strong><span>years in growth & e-commerce</span></div><div><strong>05+</strong><span>Shopify stores / projects</span></div><div><strong>14%+</strong><span>overall revenue lift</span></div><div><strong>20%</strong><span>revenue contribution from lifecycle</span></div>
        </section>

        <section id="experience" className="section-pad intro-section">
          <SectionLabel number="01">Growth principles</SectionLabel>
          <div className="intro-grid"><h2>Operate the store as a <span>revenue system.</span></h2><div><p className="lead">I don’t just manage Shopify content. I connect the storefront, the data, and the customer journey so every improvement has a commercial reason to exist.</p><p>My operating lens is simple: find the friction, fix the flow, and measure the lift. The work sits at the intersection of Shopify operations, performance analytics, CRO, and lifecycle marketing.</p></div></div>
          <div className="principles"><div><span>01</span><h3>Business objectives first.</h3><p>Store activity should support revenue priorities, not become a list of disconnected tasks.</p></div><div><span>02</span><h3>Every funnel is a hypothesis.</h3><p>Measure the drop-off, make the smallest useful change, then learn from the result.</p></div><div><span>03</span><h3>Retention is part of growth.</h3><p>Acquisition creates opportunity. Lifecycle and experience turn it into durable value.</p></div></div>
        </section>

        <section id="cases" className="section-pad dark-section">
          <SectionLabel number="02">Where I’ve operated</SectionLabel>
          <div className="section-heading-row"><h2>Highlighted projects operated against<br /><span>real problems.</span></h2><p>Selected Shopify experiences. Each card shows the surface area I personally worked across & key performance metrics, not just the company name.</p></div>
          <div className="project-list">{projects.map((project, index) => <article className={`project-card ${openCase === index ? "is-open" : ""}`} key={project.name}>
            <button className="project-summary" onClick={() => setOpenCase(openCase === index ? -1 : index)} aria-expanded={openCase === index}>
              <span className="project-no">{project.number}</span><span className="project-name">{project.name}</span><span className="project-role">{project.role}</span><span className="project-scope">{project.scope}</span><span className="project-toggle">{openCase === index ? <ChevronDown size={20} /> : <ArrowUpRight size={20} />}</span>
            </button>
            {openCase === index && <div className="project-detail"><div className="project-image"><img src={project.image} alt={`${project.name} Shopify storefront screenshot`} /></div><div className="project-text"><div className="evidence-label">OPERATING RECORD / {project.number}</div><p>{project.summary}</p><div className="impact-list">{project.impact.map((item) => <span key={item}>{item}</span>)}</div><div className="scorecard"><div className="scorecard-head"><span>PERFORMANCE METRICS</span></div><div className="scorecard-grid">{project.metrics.map((metric) => <div className="scorecard-metric" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span>{metric.detail && <small>{metric.detail}</small>}</div>)}</div></div><a href="#operations" className="text-link">See how I operate <ArrowUpRight size={15} /></a></div></div>}
          </article>)}          </div><p className="confidential-note"><span>DATA NOTE</span> USM Japan data is not permitted to be published and has been excluded from this portfolio.</p>
        </section>

        <section id="operations" className="section-pad operations-section">
          <SectionLabel number="03">What I actually do</SectionLabel>
          <div className="section-heading-row"><h2>A practical map of<br /><span>Shopify operations.</span></h2><p>The value is in the connective dots: admin task, customer behavior, and metric that tells us whether it worked.</p></div>
          <div className="ops-map">{operatingModes.map((mode) => <div className="ops-card" key={mode.key}><div className="ops-card-top"><span>{mode.key}</span><ArrowUpRight size={17} /></div><h3>{mode.title}</h3><p>{mode.text}</p></div>)}</div>
          <div className="funnel"><div className="funnel-head"><span>MONITORING LOOP</span><span>NEW STORE → SCALE</span></div><div className="funnel-line">{["Acquisition", "Landing", "PDP", "ATC", "Checkout", "Purchase", "Retention"].map((stage, index) => <div key={stage} className={index === 3 ? "hot" : ""}><i /><span>{stage}</span></div>)}</div><div className="funnel-metrics"><span>Sessions · Traffic source · Landing-page CVR · Device Proportion</span><span>PDP view rate · ATC rate · Purchase CVR</span><span>AOV · Revenue/session · Repeat purchase · CLV</span></div></div>
        </section>

        <section className="section-pad cases-section">
          <SectionLabel number="04">When something went wrong</SectionLabel>
          <div className="section-heading-row"><h2>Diagnosis before<br /><span>implementation.</span></h2><p>Operational problems are where the role becomes tangible. I use a Situation → Diagnosis → Action → Impact frame to keep the work accountable.</p></div>
          <div className="issue-grid"><article className="issue-card issue-card-featured"><span className="issue-tag">TRACKING RELIABILITY</span><h3>Duplicate purchase events</h3><p className="issue-lead">A purchase event fired every time the order-confirmation page was reloaded, making conversion reporting look stronger than the underlying reality.</p><div className="issue-log">ISSUE.LOG / TRACKING RELIABILITY / RESOLVED</div><div className="issue-steps"><div><b>01 / Situation</b><span>Reported conversion data could not be trusted at face value.</span></div><div><b>02 / Diagnosis</b><span>Traced the event behavior through the confirmation-page flow and tracking setup.</span></div><div><b>03 / Action</b><span>Removed duplicate firing and revalidated the purchase signal against order data.</span></div><div><b>04 / Impact</b><span>Created a more reliable baseline for reporting, attribution, and optimization decisions.</span></div></div></article><article className="issue-card"><span className="issue-tag">CRO DIAGNOSIS / TRACE</span><h3>Low Add-to-Cart Rate on Mobile</h3><div className="issue-steps"><div><b>01 / Situation</b><span>Baseline ATC rate was stuck at 3% site-wide, with a significant conversion drop-off on mobile devices compared to desktop.</span></div><div><b>02 / Diagnosis</b><span>Heatmaps showed users only scrolled ~1.5 screens down. The primary ATC button was buried below two full scrolls on mobile, missing initial user intent.</span></div><div><b>03 / Action &amp; Test Setup</b><span>Moved the highlighted ATC button Above-The-Fold (ATF). Tested against a 3% baseline CVR, targeting an MDE of 80% (5.4% expected CVR) at a 95% confidence level.</span></div><div><b>04 / Impact</b><span>Ran for 3 weeks: Mobile ATC rate increased to 6.1% (exceeding the 5.4% target) with over 95% statistical confidence.</span></div></div><div className="mini-chart"><span className="chart-label">SESSION → ATC</span><div className="bars"><i style={{ height: "100%" }} /><i style={{ height: "50%" }} /><i className="accent-bar" style={{ height: "3%" }} /></div><div className="chart-axis"><span>Session</span><span>PDP View</span><span>ATC</span></div></div></article></div>
        </section>

        <section id="toolkit" className="section-pad toolkit-section"><SectionLabel number="05">My Shopify toolkit</SectionLabel><div className="toolkit-intro"><h2>Tools grouped by<br /><span>JTBD</span></h2><p>Apps are not the operating model. They are the instruments that make the model executable: store, analytics, retention, CRO, collaboration, and the technical layer underneath.</p></div><div className="tool-grid">{tools.map(([category, ...items]) => <div className="tool-group" key={category}><span>{category}</span><div>{items.map((item) => <b key={item}>{item}</b>)}</div></div>)}</div></section>

        <section id="ohora" className="section-pad ohora-section"><SectionLabel number="06">If I were operating Ohora Germany</SectionLabel><div className="ohora-heading"><h2>A 90-day operating<br /><span>hypothesis.</span></h2><div><p className="lead">This is not an audit of Ohora’s current performance. It is how I would approach a newly launched Shopify D2C store: stabilize the system, find the friction, and scale the signal.</p><p className="small-note">The first goal is more confidence in what is happening across the storefront and funnel.</p></div></div><div className="timeline">{ohoraPlan.map((phase) => <div className="timeline-row" key={phase.days}><span className="timeline-days">{phase.days}</span><div className="timeline-marker" /><div><h3>{phase.title}</h3><p>{phase.body}</p></div></div>)}</div></section>

        <section className="section-pad fit-section"><SectionLabel number="07">How I would monitor the funnel</SectionLabel><div className="fit-grid"><h2>From new store<br />to <span>repeat purchase.</span></h2><div className="monitor-list"><div><b>01</b><span>Acquisition</span><small>Sessions, source, landing-page CVR</small></div><div><b>02</b><span>Engagement</span><small>PDP view rate, ATC rate</small></div><div><b>03</b><span>Conversion</span><small>Checkout initiation, purchase CVR</small></div><div><b>04</b><span>Economics & retention</span><small>AOV, revenue/session, repeat purchase, CLV</small></div></div></div></section>

        <section id="fit" className="section-pad final-section"><SectionLabel number="08">Why I’m a strong fit</SectionLabel><div className="final-heading"><h2>The goal is not simply to keep a Shopify store running.<br /><span>It is to continuously make it perform better.</span></h2><a className="button-primary" href="mailto:hoatt.business@gmail.com">Let’s talk operations <Mail size={16} /></a></div><div className="fit-principles"><div><span>01</span><h3>Hands-on</h3><p>Close to the actual ecommerce stack, not only strategy.</p></div><div><span>02</span><h3>Commercial</h3><p>Connect storefront operations to CVR, AOV, retention, and revenue.</p></div><div><span>03</span><h3>Cross-functional</h3><p>Bridge marketing, Shopify, analytics, CRO, CRM, and technical teams.</p></div></div></section>
      </main>
      <footer className="site-footer"><span>Hoa Tran / Shopify operations</span><a href="mailto:hoatt.business@gmail.com">hoatt.business@gmail.com <ExternalLink size={14} /></a><span>© 2026</span></footer>
    </div>
  );
}

export default Home;
