import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, CheckCircle2, Sparkles, AlertCircle, X } from 'lucide-react';
import './ResumeCTA.css';

const ResumeCTA = () => {
  const [showNotice, setShowNotice] = useState(false);

  const handleResumeDownload = (e) => {
    fetch('/resume.pdf', { method: 'HEAD' })
      .then((res) => {
        if (!res.ok) {
          e.preventDefault();
          setShowNotice(true);
        }
      })
      .catch(() => {
        e.preventDefault();
        setShowNotice(true);
      });
  };

  return (
    <section id="resume" className="section-spacing resume-section">
      <div className="container">
        <motion.div
          className="resume-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="resume-content">
            <div className="resume-tag">
              <Sparkles size={14} /> CURRICULUM VITAE
            </div>
            <h2 className="resume-heading">Want to know more about me?</h2>
            <p className="resume-description">
              Take a closer look at my skills, projects, education, and technical background in a clean, recruiter-ready PDF format.
            </p>

            <div className="resume-highlights-row">
              <div className="r-item">
                <CheckCircle2 size={16} className="r-check" /> CSE &amp; AI/ML Focus
              </div>
              <div className="r-item">
                <CheckCircle2 size={16} className="r-check" /> CampusGPT Project
              </div>
              <div className="r-item">
                <CheckCircle2 size={16} className="r-check" /> 109+ LeetCode DSA
              </div>
            </div>

            <div className="resume-actions">
              <a
                href="/resume.pdf"
                download="Sravan_Kumar_Reddy_Resume.pdf"
                className="btn-primary resume-download-btn"
                onClick={handleResumeDownload}
              >
                <Download size={18} /> Download Resume (PDF)
              </a>
            </div>
          </div>

          <div className="resume-visual-side">
            <div className="pdf-preview-box">
              <FileText size={48} className="pdf-icon" />
              <span className="pdf-name">Sravan_Kumar_Reddy_Resume.pdf</span>
              <span className="pdf-status">RECRUITER READY • B.TECH CSE</span>
            </div>
          </div>
        </motion.div>

        {showNotice && (
          <div className="resume-modal-overlay" onClick={() => setShowNotice(false)}>
            <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div className="modal-title-wrap">
                  <AlertCircle size={20} className="alert-icon" />
                  <h3>Resume File Reference</h3>
                </div>
                <button className="modal-close" onClick={() => setShowNotice(false)}>
                  <X size={18} />
                </button>
              </div>
              <div className="modal-body">
                <p>
                  The website is configured to serve your resume directly from:
                </p>
                <code className="path-code">public/resume.pdf</code>
                <p className="modal-subtext">
                  To activate instant 1-click downloading, simply place your PDF file named <strong>resume.pdf</strong> into the <strong>public/</strong> folder!
                </p>
                <button className="btn-primary modal-ok-btn" onClick={() => setShowNotice(false)}>
                  Got it!
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResumeCTA;
