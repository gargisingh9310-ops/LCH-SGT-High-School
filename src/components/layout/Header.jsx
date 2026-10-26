import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, HeartHandshake, PhoneCall } from 'lucide-react';
import { navLinks, schoolInfo } from '../../data/schoolData';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine header classes based on page and scroll status
  const headerBackgroundClass = isHomePage
    ? isScrolled
      ? 'bg-[#064E3B]/95 backdrop-blur-md shadow-lg border-b border-[#D4AF37]/20 text-[#FAF8F0]'
      : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent text-[#FAF8F0]'
    : 'bg-[#064E3B] text-[#FAF8F0] shadow-md border-b border-[#D4AF37]/20';

  return (
    <>
      {/* Top subtle emergency / helpline announcement bar */}
      <div className="bg-[#073D32] text-xs text-[#FAF8F0] border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-1.5 flex justify-between items-center text-[11px] font-medium tracking-wide">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-[#D4AF37]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
              Celebrating 40 Years of Excellence in Education
            </span>
            <span className="text-white/30">•</span>
            <span className="text-white/80">Supported by Lions Club of Hyderabad</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/70">Helpline:</span>
            <a
              href={`tel:${schoolInfo.phones[0].raw}`}
              className="hover:text-[#D4AF37] transition-colors flex items-center gap-1"
            >
              <PhoneCall className="w-3 h-3 text-[#D4AF37]" />
              <span>{schoolInfo.phones[0].display}</span>
            </a>
            <span className="text-white/30">|</span>
            <a
              href={`tel:${schoolInfo.phones[1].raw}`}
              className="hover:text-[#D4AF37] transition-colors"
            >
              <span>{schoolInfo.phones[1].display}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${headerBackgroundClass}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo and Brand identity */}
            <Link
              to="/"
              className="flex items-center gap-2.5 xs:gap-3 group focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded-lg p-1"
              aria-label="LCH SGT High School Home"
            >
              <div className="relative">
                <img
                  src="/assets/logo-school-hd.jpg"
                  alt="LCH SGT High School Emblem"
                  className="w-10 h-10 xs:w-12 xs:h-12 md:w-14 md:h-14 object-contain rounded-lg bg-white p-1 shadow-md border border-[#D4AF37]/40 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-sm xs:text-base sm:text-lg md:text-xl tracking-tight text-white group-hover:text-[#F4E8C1] transition-colors leading-tight">
                  LCH SGT High School
                </span>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[9px] xs:text-[10px] md:text-xs font-semibold text-[#D4AF37] tracking-wider uppercase">
                    40 Years Legacy
                  </span>
                  <span className="text-white/40 text-[10px] hidden sm:inline">•</span>
                  <span className="text-[10px] text-white/75 hidden sm:inline">
                    Lions Club of Hyderabad
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-[#D4AF37] bg-white/10 font-semibold'
                        : 'text-white/85 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Right CTAs (Desktop) */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/csr-support"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#D4AF37] hover:bg-[#F4E8C1] text-[#073D32] font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              >
                <HeartHandshake className="w-4 h-4 text-[#073D32]" />
                <span>Partner With Us</span>
              </Link>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                to="/csr-support"
                className="hidden xs:inline-flex items-center gap-1.5 px-2.5 xs:px-3 py-1.5 rounded-md bg-[#D4AF37] text-[#073D32] font-semibold text-xs"
              >
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>Partner</span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                aria-label="Open mobile menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
