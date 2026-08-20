import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Copy, Check, Info, Sparkles, Code2 } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmittedNotice, setFormSubmittedNotice] = useState(false);

  const emailAddress = 'sravankumar6653@gmail.com';
  const githubUrl = 'https://github.com/Sravan25879';
  const linkedinUrl = 'https://www.linkedin.com/in/sravan-vel-tech-chennai-496b2b39b/';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmittedNotice(true);
  };

  return (
    <section id="contact" className="section-spacing contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} /> GET IN TOUCH
          </div>
          <h2 className="section-title">Let's Connect.</h2>
          <p className="section-subtitle">
            I'm always interested in learning, building, and connecting with people working on interesting technology.
          </p>
        </div>

        <motion.div
          className="contact-grid"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Column: Direct Info & Social Links */}
          <div className="contact-info-card">
            <h3 className="info-card-title">Direct Contact Information</h3>
            <p className="info-card-sub">
              Feel free to reach out directly via email or connect with me on GitHub and LinkedIn.
            </p>

            <div className="contact-methods-list">
              {/* Email Card */}
              <div className="contact-method-item">
                <div className="method-icon-box">
                  <Mail size={20} className="m-icon green" />
                </div>
                <div className="method-details">
                  <span className="method-label">Primary Email</span>
                  <a href={`mailto:${emailAddress}`} className="method-value-link">
                    {emailAddress}
                  </a>
                </div>
                <button
                  className="copy-btn"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check size={16} className="check-green" /> : <Copy size={16} />}
                </button>
              </div>

              {/* GitHub Card */}
              <div className="contact-method-item">
                <div className="method-icon-box">
                  <Github size={20} className="m-icon yellow" />
                </div>
                <div className="method-details">
                  <span className="method-label">GitHub Profile</span>
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="method-value-link"
                  >
                    github.com/Sravan25879 ↗
                  </a>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div className="contact-method-item">
                <div className="method-icon-box">
                  <Linkedin size={20} className="m-icon green" />
                </div>
                <div className="method-details">
                  <span className="method-label">LinkedIn Connection</span>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="method-value-link"
                  >
                    linkedin.com/in/sravan ↗
                  </a>
                </div>
              </div>

              {/* LeetCode Card */}
              <div className="contact-method-item">
                <div className="method-icon-box">
                  <Code2 size={20} className="m-icon yellow" />
                </div>
                <div className="method-details">
                  <span className="method-label">LeetCode Profile</span>
                  <a
                    href="https://leetcode.com/u/Sravan25879/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="method-value-link"
                  >
                    leetcode.com/u/Sravan25879 ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="contact-actions-row">
              <a href={`mailto:${emailAddress}`} className="btn-primary flex-1">
                <Mail size={16} /> Email Me Directly
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-card">
            <h3 className="form-card-title">Send a Message</h3>

            {/* Honest Frontend Notice */}
            <div className="frontend-form-notice">
              <Info size={16} className="notice-info-icon" />
              <span>
                Contact form is currently frontend-only. Please use the email button to reach me directly.
              </span>
            </div>

            <form onSubmit={handleFormSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="e.g. Alex Johnson"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="e.g. alex@company.com"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  required
                  placeholder="Tell me about your project, internship opportunity, or question..."
                  className="form-input form-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary form-submit-btn">
                <Send size={16} /> Submit Message
              </button>

              {formSubmittedNotice && (
                <div className="submitted-alert">
                  <Check size={16} className="check-icon" />
                  <span>
                    Thank you! Since the form is frontend-only, please also send your note directly via <a href={`mailto:${emailAddress}`}><strong>{emailAddress}</strong></a>.
                  </span>
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
