import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  HeartHandshake, 
  GraduationCap, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Calendar,
  Compass,
  Smile,
  BookOpen,
  Award
} from 'lucide-react';
import { schoolInfo, csrOpportunities } from '../data/schoolData';
import { GoldPillBadge, VerificationBadge } from '../components/common/Badge';

const ThreeParticles = React.lazy(() => import('../components/effects/ThreeParticles'));

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const missionRef = useRef(null);
  const activitiesRef = useRef(null);
  const csrRef = useRef(null);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Hero entrance animations
      gsap.from('.hero-reveal', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      });

      // Mission section scroll trigger
      gsap.from(missionRef.current, {
        scrollTrigger: {
          trigger: missionRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
      });

      // Activities section entrance
      gsap.from(activitiesRef.current, {
        scrollTrigger: {
          trigger: activitiesRef.current,
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      });

      // CSR section entrance
      gsap.from(csrRef.current, {
        scrollTrigger: {
          trigger: csrRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power2.out'
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* SECTION 1: CINEMATIC HERO */}
      <section 
        ref={heroRef}
        className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center bg-[#073D32] text-white pt-24 pb-20 overflow-hidden"
      >
        {/* Full-width School Campus Background with Dark-Green Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/hero-campus-panoramic.jpg"
            alt="LCH SGT High School campus and students"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Multi-layered cinematic gradient overlays for high readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#073D32]/95 via-[#064E3B]/85 to-[#073D32]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#073D32] via-transparent to-[#073D32]/50" />
        </div>

        {/* Lightweight Three.js Golden Ambient Motes */}
        <React.Suspense fallback={null}>
          <ThreeParticles count={85} />
        </React.Suspense>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col justify-center py-12">
          <div className="max-w-3xl">
            {/* School Logo & Credibility Badge */}
            <div className="hero-reveal flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 mb-6">
              <div className="p-1.5 bg-white rounded-xl shadow-lg border border-[#D4AF37]/50 inline-flex items-center gap-2 sm:gap-3">
                <img
                  src="/assets/logo-school-hd.jpg"
                  alt="LCH SGT High School Official Logo"
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
                <img
                  src="/assets/logo-lions-hd.jpg"
                  alt="Lions Club of Hyderabad Logo"
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </div>
              <GoldPillBadge>
                40 Years of Excellence in Education
              </GoldPillBadge>
            </div>

            {/* Main Headline */}
            <h1 
              ref={headlineRef}
              className="hero-reveal font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.12] sm:leading-[1.1] mb-6"
            >
              Where Learning <br className="hidden sm:inline" />
              <span className="text-gold-gradient italic font-normal">Goes Beyond</span> <br className="hidden sm:inline" />
              the Classroom
            </h1>

            {/* Supporting Copy */}
            <p className="hero-reveal text-sm sm:text-lg md:text-xl text-neutral-200/95 leading-relaxed font-normal mb-8 max-w-2xl">
              At LCH SGT High School, education goes beyond textbooks. We nurture confident, disciplined, healthy, and compassionate learners through meaningful educational experiences.
            </p>

            {/* Dual Calls to Action */}
            <div className="hero-reveal flex flex-col sm:flex-row items-stretch sm:items-center justify-center sm:justify-start gap-3 sm:gap-4">
              <Link
                to="/csr-support"
                className="btn-gold w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-semibold shadow-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              >
                <HeartHandshake className="w-5 h-5 text-[#073D32]" />
                <span>Partner With Us</span>
              </Link>
              <Link
                to="/admissions"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm sm:text-base border border-white/25 backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-white"
              >
                <GraduationCap className="w-5 h-5 text-[#D4AF37]" />
                <span>Admissions Open</span>
              </Link>
            </div>

            {/* Credibility Line & Slogan Strip */}
            <div className="hero-reveal mt-12 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center sm:justify-start gap-6 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Patronage: Lions Club of Hyderabad</span>
              </div>
              <span className="hidden sm:inline text-white/30">•</span>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#D4AF37]" />
                <span>Four Decades of Educational Impact</span>
              </div>
              <span className="hidden sm:inline text-white/30">•</span>
              <span className="italic text-[#D4AF37]">
                "Hope • Faith • Charity"
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: EDUCATIONAL MISSION (Editorial Split) */}
      <section 
        ref={missionRef}
        className="py-20 lg:py-28 bg-[#FAF8F0] border-b border-[#CDDCD2]/60 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Split Left: Photographic composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/assets/classroom-interactive.jpg"
                  alt="Students engaged in interactive classroom learning at LCH SGT High School"
                  className="w-full h-[260px] xs:h-[340px] sm:h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                    Experiential Learning
                  </span>
                  <p className="text-sm font-medium mt-1">
                    Hands-on curiosity and dedicated faculty guidance
                  </p>
                </div>
              </div>

              {/* Inset Authenticated Photo Card */}
              <div className="hidden sm:block absolute -bottom-8 -right-8 w-56 rounded-xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <img
                  src="/assets/photo-kids-running-hd.jpg"
                  alt="Students walking on school grounds"
                  className="w-full h-36 object-cover"
                />
                <div className="p-3 bg-[#064E3B] text-white">
                  <p className="text-[11px] font-serif font-bold text-[#F4E8C1]">
                    Every Child. Every Talent.
                  </p>
                  <p className="text-[10px] text-white/80">
                    Nurturing wholesome futures
                  </p>
                </div>
              </div>
            </div>

            {/* Split Right: Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#064E3B] bg-[#E6EFE8] px-3.5 py-1.5 rounded-full inline-block">
                Our Educational Mission
              </span>

              <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#073D32] leading-tight">
                Every Child Deserves the Opportunity to Learn and Grow
              </h2>

              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
                At LCH SGT High School, education is a transformative journey of character building. Founded on the bedrock principle that quality learning must be accessible, we weave academic fundamentals with physical fitness, mindfulness, and collaborative values.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Academic rigor balanced with daily mindfulness & yoga drills",
                  "Values of mutual respect, peer cooperation, and communal empathy",
                  "Practical demonstrations that transform abstract ideas into lived understanding",
                  "Dedicated mentorship backed by Lions Club of Hyderabad’s service legacy"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#064E3B] shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="btn-emerald w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold shadow-md"
                >
                  <span>Discover Our Story</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: IMPACT AND LEGACY (Verified 40-Year Numbers) */}
      <section className="py-16 bg-[#073D32] text-[#FAF8F0] border-y border-[#D4AF37]/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-2 block">
              Four Decades of Excellence
            </span>
            <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl font-bold text-white">
              A Legacy of Community-Rooted Education
            </h2>
            <p className="text-sm text-neutral-300 mt-2">
              Anchored in service, committed to holistic childhood development, and supported by compassionate corporate and social partners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {schoolInfo.stats.map((stat, idx) => (
              <div 
                key={idx}
                className="p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/40 transition-all text-center group hover:bg-white/10"
              >
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-gradient mb-1.5 sm:mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-neutral-200">
                  {stat.label}
                </div>
                <div className="mt-3">
                  <VerificationBadge verified={stat.verified} label="Institutional Fact" className="text-[10px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: LEARNING BEYOND THE CLASSROOM */}
      <section 
        ref={activitiesRef}
        className="py-16 sm:py-20 lg:py-24 bg-[#FAF8F0] border-b border-[#CDDCD2]/60"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Narrative, and Holistic Activity Highlights (7 cols) */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#064E3B] bg-[#E6EFE8] px-3.5 py-1.5 rounded-full inline-block mb-3">
                  Real School Experiences
                </span>
                <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#073D32] leading-tight">
                  Learning Beyond the Classroom
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-neutral-600 mt-3 sm:mt-4 leading-relaxed">
                  Authentic glimpses of our students practicing mindfulness, physical athletics, collaborative assemblies, and experiential projects.
                </p>
              </div>

              {/* 4 Feature Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div className="flex items-center gap-2.5 text-sm font-medium text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0" />
                  <span>Daily Yoga & Mindfulness</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-medium text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0" />
                  <span>Outdoor Sports & Athletics</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-medium text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0" />
                  <span>Assemblies & Teamwork</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-medium text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0" />
                  <span>Hands-on Experiential Discovery</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Link
                  to="/activities"
                  className="btn-emerald inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold shadow-md w-full sm:w-auto justify-center"
                >
                  <span>Explore All School Activities</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </Link>
              </div>
            </div>

            {/* Right Column: Institutional Slogan Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#064E3B] to-[#073D32] text-white p-6 sm:p-8 lg:p-10 shadow-xl border border-[#D4AF37]/30 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block mb-2">
                    Institutional Slogan
                  </span>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-white leading-snug">
                    "Every Child. Every Talent. Every Step Towards a Brighter Future."
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-200 mt-3 sm:mt-4 leading-relaxed">
                    Every activity at our school is intentional—designed to foster self-reliance, physical vitality, concentration, and good citizenship.
                  </p>
                </div>

                <div className="pt-6 sm:pt-8 mt-4 border-t border-white/10">
                  <Link
                    to="/activities"
                    className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold w-full justify-center shadow-lg"
                  >
                    <span>View Photo Gallery</span>
                    <ArrowRight className="w-4 h-4 text-[#073D32]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CSR PARTNERSHIP FEATURE (Dedicated Deep-Green Corporate Gateway) */}
      <section 
        ref={csrRef}
        className="py-16 sm:py-20 lg:py-28 bg-[#064E3B] text-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#073D32] rounded-full blur-3xl pointer-events-none opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] bg-white/10 px-3.5 py-1.5 rounded-full inline-block">
                Corporate Social Responsibility
              </span>

              <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Your Partnership Can Help Shape a Brighter Future
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-neutral-200 leading-relaxed">
                Organizations, industrial leaders, and charitable foundations are invited to explore supporting education and student welfare through focused CSR initiatives and impactful charitable contributions.
              </p>

              {/* 3 Core CSR Themes */}
              <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
                <div className="p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif font-semibold text-sm sm:text-base text-white">
                      Educational Opportunities
                    </h4>
                    <p className="text-xs text-neutral-300 mt-0.5">
                      Sponsor learning kits, notebooks, science equipment, and reading libraries for deserving students.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <Smile className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif font-semibold text-sm sm:text-base text-white">
                      Student Wellbeing & Development
                    </h4>
                    <p className="text-xs text-neutral-300 mt-0.5">
                      Support nutrition initiatives, sports equipment, clean water infrastructure, and pediatric health checks.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif font-semibold text-sm sm:text-base text-white">
                      Community & Infrastructure Impact
                    </h4>
                    <p className="text-xs text-neutral-300 mt-0.5">
                      Enhance classroom seating, sanitation, and safety to build a proud, secure learning ecosystem.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/csr-support"
                  className="btn-gold w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl text-sm font-semibold shadow-lg text-center"
                >
                  <HeartHandshake className="w-4 h-4 text-[#073D32]" />
                  <span>Explore CSR Partnerships</span>
                </Link>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium border border-white/20 transition-all text-center"
                >
                  <span>Speak With School Trustees</span>
                </Link>
              </div>
            </div>

            {/* Right: Boardroom collaboration photograph */}
            <div className="lg:col-span-6 relative mt-4 lg:mt-0">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img
                  src="/assets/csr-boardroom.jpg"
                  alt="Corporate and school leaders discussing CSR partnership"
                  className="w-full h-[260px] xs:h-[340px] sm:h-[460px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#073D32] p-5 rounded-xl border border-[#D4AF37]/40 shadow-xl max-w-xs hidden sm:block">
                <p className="text-xs font-serif font-bold text-[#D4AF37]">
                  Transparent Collaborative Oversight
                </p>
                <p className="text-[11px] text-neutral-300 mt-1">
                  Coordinated under Lions Club of Hyderabad guidelines with photographic milestone documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: ADMISSIONS FEATURE (Family & Parent Warmth) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF8F0] border-b border-[#CDDCD2]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-[#CDDCD2] p-5 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
              <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#064E3B] bg-[#E6EFE8] px-3.5 py-1.5 rounded-full inline-block">
                  Admissions Open
                </span>
                <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#073D32]">
                  A Place to Learn, Grow, and Belong
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  We welcome families seeking a disciplined, caring, and stimulating educational environment for their children. Connect with our admission counselors to understand our curriculum, values, and enrollment criteria.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1 sm:pt-2">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-800">
                    <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0" />
                    <span>Values-first holistic curriculum</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-800">
                    <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0" />
                    <span>Active sports & yoga routines</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-800">
                    <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0" />
                    <span>Attentive classroom sizes</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-800">
                    <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0" />
                    <span>Supportive community culture</span>
                  </div>
                </div>

                <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link
                    to="/admissions"
                    className="btn-emerald w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl text-sm font-semibold shadow-md text-center"
                  >
                    <GraduationCap className="w-4 h-4 text-[#D4AF37]" />
                    <span>Enquire About Admissions</span>
                  </Link>
                  <a
                    href={`tel:${schoolInfo.phones[0].raw}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-[#073D32] text-sm font-semibold transition-colors text-center"
                  >
                    <span>Helpline: {schoolInfo.phones[0].display}</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 relative mt-4 lg:mt-0">
                <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-neutral-100">
                  <img
                    src="/assets/photo-kids-running-hd.jpg"
                    alt="Children joyfully walking towards LCH SGT High School campus"
                    className="w-full h-56 xs:h-64 sm:h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CALL TO ACTION (Full-bleed Campus Overlay) */}
      <section className="relative py-24 bg-[#073D32] text-white text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="/assets/hero-campus-panoramic.jpg"
            alt="School Campus"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#064E3B]/90 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block p-1.5 bg-white rounded-xl mb-6 shadow-md">
            <img
              src="/assets/logo-school-hd.jpg"
              alt="LCH SGT High School"
              className="w-14 h-14 object-contain"
            />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Every Child. Every Talent. <br />
            <span className="text-gold-gradient italic font-normal">
              Every Step Towards a Brighter Future.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-200 max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether you are a corporate partner planning your annual CSR allocation or a parent seeking an inspiring school for your child, we invite you to connect with us.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/csr-support"
              className="btn-gold w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold shadow-xl"
            >
              <HeartHandshake className="w-5 h-5 text-[#073D32]" />
              <span>Partner With Us</span>
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium border border-white/25 backdrop-blur-sm transition-all"
            >
              <span>Contact the School</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
