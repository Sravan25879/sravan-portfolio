import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, ExternalLink, Award, CheckCircle, Terminal, HelpCircle, X } from 'lucide-react';
import './Achievements.css';

const Achievements = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="achievements" className="section-spacing achievements-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag yellow-tag">
            <Award size={14} /> ALGORITHMIC FOUNDATION
          </div>
          <h2 className="section-title">Problem Solving &amp; DSA</h2>
          <p className="section-subtitle">
            Strengthening computer science fundamentals, logic, and data structure proficiency through active practice.
          </p>
        </div>

        {/* LeetCode Feature Card with Framer Motion */}
        <motion.div
          className="leetcode-feature-card"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="leetcode-card-left">
            <div className="stat-hero-number">
              109<span className="plus-sign">+</span>
            </div>
            <div className="stat-hero-label">LeetCode Problems Solved</div>
            <p className="stat-hero-desc">
              Consistently practicing Data Structures and Algorithms to strengthen problem-solving and coding skills.
            </p>
            
            <div className="leetcode-action">
              <a
                href="https://leetcode.com/u/Sravan25879/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent leetcode-btn"
              >
                <Code2 size={18} /> View LeetCode Profile (109+ Solved) <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <div className="leetcode-card-right">
            <div className="dsa-topics-box">
              <div className="dsa-header">
                <Terminal size={16} className="dsa-icon" /> Core Problem Solving Focus Areas
              </div>

              <div className="dsa-topic-list">
                <div className="dsa-topic-pill">
                  <CheckCircle size={14} className="check-green" /> Data Structures (Arrays, Strings, Linked Lists)
                </div>
                <div className="dsa-topic-pill">
                  <CheckCircle size={14} className="check-green" /> Algorithmic Logic &amp; Recursion
                </div>
                <div className="dsa-topic-pill">
                  <CheckCircle size={14} className="check-green" /> Object-Oriented System Design Basics
                </div>
                <div className="dsa-topic-pill">
                  <CheckCircle size={14} className="check-green" /> Time &amp; Space Complexity Analysis
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Modal Overlay */}
        {showModal && (
          <div className="leetcode-modal-overlay" onClick={() => setShowModal(false)}>
            <div className="leetcode-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-top">
                <div className="modal-title-row">
                  <HelpCircle size={20} className="modal-info-icon" />
                  <h4>LeetCode Profile Handle</h4>
                </div>
                <button className="modal-close-btn" onClick={() => setShowModal(false)}>
                  <X size={18} />
                </button>
              </div>
              <div className="modal-content">
                <p>
                  <strong>Stat Verified:</strong> 109+ LeetCode problems solved across Data Structures &amp; Algorithms.
                </p>
                <p className="modal-note">
                  <em>Note: My direct LeetCode handle will be linked here once provided. In the meantime, you can inspect my code implementations on GitHub!</em>
                </p>
                <div className="modal-footer-actions">
                  <a
                    href="https://github.com/Sravan25879"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    onClick={() => setShowModal(false)}
                  >
                    View Code on GitHub ↗
                  </a>
                  <button className="btn-secondary" onClick={() => setShowModal(false)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;
