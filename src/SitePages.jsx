import React, { useMemo, useState } from 'react';
import {
  AppWindow, ArrowRight, ArrowUpRight, BarChart3, Bot, BrainCircuit, BriefcaseBusiness,
  Building2, CalendarDays, Check, CheckCircle2, ChevronRight, CircleDot, Compass,
  Globe2, Handshake, Layers3, Lightbulb, LineChart, Mail, MapPin, Megaphone, MonitorSmartphone,
  Phone, Rocket, Search, Share2, ShoppingBag, Sparkles, Target, UtensilsCrossed,
  UserRound, WandSparkles, Wrench, Zap,
} from 'lucide-react';

const services = [
  {
    title: 'Digital Marketing', category: 'Growth', icon: Megaphone,
    tagline: 'Grow your brand across all channels.',
    description: 'Campaign strategy, audience targeting and conversion-focused acquisition designed around measurable business outcomes.',
    points: ['Google, Meta, LinkedIn, TikTok & X ads', 'Conversion rate optimization', 'Clear performance reporting'],
  },
  {
    title: 'Social Media Management', category: 'Brand', icon: Share2,
    tagline: 'Build. Engage. Convert.',
    description: 'A consistent social presence that turns everyday brand activity into trust, community and qualified attention.',
    points: ['Content planning & publishing', 'Account setup & optimization', 'Community engagement'],
  },
  {
    title: 'SEO', category: 'Growth', icon: Search,
    tagline: 'Get found. Stay ahead.',
    description: 'Technical and content-led search foundations that make your business easier to discover when intent is high.',
    points: ['Technical SEO foundations', 'Content opportunity mapping', 'Analytics & monthly insights'],
  },
  {
    title: 'Website Development', category: 'Technology', icon: MonitorSmartphone,
    tagline: 'A digital home built to convert.',
    description: 'Modern, responsive websites, landing pages and e-commerce experiences that make the next step obvious.',
    points: ['Mobile-first responsive design', 'Lead capture & analytics', 'Fast, accessible builds'],
  },
  {
    title: 'App Development', category: 'Technology', icon: AppWindow,
    tagline: 'Digital products that move work forward.',
    description: 'Custom web and mobile applications, portals and integrations that solve real operational or customer problems.',
    points: ['Web & mobile applications', 'Client portals & integrations', 'Ongoing improvement support'],
  },
  {
    title: 'AI Content Creation', category: 'AI', icon: WandSparkles,
    tagline: 'High-performing ads, faster.',
    description: 'Brand-aligned visuals, videos, product showcases and copy created with AI speed and human strategic direction.',
    points: ['Creative concepts & variations', 'AI-assisted video & visuals', 'Campaign-ready copy'],
  },
  {
    title: 'AI Automation', category: 'AI', icon: Bot,
    tagline: 'Work smarter. Save time.',
    description: 'Practical automation that removes repetitive work from customer service, lead follow-up, bookings and internal workflows.',
    points: ['Lead qualification & routing', 'CRM follow-ups', 'Bookings & support workflows'],
  },
];

const process = [
  { number: '01', title: 'Discover', icon: Compass, summary: 'Understand the business, audience, ambitions and friction points before we prescribe a solution.' },
  { number: '02', title: 'Strategize', icon: Lightbulb, summary: 'Build a tailored growth blueprint with the right priorities, channels and success measures.' },
  { number: '03', title: 'Build', icon: Wrench, summary: 'Create the digital assets, creative systems, campaigns and automations that make the plan real.' },
  { number: '04', title: 'Launch', icon: Rocket, summary: 'Deploy with tracking, quality checks and the operational foundations needed to move confidently.' },
  { number: '05', title: 'Optimize', icon: LineChart, summary: 'Learn from live data, test deliberately and improve the parts that have the greatest leverage.' },
  { number: '06', title: 'Grow', icon: Zap, summary: 'Scale what works into a repeatable growth system that supports the next stage of the business.' },
];

