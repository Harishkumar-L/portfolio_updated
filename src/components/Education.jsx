import React from 'react';
import {
  GraduationCap,
  Building,
  Calendar,
  MapPin,
  BookOpen,
  CheckCircle,
  Award,
  Sparkles
} from 'lucide-react';
import { profileData } from '../data/profile';

export default function Education() {
  const courseWork = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (Java)',
    'Database Management Systems',
    'Computer Organization & Architecture',
    'Discrete Mathematics',
    'Web Engineering Fundamentals'
  ];

  return (
    <section id="education" className="py-20 md:py-28 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Foundations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Education
          </h2>
          <p className="text-[#64748B] mt-3 text-base sm:text-lg">
            Undergraduate engineering studies in Information Technology at Karpagam College of Engineering.
          </p>
          <div className="w-16 h-1 bg-[#3B82F6] mx-auto mt-4 rounded-full" />
        </div>

        {/* Education Timeline & Card */}
        <div className="max-w-4xl mx-auto">
          <div className="portfolio-card rounded-3xl bg-white border border-[#DBEAFE] p-6 sm:p-9 shadow-sm relative overflow-hidden">
            
            {/* Top Accent Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#93C5FD]" />

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#3B82F6] to-[#60A5FA] flex items-center justify-center text-white shrink-0 shadow-xs">
                  <GraduationCap className="w-7 h-7" />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                      Currently Pursuing
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#1E40AF] border border-blue-200">
                      3rd Semester
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0F172A] tracking-tight">
                    Bachelor of Technology (B.Tech)
                  </h3>
                  <h4 className="text-lg font-semibold text-[#2563EB]">
                    Department of Information Technology
                  </h4>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 mt-1">
                    <Building className="w-4 h-4 text-slate-400" />
                    <span>Karpagam College of Engineering</span>
                  </div>
                </div>
              </div>

              {/* Location and Timeline Meta */}
              <div className="flex flex-col sm:items-end gap-2 text-xs font-medium text-slate-500 bg-[#F8FAFC] md:bg-transparent p-4 md:p-0 rounded-2xl border md:border-0 border-slate-100">
                <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  <span>2025 – 2029</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-600">
                  <MapPin className="w-4 h-4 text-rose-500" />
                  <span>Coimbatore, Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            {/* Academic Highlights & Key Subject Areas */}
            <div className="pt-6 border-t border-slate-100">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-[#3B82F6]" />
                Relevant Core Coursework & Knowledge Areas
              </h5>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {courseWork.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-blue-50/50 border border-blue-100 flex items-center gap-2.5 text-xs font-medium text-slate-700"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
