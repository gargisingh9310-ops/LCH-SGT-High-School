import React from 'react';
import { 
  Building2, 
  HeartHandshake, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  Heart, 
  Cpu, 
  Smile,
  FileCheck,
  TrendingUp,
  Layers
} from 'lucide-react';
import CSRPartnershipForm from '../components/forms/CSRPartnershipForm';
import { csrOpportunities, csrProcessSteps, schoolInfo } from '../data/schoolData';
import { GoldPillBadge, VerificationBadge } from '../components/common/Badge';
import VerificationNotice from '../components/common/VerificationNotice';

export default function CSRSupport() {
  const scrollToForm = () => {
    const el = document.getElementById('csr-enquiry-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FAF8F0] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#064E3B] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="/assets/csr-boardroom.jpg"
            alt="Corporate Social Responsibility Meeting"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#073D32] via-[#064E3B]/95 to-[#073D32]/85 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <GoldPillBadge>
                Corporate CSR & Foundation Gateway
              </GoldPillBadge>
              <VerificationBadge verified={true} label="Charitable Education" />
            </div>

            <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4 sm:mb-6">
              Invest in Education. <br />
              <span className="text-gold-gradient italic font-normal">
                Help Build a Brighter Future.
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-neutral-200 leading-relaxed font-light mb-6 sm:mb-8 max-w-2xl">
              Partner with LCH SGT High School to explore meaningful opportunities that support children's education, wellbeing, and holistic development in Hyderabad.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={scrollToForm}
                className="btn-gold w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-semibold shadow-xl text-center"
              >
                <HeartHandshake className="w-5 h-5 text-[#073D32]" />
                <span>Start a Partnership Conversation</span>
              </button>
              <a
                href={`tel:${schoolInfo.phones[0].raw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium border border-white/25 backdrop-blur-sm transition-all text-center"
              >
                <span>Call CSR Liaison: {schoolInfo.phones[0].display}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE OPPORTUNITY / CORE CSR PILLARS */}
      <section className="py-16 sm:py-20 lg:py-24 border-b border-[#CDDCD2]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#064E3B] bg-[#E6EFE8] px-3.5 py-1.5 rounded-full inline-block mb-3">
              Impact Opportunities
            </span>
            <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl font-bold text-[#073D32]">
              Meaningful Avenues for Corporate Sponsorship
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Every partnership is structured around tangible, verified school needs that make an immediate difference in students’ daily educational lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {csrOpportunities.map((opp) => (
              <div
                key={opp.id}
                className="bg-white rounded-2xl p-5 sm:p-7 border border-[#CDDCD2] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#064E3B] text-[#D4AF37] flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-105 transition-transform shadow-md">
                    {opp.icon === 'BookOpen' && <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />}
                    {opp.icon === 'HeartHandshake' && <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6" />}
                    {opp.icon === 'Building' && <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />}
                    {opp.icon === 'Cpu' && <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />}
                  </div>

                  <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#064E3B] block mb-1">
                    {opp.impactArea}
                  </span>

                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#073D32] mb-2 sm:mb-3">
                    {opp.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {opp.description}
                  </p>
                </div>

                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-neutral-100">
                  <button
                    onClick={scrollToForm}
                    className="text-xs font-bold text-[#064E3B] hover:text-[#D4AF37] inline-flex items-center gap-1 group-hover:underline"
                  >
                    <span>Express interest in this area &rarr;</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <VerificationNotice
              title="Statutory & Scope Confirmation"
              message="Specific CSR project milestones, documentation formats, and budget allocations are mutually confirmed during formal dialogue with the school trust. Projects are designed in alignment with Schedule VII education mandates."
            />
          </div>
        </div>
      </section>

      {/* 3. CORPORATE PARTNERSHIP PROCESS (4-Step Visual Sequence) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#CDDCD2]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#064E3B] bg-[#E6EFE8] px-3.5 py-1.5 rounded-full inline-block mb-3">
              Collaboration Framework
            </span>
            <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl font-bold text-[#073D32]">
              Our Four-Step Partnership Process
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              A transparent, streamlined journey from initial exploration to measurable educational impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 relative">
            {csrProcessSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-[#FAF8F0] border border-[#CDDCD2] relative flex flex-col justify-between"
              >
                <div>
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-[#D4AF37] mb-2 sm:mb-3">
                    {step.step}
                  </div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#073D32] mb-1.5 sm:mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="mt-4 sm:mt-6 pt-3 border-t border-neutral-200/60 text-xs font-semibold text-[#064E3B]">
                  Estimated: {step.timeframe}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY PARTNER WITH US */}
      <section className="py-16 sm:py-20 bg-[#073D32] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] bg-white/10 px-3.5 py-1.5 rounded-full inline-block">
                Institutional Credibility
              </span>

              <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl font-bold text-white leading-tight">
                Why Corporate Partners Trust LCH SGT High School
              </h2>

              <p className="text-sm sm:text-base text-neutral-200 leading-relaxed">
                Corporates and philanthropic funds seek institutional integrity, direct child welfare without bureaucratic waste, and lasting community dividends. Here is why partnering with us creates enduring value:
              </p>

              <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
                {[
                  {
                    title: "40 Years of Educational Integrity",
                    desc: "An established institution in Hyderabad with multi-decade roots and zero commercialized motives."
                  },
                  {
                    title: "Lions Club Governance & Audit",
                    desc: "Oversight by reputable civic trustees of Lions Club of Hyderabad ensuring full accountability."
                  },
                  {
                    title: "Holistic, Visible Child Transformation",
                    desc: "Watch your support directly fund child nutrition, laboratory kits, sports equipment, and classroom benches."
                  },
                  {
                    title: "Formal Project Documentation & Site Visits",
                    desc: "Periodic photographic milestone reports and welcome invitations for corporate team volunteering."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif font-semibold text-white text-sm sm:text-base">
                        {item.title}
                      </h4>
                      <p className="text-xs text-neutral-300 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 mt-4 lg:mt-0">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#D4AF37]/40 relative bg-white">
                <img
                  src="/assets/classroom-interactive.jpg"
                  alt="Students engaged in science learning"
                  className="w-full h-60 xs:h-72 sm:h-96 object-cover"
                />
                <div className="p-4 sm:p-6 bg-[#064E3B] text-white">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-xs text-[#D4AF37] font-semibold uppercase tracking-wider block">
                        Verified Impact
                      </span>
                      <h4 className="font-serif font-bold text-base sm:text-lg mt-0.5">
                        Real Classroom Transformation
                      </h4>
                    </div>
                    <VerificationBadge verified={true} label="Transparent Stewardship" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ENQUIRY FORM SECTION */}
      <section id="csr-enquiry-form" className="py-20 lg:py-28 bg-[#FAF8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CSRPartnershipForm />
        </div>
      </section>
    </div>
  );
}
