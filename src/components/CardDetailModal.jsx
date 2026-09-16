import React from 'react';
import { X, ArrowRight, CheckCircle2, Shield, Target } from 'lucide-react';
import NexusLogo from './NexusLogo';

export default function CardDetailModal({ item, onClose, onRequestService }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-md transition-opacity">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image if available */}
        {item.image && (
          <div className="relative aspect-[16/8] w-full overflow-hidden bg-gray-900">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-6 right-6 text-white">
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#FF4D57] uppercase">
                Strategic Focus Area
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {item.title}
              </h3>
            </div>
          </div>
        )}

        {/* Header without image */}
        {!item.image && (
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-[#FBFBFB]">
            <div>
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#C4121A] uppercase">
                Nexus Solution
              </span>
              <h3 className="text-xl font-bold text-[#111315]">
                {item.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-gray-400 hover:text-black hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">
              Overview & Strategic Value
            </h4>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {item.details || item.description}
            </p>
          </div>

          {/* Deliverables / Capabilities */}
          {item.deliverables && (
            <div className="p-5 rounded-xl bg-gray-50 border border-gray-200/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-3 flex items-center gap-2">
                <Target className="w-4 h-4 text-[#C4121A]" />
                Key Strategic Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {item.deliverables.map((deliv, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#C4121A] flex-shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-100">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Shield className="w-4 h-4 text-gray-400" />
              <span>Full NDA & Strategic Alignment Protected</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onRequestService(item.title);
              }}
              className="w-full sm:w-auto btn-primary-red px-6 py-3 rounded-lg text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-md"
            >
              <span>Partner on {item.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
