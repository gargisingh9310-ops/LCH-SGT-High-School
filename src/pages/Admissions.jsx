import React from 'react';
import { 
  GraduationCap, 
  Phone, 
  Calendar, 
  CheckCircle2, 
  BookOpen, 
  ShieldCheck, 
  Sparkles, 
  HeartHandshake, 
  AlertCircle,
  HelpCircle,
  ArrowDown
} from 'lucide-react';
import AdmissionEnquiryForm from '../components/forms/AdmissionEnquiryForm';
import { admissionSteps, schoolInfo } from '../data/schoolData';
import { GoldPillBadge, VerificationBadge } from '../components/common/Badge';
import VerificationNotice from '../components/common/VerificationNotice';

export default function Admissions() {
  const scrollToForm = () => {
    const el = document.getElementById('admission-enquiry-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FAF8F0] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#064E3B] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/assets/hero-campus-panoramic.jpg"
            alt="School Campus"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#073D32] via-[#064E3B]/90 to-[#073D32]/80 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <GoldPillBadge>
                Academic Year Enrolment
              </GoldPillBadge>
              <VerificationBadge verified={true} label="Admissions Open" />
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              Take the Next Step in Your <br />
              <span className="text-gold-gradient italic font-normal">
                Child's Learning Journey
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-neutral-200 leading-relaxed font-light mb-8 max-w-2xl">
              Discover a disciplined, nurturing school culture where moral values, physical wellbeing, and joyful learning prepare children for lifelong success.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={scrollToForm}
                className="btn-gold inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold shadow-xl"
              >
                <GraduationCap className="w-5 h-5 text-[#073D32]" />
                <span>Submit an Admission Enquiry</span>
              </button>
              <a
                href={`tel:${schoolInfo.phones[0].raw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium border border-white/25 backdrop-blur-sm transition-all"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call Admissions: {schoolInfo.phones[0].display}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SCHOOL INTRODUCTION & ETHOS */}
      <section className="py-20 lg:py-24 border-b border-[#CDDCD2]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#064E3B] bg-[#E6EFE8] px-3.5 py-1.5 rounded-full inline-block">
                Educational Philosophy
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#073D32] leading-tight">
                Nurturing Confident, Disciplined & Compassionate Learners
              </h2>

              <p className="text-base text-neutral-700 leading-relaxed">
                At LCH SGT High School, we prioritize the foundational years of a child’s life. Rather than burdening young minds with rote pressure, our teachers cultivate curiosity, self-confidence, and sound moral discernment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-[#CDDCD2] shadow-sm">
                  <h4 className="font-serif font-bold text-[#064E3B] text-base mb-1">
                    Morning Mindfulness
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Yoga postures and pranayama breathing sessions each morning center students for calm concentration throughout the academic day.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#CDDCD2] shadow-sm">
                  <h4 className="font-serif font-bold text-[#064E3B] text-base mb-1">
                    Outdoor Vitality
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Physical fitness exercises and sports games ensure robust health, active teamwork, and motor development.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#CDDCD2] shadow-sm">
                  <h4 className="font-serif font-bold text-[#064E3B] text-base mb-1">
                    Oral Expression
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Regular stage speaking, recitation, and interactive classroom questions help overcome shyness and cultivate articulateness.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#CDDCD2] shadow-sm">
                  <h4 className="font-serif font-bold text-[#064E3B] text-base mb-1">
                    Accessible Affordability
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Maintained under the charitable aegis of Lions Club of Hyderabad to ensure high education standards with reasonable fee frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="/assets/photo-kids-running-hd.jpg"
                  alt="Students on school campus"
                  className="w-full h-80 object-cover"
                />
                <div className="p-4 bg-[#064E3B] text-white">
                  <p className="font-serif font-bold text-base text-[#D4AF37]">
                    A Welcoming Community for Every Child
                  </p>
                  <p className="text-xs text-neutral-300 mt-1">
                    Visit us and experience our positive, grounded campus environment firsthand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CURRICULUM, GRADES & VERIFICATION NOTICE */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#CDDCD2]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#064E3B] bg-[#E6EFE8] px-3.5 py-1.5 rounded-full inline-block mb-3">
              Academic Structure
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#073D32]">
              Classes & Educational Stages
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Our academic stages are tailored to developmental readiness, from early primary socialization to secondary exam mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#FAF8F0] border border-[#CDDCD2] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#064E3B] block mb-2">
                  Stage 01
                </span>
                <h3 className="font-serif font-bold text-2xl text-[#073D32] mb-3">
                  Primary School
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                  Focus on literacy, numeracy, language development, hand-eye coordination, and joyful group activities.
                </p>
                <ul className="space-y-2 text-xs text-neutral-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#064E3B]" />
                    <span>Foundation in reading & mathematics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#064E3B]" />
                    <span>Storytelling & moral education</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#064E3B]" />
                    <span>Basic yoga & motor games</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200/60 flex items-center justify-between text-xs text-[#064E3B] font-semibold">
                <span>Classes 1 to 5</span>
                <VerificationBadge verified={false} label="Age 6+ Entry" className="text-[10px]" />
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF8F0] border border-[#CDDCD2] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#064E3B] block mb-2">
                  Stage 02
                </span>
                <h3 className="font-serif font-bold text-2xl text-[#073D32] mb-3">
                  Upper Primary
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                  Strengthening analytical skills, scientific curiosity, social studies, and structured physical fitness routines.
                </p>
                <ul className="space-y-2 text-xs text-neutral-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#064E3B]" />
                    <span>Hands-on science demonstrations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#064E3B]" />
                    <span>Team games & sports drills</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#064E3B]" />
                    <span>Public presentation practice</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200/60 flex items-center justify-between text-xs text-[#064E3B] font-semibold">
                <span>Classes 6 to 7</span>
                <VerificationBadge verified={false} label="Continuous Assessment" className="text-[10px]" />
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF8F0] border border-[#CDDCD2] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#064E3B] block mb-2">
                  Stage 03
                </span>
                <h3 className="font-serif font-bold text-2xl text-[#073D32] mb-3">
                  High School
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                  Rigorous preparation for board examinations, leadership responsibilities, career guidance, and civic ethics.
                </p>
                <ul className="space-y-2 text-xs text-neutral-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#064E3B]" />
                    <span>Comprehensive curriculum coverage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#064E3B]" />
                    <span>Mentorship by senior faculty</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#064E3B]" />
                    <span>Community service initiatives</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200/60 flex items-center justify-between text-xs text-[#064E3B] font-semibold">
                <span>Classes 8 to 10</span>
                <VerificationBadge verified={false} label="Board Preparation" className="text-[10px]" />
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <VerificationNotice
              title="Official Curriculum & Affiliation Notice"
              message="Specific state board affiliation details, precise annual fee schedule, and exact admission cutoff dates will be provided in writing during the in-person counseling session by the school administration."
            />
          </div>
        </div>
      </section>

      {/* 4. ADMISSIONS PROCESS (4 Simple Steps) */}
      <section className="py-20 lg:py-24 border-b border-[#CDDCD2]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#064E3B] bg-[#E6EFE8] px-3.5 py-1.5 rounded-full inline-block mb-3">
              Application Sequence
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#073D32]">
              Simple 4-Step Admission Journey
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              We ensure the enrollment process is transparent, stress-free, and respectful of every parent and child.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#CDDCD2] shadow-sm relative flex flex-col justify-between"
              >
                <div>
                  <div className="font-serif text-3xl font-bold text-[#D4AF37] mb-3">
                    {step.step}
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#073D32] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-neutral-100 text-xs font-semibold text-[#064E3B]">
                  Step {idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ADMISSION ENQUIRY FORM */}
      <section id="admission-enquiry-form" className="py-20 lg:py-28 bg-[#FAF8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdmissionEnquiryForm />
        </div>
      </section>

      {/* 6. PARENT HELPLINE CTA */}
      <section className="py-16 bg-[#073D32] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h3 className="font-serif font-bold text-2xl text-white">
            Need Immediate Admission Guidance?
          </h3>
          <p className="text-sm text-neutral-300">
            Our admissions staff is available on phone on working school days between 9:00 AM and 4:30 PM.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`tel:${schoolInfo.phones[0].raw}`}
              className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold shadow-md"
            >
              <Phone className="w-4 h-4 text-[#073D32]" />
              <span>{schoolInfo.phones[0].display}</span>
            </a>
            <a
              href={`tel:${schoolInfo.phones[1].raw}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium border border-white/20 transition-all"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>{schoolInfo.phones[1].display}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
