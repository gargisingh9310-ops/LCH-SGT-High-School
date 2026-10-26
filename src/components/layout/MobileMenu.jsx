import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { X, Phone, HeartHandshake, ChevronRight, ShieldCheck } from 'lucide-react';
import { navLinks, schoolInfo } from '../../data/schoolData';

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#073D32]/98 backdrop-blur-xl text-[#FAF8F0] animate-in fade-in duration-200"
    >
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 xs:px-6 py-4 xs:py-5 border-b border-[#FAF8F0]/10">
        <Link to="/" onClick={onClose} className="flex items-center gap-2.5 xs:gap-3">
          <img
            src="/assets/logo-school-hd.jpg"
            alt="LCH SGT High School Logo"
            className="w-9 h-9 xs:w-10 xs:h-10 object-contain rounded-lg bg-white p-0.5 border border-[#D4AF37]/40 shadow-sm"
          />
          <div>
            <span className="block font-serif font-bold text-sm xs:text-base tracking-wide text-white">
              LCH SGT High School
            </span>
            <span className="block text-[9px] xs:text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold">
              40 Years of Excellence
            </span>
          </div>
        </Link>
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          aria-label="Close navigation menu"
        >
          <X className="w-5 h-5 xs:w-6 xs:h-6" />
        </button>
      </div>

      {/* Navigation links */}
      <div className="flex-1 overflow-y-auto px-4 xs:px-6 py-6 xs:py-8 space-y-2">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center justify-between py-3 xs:py-3.5 px-4 rounded-xl text-base xs:text-lg font-medium transition-all ${
                isActive
                  ? 'bg-[#064E3B] text-[#D4AF37] font-semibold border-l-4 border-[#D4AF37]'
                  : 'text-white/85 hover:bg-white/5 hover:text-white'
              }`
            }
          >
            <span>{link.name}</span>
            <ChevronRight className="w-5 h-5 opacity-60" />
          </NavLink>
        ))}

        <div className="pt-6 border-t border-white/10 space-y-3">
          <Link
            to="/csr-support"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#D4AF37] text-[#073D32] font-semibold hover:bg-[#F4E8C1] transition-all shadow-lg text-sm xs:text-base"
          >
            <HeartHandshake className="w-5 h-5 text-[#073D32]" />
            <span>Partner With Us (CSR)</span>
          </Link>
          <Link
            to="/admissions"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-all text-sm xs:text-base"
          >
            <span>Admissions Open</span>
          </Link>
        </div>
      </div>

      {/* Footer bar with quick contacts */}
      <div className="p-4 xs:p-6 border-t border-white/10 bg-[#064E3B]/70">
        <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-medium mb-2">
          <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
          <span>Supported by Lions Club of Hyderabad</span>
        </div>
        <p className="text-xs text-white/70 mb-3">Enquiries & Admissions Helpline:</p>
        <div className="flex flex-col gap-2">
          {schoolInfo.phones.map((p, idx) => (
            <a
              key={idx}
              href={`tel:${p.raw}`}
              className="inline-flex items-center gap-2 text-sm text-white hover:text-[#D4AF37] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>{p.display}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
