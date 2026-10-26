import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  HeartHandshake, 
  GraduationCap, 
  ShieldCheck, 
  AlertCircle,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import GeneralContactForm from '../components/forms/GeneralContactForm';
import { schoolInfo } from '../data/schoolData';
import { VerificationBadge, GoldPillBadge } from '../components/common/Badge';
import VerificationNotice from '../components/common/VerificationNotice';

export default function Contact() {
  return (
    <div className="bg-[#FAF8F0] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#064E3B] text-white py-12 sm:py-20 lg:py-24 overflow-hidden">
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
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
              <GoldPillBadge>
                Official School Communications
              </GoldPillBadge>
              <VerificationBadge verified={true} label="Helpline Verified" />
            </div>

            <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
              Connect With <br />
              <span className="text-gold-gradient italic font-normal">
                LCH SGT High School
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-neutral-200 leading-relaxed font-light max-w-2xl">
              Whether you are an aspiring parent, a corporate CSR partner, an alumnus, or an educational well-wisher, we are ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* 2. DIRECT CONTACT CHANNELS & VERIFIED HELPLINES */}
      <section className="py-10 sm:py-16 lg:py-20 border-b border-[#CDDCD2]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            {/* Phone Card (Verified) */}
            <div className="p-5 sm:p-8 rounded-2xl bg-white border border-[#CDDCD2] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#064E3B] text-[#D4AF37] flex items-center justify-center shadow-md">
                    <Phone className="w-6 h-6" />
                  </div>
                  <VerificationBadge verified={true} label="Verified Phone" />
                </div>
                <h3 className="font-serif font-bold text-xl text-[#073D32] mb-1">
                  School Phone Lines
                </h3>
                <p className="text-xs text-neutral-500 mb-4">
                  Direct telephone contact for admissions, general questions, and appointments.
                </p>
                <div className="space-y-2">
                  {schoolInfo.phones.map((p, idx) => (
                    <a
                      key={idx}
                      href={`tel:${p.raw}`}
                      className="block text-base font-bold text-[#064E3B] hover:text-[#D4AF37] transition-colors"
                    >
                      {p.display}
                    </a>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs text-neutral-500">
                <Clock className="w-3.5 h-3.5 text-[#064E3B]" />
                <span>Mon – Sat: 9:00 AM – 4:30 PM</span>
              </div>
            </div>

            {/* Email Card (Verified placeholder handling) */}
            <div className="p-5 sm:p-8 rounded-2xl bg-white border border-[#CDDCD2] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#073D32] text-[#D4AF37] flex items-center justify-center shadow-md">
                    <Mail className="w-6 h-6" />
                  </div>
                  <VerificationBadge verified={false} label="Verification Pending" />
                </div>
                <h3 className="font-serif font-bold text-xl text-[#073D32] mb-1">
                  Electronic Inquiries
                </h3>
                <p className="text-xs text-neutral-500 mb-4">
                  Official school email will be updated once released by the administrative council.
                </p>
                <div className="p-3 rounded-lg bg-amber-50/70 border border-amber-200/70 text-xs text-amber-900 leading-relaxed">
                  Please use the verified phone numbers above or submit the inquiry form below for prompt attention.
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-100 text-xs text-neutral-500">
                <span>Inquiries routed to administrative desk</span>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-5 sm:p-8 rounded-2xl bg-white border border-[#CDDCD2] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#064E3B] text-[#D4AF37] flex items-center justify-center shadow-md">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <VerificationBadge verified={false} label="City Verified" />
                </div>
                <h3 className="font-serif font-bold text-xl text-[#073D32] mb-1">
                  Campus Location
                </h3>
                <p className="text-xs text-neutral-500 mb-4">
                  Institution located in Hyderabad, Telangana, India.
                </p>
                <div className="text-sm font-semibold text-[#073D32]">
                  {schoolInfo.location.city}, {schoolInfo.location.state}
                </div>
                <p className="text-xs text-neutral-500 mt-1 italic">
                  Exact campus street address will be published upon official administrative confirmation.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-1.5 text-xs text-[#064E3B] font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#064E3B]" />
                <span>Lions Club of Hyderabad Jurisdiction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONTACT FORM & DEDICATED PORTALS */}
      <section className="py-10 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <GeneralContactForm />
            </div>

            {/* Dedicated Portals Column (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* CSR Fast-Track Card */}
              <div className="p-5 sm:p-8 rounded-2xl bg-[#064E3B] text-white shadow-xl border border-[#D4AF37]/30">
                <div className="flex items-center gap-2 mb-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
                  <HeartHandshake className="w-4 h-4" />
                  <span>Corporate Partnership Portal</span>
                </div>
                <h3 className="font-serif font-bold text-2xl text-white mb-2">
                  CSR & Industrial Foundations
                </h3>
                <p className="text-sm text-neutral-200 leading-relaxed mb-6">
                  Looking to allocate CSR funds under education or child health? Access our specialized corporate partnership gateway for customized proposals and Schedule VII compliance guidance.
                </p>
                <Link
                  to="/csr-support"
                  className="btn-gold inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold shadow-md"
                >
                  <span>Go to CSR Gateway &rarr;</span>
                </Link>
              </div>

              {/* Admissions Fast-Track Card */}
              <div className="p-5 sm:p-8 rounded-2xl bg-white border border-[#CDDCD2] shadow-md">
                <div className="flex items-center gap-2 mb-2 text-[#064E3B] text-xs font-semibold uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4" />
                  <span>Parents & Guardians</span>
                </div>
                <h3 className="font-serif font-bold text-2xl text-[#073D32] mb-2">
                  Admissions Department
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  Seeking enrollment for the current or upcoming academic cycle? Submit our student admission questionnaire for syllabus and fee guidance.
                </p>
                <Link
                  to="/admissions"
                  className="btn-emerald inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold shadow-md"
                >
                  <span>Admission Enquiry &rarr;</span>
                </Link>
              </div>

              {/* Campus Visitors Notice */}
              <div className="p-4 sm:p-6 rounded-2xl bg-[#FAF8F0] border border-[#CDDCD2]">
                <h4 className="font-serif font-bold text-base text-[#073D32] mb-1">
                  Campus Visiting Protocol
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  To preserve student safety and instructional focus, all visitors and prospective parents must register at the reception with a valid photo ID upon arrival. Prior appointment by phone is recommended.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MAP & LOCATION SECTION */}
      <section className="py-10 sm:py-16 bg-white border-t border-[#CDDCD2]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 sm:mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#064E3B] bg-[#E6EFE8] px-3.5 py-1.5 rounded-full inline-block mb-2">
              Regional Reference
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#073D32]">
              Hyderabad Region
            </h2>
            <p className="text-xs text-neutral-500 mt-1">
              General map of Hyderabad region. Detailed pin and door coordinates will be updated upon official release.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#CDDCD2] shadow-lg h-64 sm:h-96 relative bg-neutral-100">
            <iframe
              src={schoolInfo.location.embedMapUrl}
              title="Hyderabad City Location Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
