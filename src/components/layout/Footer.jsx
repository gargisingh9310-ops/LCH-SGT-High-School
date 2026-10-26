import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, HeartHandshake, GraduationCap, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { schoolInfo, navLinks } from '../../data/schoolData';
import { VerificationBadge } from '../common/Badge';

export default function Footer() {
  return (
    <footer className="bg-[#064E3B] text-[#FAF8F0] border-t border-[#D4AF37]/30 pt-12 sm:pt-16 pb-8 sm:pb-12 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#073D32] rounded-full blur-3xl pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 sm:pb-12 border-b border-white/10">
          {/* Column 1: School Identity & Lions Club Patronage (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <img
                src="/assets/logo-school-hd.jpg"
                alt="LCH SGT High School Emblem"
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-xl bg-white p-1 border-2 border-[#D4AF37]/50 shadow-md"
              />
              <img
                src="/assets/logo-lions-hd.jpg"
                alt="Lions Club of Hyderabad Emblem"
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-xl bg-white p-1 border-2 border-[#D4AF37]/50 shadow-md"
              />
            </div>

            <div>
              <h3 className="font-serif font-bold text-2xl text-white tracking-tight">
                {schoolInfo.name}
              </h3>
              <p className="text-sm text-[#D4AF37] font-medium tracking-wide mt-0.5">
                {schoolInfo.tagline} • Supported by {schoolInfo.patron}
              </p>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed max-w-md">
              A charitable educational institution in Hyderabad dedicated to holistic learning, discipline, physical wellbeing, and character development. Guided by the values of Hope, Faith, and Charity.
            </p>

            <div className="p-4 rounded-xl bg-[#073D32]/80 border border-[#D4AF37]/25 max-w-md">
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-xs font-semibold text-white tracking-wider uppercase">
                  Institutional Patronage
                </span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Operated under the supportive guidance of Lions Club of Hyderabad (District 320), advancing child education and welfare for four decades.
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif font-semibold text-base text-white tracking-wider uppercase border-b border-[#D4AF37]/30 pb-2 inline-block">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-[#D4AF37] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate & Parent Portals (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif font-semibold text-base text-white tracking-wider uppercase border-b border-[#D4AF37]/30 pb-2 inline-block">
              Engagement
            </h4>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li>
                <Link
                  to="/csr-support"
                  className="hover:text-[#D4AF37] transition-colors flex items-start gap-2 group"
                >
                  <HeartHandshake className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white group-hover:text-[#D4AF37]">
                      CSR Partnerships
                    </span>
                    <span className="block text-[11px] text-neutral-400">
                      Industry & Corporate Grants
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/admissions"
                  className="hover:text-[#D4AF37] transition-colors flex items-start gap-2 group"
                >
                  <GraduationCap className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white group-hover:text-[#D4AF37]">
                      Admissions Open
                    </span>
                    <span className="block text-[11px] text-neutral-400">
                      Enrollment Guidance
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/activities"
                  className="hover:text-[#D4AF37] transition-colors flex items-start gap-2 group"
                >
                  <ArrowUpRight className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white group-hover:text-[#D4AF37]">
                      Holistic Activities
                    </span>
                    <span className="block text-[11px] text-neutral-400">
                      Yoga, Sports & STEM
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Contact Information (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif font-semibold text-base text-white tracking-wider uppercase border-b border-[#D4AF37]/30 pb-2 inline-block">
              Official Contact
            </h4>
            
            <div className="space-y-3 text-sm">
              {/* Verified Phone Numbers */}
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                      Verified Helplines
                    </span>
                    <VerificationBadge verified={true} label="Verified" className="text-[10px] py-0 px-1.5" />
                  </div>
                  <div className="mt-1 space-y-1">
                    {schoolInfo.phones.map((p, idx) => (
                      <a
                        key={idx}
                        href={`tel:${p.raw}`}
                        className="block text-white font-medium hover:text-[#D4AF37] transition-colors"
                      >
                        {p.display}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* School Location */}
              <div className="flex items-start gap-3 pt-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                <div>
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">
                    City Location
                  </span>
                  <p className="text-white font-medium mt-0.5">
                    {schoolInfo.location.city}, {schoolInfo.location.state}, {schoolInfo.location.country}
                  </p>
                  <p className="text-xs text-neutral-400 mt-0.5 italic">
                    (Campus door address pending official release)
                  </p>
                </div>
              </div>

              {/* Verified Email status */}
              <div className="flex items-start gap-3 pt-2">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                <div>
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">
                    Email Inquiries
                  </span>
                  <Link
                    to="/contact"
                    className="text-xs text-[#D4AF37] hover:underline block mt-0.5"
                  >
                    Submit official inquiry form &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {schoolInfo.name}. All rights reserved. 40 Years of Educational Dedication.
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-6">
            <span className="text-neutral-400">
              Patron: <strong className="text-white font-normal">Lions Club of Hyderabad</strong>
            </span>
            <span className="text-white/20 hidden xs:inline">•</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Privacy & Safeguarding
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
