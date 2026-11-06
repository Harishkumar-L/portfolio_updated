import React from 'react';
import {
  Code2,
  Coffee,
  Layout,
  Palette,
  FileCode,
  Box,
  Binary,
  Boxes,
  GitBranch,
  Terminal,
  Server,
  Cpu,
  Database,
  HardDrive,
  Sparkles,
  Layers,
  GraduationCap
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { skillsData } from '../data/skills';

// Map icon strings to Lucide components
const iconMap = {
  Code2,
  Coffee,
  Layout,
  Palette,
  FileCode,
  Box,
  Binary,
  Boxes,
  GitBranch,
  Github: GithubIcon,
  Terminal,
  Server,
  Cpu,
  Database,
  HardDrive
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-[#F0F7FF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-3 shadow-2xs">
            <Layers className="w-3.5 h-3.5" />
            Core Stack & Tooling
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Technical Skills
          </h2>
          <p className="text-[#64748B] mt-3 text-base sm:text-lg">
            A comprehensive breakdown of programming languages, core computer science concepts, web engineering tools, and upcoming back-end technologies.
          </p>
          <div className="w-16 h-1 bg-[#3B82F6] mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillsData.map((category) => {
            const isCurrentlyLearning = category.isLearning;

            return (
              <div
                key={category.category}
                className={`portfolio-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative ${
                  isCurrentlyLearning
                    ? 'border-2 border-indigo-200/90 bg-gradient-to-b from-white to-indigo-50/30'
                    : 'bg-white'
                }`}
              >
                <div>
                  {/* Category Title & Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-[#0F172A] tracking-tight">
                      {category.category}
                    </h3>
                    {isCurrentlyLearning ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold border border-indigo-200">
                        <Sparkles className="w-3 h-3 text-indigo-600" />
                        In Progress
                      </span>
                    ) : (
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        {category.items.length} Techs
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#64748B] mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Items list */}
                  <div className="grid grid-cols-1 gap-2.5">
                    {category.items.map((item) => {
                      const IconComponent = iconMap[item.icon] || Code2;
                      return (
                        <div
                          key={item.name}
                          className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-blue-300 hover:bg-blue-50/40 transition-all group"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg border ${item.bg} group-hover:scale-105 transition-transform`}>
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <span className="font-semibold text-sm text-[#1E293B] group-hover:text-[#2563EB] transition-colors">
                              {item.name}
                            </span>
                          </div>
                          
                          <span className="text-[11px] font-medium text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200/80">
                            {item.tag}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {isCurrentlyLearning && (
                  <div className="mt-6 pt-4 border-t border-indigo-100 flex items-center gap-2 text-xs text-indigo-700 font-medium">
                    <GraduationCap className="w-4 h-4 text-indigo-600" />
                    <span>Focusing on REST APIs, Auth & Databases</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Note on honesty and proficiency */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-[#DBEAFE] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Verified student competencies without fabricated percentages or artificial ratings.
          </p>
        </div>

      </div>
    </section>
  );
}
