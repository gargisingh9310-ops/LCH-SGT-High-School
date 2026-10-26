import React from 'react';
import { Info } from 'lucide-react';

export default function VerificationNotice({ title = "Administrative Notice", message, className = "" }) {
  return (
    <div className={`rounded-xl border border-amber-200/80 bg-amber-50/70 p-4 text-sm text-amber-900 flex items-start gap-3 backdrop-blur-sm ${className}`}>
      <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
      <div>
        <p className="font-semibold text-amber-950 mb-0.5">{title}</p>
        <p className="text-amber-800/90 leading-relaxed">{message}</p>
      </div>
    </div>
  );
}
