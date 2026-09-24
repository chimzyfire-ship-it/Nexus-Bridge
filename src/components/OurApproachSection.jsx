import React, { useState, useRef } from 'react';
import { 
  Compass, 
  Lightbulb, 
  Wrench, 
  Rocket, 
  LineChart, 
  Award, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  Target, 
  X, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

export default function OurApproachSection({ onOpenContact }) {
  const [selectedPhase, setSelectedPhase] = useState(0); // Default to Phase 1 open for immediate discovery or toggle
  const [isExpanded, setIsExpanded] = useState(false);
  const detailRef = useRef(null);

  const steps = [
    {
      number: '01',
      title: 'Discover',
      icon: Compass,
      tagline: 'Deep Context & Commercial Diagnostics',
      desc: 'We map your existing business model, customer acquisition bottlenecks, historical data, and growth objectives before proposing any technology.',
      realityCheck: "The biggest mistake companies make is jumping straight into tactics — pouring money into ads, rebranding websites, or building software without auditing where value is actually getting lost. If your unit economics or conversion funnels are leaky, more traffic just burns cash faster.",
      deepDiveNarrative: "Before we engineer a single ad campaign, write a line of code, or design an automation pipeline, we embed ourselves into the anatomy of your business. We interrogate your customer acquisition history, churn points, average contract values, and competitive positioning. We identify the exact friction preventing interested prospects from converting into paying partners.",
      founderReflection: "Strategy without diagnostics is expensive speculation. We diagnose first so every dollar and hour spent downstream creates compounding commercial momentum.",
      deliverables: [
        { title: 'Commercial Unit Economics Audit', desc: 'Evaluating CAC, LTV, gross margins, and customer payback periods to define realistic scaling thresholds.' },
        { title: 'Conversion Friction Mapping', desc: 'Analyzing existing web sessions, drop-offs, and sales friction where prospective buyers lose interest.' },
        { title: 'Competitive Moat & Angle Formulation', desc: 'Isolating the distinct reason buyers choose you over incumbents in saturated or emerging markets.' },
        { title: 'Attribution & Data Pipeline Health Check', desc: 'Auditing analytics pixels, CRM hygiene, and event tracking to ensure baseline data integrity.' }
      ],
      targetOutcome: 'Complete commercial clarity and the elimination of wasted exploratory budget before execution starts.',
      timeline: 'Week 1 — Intensive Intake & Data Synthesis'
    },
    {
      number: '02',
      title: 'Strategize',
      icon: Lightbulb,
      tagline: 'The Precision Action Blueprint',
      desc: 'We engineer a tailored roadmap defining the exact creative angles, technical architecture, ad platforms, and automation workflows needed.',
      realityCheck: "A 90-page slide deck filled with theoretical marketing jargon is worthless. What ambitious leadership needs is an actionable commercial blueprint with clear math, prioritized acquisition channels, and synchronized timelines.",
      deepDiveNarrative: "In Phase 2, we architect the unified growth engine. We determine which specific channels (Google Search for high intent, Meta/Instagram for visual storytelling, LinkedIn for institutional dealmaking, TikTok for cultural reach) fit your specific buyer demographics. We map out the exact hook angles, conversion pathways, and backend AI automation pipelines needed to turn cold attention into booked discovery calls.",
      founderReflection: "We don't chase vanity impressions. We architect blueprints where marketing, technology, and sales routing operate as a single unified revenue machine.",
      deliverables: [
        { title: 'Multi-Channel Acquisition Architecture', desc: 'Channel-by-channel budget allocation, target audience segmentation, and demographic targeting matrices.' },
        { title: 'Creative Hook & Narrative Blueprint', desc: 'Defining the high-converting messaging angles, emotional pain points, and commercial offers that stop the scroll.' },
        { title: 'AI Automation & CRM Routing Flowchart', desc: 'Visualizing how inbound prospects get instantly qualified, enriched with data, and routed to sales reps.' },
        { title: 'Milestone-Based Financial Model', desc: 'Clear KPI benchmarks establishing target Cost-Per-Lead (CPL), Cost-Per-Acquisition (CPA), and Return on Ad Spend (ROAS).' }
      ],
      targetOutcome: 'A validated roadmap leaving zero ambiguity about who we are targeting, how we are converting them, and the projected return.',
      timeline: 'Week 1 to Week 2 — Blueprint Formulation & Approval'
    },
    {
      number: '03',
      title: 'Build',
      icon: Wrench,
      tagline: 'High-Velocity Technical & Creative Craftsmanship',
      desc: 'Our engineering and creative teams build your high-converting websites, AI assets, tracking infrastructure, and automated customer journeys.',
      realityCheck: "Modern buyers form their impression of your credibility within 50 milliseconds of landing on your digital touchpoints. If your website feels clunky, your messaging looks generic, or your mobile experience lags, you are paying for traffic that instantly bounces.",
      deepDiveNarrative: "Phase 3 is where strategy transforms into high-converting digital assets. Our engineers and creative specialists build bespoke, high-performance websites and web applications, craft dynamic multi-variant AI creative suites (video hooks, motion graphics, and conversion copywriting), and assemble automated workflow pipelines (instant WhatsApp lead responders, CRM automations, and calendar booking engines).",
      founderReflection: "Your digital presence is your 24/7 global showroom. We engineer it to command instant authority, communicate premium value, and compel immediate action.",
      deliverables: [
        { title: 'High-Converting Web & Landing Page Architecture', desc: 'Bespoke, sub-second responsive pages engineered specifically for high conversion rates and SEO compliance.' },
        { title: 'Multi-Variant AI Creative Suite', desc: 'High-velocity production of ad creatives, video hooks, motion assets, and persuasive copy variants.' },
        { title: 'Automated Lead Qualification Infrastructure', desc: 'Custom AI chatbots, calendar booking integrations, and automated WhatsApp/email onboarding flows.' },
        { title: 'Server-Side Telemetry & Event Tracking', desc: 'Robust Conversions API (CAPI), Google Tag Manager, and privacy-compliant event tracking.' }
      ],
      targetOutcome: 'Production-ready digital assets that look stunning, load instantaneously, and convert visitors into clients.',
      timeline: 'Weeks 2 to 4 — Rapid Engineering & Asset Assembly'
    },
    {
      number: '04',
      title: 'Launch',
      icon: Rocket,
      tagline: 'Flawless Controlled System Deployment',
      desc: 'We release the campaigns and software, verifying pixel telemetry, lead routing webhooks, server response times, and multi-device compliance.',
      realityCheck: "Launching isn't about flipping a switch and walking away. It is an intense, synchronized go-live event where tracking telemetry, server loads, ad account limits, and lead routing webhooks must operate without a single point of failure.",
      deepDiveNarrative: "When we ignite campaigns and deploy software, we actively monitor every touchpoint in real time. We verify conversion tracking pixels, test live webhook handoffs to your CRM, observe multi-device rendering, and monitor server latency under real user traffic. Early user session heatmaps are scrutinized immediately to spot and remove any unexpected friction before scaling spend.",
      founderReflection: "A disciplined launch establishes the baseline truth. It separates real market demand from internal assumptions and ensures every early dollar is tracked.",
      deliverables: [
        { title: 'Synchronized Campaign Ignition', desc: 'Staged activation across priority ad channels with controlled budget ramp-up to ensure algorithmic learning.' },
        { title: 'End-to-End Tracking Telemetry Audit', desc: 'Live purchase/lead event verification across Meta CAPI, Google Ads, TikTok Pixel, and Google Analytics 4.' },
        { title: 'Real-Time CRM & Lead Notification Test', desc: 'Confirming instant notifications to sales leadership via email, SMS, and WhatsApp within seconds of lead entry.' },
        { title: 'Live Heatmap & Drop-Off Monitoring', desc: 'Recording user session recordings to spot visual bottlenecks or UX friction points during initial traffic waves.' }
      ],
      targetOutcome: 'A clean, zero-error production deployment that instantly captures incoming audience signals and routes qualified leads.',
      timeline: 'Week 4 — System Verification & Staged Live Ignition'
    },
    {
      number: '05',
      title: 'Optimize',
      icon: LineChart,
      tagline: 'Algorithmic Refinement & Efficiency Scaling',
      desc: 'Through rapid A/B testing, cost-per-acquisition analysis, and user behavior heatmaps, we continuously trim waste and double down on winning funnels.',
      realityCheck: "The first version of a campaign is never the most profitable one. Exceptional growth isn't achieved through luck; it is won through disciplined, weekly scientific iterations that systematically prune underperforming creative and scale winning funnels.",
      deepDiveNarrative: "This is where good companies break away from the competition. Our performance strategists dissect data daily: analyzing cost-per-click, thumb-stop rates, video hold rates, and lead-to-opportunity conversions. We run disciplined A/B split tests on headlines, offer hooks, landing page layouts, and pricing tiers. By feeding winning conversion data back into ad platform algorithms, we continuously lower your customer acquisition cost.",
      founderReflection: "We treat marketing budgets like investment portfolios: cutting losses quickly on low-performing assets and compounding capital into the highest-yield channels.",
      deliverables: [
        { title: 'Creative & Copy Iteration Engine', desc: 'Weekly creative fatigue replacement with freshly generated AI variants based on proven winning angles.' },
        { title: 'Conversion Rate Optimization (CRO)', desc: 'Split-testing landing page headlines, CTAs, social proof elements, and form lengths to lift conversion percentages.' },
        { title: 'Algorithmic Bid & Audience Refinement', desc: 'Transitioning from broad audience exploration to high-intent Lookalike and retargeting segments.' },
        { title: 'Sales Funnel Velocity Analysis', desc: 'Collaborating with your sales team to improve lead response times and lead-to-closed-deal conversion ratios.' }
      ],
      targetOutcome: 'Steadily declining Customer Acquisition Costs (CAC) paired with rising Return on Ad Spend (ROAS) and higher lead qualification.',
      timeline: 'Ongoing (Weekly Iteration Sprints)'
    },
    {
      number: '06',
      title: 'Grow',
      icon: Award,
      tagline: 'Compound Expansion & Cross-Border Alliances',
      desc: 'Sustainable market leadership through automated acquisition pipelines, maximized margins, and continuous technological modernization.',
      realityCheck: "Once your acquisition engine is predictable and profitable, the challenge shifts from lead generation to operational scale. Scaling without breaking operations requires automation infrastructure and strategic institutional relationships.",
      deepDiveNarrative: "In Phase 6, we unlock the full vision of Nexus Bridge Alliance: connecting ambitious businesses to cross-border opportunities across Dubai, Africa, and global commercial hubs. We deploy advanced AI operational workflows to handle growing customer inquiries, introduce high-trust strategic partners, and unlock new distribution channels, turning initial marketing momentum into a resilient, defensible enterprise.",
      founderReflection: "Sustainable growth isn't just about higher revenue; it's about building institutional trust, compounding enterprise value, and securing permanent market advantage.",
      deliverables: [
        { title: 'Cross-Border Market Penetration', desc: 'Localizing ad funnels and commercial structures for expansion into Dubai, West Africa, and international markets.' },
        { title: 'Enterprise AI Workflow Integration', desc: 'Automating internal repetitive operations, customer support, and onboarding to sustain 5x to 10x customer volume.' },
        { title: 'Strategic Institutional Alliances', desc: 'Facilitating strategic introductions to investors, corporate partners, and key distribution ecosystems.' },
        { title: 'Category Leadership Positioning', desc: 'Amplifying founder thought leadership, executive branding, and media presence to cement industry authority.' }
      ],
      targetOutcome: 'An autonomous, scalable digital growth engine backed by strategic global alliances that compounds month over month.',
      timeline: 'Quarterly Strategic Growth Retainers'
    }
  ];

  const handleCardClick = (index) => {
    setSelectedPhase(index);
    setIsExpanded(true);
    // Smooth scroll down to the detail expansion component
    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 50);
  };

  const handleNextPhase = () => {
    setSelectedPhase((prev) => (prev + 1) % steps.length);
  };

  const handlePrevPhase = () => {
    setSelectedPhase((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const currentStep = steps[selectedPhase];
  const CurrentIcon = currentStep.icon;

  return (
    <section id="approach" className="py-24 bg-white relative overflow-hidden mx-2 sm:mx-4 lg:mx-6 my-4 sm:my-6 rounded-3xl sm:rounded-[2.5rem] lg:rounded-[3rem] border border-gray-200/70 shadow-lg select-none">
      {/* 3D Background Image with Mature Fade */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img 
          src="/assets/focus_bg_3d.jpg" 
          alt="" 
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="red-dash" />
              <span className="text-xs font-bold tracking-[0.25em] text-gray-500 uppercase">
                Our Methodology
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111315] tracking-tight leading-tight">
              The 6-Phase Engine:<br />Strategy. Technology. Growth.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 font-normal">
              We deploy an iterative, measurable growth framework engineered to reliably take businesses from initial discovery to compounding scale.
            </p>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C4121A]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Click any phase below to reveal full strategic breakdown</span>
            </span>
          </div>
        </div>

        {/* 6 Steps Grid with Interactive Hover & Click Ability */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isCurrent = isExpanded && selectedPhase === idx;

            return (
              <div 
                key={step.number}
                onClick={() => handleCardClick(idx)}
                className={`relative p-7 rounded-2xl cursor-pointer transition-all duration-300 group flex flex-col justify-between ${
                  isCurrent 
                    ? 'bg-white border-2 border-[#C4121A] shadow-xl ring-4 ring-[#C4121A]/10 scale-[1.02]' 
                    : 'bg-[#FBFBFB] border border-gray-200/80 hover:border-[#C4121A]/40 hover:bg-white hover:shadow-lg'
                }`}
              >
                {/* Top Row: Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-3xl font-extrabold font-mono transition-colors ${
                      isCurrent ? 'text-[#C4121A]' : 'text-gray-300 group-hover:text-[#C4121A]'
                    }`}>
                      {step.number}
                    </span>
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors shadow-sm ${
                      isCurrent 
                        ? 'bg-[#C4121A] text-white border border-[#C4121A]' 
                        : 'bg-white border border-gray-200/80 text-gray-700 group-hover:text-[#C4121A] group-hover:border-[#C4121A]/40'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#111315] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#C4121A] mb-3">
                    {step.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                {/* Card Bottom: Interactive Cue */}
                <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center justify-between text-xs">
                  <span className={`font-semibold transition-colors flex items-center gap-1 ${
                    isCurrent ? 'text-[#C4121A]' : 'text-gray-400 group-hover:text-black'
                  }`}>
                    {isCurrent ? 'Viewing Deep-Dive ▾' : 'Explore Deep-Dive'}
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isCurrent ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                  </span>

                  <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider">
                    Phase {step.number}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE 6-PHASE DEEP-DIVE EXPANSION COMPONENT                         */}
        {/* With shadow, rich background, coherent, relatable, and insightful thoughts */}
        {/* ========================================================================= */}
        {isExpanded && (
          <div 
            ref={detailRef}
            className="mt-12 rounded-3xl bg-white border border-gray-200 shadow-2xl p-6 sm:p-10 lg:p-12 relative overflow-hidden transition-all duration-500 animate-fadeIn"
          >
            {/* Top Atmospheric Ambient Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C4121A]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-900/5 rounded-full blur-2xl pointer-events-none" />

            {/* Top Header: Phase Navigation Bar & Close Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200/80 mb-8">
              
              {/* Quick Phase Tabs */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {steps.map((st, i) => (
                  <button
                    key={st.number}
                    onClick={() => setSelectedPhase(i)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all ${
                      selectedPhase === i
                        ? 'bg-[#111315] text-white shadow-sm'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black'
                    }`}
                  >
                    <span>{st.number} {st.title}</span>
                  </button>
                ))}
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsExpanded(false)}
                className="self-end sm:self-center p-2 rounded-xl text-gray-400 hover:text-black hover:bg-gray-100 transition-colors flex items-center gap-1.5 text-xs font-semibold"
                title="Collapse Deep-Dive"
              >
                <span>Close</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Main Phase Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Insightful Narrative & Relatable Reality (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Phase Number & Title Header */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-[2px] bg-[#C4121A] rounded-full" />
                    <span className="text-xs font-bold tracking-[0.2em] text-[#C4121A] uppercase font-mono">
                      Phase {currentStep.number} of 06 • Strategic Execution
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111315] tracking-tight">
                    {currentStep.title}: {currentStep.tagline}
                  </h3>
                </div>

                {/* Relatable Reality Box (The Unfiltered Truth) */}
                <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/70 border border-amber-200/60 text-amber-950 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900">
                    <Sparkles className="w-4 h-4 text-[#C4121A]" />
                    <span>The Unfiltered Truth Most Agencies Ignore</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-gray-800">
                    {currentStep.realityCheck}
                  </p>
                </div>

                {/* Deep-Dive Narrative */}
                <div className="space-y-4 text-sm text-gray-700 leading-relaxed font-normal">
                  <h4 className="text-base font-bold text-[#111315]">
                    How Nexus Bridge Alliance Executes This Phase:
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {currentStep.deepDiveNarrative}
                  </p>
                </div>

                {/* Founder Thought / Reflection Card */}
                <div className="p-5 rounded-2xl bg-[#0B0C0E] text-white border border-gray-800 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#C4121A]/10 rounded-full blur-2xl pointer-events-none" />
                  <span className="text-[10px] uppercase tracking-widest text-[#C4121A] font-bold block mb-2">
                    Executive Perspective
                  </span>
                  <p className="text-xs sm:text-sm italic text-gray-300 leading-relaxed font-light">
                    "{currentStep.founderReflection}"
                  </p>
                  <p className="text-[11px] text-gray-400 mt-3 font-mono font-medium">
                    — Abraham Munie Abdullahi, Founder & Managing Director
                  </p>
                </div>

              </div>

              {/* Right Column: Milestones, Deliverables & Call to Action (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Deliverables Card */}
                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 flex items-center gap-2">
                      <Target className="w-4 h-4 text-[#C4121A]" />
                      <span>Phase Deliverables</span>
                    </h4>
                    <span className="text-[11px] font-mono text-gray-500 font-semibold">
                      4 Core Milestones
                    </span>
                  </div>

                  <div className="space-y-3.5">
                    {currentStep.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-red-100/80 text-[#C4121A] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <h5 className="text-xs font-bold text-gray-900 leading-snug">
                            {item.title}
                          </h5>
                          <p className="text-[11px] text-gray-600 leading-relaxed mt-0.5 font-normal">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Target Outcome & Timeline Box */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-green-50/70 border border-green-200/60">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-green-800 mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                      <span>Key Outcome</span>
                    </div>
                    <p className="text-xs text-green-950 font-medium leading-snug">
                      {currentStep.targetOutcome}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/60">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-800 mb-1">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      <span>Typical Cadence</span>
                    </div>
                    <p className="text-xs text-blue-950 font-medium leading-snug">
                      {currentStep.timeline}
                    </p>
                  </div>
                </div>

                {/* Navigation and Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch gap-3">
                  <div className="flex items-center gap-2 flex-1">
                    <button
                      onClick={handlePrevPhase}
                      className="flex-1 py-3 px-3 rounded-xl border border-gray-300 hover:bg-gray-100 text-gray-800 text-xs font-semibold transition-all flex items-center justify-center gap-1.5 shadow-sm"
                      title="Previous Phase"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Prev</span>
                    </button>
                    <button
                      onClick={handleNextPhase}
                      className="flex-1 py-3 px-3 rounded-xl border border-gray-300 hover:bg-gray-100 text-gray-800 text-xs font-semibold transition-all flex items-center justify-center gap-1.5 shadow-sm"
                      title="Next Phase"
                    >
                      <span>Next</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => onOpenContact && onOpenContact(`Phase: ${currentStep.title}`)}
                    className="btn-primary-red py-3 px-5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>Discuss {currentStep.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
