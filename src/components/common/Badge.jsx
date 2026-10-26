import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export function VerificationBadge({ verified = true, label = verified ? "Verified" : "Pending Confirmation", className = "" }) {
  if (verified) {
    return (
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#064E3B]/10 text-[#064E3B] border border-[#064E3B]/20 ${className}`}>
        <CheckCircle2 className="w-3.5 h-3.5 text-[#064E3B]" />
        <span>{label}</span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-800 border border-amber-500/20 ${className}`}>
      <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
      <span>{label}</span>
    </span>
  );
}

export function GoldPillBadge({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#D4AF37]/15 text-[#073D32] border border-[#D4AF37]/40 backdrop-blur-sm ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
      {children}
    </span>
  );
}
