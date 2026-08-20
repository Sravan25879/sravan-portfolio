import React from 'react';
import { Code2, ArrowUp } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';
import './Footer.css';

const Footer = () => {
  const currentYear = 2026;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-main-grid">
          {/* Brand Info Column */}
          <div className="footer-brand-col">
            <a href="#home" className="footer-logo">
              <span className="logo-icon">
                <Code2 size={20} />
              </span>
              <span className="logo-text">
                SRAVAN<span className="logo-accent">.DEV</span>
              </span>
            </a>
            <p className="footer-tagline">
              Building, learning, and exploring AI &amp; software.
            </p>
            <div className="footer-student-meta">
              B.Tech CSE (AI &amp; ML) • Vel Tech University
            </div>
          </div>

          {/* Nav Links Column */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Quick Navigation</h4>
            <ul className="footer-nav-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Social Links & Back to Top */}
          <div className="footer-social-col">
            <h4 className="footer-col-title">Connect</h4>
            <div className="footer-social-buttons">
              <a
                href="https://github.com/Sravan25879"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary footer-social-btn"
              >
                <Github size={16} /> GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/sravan-vel-tech-chennai-496b2b39b/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary footer-social-btn"
              >
                <Linkedin size={16} /> LinkedIn ↗
              </a>
              <a
                href="https://leetcode.com/u/Sravan25879/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary footer-social-btn"
              >
                <Code2 size={16} /> LeetCode ↗
              </a>
            </div>

            <button className="back-to-top-btn" onClick={scrollToTop}>
              Back to top <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Copyright Sub-bar */}
        <div className="footer-bottom-bar">
          <p>© {currentYear} Sravan Kumar Reddy. All rights reserved.</p>
          <p className="deployment-note">Production static build configured for Render.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
