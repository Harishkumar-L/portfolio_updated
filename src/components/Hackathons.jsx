import React from 'react';
import {
  Trophy,
  Sparkles,
  Code,
  Calendar,
  ExternalLink,
  Download,
  Building,
  CheckCircle,
  FileCheck2,
  Award
} from 'lucide-react';
import { hackathonsData } from '../data/hackathons';

const iconMap = {
  Trophy,
  Sparkles,
  Code
};

export default function Hackathons({ onOpenCertificateModal }) {
  return (
    <section id="hackathons" className="py-20 md:py-28 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" />
            Competitions & Innovation Sprints
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Hackathons & Competitions
          </h2>
          <p className="text-[#64748B] mt-3 text-base sm:text-lg">
            Active participation in national and global engineering hackathons, rapid prototyping, and algorithmic challenges.
          </p>
          <div className="w-16 h-1 bg-[#3B82F6] mx-auto mt-4 rounded-full" />
        </div>

        {/* Hackathon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hackathonsData.map((hackathon) => {
            const Icon = iconMap[hackathon.icon] || Trophy;

            return (
              <div
                key={hackathon.id}
                className="portfolio-card rounded-3xl bg-white border border-[#DBEAFE] overflow-hidden flex flex-col justify-between group hover:border-blue-300"
              >
                <div>
                  {/* Top Banner with Badge */}
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50/50 border-b border-[#DBEAFE]/80 relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-blue-200 shadow-2xs flex items-center justify-center text-[#2563EB] group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>

                      {/* Participation Badge */}
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-100/80 text-[#1E40AF] text-xs font-bold border border-blue-200">
                        <CheckCircle className="w-3 h-3 text-[#3B82F6]" />
                        {hackathon.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#0F172A] mb-1">
                      {hackathon.name}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#2563EB]">
                      <Building className="w-3.5 h-3.5" />
                      <span>{hackathon.organizer}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-[#64748B] mb-4 pb-3 border-b border-slate-100">
                      <span className="font-medium">{hackathon.participationType}</span>
                      <span className="inline-flex items-center gap-1 font-semibold text-slate-700">
                        <Calendar className="w-3.5 h-3.5 text-blue-500" />
                        {hackathon.date}
                      </span>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {hackathon.description}
                    </p>

                    {/* Certificate Preview Thumbnail if available */}
                    {hackathon.certificateImage && (
                      <div
                        onClick={() => onOpenCertificateModal(hackathon.certificateImage, hackathon.title)}
                        className="relative rounded-xl overflow-hidden border border-blue-200 cursor-pointer group/img mb-4 aspect-[16/10] bg-slate-100"
                      >
                        <img
                          src={hackathon.certificateImage}
                          alt={`${hackathon.name} Certificate`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-105"
                        />
                        <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1.5">
                          <ExternalLink className="w-4 h-4" />
                          <span>View Full Certificate</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                    <a
                      href={hackathon.certificatePdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] shadow-xs hover:shadow-md transition-all active:scale-95"
                    >
                      <FileCheck2 className="w-4 h-4" />
                      <span>View Certificate</span>
                    </a>

                    <a
                      href={hackathon.certificatePdf}
                      download={`${hackathon.id}_certificate.pdf`}
                      className="p-2.5 rounded-xl text-[#2563EB] bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-all active:scale-95"
                      title="Download PDF"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-[11px] text-slate-400 font-medium">
                      Status: Verified Participation
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
