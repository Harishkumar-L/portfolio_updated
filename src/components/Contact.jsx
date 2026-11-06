import React, { useState } from 'react';
import {
  Mail,
  Send,
  Phone,
  MapPin,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Copy,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { profileData } from '../data/profile';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 }
    });

    // Formulate mailto URL with pre-filled sender information
    const subject = encodeURIComponent(
      formData.subject.trim()
        ? `[Portfolio Inquiry] ${formData.subject}`
        : `[Portfolio Inquiry] Message from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hello Harish,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent from your Portfolio Website`
    );

    const mailtoUrl = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F0F7FF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-3 shadow-2xs">
            <Mail className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Let's Connect
          </h2>
          <p className="text-[#64748B] mt-3 text-base sm:text-lg">
            I'm always interested in connecting with developers, learning new technologies, collaborating on projects, and exploring software development opportunities.
          </p>
          <div className="w-16 h-1 bg-[#3B82F6] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Contact Info & Profiles */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Contact Details Card */}
            <div className="portfolio-card bg-white p-6 sm:p-8 rounded-3xl border border-[#DBEAFE]">
              <h3 className="text-xl font-bold text-[#0F172A] mb-6">
                Direct Contact Information
              </h3>

              <div className="space-y-5">
                {/* Email Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#2563EB] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-[#64748B] uppercase tracking-wide">
                      Email Address
                    </div>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-sm font-semibold text-[#0F172A] hover:text-[#2563EB] transition-colors break-all"
                    >
                      {profileData.email}
                    </a>
                    <div className="mt-1">
                      <button
                        onClick={handleCopyEmail}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#2563EB] hover:underline"
                      >
                        <Copy className="w-3 h-3" />
                        <span>{copiedEmail ? 'Copied to clipboard!' : 'Copy email address'}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#64748B] uppercase tracking-wide">
                      Mobile Number
                    </div>
                    <a
                      href={`tel:${profileData.phone}`}
                      className="text-sm font-semibold text-[#0F172A] hover:text-[#2563EB] transition-colors"
                    >
                      {profileData.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#64748B] uppercase tracking-wide">
                      Location
                    </div>
                    <div className="text-sm font-semibold text-[#0F172A]">
                      Coimbatore, Tamil Nadu, India
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Professional Channels
                </h4>
                <div className="flex items-center gap-3">
                  <a
                    href={profileData.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold text-[#1E40AF] bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4 text-blue-600" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={profileData.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold text-slate-800 bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="portfolio-card bg-white p-6 sm:p-9 rounded-3xl border border-[#DBEAFE]">
              <h3 className="text-xl font-bold text-[#0F172A] mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#3B82F6]" />
                <span>Send a Direct Message</span>
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Fill out the form below. It initiates a verified email draft directly to Harish Kumar.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs text-emerald-800">
                    <p className="font-bold">Message Draft Generated!</p>
                    <p className="mt-0.5 text-emerald-700">
                      Your default mail application has opened with your message. If it didn't open automatically, you can send an email directly to{' '}
                      <a href={`mailto:${profileData.email}`} className="underline font-bold">
                        {profileData.email}
                      </a>.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Johnson"
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none ${
                      errors.name
                        ? 'border-rose-300 bg-rose-50/50 focus:border-rose-500'
                        : 'border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#3B82F6]'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@example.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none ${
                      errors.email
                        ? 'border-rose-300 bg-rose-50/50 focus:border-rose-500'
                        : 'border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#3B82F6]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Subject (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Internship Opportunity / Collaboration"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#3B82F6] text-sm transition-all focus:outline-none"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none ${
                      errors.message
                        ? 'border-rose-300 bg-rose-50/50 focus:border-rose-500'
                        : 'border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#3B82F6]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-white bg-[#3B82F6] hover:bg-[#2563EB] shadow-xs hover:shadow-md transition-all active:scale-98 text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
