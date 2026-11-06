import React from 'react';
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  FileCheck,
  ExternalLink,
  Download,
  Building2,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { internshipData } from '../data/internship';

export default function Internship({ onOpenCertificateModal }) {
  return (
    <section id="internship" className="py-20 md:py-28 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Industry Exposure
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Internship Experience
          </h2>
          <p className="text-[#64748B] mt-3 text-base sm:text-lg">
            Professional industry internship experience, practical engineering exposure, and verified completion credentials.
          </p>
          <div className="w-16 h-1 bg-[#3B82F6] mx-auto mt-4 rounded-full" />
        </div>

        {/* Professional Experience Timeline Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-6 sm:pl-8 border-l-2 border-[#BFDBFE] ml-2 sm:ml-4">
            
            {/* Timeline Marker */}
            <div className="absolute -left-[17px] top-6 w-8 h-8 rounded-full bg-white border-4 border-[#3B82F6] flex items-center justify-center shadow-md">
              <Briefcase className="w-3.5 h-3.5 text-[#3B82F6]" />
            </div>

            {/* Experience Card */}
            <div className="portfolio-card rounded-3xl p-6 sm:p-9 bg-white border border-[#DBEAFE] shadow-sm relative overflow-hidden">
              
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#60A5FA] to-[#3B82F6]" />

              {/* Header: Company, Role & Status */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Building2 className="w-5 h-5 text-[#3B82F6]" />
                    <h3 className="text-2xl font-bold text-[#0F172A]">
                      {internshipData.company}
                    </h3>
                  </div>
                  <h4 className="text-lg font-semibold text-[#2563EB]">
                    {internshipData.role}
                  </h4>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    {internshipData.status}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-[#1E40AF] border border-blue-200 text-xs font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-[#3B82F6]" />
                    {internshipData.duration}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-base text-slate-700 leading-relaxed mb-6">
                {internshipData.description}
              </p>

              {/* Verified Details & Certificate Box */}
              <div className="p-5 rounded-2xl bg-[#F0F7FF] border border-[#DBEAFE] flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex items-start sm:items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-blue-200 flex items-center justify-center text-[#3B82F6] shrink-0 shadow-2xs">
                    <ShieldCheck className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                      Verified Credential Record
                    </div>
                    <div className="text-sm font-semibold text-[#0F172A] font-mono">
                      Certificate ID: {internshipData.certificateId}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href={internshipData.certificatePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] shadow-xs hover:shadow-md transition-all active:scale-95"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Certificate</span>
                  </a>

                  <a
                    href={internshipData.certificatePdf}
                    download="Thiranex_Certificate_Harishkumar.pdf"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-[#1E40AF] bg-white border border-[#BFDBFE] hover:bg-blue-50 transition-all active:scale-95"
                  >
                    <Download className="w-4 h-4 text-[#3B82F6]" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>

              {/* Key Takeaways */}
              <div className="border-t border-slate-100 pt-5">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Experience Highlights
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {internshipData.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-700 flex items-start gap-2"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#3B82F6] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
