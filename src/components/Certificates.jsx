import React, { useState } from 'react';
import {
  FileCheck2,
  ExternalLink,
  Download,
  Building,
  Calendar,
  Sparkles,
  ShieldCheck,
  CheckCircle,
  FileText
} from 'lucide-react';
import { certificatesData } from '../data/certificates';

export default function Certificates({ onOpenCertificateModal }) {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Internship', 'Hackathons'];

  const filtered = certificatesData.filter((c) => {
    if (activeTab === 'All') return true;
    return c.category === activeTab;
  });

  return (
    <section id="certificates" className="py-20 md:py-28 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-3">
            <FileCheck2 className="w-3.5 h-3.5" />
            Verified Credentials & Accreditations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Certifications & Participation Certificates
          </h2>
          <p className="text-[#64748B] mt-3 text-base sm:text-lg">
            Direct access to official internship credential and competitive hackathon participation documents.
          </p>
          <div className="w-16 h-1 bg-[#3B82F6] mx-auto mt-4 rounded-full" />

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === cat
                    ? 'bg-[#3B82F6] text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-blue-200'
                }`}
              >
                {cat === 'All' ? 'All Certificates' : cat === 'Internship' ? 'Internship Certificate' : 'Hackathon Certificates'}
              </button>
            ))}
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((cert) => (
            <div
              key={cert.id}
              className="portfolio-card rounded-3xl bg-white border border-[#DBEAFE] overflow-hidden flex flex-col justify-between group hover:border-[#93C5FD]"
            >
              <div>
                {/* Header Banner */}
                <div className="p-6 bg-gradient-to-r from-blue-50/70 to-indigo-50/40 border-b border-[#DBEAFE]/80 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-blue-200 flex items-center justify-center text-[#2563EB] shadow-2xs group-hover:scale-105 transition-transform shrink-0">
                      <FileCheck2 className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        {cert.type}
                      </span>
                      <h3 className="text-lg font-bold text-[#0F172A] line-clamp-1">
                        {cert.title}
                      </h3>
                      <div className="text-xs font-semibold text-[#2563EB] flex items-center gap-1.5 mt-0.5">
                        <Building className="w-3.5 h-3.5" />
                        <span>{cert.issuer}</span>
                      </div>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 shrink-0">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    {cert.status}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-[#64748B] mb-3 pb-3 border-b border-slate-100 font-mono">
                    <span>ID: {cert.credentialId}</span>
                    <span className="font-sans font-medium">{cert.date}</span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* Image Preview if available */}
                  {cert.imageUrl && (
                    <div
                      onClick={() => onOpenCertificateModal(cert.imageUrl, cert.title)}
                      className="relative rounded-2xl overflow-hidden border border-blue-100 cursor-pointer group/img mb-2 aspect-[16/10] bg-slate-50"
                    >
                      <img
                        src={cert.imageUrl}
                        alt={cert.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-103"
                      />
                      <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1.5">
                        <ExternalLink className="w-4 h-4" />
                        <span>Click to Enlarge Certificate</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] shadow-xs hover:shadow-md transition-all active:scale-95"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open Original PDF</span>
                  </a>

                  <a
                    href={cert.pdfUrl}
                    download={`${cert.id}.pdf`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#1E40AF] bg-white border border-[#BFDBFE] hover:bg-blue-50 transition-all active:scale-95"
                  >
                    <Download className="w-4 h-4 text-[#3B82F6]" />
                    <span>Download</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
