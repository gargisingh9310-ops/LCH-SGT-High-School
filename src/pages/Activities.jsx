import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Smile, 
  Activity, 
  Users, 
  Compass, 
  BookOpen, 
  CheckCircle2, 
  Maximize2, 
  HeartHandshake, 
  GraduationCap,
  Play
} from 'lucide-react';
import { activitiesData, galleryItems } from '../data/schoolData';
import Lightbox from '../components/ui/Lightbox';
import { GoldPillBadge } from '../components/common/Badge';

export default function Activities() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxState, setLightboxState] = useState({ isOpen: false, index: 0 });
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const categories = ['All', 'Campus Life', 'Classrooms', 'Mindfulness', 'Sports', 'Leadership'];

  const filteredGallery = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (index) => {
    setLightboxState({ isOpen: true, index });
  };

  const closeLightbox = () => {
    setLightboxState({ isOpen: false, index: 0 });
  };

  const handlePrev = () => {
    setLightboxState(prev => ({
      ...prev,
      index: (prev.index - 1 + filteredGallery.length) % filteredGallery.length
    }));
  };

  const handleNext = () => {
    setLightboxState(prev => ({
      ...prev,
      index: (prev.index + 1) % filteredGallery.length
    }));
  };

  return (
    <div className="bg-[#FAF8F0] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#064E3B] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/assets/hero-campus-panoramic.jpg"
            alt="LCH SGT High School campus"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#073D32] via-[#064E3B]/90 to-[#073D32]/80 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <GoldPillBadge>
                Holistic Student Development
              </GoldPillBadge>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              Nurturing Body, Mind & Character <br />
              <span className="text-gold-gradient italic font-normal">
                Beyond Textbooks
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-neutral-200 leading-relaxed font-light">
              Education at LCH SGT High School encompasses yoga, sports, collaborative assemblies, public speaking, and hands-on discovery to build capable, grounded individuals.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE 5 CORE PILLARS (Detailed Editorial Sections with authentic images) */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {activitiesData.map((act, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div 
                key={act.id}
                id={act.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Images layout (5 cols) */}
                <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative">
                    <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white group">
                      <img
                        src={act.image}
                        alt={act.title}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {/* Secondary supporting crop */}
                    {act.secondaryImage && (
                      <div className="hidden sm:block absolute -bottom-8 -right-6 w-48 rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                        <img
                          src={act.secondaryImage}
                          alt={`${act.title} highlight`}
                          className="w-full h-32 object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Narrative content (7 cols) */}
                <div className={`lg:col-span-7 space-y-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#064E3B] bg-[#E6EFE8] px-3.5 py-1.5 rounded-full inline-block">
                    Pillar 0{index + 1} • {act.category}
                  </span>

                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#073D32] leading-tight">
                    {act.title}
                  </h2>

                  <p className="text-base text-[#064E3B] font-semibold italic">
                    "{act.tagline}"
                  </p>

                  <p className="text-base text-neutral-700 leading-relaxed">
                    {act.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                    {act.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-sm text-neutral-800">
                        <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. INTERACTIVE PHOTO GALLERY WITH LIGHTBOX */}
      <section className="py-20 lg:py-24 bg-white border-y border-[#CDDCD2]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#064E3B] bg-[#E6EFE8] px-3.5 py-1.5 rounded-full inline-block mb-3">
              Photographic Archive
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#073D32]">
              Glimpses of Daily School Life
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Browse authentic photographs showcasing our campus, classrooms, yoga sessions, and student achievements. Click any image to view in high definition.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#064E3B] text-white shadow-md'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="group relative rounded-2xl overflow-hidden bg-neutral-100 border border-[#CDDCD2] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <div className="text-white">
                      <span className="text-[10px] font-semibold text-[#D4AF37] uppercase tracking-wider block">
                        {item.category}
                      </span>
                      <h4 className="font-serif font-bold text-base text-white mt-0.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-neutral-300 mt-1 line-clamp-2">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 p-2 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-4 bg-white sm:hidden">
                  <h4 className="font-serif font-semibold text-sm text-[#073D32]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VIDEO & MEDIA SPOTLIGHT */}
      <section className="py-20 bg-[#073D32] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#064E3B] border border-[#D4AF37]/30 p-8 sm:p-12 lg:p-16 overflow-hidden relative shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] bg-white/10 px-3.5 py-1.5 rounded-full inline-block">
                  Documentary Video Showcase
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                  A Day in the Life of an LCH SGT Student
                </h2>
                <p className="text-base text-neutral-200 leading-relaxed">
                  Experience our morning assemblies, mindful breathing drills, interactive class sessions, and cheerful outdoor activity on campus.
                </p>
                <div className="pt-2 flex items-center gap-4">
                  <button
                    onClick={() => setVideoModalOpen(true)}
                    className="btn-gold inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold shadow-lg"
                  >
                    <Play className="w-4 h-4 fill-current text-[#073D32]" />
                    <span>Watch School Video</span>
                  </button>
                  <Link
                    to="/about"
                    className="text-xs text-[#D4AF37] hover:underline"
                  >
                    Learn about our heritage &rarr;
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div 
                  onClick={() => setVideoModalOpen(true)}
                  className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#D4AF37]/50 cursor-pointer group"
                >
                  <img
                    src="/assets/photo-kids-running-hd.jpg"
                    alt="School video preview"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#D4AF37] text-[#073D32] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLOSING CTA */}
      <section className="py-20 bg-[#FAF8F0] text-center border-t border-[#CDDCD2]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#073D32] mb-4">
            Witness the Impact in Person
          </h2>
          <p className="text-base text-neutral-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            We welcome prospective parents and corporate CSR representatives to visit our campus and observe our student activities firsthand.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/admissions"
              className="btn-emerald inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold shadow-md"
            >
              <GraduationCap className="w-4 h-4 text-[#D4AF37]" />
              <span>Admissions Information</span>
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-[#073D32] text-sm font-semibold border border-[#CDDCD2] hover:bg-neutral-50 transition-colors shadow-sm"
            >
              <span>Our 40-Year Story</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxState.isOpen}
        items={filteredGallery}
        currentIndex={lightboxState.index}
        onClose={closeLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      {/* Video Modal */}
      {videoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={() => setVideoModalOpen(false)}
        >
          <div 
            className="max-w-3xl w-full bg-[#073D32] rounded-2xl p-6 border border-[#D4AF37]/40 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4 text-white">
              <h3 className="font-serif font-bold text-lg text-white">
                LCH SGT High School Campus Video
              </h3>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="text-white/70 hover:text-white p-1 rounded-lg"
              >
                ✕ Close
              </button>
            </div>
            <div className="relative rounded-xl overflow-hidden bg-black aspect-video flex flex-col items-center justify-center text-center p-6 border border-white/10">
              <img
                src="/assets/photo-kids-running-hd.jpg"
                alt="Video Still"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />
              <div className="relative z-10 space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37] text-[#073D32] mx-auto flex items-center justify-center shadow-lg">
                  <Play className="w-6 h-6 fill-current ml-1" />
                </div>
                <p className="font-serif font-bold text-xl text-white">
                  LCH SGT High School Video Showcase
                </p>
                <p className="text-xs text-neutral-300 max-w-md">
                  Official documentary reel celebrating 40 Years of Excellence in Education, showcasing yoga sessions, classroom science experiments, and campus walk.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
