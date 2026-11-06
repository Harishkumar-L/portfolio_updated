import React from 'react';
import {
  FileText,
  Download,
  ExternalLink,
  CheckCircle2,
  FileCode,
  GraduationCap,
  Building,
  Eye,
  FileCheck,
  ShieldCheck
} from 'lucide-react';
import { profileData } from '../data/profile';

export default function Resume({ onOpenResumeModal }) {
  return (
    <section id="resume" className="py-20 md:py-28 bg-[#F0F7FF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-3 shadow-2xs">
            <FileText className="w-3.5 h-3.5" />
            Recruiter & Hiring Resources
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            My Resume
          </h2>
          <p className="text-[#64748B] mt-3 text-base sm:text-lg">
            Complete credentials, academic coursework, technical competencies, and verified internship history in standard PDF format.
          </p>
          <div className="w-16 h-1 bg-[#3B82F6] mx-auto mt-4 rounded-full" />
        </div>

        {/* Main Resume Card */}
        <div className="max-w-4xl mx-auto">
          <div className="portfolio-card rounded-3xl bg-white border border-[#DBEAFE] p-6 sm:p-10 shadow-sm">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Visual Resume Preview Thumbnail */}
              <div className="md:col-span-5 flex flex-col items-center">
                <div
                  onClick={() => window.open(profileData.resumePath, '_blank')}
                  className="relative w-full max-w-xs aspect-[1/1.414] rounded-2xl border-2 border-blue-200 overflow-hidden shadow-md group cursor-pointer bg-slate-100"
                >
                  <img
                    src="/Harish_Kumar_Resume_preview.jpg"
                    alt="Harish Kumar Resume Preview"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4 text-center">
                    <Eye className="w-8 h-8 mb-2" />
                    <span className="font-bold text-sm">Click to View Original PDF</span>
                    <span className="text-xs text-blue-200 mt-1">Opens in new browser tab</span>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Original Document Verified</span>
                </div>
              </div>

              {/* Right Column: Details & Actions */}
              <div className="md:col-span-7 flex flex-col items-start text-left">
                
                {/* Header with PDF Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 shadow-2xs">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Standard Curriculum Vitae
                    </span>
                    <h3 className="text-2xl font-bold text-[#0F172A]">
                      Harish Kumar
                    </h3>
                  </div>
                </div>

                {/* Subtitle Details */}
                <div className="mb-4 space-y-1">
                  <div className="text-sm font-semibold text-[#2563EB]">
                    B.Tech Information Technology (3rd Semester)
                  </div>
                  <div className="text-xs text-slate-600 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-slate-400" />
                    <span>Karpagam College of Engineering, Coimbatore</span>
                  </div>
                </div>

                {/* Resume Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  "Explore my academic background, technical skills, internship experience, projects, and achievements."
                </p>

                {/* Checklist points */}
                <div className="space-y-2 mb-8 w-full">
                  {[
                    'Full Stack Development Internship at Thiranex',
                    '3 Hackathon Participations (ALGOTHON, HackeVerse, Prompt Run)',
                    '1,500+ CodeChef & 100+ LeetCode Problem Solved',
                    'Core Java, Data Structures, Algorithms & Web Development'
                  ].map((point, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Two Main Resume Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 w-full">
                  {/* View Resume Button */}
                  <a
                    href={profileData.resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] shadow-xs hover:shadow-md transition-all active:scale-95 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Resume (PDF)</span>
                  </a>

                  {/* Download Resume Button */}
                  <a
                    href={profileData.resumePath}
                    download="Harish_Kumar_Resume.pdf"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-[#1E40AF] bg-white border border-[#BFDBFE] hover:bg-blue-50 transition-all active:scale-95 text-sm"
                  >
                    <Download className="w-4 h-4 text-[#3B82F6]" />
                    <span>Download PDF</span>
                  </a>
                </div>

                {/* Optional DOCX button */}
                <div className="mt-4 pt-4 border-t border-slate-100 w-full flex items-center justify-between text-xs text-slate-500">
                  <span>Need an editable ATS version?</span>
                  <a
                    href={profileData.resumeWordPath}
                    download="Harish_Kumar_Resume claude.docx"
                    className="inline-flex items-center gap-1 font-semibold text-[#2563EB] hover:underline"
                  >
                    <Download className="w-3 h-3" />
                    <span>Download Word (.docx)</span>
                  </a>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
