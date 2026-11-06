import React from 'react';
import {
  Code2,
  Award,
  Terminal,
  Mail,
  Download,
  Heart,
  ArrowUp
} from 'lucide-react';
import {
  GithubIcon,
  LinkedinIcon,
  LeetCodeIcon,
  CodeChefIcon,
  GeeksforGeeksIcon
} from './Icons';
import { profileData } from '../data/profile';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Internship', href: '#internship' },
  { name: 'Projects', href: '#projects' },
  { name: 'Hackathons', href: '#hackathons' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Education', href: '#education' },
  { name: 'Resume', href: '#resume' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-[#DBEAFE] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-100">
          
          {/* Brand & Bio */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#3B82F6] to-[#60A5FA] flex items-center justify-center text-white font-bold text-lg shadow-2xs">
                HK
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-[#0F172A]">
                  Harish Kumar
                </h3>
                <p className="text-xs text-[#2563EB] font-semibold">
                  Aspiring Software Developer
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 max-w-sm">
              B.Tech Information Technology student at Karpagam College of Engineering, passionate about Data Structures, Java, full stack engineering, and AI solutions.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-600">
              <Mail className="w-4 h-4 text-[#3B82F6]" />
              <a href={`mailto:${profileData.email}`} className="text-[#2563EB] hover:underline font-medium">
                {profileData.email}
              </a>
            </div>
          </div>

          {/* Quick Links Navigation */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 hover:text-[#2563EB] py-1 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Profiles & Resume */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                Connect & Verify
              </h4>
              
              {/* Profile Icons */}
              <div className="flex flex-wrap gap-2 mb-6">
                <a
                  href={profileData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 transition-colors"
                  title="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={profileData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-[#2563EB] transition-colors"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={profileData.socialLinks.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-600 transition-colors"
                  title="LeetCode"
                >
                  <LeetCodeIcon className="w-4 h-4" />
                </a>

                <a
                  href={profileData.socialLinks.codechef}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-orange-50 hover:bg-orange-100 border border-orange-200 text-orange-600 transition-colors"
                  title="CodeChef"
                >
                  <CodeChefIcon className="w-4 h-4" />
                </a>

                <a
                  href={profileData.socialLinks.geeksforgeeks}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-600 transition-colors"
                  title="GeeksforGeeks"
                >
                  <GeeksforGeeksIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <a
                href={profileData.resumePath}
                download="Harish_Kumar_Resume.pdf"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8] bg-blue-50/80 px-4 py-2 rounded-xl border border-blue-200 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            Designed & Developed by <span className="font-bold text-slate-800">Harish Kumar</span>.
          </p>

          <p className="flex items-center gap-1">
            <span>&copy; {new Date().getFullYear()} Harish Kumar. All rights reserved.</span>
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-[#2563EB] border border-slate-200 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
