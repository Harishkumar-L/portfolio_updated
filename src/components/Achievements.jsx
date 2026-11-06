import React, { useState, useEffect, useRef } from 'react';
import {
  Trophy,
  Award,
  Code2,
  Terminal,
  FileCheck,
  Zap,
  Users,
  CheckCircle2,
  ExternalLink,
  Mail,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import {
  GithubIcon,
  LinkedinIcon,
  LeetCodeIcon,
  CodeChefIcon,
  GeeksforGeeksIcon
} from './Icons';
import {
  achievementsStats,
  leadershipAndHonors,
  profileLinks
} from '../data/achievements';

// Helper component for animated count up
function Counter({ targetValue, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let start = 0;
          const end = targetValue;
          const duration = 1800; // 1.8 seconds
          const stepTime = 25;
          const steps = duration / stepTime;
          const increment = end / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.25 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [targetValue, hasAnimated]);

  return (
    <span ref={elementRef} className="font-extrabold tracking-tight">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const statIconMap = {
  Award,
  Code2,
  Terminal,
  FileCheck,
  Zap
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-28 bg-[#F0F7FF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-3 shadow-2xs">
            <Trophy className="w-3.5 h-3.5" />
            Competitive Benchmarks
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Problem Solving & Achievements
          </h2>
          <p className="text-[#64748B] mt-3 text-base sm:text-lg">
            Quantitative metrics reflecting dedication across competitive coding platforms, data structure problem solving, and community initiatives.
          </p>
          <div className="w-16 h-1 bg-[#3B82F6] mx-auto mt-4 rounded-full" />
        </div>

        {/* Animated Coding Statistics Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 mb-16">
          {achievementsStats.map((stat) => {
            const Icon = statIconMap[stat.icon] || Award;

            return (
              <div
                key={stat.id}
                className="portfolio-card bg-white p-5 sm:p-6 rounded-3xl border border-[#DBEAFE] flex flex-col items-center text-center group hover:border-[#93C5FD]"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#3B82F6] to-[#60A5FA] flex items-center justify-center text-white mb-4 shadow-xs group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="text-2xl sm:text-3xl text-[#0F172A] mb-1">
                  <Counter
                    targetValue={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>

                <h3 className="text-xs sm:text-sm font-bold text-[#2563EB] mb-1">
                  {stat.label}
                </h3>

                <p className="text-[11px] text-[#64748B] line-clamp-2">
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>

        {/* Coding & Professional Profiles Cards */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-[#0F172A] mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#3B82F6]" />
            <span>Official Coding & Professional Profiles</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {profileLinks.map((profile) => (
              <a
                key={profile.platform}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-5 rounded-2xl border transition-all flex flex-col justify-between group shadow-2xs hover:shadow-md hover:-translate-y-1 ${profile.bgColor}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {profile.platform}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-800 transition-colors" />
                  </div>

                  <div className={`font-bold text-base mb-1 ${profile.color}`}>
                    {profile.username}
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 mb-4">
                    {profile.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>{profile.badge}</span>
                  <span className="text-blue-600 group-hover:underline">Visit Profile &rarr;</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Additional Achievements & Leadership (Quantum X + Certifications) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadershipAndHonors.map((item, idx) => {
            const isQuantum = item.title.includes('Quantum X');
            return (
              <div
                key={idx}
                className="portfolio-card p-6 sm:p-7 rounded-3xl bg-white border border-[#DBEAFE] flex items-start gap-4"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-xs ${
                  isQuantum ? 'bg-indigo-50 text-indigo-600 border border-indigo-200' : 'bg-blue-50 text-blue-600 border border-blue-200'
                }`}>
                  {isQuantum ? <Users className="w-6 h-6" /> : <CheckCircle2 className="w-6 h-6" />}
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#2563EB] border border-blue-200">
                      {item.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {item.period}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-[#0F172A] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs font-semibold text-slate-500 mb-2">
                    {item.organization}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