const clientGroups = [
  { title: 'Startups & high-growth ventures', icon: Rocket, text: 'Launching a credible market presence and digital foundation from day one.' },
  { title: 'SMEs & established enterprises', icon: Building2, text: 'Modernizing operations, customer acquisition and digital touchpoints for scale.' },
  { title: 'E-commerce brands', icon: ShoppingBag, text: 'Building acquisition engines, stronger creative and conversion-ready customer journeys.' },
  { title: 'Real estate companies', icon: Building2, text: 'Creating high-trust digital experiences and lead systems for high-value opportunities.' },
  { title: 'Restaurants & hospitality', icon: UtensilsCrossed, text: 'Improving visibility, bookings, customer relationships and reputation across platforms.' },
  { title: 'Corporate businesses', icon: BriefcaseBusiness, text: 'Connecting growth priorities with robust technology and streamlined internal workflows.' },
  { title: 'Personal brands', icon: UserRound, text: 'Turning expertise into authority, engaging content and a reliable client pipeline.' },
  { title: 'Global businesses', icon: Globe2, text: 'Supporting ambitious organizations that want a digital partner built for cross-border reach.' },
];

function Eyebrow({ children, inverse = false }) {
  return (
    <div className={`eyebrow ${inverse ? 'eyebrow--inverse' : ''}`}>
      <span />{children}
    </div>
  );
}

function TextLink({ to, onNavigate, children, className = '' }) {
  return <a href={to} onClick={(event) => { event.preventDefault(); onNavigate(to); }} className={className}>{children}</a>;
}

function PageHero({ eyebrow, title, copy, image, children, dark = false, compact = false }) {
  return (
    <section className={`page-hero curve-bottom ${compact ? 'page-hero--compact' : ''} ${dark ? 'page-hero--dark' : ''}`}>
      {image && <div className="page-hero-image"><img src={image} alt="" /></div>}
      <div className="page-hero-overlay" />
      <div className="site-shell relative z-10 flex min-h-[440px] items-center py-16 sm:py-20 lg:min-h-[510px] lg:py-24">
        <div className="page-hero-copy">
          <Eyebrow inverse={dark}>{eyebrow}</Eyebrow>
          <h1>{title}</h1>
          <p>{copy}</p>
          {children}
        </div>
      </div>
    </section>
  );
}

function CTA({ onNavigate, title = 'Ready to build a growth system?', body = 'Tell us where you want to go. We’ll help you identify the right next move.' }) {
  return (
    <section className="site-shell py-14 sm:py-20">
      <div className="cta-panel curve-corners">
        <div className="relative z-10 max-w-2xl">
          <Eyebrow inverse>Let’s build</Eyebrow>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <TextLink to="/contact" onNavigate={onNavigate} className="button-primary relative z-10 mt-7 shrink-0 sm:mt-0">
          Get in touch <ArrowRight className="h-4 w-4" />
        </TextLink>
      </div>
    </section>
  );
}

