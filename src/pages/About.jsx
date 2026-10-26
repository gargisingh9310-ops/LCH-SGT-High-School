import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  HeartHandshake, 
  GraduationCap, 
  Sparkles,
  BookOpen,
  Users,
  Compass,
  ArrowRight
} from 'lucide-react';
import { schoolInfo, legacyMilestones } from '../data/schoolData';
import { VerificationBadge, GoldPillBadge } from '../components/common/Badge';
import VerificationNotice from '../components/common/VerificationNotice';

export default function About() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.from('.about-reveal', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out'
    });
  }, []);

  return (
    <div className="bg-[#FAF8F0] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#064E3B] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/assets/hero-campus-panoramic.jpg"
            alt="LCH SGT High School Campus"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#073D32] via-[#064E3B]/90 to-[#073D32]/80 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="about-reveal flex items-center gap-3 mb-4">
              <GoldPillBadge>
                40-Year Educational Legacy
              </GoldPillBadge>
              <VerificationBadge verified={true} label="Verified Institution" />
            </div>

            <h1 className="about-reveal font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              Rooted in Education. <br />
              <span className="text-gold-gradient italic font-normal">
                Driven by Opportunity.
              </span>
            </h1>

            <p className="about-reveal text-lg sm:text-xl text-neutral-200 leading-relaxed font-light">
              For four decades, LCH SGT High School has provided affordable, holistic education in Hyderabad, fostering academic strength, physical vitality, self-discipline, and compassion.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SCHOOL STORY & PHILOSOPHY (Split Layout) */}
      <section className="py-20 lg:py-24 border-b border-[#CDDCD2]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#064E3B] bg-[#E6EFE8] px-3.5 py-1.5 rounded-full inline-block">
                Our Institutional Story
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#073D32] leading-tight">
                Where Character Precedes Knowledge and Knowledge Inspires Service
              </h2>

              <p className="text-base text-neutral-700 leading-relaxed">
                Founded as a charitable educational institution, LCH SGT High School operates with a clear mandate: to guarantee that financial circumstances never determine the boundaries of a child’s potential. We believe true education transcends examinations—it is cultivated when mind, body, and spirit develop in concert.
              </p>

              <p className="text-base text-neutral-700 leading-relaxed">
                Our educational approach places discipline, daily mindfulness, teamwork, and experiential discovery at the center of the learning curriculum. By fostering an atmosphere of mutual respect and high moral conduct, we guide our young students to become thoughtful, productive contributors to Indian society.
              </p>

              <div className="p-5 rounded-2xl bg-white border border-[#CDDCD2] shadow-sm">
                <h4 className="font-serif font-bold text-[#064E3B] text-base mb-2">
                  Our Educational Creed:
                </h4>
                <blockquote className="text-sm italic text-neutral-600 border-l-2 border-[#D4AF37] pl-4">
                  "Every child possesses a distinct talent waiting to be recognized and fostered through patience, discipline, and compassionate instruction."
                </blockquote>
              </div>
            </div>

            {/* Photographic Mosaic from authentic crops */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                <img
                  src="/assets/photo-classroom-hd.jpg"
                  alt="Classroom desks and blackboard at LCH SGT High School"
                  className="w-full h-48 object-cover"
                />
                <div className="p-2.5 bg-white text-center text-xs font-semibold text-[#073D32]">
                  Focused Classroom Setting
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                <img
                  src="/assets/photo-yoga-sukhasana-hd.jpg"
                  alt="Students practicing yoga Sukhasana"
                  className="w-full h-48 object-cover"
                />
                <div className="p-2.5 bg-white text-center text-xs font-semibold text-[#073D32]">
                  Mindfulness & Calm
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                <img
                  src="/assets/photo-sports-ground-hd.jpg"
                  alt="Open outdoor volleyball court"
                  className="w-full h-48 object-cover"
                />
                <div className="p-2.5 bg-white text-center text-xs font-semibold text-[#073D32]">
                  Physical Stamina & Play
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                <img
                  src="/assets/photo-stage-speech-hd.jpg"
                  alt="Student presentations and mentoring sessions"
                  className="w-full h-48 object-cover"
                />
                <div className="p-2.5 bg-white text-center text-xs font-semibold text-[#073D32]">
                  Confidence on Stage
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LIONS CLUB OF HYDERABAD PARTNERSHIP */}
      <section className="py-20 bg-[#073D32] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Lions Club Badge & Official Emblem */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-3xl bg-[#064E3B] border-2 border-[#D4AF37]/40 shadow-2xl text-center">
              <div className="relative mb-6">
                <img
                  src="/assets/logo-lions-hd.jpg"
                  alt="Lions Club of Hyderabad Official Emblem"
                  className="w-32 h-44 object-contain rounded-xl bg-white p-2 shadow-2xl border-4 border-[#D4AF37]"
                />
              </div>

              <h3 className="font-serif font-bold text-2xl text-white">
                Lions Club of Hyderabad
              </h3>
              <p className="text-xs text-[#D4AF37] font-semibold tracking-widest uppercase mt-1">
                Charter 69 • Hope • Faith • Charity
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 w-full text-xs text-neutral-300">
                A globally recognized philanthropic association dedicated to community service, youth enablement, and humanitarian welfare.
              </div>
            </div>

            {/* Right: Partnership Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] bg-white/10 px-3.5 py-1.5 rounded-full inline-block">
                Stewardship & Governance
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                An Educational Partnership Grounded in Community Service
              </h2>

              <p className="text-base text-neutral-200 leading-relaxed">
                LCH SGT High School is proudly associated with the <strong>Lions Club of Hyderabad</strong>. This enduring relationship anchors the school’s management in transparency, moral ethics, and community-centered philanthropy.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif font-semibold text-white text-base">
                      Ethical & Transparent Governance
                    </h4>
                    <p className="text-xs text-neutral-300 mt-0.5">
                      Ensures that donor funds, CSR allocations, and school resources are prudently managed with accountability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif font-semibold text-white text-base">
                      Mentorship & Humanitarian Values
                    </h4>
                    <p className="text-xs text-neutral-300 mt-0.5">
                      Students are regularly exposed to civic leadership, hygiene drives, blood donation awareness, and community outreach.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif font-semibold text-white text-base">
                      40-Year Continuity
                    </h4>
                    <p className="text-xs text-neutral-300 mt-0.5">
                      A steady institutional beacon that generations of families in the neighborhood have trusted with their children’s future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 40-YEAR LEGACY TIMELINE */}
      <section className="py-20 lg:py-24 border-b border-[#CDDCD2]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#064E3B] bg-[#E6EFE8] px-3.5 py-1.5 rounded-full inline-block mb-3">
              Historical Milestones
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#073D32]">
              Four Decades of Educational Stewardship
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              A journey of persistent commitment to Hyderabad's children, celebrated through 40 verified years of excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {legacyMilestones.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#CDDCD2] shadow-md hover:shadow-lg transition-all duration-300 relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-[#064E3B] uppercase tracking-wider mb-1">
                    {item.era}
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#073D32] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] font-semibold text-[#064E3B]">
                  <span>{item.highlight}</span>
                  <VerificationBadge verified={true} label="Verified" className="text-[9px] py-0 px-1.5" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <VerificationNotice
              title="Historical Documentation Notice"
              message="Historical records and archival photographs are curated under school administration oversight. Specific decade milestones reflect verified educational operations in Hyderabad."
            />
          </div>
        </div>
      </section>

      {/* 5. MISSION & VALUES CONTENT BLOCKS */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#CDDCD2]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#064E3B] bg-[#E6EFE8] px-3.5 py-1.5 rounded-full inline-block mb-3">
              Guiding Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#073D32]">
              Our Core Institutional Values
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Five foundational pillars that guide everyday instruction, student care, and institutional decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Accessible Education",
                icon: BookOpen,
                text: "Quality education must be within reach of every aspiring family, regardless of socioeconomic status."
              },
              {
                title: "Discipline & Responsibility",
                icon: ShieldCheck,
                text: "Cultivating punctuality, moral integrity, self-discipline, and respect for peers and elders."
              },
              {
                title: "Holistic Development",
                icon: Sparkles,
                text: "Balancing intellectual knowledge with physical fitness, yoga, breathwork, and artistic expression."
              },
              {
                title: "Confidence & Communication",
                icon: Compass,
                text: "Equipping children with articulate speaking, stage courage, and clarity of thought."
              },
              {
                title: "Community Partnership",
                icon: HeartHandshake,
                text: "Engaging corporate CSR leaders, alumni, and local citizens to collectively support child welfare."
              },
              {
                title: "Charitable Purpose",
                icon: Award,
                text: "Operating as a mission of service rather than commerce, prioritizing child development over profit."
              }
            ].map((v, i) => {
              const IconComp = v.icon;
              return (
                <div
                  key={i}
                  className="p-8 rounded-2xl bg-[#FAF8F0] border border-[#CDDCD2] hover:border-[#064E3B]/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#064E3B] text-[#D4AF37] flex items-center justify-center mb-5 shadow-md group-hover:scale-105 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-[#073D32] mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {v.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CLOSING CTA */}
      <section className="py-20 bg-[#064E3B] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Be Part of a Meaningful Educational Journey
          </h2>
          <p className="text-base text-neutral-200 max-w-2xl mx-auto mb-8 leading-relaxed">
            Collaborate with us through corporate CSR sponsorship or explore enrollment opportunities for your child.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/csr-support"
              className="btn-gold inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold shadow-lg"
            >
              <HeartHandshake className="w-4 h-4 text-[#073D32]" />
              <span>Support Through CSR</span>
            </Link>
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium border border-white/25 transition-all"
            >
              <GraduationCap className="w-4 h-4 text-[#D4AF37]" />
              <span>Explore Admissions</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
