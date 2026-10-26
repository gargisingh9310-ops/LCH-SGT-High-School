import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import LenisSmoothScroll from './components/effects/LenisSmoothScroll';

// Lazy-loaded route pages for optimal performance & code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Activities = lazy(() => import('./pages/Activities'));
const CSRSupport = lazy(() => import('./pages/CSRSupport'));
const Admissions = lazy(() => import('./pages/Admissions'));
const Contact = lazy(() => import('./pages/Contact'));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-[#FAF8F0]">
      <div className="relative mb-4">
        <div className="w-14 h-14 rounded-full border-4 border-[#064E3B]/20 border-t-[#064E3B] animate-spin"></div>
        <img
          src="/assets/logo-school-hd.jpg"
          alt="LCH SGT High School Emblem"
          className="w-7 h-7 object-contain absolute inset-0 m-auto"
        />
      </div>
      <p className="font-serif text-sm font-semibold text-[#073D32] tracking-wide">
        LCH SGT High School
      </p>
      <span className="text-[11px] text-[#D4AF37] uppercase tracking-widest font-semibold mt-0.5">
        40 Years of Excellence
      </span>
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center bg-[#FAF8F0]">
      <span className="text-xs font-semibold uppercase tracking-widest text-[#064E3B] bg-[#E6EFE8] px-3.5 py-1.5 rounded-full inline-block mb-4">
        Page Not Found
      </span>
      <h1 className="font-serif text-5xl font-bold text-[#073D32] mb-4">
        404
      </h1>
      <p className="text-base text-neutral-600 max-w-md mb-8">
        The page you are looking for does not exist or may have been relocated.
      </p>
      <Link
        to="/"
        className="btn-emerald inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold shadow-md"
      >
        <span>Return to Homepage</span>
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <LenisSmoothScroll>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-[#FAF8F0] text-[#202923]">
          <Header />
          <main className="flex-1">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/csr-support" element={<CSRSupport />} />
                <Route path="/admissions" element={<Admissions />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </LenisSmoothScroll>
    </Router>
  );
}