function HomePage({ onNavigate }) {
  return (
    <>
      <section className="home-hero curve-bottom">
        <div className="home-hero-image"><img src="/assets/hero_office.png" alt="Nexus Bridge team discussing business growth in a modern office" /></div>
        <div className="home-hero-overlay" />
        <div className="site-shell relative z-10 flex min-h-[620px] items-center py-14 sm:min-h-[690px] lg:min-h-[710px] lg:py-20">
          <div className="home-hero-copy">
            <Eyebrow>People. Opportunities. Progress.</Eyebrow>
            <h1>Bridging businesses to <em>growth.</em></h1>
            <p>Nexus Bridge Alliance is a modern digital growth and technology agency. We combine marketing, technology, AI and automation to help ambitious businesses become more visible, efficient and profitable.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TextLink to="/contact" onNavigate={onNavigate} className="button-primary justify-center">Start a conversation <ArrowRight className="h-4 w-4" /></TextLink>
              <TextLink to="/services" onNavigate={onNavigate} className="button-secondary justify-center">Explore our services <ChevronRight className="h-4 w-4" /></TextLink>
            </div>
            <p className="hero-footnote">Marketing <b>×</b> Social Media <b>×</b> Technology <b>×</b> AI <b>×</b> Automation</p>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-8 pb-7 sm:-mt-12 sm:pb-12">
        <div className="site-shell">
          <div className="metric-ribbon">
            <div><strong>73<span>+</span></strong><p>Companies served</p></div>
            <div><strong>153<span>+</span></strong><p>Strategic connections</p></div>
            <div><strong>5</strong><p>Countries affiliated</p></div>
            <div className="hidden lg:block"><p className="metric-quote">Built in Dubai.<br />Operating in Nigeria.<br /><b>Working globally.</b></p></div>
          </div>
        </div>
      </section>

      <section className="site-shell section-space">
        <div className="grid items-end gap-8 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <Eyebrow>Our mission</Eyebrow>
            <h2 className="section-title">Practical systems that create measurable momentum.</h2>
          </div>
          <p className="section-copy lg:pb-1">We help businesses grow through practical digital marketing, technology, artificial intelligence and automation solutions that improve visibility, customer acquisition, efficiency and profitability.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            ['See the opportunity', 'We start with your business objectives, customer journey and the clearest route to value.'],
            ['Build the right system', 'Strategy guides every campaign, page, workflow and technology decision we make together.'],
            ['Measure what matters', 'Simple reporting keeps attention on performance, learning and sustainable next steps.'],
          ].map(([title, text], index) => (
            <article className="float-card" key={title}>
              <span className="card-number">0{index + 1}</span>
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="impact-band curve-corners">
        <img src="/assets/skyline_impact.jpg" alt="City skyline representing global business growth" />
        <div className="impact-band-shade" />
        <div className="site-shell relative z-10 py-16 sm:py-20 lg:py-24">
          <Eyebrow inverse>One connected engine</Eyebrow>
          <div className="grid items-end gap-10 lg:grid-cols-[.9fr_1.1fr]">
            <h2 className="max-w-xl text-4xl font-extrabold tracking-[-.06em] text-white sm:text-5xl lg:text-6xl">Your growth should not be held back by fragmented vendors.</h2>
            <p className="max-w-xl text-base leading-8 text-slate-200 sm:text-lg">Nexus Bridge brings digital marketing, social management, websites, apps, AI content and automation into one coordinated growth partner — so every piece works harder together.</p>
          </div>
        </div>
      </section>

      <section className="site-shell section-space">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div><Eyebrow>What we do</Eyebrow><h2 className="section-title">Growth, powered by the right tools.</h2></div>
          <TextLink to="/services" onNavigate={onNavigate} className="inline-flex items-center gap-2 text-sm font-bold text-[#C4121A] hover:text-[#971017]">View all services <ArrowRight className="h-4 w-4" /></TextLink>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 4).map(({ title, tagline, icon: Icon }) => (
            <TextLink to="/services" onNavigate={onNavigate} className="service-preview group" key={title}>
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-red-50 text-[#C4121A] transition group-hover:bg-[#C4121A] group-hover:text-white"><Icon className="h-5 w-5" /></span>
              <h3>{title}</h3><p>{tagline}</p><ArrowUpRight className="mt-5 h-4 w-4 text-slate-400 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#C4121A]" />
            </TextLink>
          ))}
        </div>
      </section>

      <CTA onNavigate={onNavigate} title="Let’s build a powerful digital presence that drives growth." body="Whether you need more visibility, stronger lead flow, smarter operations or an entirely new digital platform, we can help you map the next move." />
    </>
  );
}

