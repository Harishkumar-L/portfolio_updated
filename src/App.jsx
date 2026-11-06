import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Internship from './components/Internship';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Resume from './components/Resume';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CertificateModal from './components/CertificateModal';

export default function App() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    imageUrl: '',
    title: ''
  });

  const handleOpenCertificateModal = (imageUrl, title) => {
    setModalState({
      isOpen: true,
      imageUrl,
      title
    });
  };

  const handleCloseModal = () => {
    setModalState({
      isOpen: false,
      imageUrl: '',
      title: ''
    });
  };

  return (
    <div className="min-h-screen bg-[#F0F7FF] text-[#0F172A] selection:bg-blue-100 selection:text-blue-700">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResumeModal={() => window.open('/Harish_Kumar_Resume.pdf', '_blank')} />
        <About />
        <Skills />
        <Internship onOpenCertificateModal={handleOpenCertificateModal} />
        <Projects />
        <Hackathons onOpenCertificateModal={handleOpenCertificateModal} />
        <Achievements />
        <Education />
        <Resume onOpenResumeModal={() => window.open('/Harish_Kumar_Resume.pdf', '_blank')} />
        <Certificates onOpenCertificateModal={handleOpenCertificateModal} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Certificate / Lightbox Modal */}
      <CertificateModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        imageUrl={modalState.imageUrl}
        title={modalState.title}
      />
    </div>
  );
}
