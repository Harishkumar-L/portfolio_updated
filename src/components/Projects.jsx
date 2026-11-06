import React, { useState } from 'react';
import {
  ExternalLink,
  Code2,
  FolderGit2,
  Bug,
  ShoppingBag,
  BrainCircuit,
  Bus,
  Sparkles,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/projects';

const iconMap = {
  Bug,
  ShoppingBag,
  BrainCircuit,
  Bus
};

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'ai') return p.category.toLowerCase().includes('ai') || p.category.toLowerCase().includes('research');
    if (filter === 'web') return p.category.toLowerCase().includes('web');
    if (filter === 'core') return p.category.toLowerCase().includes('core');
    return true;
  });

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#F0F7FF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-3 shadow-2xs">
            <FolderGit2 className="w-3.5 h-3.5" />
            Software Engineering & Research
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Featured Projects
          </h2>
          <p className="text-[#64748B] mt-3 text-base sm:text-lg">
            Practical applications, algorithmic software systems, and multimodal machine learning research.
          </p>
          <div className="w-16 h-1 bg-[#3B82F6] mx-auto mt-4 rounded-full" />

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'ai', label: 'AI & Research' },
              { id: 'web', label: 'Web Applications' },
              { id: 'core', label: 'Core Software & Java' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  filter === tab.id
                    ? 'bg-[#3B82F6] text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-blue-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const Icon = iconMap[project.icon] || Code2;

            return (
              <div
                key={project.id}
                className="portfolio-card rounded-3xl bg-white border border-[#DBEAFE] overflow-hidden flex flex-col justify-between group hover:border-[#93C5FD]"
              >
                <div>
                  {/* Visual Header / Card Banner */}
                  <div className={`h-48 bg-gradient-to-br ${project.accent} relative p-6 flex flex-col justify-between overflow-hidden text-white`}>
                    {/* Background abstract grid pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
                    
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold border border-white/30">
                        <Icon className="w-3.5 h-3.5" />
                        {project.category}
                      </span>
                      {project.isFeatured && (
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-400 text-amber-950 uppercase tracking-wide">
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white mb-2 shadow-sm group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white drop-shadow-xs">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7">
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-blue-50/70 border border-blue-200/80 text-xs font-semibold text-[#1E40AF]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between gap-3 bg-slate-50/50">
                  <div className="flex items-center gap-2">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 bg-white border border-slate-200 hover:border-slate-400 hover:bg-slate-50 transition-all shadow-2xs active:scale-95"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>
                    ) : (
                      <span className="text-xs text-slate-400 font-medium italic">
                        Academic / Internal Project
                      </span>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#2563EB] bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-all active:scale-95"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>

                  <span className="text-xs font-semibold text-[#64748B]">
                    Harish Kumar
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