function AboutPage({ onNavigate }) {
  const points = [
    ['Business-first thinking', 'We choose tools and tactics because they make commercial sense — never because they are fashionable.'],
    ['AI-powered strategies', 'AI speeds up thoughtful work, helps us test faster and creates room for better decisions.'],
    ['Data-driven performance', 'Every campaign and system is oriented around visible progress and reporting you can understand.'],
    ['Dedicated support', 'You get a clear, collaborative partner with transparent communication from strategy through delivery.'],
  ];
  return <>
    <PageHero eyebrow="About Nexus Bridge" title={<>Digital growth systems, built around your business.</>} copy="Founded in Dubai in 2023 and operating in Nigeria, Nexus Bridge Alliance connects businesses with the tools, strategies and technology needed to compete and grow in a digital, AI-driven world." image="/assets/connected_boardroom.jpg">
      <TextLink to="/contact" onNavigate={onNavigate} className="button-primary mt-8">Work with us <ArrowRight className="h-4 w-4" /></TextLink>
    </PageHero>
    <section className="site-shell section-space">
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="statement-card"><Eyebrow>Our mission</Eyebrow><h2>Help businesses grow through practical digital solutions.</h2><p>We provide digital marketing, technology, artificial intelligence and automation solutions that improve visibility, customer acquisition, efficiency and profitability.</p></article>
        <article className="statement-card statement-card--dark"><Eyebrow inverse>Our vision</Eyebrow><h2>Make ambitious businesses ready for what is next.</h2><p>To become a globally recognized digital growth and technology agency, helping businesses of all sizes compete, adapt and grow in an increasingly digital world.</p></article>
      </div>
    </section>
    <section className="soft-section curve-corners">
      <div className="site-shell section-space">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <div><Eyebrow>Brand positioning</Eyebrow><h2 className="section-title">We help businesses grow through digital marketing and AI solutions.</h2><p className="section-copy mt-5">We do not simply create digital assets. We create digital growth systems — coherent combinations of strategy, creativity, technology and automation.</p></div>
          <div className="grid gap-4 sm:grid-cols-2">
            {points.map(([title, text], index) => <article key={title} className="reason-card"><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </div>
    </section>
    <section className="site-shell section-space">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center"><img className="rounded-[2rem] object-cover shadow-xl" src="/assets/business_expansion.png" alt="Modern business headquarters" /><div><Eyebrow>Our foundation</Eyebrow><h2 className="section-title">Global perspective. Focused execution.</h2><div className="mt-7 space-y-5">{[['Founded', '2023 · Dubai, United Arab Emirates'], ['Operational hub', 'Nigeria · serving clients around the world'], ['Our promise', 'A unified partner for marketing, technology, AI and automation']].map(([label, text]) => <div className="border-l-2 border-[#C4121A] pl-4" key={label}><p className="text-xs font-bold uppercase tracking-[.17em] text-[#C4121A]">{label}</p><p className="mt-1 text-base font-semibold text-slate-800">{text}</p></div>)}</div></div></div>
    </section>
    <CTA onNavigate={onNavigate} title="A clearer path to your next stage of growth." />
  </>;
}

function ServicesPage({ onNavigate }) {
  const [filter, setFilter] = useState('All');
  const visible = useMemo(() => filter === 'All' ? services : services.filter((service) => service.category === filter), [filter]);
  return <>
    <PageHero eyebrow="What we do" title={<>Marketing <em>×</em> social media <em>×</em> tech <em>×</em> AI.</>} copy="One agency. One connected growth system. We bring together the capabilities your business needs to get found, build trust, convert demand and operate with less friction." image="/assets/hero_office.png" />
    <section className="site-shell section-space">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"><div><Eyebrow>Our services</Eyebrow><h2 className="section-title">Built to move your business forward.</h2></div><div className="filter-row" aria-label="Service categories">{['All', 'Growth', 'Brand', 'Technology', 'AI'].map((item) => <button key={item} onClick={() => setFilter(item)} className={filter === item ? 'filter-pill filter-pill--active' : 'filter-pill'}>{item}</button>)}</div></div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{visible.map((service) => { const Icon = service.icon; return <article className="service-card" key={service.title}><div className="flex items-start justify-between gap-4"><span className="service-icon"><Icon className="h-5 w-5" /></span><span className="service-category">{service.category}</span></div><h3>{service.title}</h3><strong>{service.tagline}</strong><p>{service.description}</p><ul>{service.points.map((point) => <li key={point}><Check className="h-4 w-4" />{point}</li>)}</ul><TextLink to="/contact" onNavigate={onNavigate} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#C4121A]">Talk about this service <ArrowRight className="h-4 w-4" /></TextLink></article>; })}</div>
    </section>
    <section className="site-shell pb-14 sm:pb-20"><div className="rounded-[2rem] bg-slate-950 p-8 text-white sm:p-12"><Eyebrow inverse>Need a tailored mix?</Eyebrow><div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between"><div><h2 className="text-3xl font-extrabold tracking-[-.05em] sm:text-4xl">Your business does not fit a template. Neither should your growth plan.</h2><p className="mt-4 max-w-2xl text-slate-300">We audit your bottlenecks, opportunities and capabilities, then assemble the right combination of services.</p></div><TextLink to="/contact" onNavigate={onNavigate} className="button-primary shrink-0">Request a growth audit <ArrowRight className="h-4 w-4" /></TextLink></div></div></section>
  </>;
}

