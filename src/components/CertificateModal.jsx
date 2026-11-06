import React, { useEffect } from 'react';
import { X, Download, ExternalLink } from 'lucide-react';

export default function CertificateModal({ isOpen, onClose, imageUrl, title }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageUrl) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-4xl w-full p-4 sm:p-6 shadow-2xl border border-white/20 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
          <div>
            <h3 className="font-bold text-base sm:text-lg text-[#0F172A] line-clamp-1">
              {title || 'Certificate Preview'}
            </h3>
            <p className="text-xs text-slate-500">Official Participation Credential</p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-600 hover:text-[#2563EB] hover:bg-blue-50 transition-colors"
              title="Open full size in new tab"
            >
              <ExternalLink className="w-5 h-5" />
            </a>

            <a
              href={imageUrl}
              download="Certificate.jpg"
              className="p-2 rounded-xl text-slate-600 hover:text-[#2563EB] hover:bg-blue-50 transition-colors"
              title="Download Certificate"
            >
              <Download className="w-5 h-5" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Image Body */}
        <div className="flex-1 overflow-auto rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 p-2">
          <img
            src={imageUrl}
            alt={title || 'Certificate'}
            className="max-h-[70vh] w-auto object-contain rounded-xl shadow-xs"
          />
        </div>

        {/* Modal Footer */}
        <div className="pt-4 mt-2 flex items-center justify-between text-xs text-slate-500">
          <span>Harish Kumar • Karpagam College of Engineering</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
