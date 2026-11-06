import React from 'react';
import {
  Mail,
  FileText,
  ArrowRight,
  Code2,
  Terminal,
  Award,
  Sparkles,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import {
  GithubIcon,
  LinkedinIcon,
  LeetCodeIcon,
  CodeChefIcon,
  GeeksforGeeksIcon
} from './Icons';
import { profileData } from '../data/profile';

export default function Hero({ onOpenResumeModal }) {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-24 md:pt-32 pb-16 flex items-center overflow-hidden bg-gradient-to-b from-[#EBF5FF] via-[#F0F7FF] to-[#FFFFFF]"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-200/40 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-sky-200/30 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#DBEAFE_1px,transparent_1px),linear-gradient(to_bottom,#DBEAFE_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-[#2563EB] text-xs sm:text-sm font-semibold mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-ping" />
              <span>Available for Software Engineering Opportunities</span>
            </div>

            {/* Greetings & Headline */}
            <p className="text-base sm:text-lg font-medium text-[#64748B] tracking-wide mb-1">
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight mb-4">
              Harish Kumar
            </h1>

            {/* Tagline / Professional Subtitle */}
            <div className="text-lg sm:text-xl font-semibold text-[#2563EB] mb-5 flex flex-wrap items-center gap-2">
              <span>Aspiring Software Developer</span>
              <span className="text-slate-300">•</span>
              <span>B.Tech IT Student</span>
              <span className="text-slate-300">•</span>
              <span>Problem Solver</span>
            </div>

            {/* Introduction */}
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed mb-8 max-w-2xl">
              {profileData.intro}
            </p>

            {/* Badges Bar */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-8">
              {profileData.badges.map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white border border-[#DBEAFE] text-[#1E293B] shadow-2xs hover:border-[#93C5FD] transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
                  {b.label}
                </span>
              ))}
            </div>

            {/* Three CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 w-full sm:w-auto">
              {/* CTA 1: Explore My Projects */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] shadow-sm hover:shadow-md transition-all active:scale-95 text-sm sm:text-base w-full sm:w-auto"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* CTA 2: View Resume */}
              <a
                href={profileData.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-[#1E40AF] bg-white border border-[#BFDBFE] hover:bg-blue-50/70 hover:border-[#93C5FD] shadow-2xs transition-all active:scale-95 text-sm sm:text-base w-full sm:w-auto"
              >
                <FileText className="w-4 h-4 text-[#3B82F6]" />
                <span>View Resume</span>
              </a>

              {/* CTA 3: Contact Me */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-[#475569] bg-transparent hover:bg-blue-100/50 hover:text-[#0F172A] border border-transparent transition-all active:scale-95 text-sm sm:text-base w-full sm:w-auto"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons & Email Address */}
            <div className="pt-6 border-t border-[#DBEAFE]/80 w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              {/* Profile Icons */}
              <div className="flex items-center gap-3">
                <a
                  href={profileData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-[#DBEAFE] text-slate-700 hover:text-black hover:border-slate-400 hover:shadow-xs transition-all"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={profileData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-[#DBEAFE] text-blue-600 hover:text-blue-700 hover:border-blue-300 hover:shadow-xs transition-all"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={profileData.socialLinks.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-[#DBEAFE] text-amber-600 hover:text-amber-700 hover:border-amber-300 hover:shadow-xs transition-all"
                  title="LeetCode Profile"
                >
                  <LeetCodeIcon className="w-4 h-4" />
                </a>

                <a
                  href={profileData.socialLinks.codechef}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-[#DBEAFE] text-orange-600 hover:text-orange-700 hover:border-orange-300 hover:shadow-xs transition-all"
                  title="CodeChef Profile"
                >
                  <CodeChefIcon className="w-4 h-4" />
                </a>

                <a
                  href={profileData.socialLinks.geeksforgeeks}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-[#DBEAFE] text-emerald-600 hover:text-emerald-700 hover:border-emerald-300 hover:shadow-xs transition-all"
                  title="GeeksforGeeks Profile"
                >
                  <GeeksforGeeksIcon className="w-4 h-4" />
                </a>
              </div>

              {/* Clickable Email Display */}
              <div className="flex items-center gap-2 text-sm text-[#475569]">
                <Mail className="w-4 h-4 text-[#3B82F6]" />
                <a
                  href={`mailto:${profileData.email}`}
                  className="font-medium text-[#2563EB] hover:underline"
                >
                  {profileData.email}
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Professional Profile Photo & Card */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer decorative soft halo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-sky-300/30 rounded-3xl blur-xl transform -rotate-2 scale-105" />

              {/* Photo Frame Container */}
              <div className="relative bg-white p-3 sm:p-4 rounded-3xl border-2 border-[#DBEAFE] shadow-xl overflow-hidden group">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 border border-blue-100">
                  <img
                    src={profileData.photoUrl}
                    alt="Harish Kumar - Professional Portrait"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
                  />

                  {/* Gradient Overlay for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60" />

                  {/* On-image pill */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-white/50 shadow-sm flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-[#0F172A]">Harish Kumar</h4>
                      <p className="text-xs text-[#2563EB] font-medium">B.Tech IT • 3rd Sem</p>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-semibold">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                      Verified
                    </span>
                  </div>
                </div>

                {/* Floating Stat Badge Left */}
                <div className="absolute -bottom-2 -left-2 sm:-left-4 bg-white px-3.5 py-2.5 rounded-2xl border border-blue-200 shadow-lg flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 font-bold text-xs">
                    1.5K+
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Competitive CP</div>
                    <div className="text-xs font-bold text-[#0F172A]">CodeChef Rating</div>
                  </div>
                </div>

                {/* Floating Stat Badge Right */}
                <div className="absolute -top-2 -right-2 sm:-right-4 bg-white px-3.5 py-2.5 rounded-2xl border border-blue-200 shadow-lg flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#3B82F6]">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">DSA Solved</div>
                    <div className="text-xs font-bold text-[#0F172A]">150+ Problems</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