function AiSolutionsPage({ onNavigate }) {
  const solutions = [
    { icon: Bot, title: 'AI Automation', text: 'Turn repetitive customer and operational tasks into reliable workflows that run in the background.', list: ['Lead qualification and instant routing', 'CRM follow-ups and nurture sequences', 'Booking, reminders and support flows'] },
    { icon: WandSparkles, title: 'AI Content Creation', text: 'Produce stronger creative at speed without losing your brand voice, audience understanding or strategic direction.', list: ['Visuals, video and product showcases', 'Campaign variations and creative testing', 'AI-assisted copy with human review'] },
    { icon: BarChart3, title: 'AI Ad Creation', text: 'Build more informed paid campaigns through rapid testing of hooks, angles, formats and audience intent.', list: ['Data-led creative variations', 'Multi-platform ad assets', 'Faster learnings from live performance'] },
  ];
  return <>
    <PageHero dark eyebrow="AI solutions" title={<>Make work lighter. Make growth <em>smarter.</em></>} copy="AI is most valuable when it removes friction and helps your people focus on decisions, customers and growth. We apply it practically — across creative, acquisition and operations." image="/assets/skyline_impact.jpg">
      <TextLink to="/contact" onNavigate={onNavigate} className="button-primary mt-8">Explore AI for your business <ArrowRight className="h-4 w-4" /></TextLink>
    </PageHero>
    <section className="site-shell section-space">
      <div className="mx-auto max-w-3xl text-center"><Eyebrow>AI with a business case</Eyebrow><h2 className="section-title">Not technology for technology’s sake.</h2><p className="section-copy mx-auto mt-5">Every AI solution should create a clear outcome: faster delivery, better customer response, stronger creative testing or less manual work. That is where we start.</p></div>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">{solutions.map(({ icon: Icon, title, text, list }, index) => <article className="ai-card" key={title}><div className="ai-card-top"><span>0{index + 1}</span><Icon className="h-6 w-6" /></div><h3>{title}</h3><p>{text}</p><ul>{list.map((item) => <li key={item}><CheckCircle2 className="h-4 w-4" />{item}</li>)}</ul></article>)}</div>
    </section>
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20"><div className="site-shell grid gap-10 lg:grid-cols-2 lg:items-center"><div><Eyebrow>Where to start</Eyebrow><h2 className="section-title">Find the workflow that is slowing you down.</h2><p className="section-copy mt-5">From a chat assistant that qualifies prospects to a content engine that lets your team iterate in days rather than weeks, the best first project is usually the one with a real bottleneck behind it.</p><TextLink to="/contact" onNavigate={onNavigate} className="button-primary mt-8">Find your AI opportunity <ArrowRight className="h-4 w-4" /></TextLink></div><div className="workflow-diagram"><div><span>01</span>Identify friction</div><ArrowRight /><div><span>02</span>Design the workflow</div><ArrowRight /><div><span>03</span>Measure the gain</div></div></div></section>
    <CTA onNavigate={onNavigate} title="AI that moves your business forward — not just a demo." />
  </>;
}

