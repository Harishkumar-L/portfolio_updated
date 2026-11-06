import React from 'react';
import {
  GraduationCap,
  Target,
  Briefcase,
  Compass,
  CheckCircle2,
  Sparkles,
  MapPin,
  Heart
} from 'lucide-react';
import { profileData } from '../data/profile';

export default function About() {
  const cards = [
    {
      title: "Education",
      subtitle: "B.Tech Information Technology",
      institution: "Karpagam College of Engineering",
      detail: "3rd Semester • Coimbatore, Tamil Nadu",
      icon: GraduationCap,
      color: "from-blue-500 to-sky-500",
      bgLight: "bg-blue-50/80 border-blue-200"
    },
    {
      title: "Current Focus",
      subtitle: "Java and DSA",
      institution: "Problem Solving & Core CS",
      detail: "1,500+ CodeChef • 100+ LeetCode",
      icon: Target,
      color: "from-indigo-500 to-blue-600",
      bgLight: "bg-indigo-50/80 border-indigo-200"
    },
    {
      title: "Experience",
      subtitle: "Full Stack Development",
      institution: "Thiranex Internship",
      detail: "Completed • Certificate Verified",
      icon: Briefcase,
      color: "from-cyan-500 to-teal-500",
      bgLight: "bg-cyan-50/80 border-cyan-200"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Background & Mindset
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-[#3B82F6] mx-auto mt-4 rounded-full" />
        </div>

        {/* 3 Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="portfolio-card p-6 sm:p-7 rounded-2xl relative overflow-hidden group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                    {card.title}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#3B82F6] to-[#60A5FA] flex items-center justify-center text-white shadow-xs group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-1">
                  {card.subtitle}
                </h3>
                <p className="text-sm font-semibold text-[#2563EB] mb-2">
                  {card.institution}
                </p>
                <p className="text-xs text-[#64748B]">
                  {card.detail}
                </p>
                
                {/* Subtle bottom bar accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>

        {/* Main Narrative & Career Objective */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Biography Text */}
          <div className="lg:col-span-8 bg-[#F8FAFC] border border-[#DBEAFE] rounded-3xl p-6 sm:p-9 shadow-xs">
            <h3 className="text-xl font-bold text-[#0F172A] mb-5 flex items-center gap-2">
              <span>Engineering Journey & Aspirations</span>
            </h3>
            
            <div className="space-y-4 text-slate-700 leading-relaxed text-base">
              {profileData.aboutText.map((paragraph, index) => (
                <p key={index} className="text-[#334155]">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Interests List */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-rose-500" />
                Areas of Technical Interest
              </h4>
              <div className="flex flex-wrap gap-2">
                {profileData.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 rounded-xl bg-white border border-blue-200 text-xs font-semibold text-[#1E293B] shadow-2xs hover:border-blue-400 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Career Objective Card */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="p-7 rounded-3xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white shadow-lg relative overflow-hidden">
              {/* Decorative circle */}
              <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-white/10 rounded-full pointer-events-none" />
              
              <div className="flex items-center gap-2 text-blue-200 text-xs font-bold uppercase tracking-wider mb-4">
                <Compass className="w-4 h-4 text-blue-300" />
                Career Objective
              </div>
              <p className="text-base sm:text-lg font-medium leading-relaxed italic text-blue-50">
                "{profileData.careerObjective}"
              </p>

              <div className="mt-6 pt-5 border-t border-blue-400/40 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
                  HK
                </div>
                <div>
                  <div className="text-sm font-bold">Harish Kumar</div>
                  <div className="text-xs text-blue-200">B.Tech IT Student</div>
                </div>
              </div>
            </div>

            {/* Quick College Location Badge */}
            <div className="p-5 rounded-2xl bg-[#F0F7FF] border border-[#DBEAFE] flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-blue-200 flex items-center justify-center text-[#2563EB] shadow-2xs">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#64748B] uppercase tracking-wide">Campus Location</div>
                <div className="text-sm font-semibold text-[#0F172A]">Coimbatore, Tamil Nadu, India</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
