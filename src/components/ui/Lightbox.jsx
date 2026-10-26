import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function Lightbox({ isOpen, items, currentIndex, onClose, onPrev, onNext }) {
  const handleKeyDown = useCallback((e) => {
    if (!isOpen) return;
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onPrev();
    if (e.key === 'ArrowRight') onNext();
  }, [isOpen, onClose, onPrev, onNext]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !items || items.length === 0) return null;

  const currentItem = items[currentIndex] || items[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 transition-all duration-300"
      onClick={onClose}
    >
      {/* Top Bar with counter & close button */}
      <div 
        className="absolute top-0 inset-x-0 flex items-center justify-between px-6 py-4 text-white z-20 bg-gradient-to-b from-black/80 to-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="text-xs tracking-widest uppercase font-semibold text-[#D4AF37]">
            {currentItem.category || "School Photography"}
          </span>
          <span className="text-white/40">•</span>
          <span className="text-xs text-white/70">
            {currentIndex + 1} of {items.length}
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#064E3B] text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#D4AF37] z-20"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#064E3B] text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#D4AF37] z-20"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div 
        className="max-w-5xl max-h-[80vh] flex flex-col items-center justify-center p-2 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-xl shadow-2xl border border-white/10 max-h-[70vh]">
          <img
            src={currentItem.src}
            alt={currentItem.title || "LCH SGT High School Photography"}
            className="w-auto h-auto max-h-[70vh] max-w-full object-contain transition-all duration-300"
          />
        </div>
        
        {/* Caption */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <h3 className="text-lg font-serif font-semibold text-white">
            {currentItem.title}
          </h3>
          <p className="text-sm text-neutral-300 mt-1">
            {currentItem.caption}
          </p>
        </div>
      </div>
    </div>
  );
}