function ApproachPage({ onNavigate }) {
  return <>
    <PageHero eyebrow="Our approach" title={<>A clear route from idea to <em>growth.</em></>} copy="Our six-step method keeps the work grounded in your real priorities. It gives every campaign, system and technology decision a purposeful place in the bigger picture." image="/assets/connected_boardroom.jpg" />
    <section className="site-shell section-space"><div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]"><div><Eyebrow>The Nexus method</Eyebrow><h2 className="section-title">Discover. Strategize. Build. Grow.</h2></div><p className="section-copy">Good work is rarely a straight line. Our process creates enough structure to move quickly, enough visibility to make confident decisions and enough flexibility to act on what the market teaches us.</p></div><div className="process-grid mt-12">{process.map(({ number, title, icon: Icon, summary }) => <article key={number} className="process-card"><span className="process-number">{number}</span><div className="process-icon"><Icon className="h-5 w-5" /></div><h3>{title}</h3><p>{summary}</p></article>)}</div></section>
    <section className="curve-corners bg-[#0A0C0F] text-white"><div className="site-shell grid gap-8 py-16 sm:py-20 lg:grid-cols-3"><div><Eyebrow inverse>What this means for you</Eyebrow><h2 className="text-3xl font-extrabold tracking-[-.05em] sm:text-4xl">A partner who keeps the work connected.</h2></div>{[['More clarity', 'Know what is being built, why it matters and what success looks like.'], ['More momentum', 'Move from planning into execution without losing quality or the bigger picture.']].map(([title, text]) => <div className="border-l border-white/20 pl-6" key={title}><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-slate-300">{text}</p></div>)}</div></section>
    <CTA onNavigate={onNavigate} title="Ready to map the next move?" body="Bring the challenge. We’ll bring the questions, structure and practical thinking needed to turn it into action." />
  </>;
}

function IndustriesPage({ onNavigate }) {
  return <>
    <PageHero eyebrow="Who we serve" title={<>For ambitious businesses at every stage.</>} copy="Whether you are launching, rebuilding, expanding or looking for smarter operations, we shape the work around the realities of your market and business model." image="/assets/business_expansion.png" />
    <section className="site-shell section-space"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><Eyebrow>Ideal clients</Eyebrow><h2 className="section-title">Built around different ambitions. Connected by growth.</h2></div><p className="section-copy max-w-xl">We work with businesses that value clarity, progress and practical innovation — wherever they are in their journey.</p></div><div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{clientGroups.map(({ title, icon: Icon, text }) => <article className="industry-card" key={title}><Icon className="h-5 w-5 text-[#C4121A]" /><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="relative overflow-hidden bg-slate-950 text-white"><img src="/assets/skyline_impact.jpg" alt="Global city skyline" className="absolute inset-0 h-full w-full object-cover opacity-35" /><div className="absolute inset-0 bg-slate-950/75" /><div className="site-shell relative z-10 grid gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_1fr]"><div><Eyebrow inverse>Global outlook</Eyebrow><h2 className="text-4xl font-extrabold tracking-[-.06em] sm:text-5xl">Local understanding. Global ambition.</h2></div><div className="grid grid-cols-3 gap-3"><div className="country-stat"><strong>UAE</strong><span>Founded</span></div><div className="country-stat"><strong>NG</strong><span>Operating hub</span></div><div className="country-stat"><strong>5</strong><span>Countries affiliated</span></div></div></div></section>
    <CTA onNavigate={onNavigate} title="Let’s turn your next opportunity into measurable progress." />
  </>;
}

function InsightsPage({ onNavigate }) {
  const stories = [
    { tag: 'Growth systems', title: 'Why the strongest digital strategy connects every customer touchpoint', text: 'What changes when your ads, content, website and follow-up work as one journey — instead of separate projects.', image: '/assets/strategic_partnerships.png' },
    { tag: 'AI & automation', title: 'Where AI can give a growing business back its time', text: 'The practical workflows that can remove friction from lead response, bookings and everyday operations.', image: '/assets/project_facilitation.png' },
    { tag: 'Digital presence', title: 'Your website is not a brochure. It is a conversion system.', text: 'The foundations that make a company website credible, clear and ready to turn attention into action.', image: '/assets/hero_office.png' },
    { tag: 'Performance', title: 'What useful marketing reporting should actually tell you', text: 'A simple view of the numbers, decisions and learning that matter to a business owner.', image: '/assets/investment_advisory.png' },
  ];
  return <>
    <PageHero eyebrow="Insights" title={<>Useful thinking for businesses building what’s <em>next.</em></>} copy="A growing collection of practical perspectives on digital marketing, technology, artificial intelligence and the systems behind sustainable growth." image="/assets/skyline_impact.jpg" dark />
    <section className="site-shell section-space"><div className="mb-10"><Eyebrow>Nexus intelligence</Eyebrow><h2 className="section-title">Ideas worth putting to work.</h2></div><div className="grid gap-6 md:grid-cols-2">{stories.map((story) => <article className="story-card" key={story.title}><img src={story.image} alt="" /><div><p className="story-tag">{story.tag}</p><h3>{story.title}</h3><p>{story.text}</p><TextLink to="/contact" onNavigate={onNavigate} className="story-link">Talk to our team <ArrowRight className="h-4 w-4" /></TextLink></div></article>)}</div></section>
    <section className="site-shell pb-14 sm:pb-20"><div className="newsletter-card"><div><Eyebrow>Stay in the loop</Eyebrow><h2>Practical growth insights, occasionally.</h2><p>Subscribe from the footer for notes on the changing digital landscape.</p></div><TextLink to="/contact" onNavigate={onNavigate} className="button-secondary">Talk to Nexus <ArrowRight className="h-4 w-4" /></TextLink></div></section>
  </>;
}

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const submit = (event) => { event.preventDefault(); setSubmitted(true); };
  return <>
    <PageHero eyebrow="Get in touch" title={<>Let’s talk about where you want to <em>grow.</em></>} copy="Tell us about your business, your current challenge or the opportunity you want to explore. A member of the Nexus Bridge team will respond within one business day." image="/assets/connected_boardroom.jpg" />
    <section className="site-shell section-space"><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]"><aside className="contact-aside"><Eyebrow>Contact details</Eyebrow><h2>Start a strategic conversation.</h2><p>We work across Dubai, Nigeria and global markets.</p><div className="mt-8 space-y-5"><a href="mailto:info@nexusbridgealliance.com"><Mail className="h-5 w-5" /><span><b>Email</b>info@nexusbridgealliance.com</span></a><a href="tel:+2348012345678"><Phone className="h-5 w-5" /><span><b>Phone / WhatsApp</b>+234 801 234 5678</span></a><div><MapPin className="h-5 w-5" /><span><b>Location</b>Dubai, UAE (Headquarters)<br />Currently operating in Nigeria</span></div></div></aside><div className="contact-form-wrap">{submitted ? <div className="form-success"><CheckCircle2 className="h-12 w-12" /><h2>Thank you{name ? `, ${name}` : ''}.</h2><p>Your message is with the Nexus Bridge team. We will respond within one business day.</p><button onClick={() => setSubmitted(false)} className="button-secondary mt-6">Send another message</button></div> : <form onSubmit={submit}><div className="mb-7"><Eyebrow>Project brief</Eyebrow><h2>Tell us a little about your goals.</h2></div><div className="form-grid"><label>Full name<input required value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" /></label><label>Work email<input required type="email" placeholder="you@company.com" /></label><label>Phone / WhatsApp<input placeholder="+234..." /></label><label>Company name<input placeholder="Your company" /></label></div><label className="mt-5 block">What can we help with?<select defaultValue=""><option value="" disabled>Select a focus area</option><option>Digital marketing</option><option>Social media management</option><option>Website or app development</option><option>AI content or AI ads</option><option>AI automation</option><option>A tailored growth plan</option></select></label><label className="mt-5 block">Tell us about the opportunity<textarea required rows="5" placeholder="A little context helps us prepare for the conversation." /></label><button className="button-primary mt-6" type="submit">Send project brief <ArrowRight className="h-4 w-4" /></button></form>}</div></div></section>
  </>;
}

export function RenderPage({ path, onNavigate }) {
  switch (path) {
    case '/about': return <AboutPage onNavigate={onNavigate} />;
    case '/services': return <ServicesPage onNavigate={onNavigate} />;
    case '/ai-solutions': return <AiSolutionsPage onNavigate={onNavigate} />;
    case '/approach': return <ApproachPage onNavigate={onNavigate} />;
    case '/industries': return <IndustriesPage onNavigate={onNavigate} />;
    case '/insights': return <InsightsPage onNavigate={onNavigate} />;
    case '/contact': return <ContactPage />;
    default: return <HomePage onNavigate={onNavigate} />;
  }
}
