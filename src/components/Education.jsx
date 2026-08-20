import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle } from 'lucide-react';
import './Education.css';

const Education = () => {
  const academicHighlights = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (Java / C++)',
    'Database Management Systems (DBMS & SQL)',
    'Artificial Intelligence & Machine Learning Foundations',
    'Software Engineering & Web Technologies',
    'Computer Networks & Operating Systems',
  ];

  return (
    <section id="education" className="section-spacing education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} /> ACADEMIC BACKGROUND
          </div>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Rigorous undergraduate education in Computer Science and Artificial Intelligence.
          </p>
        </div>

        {/* Education Card Timeline */}
        <div className="education-timeline">
          <div className="timeline-node">
            <div className="node-dot"></div>
          </div>

          <motion.div
            className="education-card"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="edu-card-header">
              <div>
                <span className="degree-badge">B.TECH CSE (AI &amp; ML)</span>
                <h3 className="edu-degree">
                  B.Tech in Computer Science and Engineering
                </h3>
                <h4 className="edu-specialization">
                  Specialization: Artificial Intelligence &amp; Machine Learning
                </h4>
              </div>

              <div className="edu-meta-pills">
                <div className="meta-pill">
                  <Calendar size={14} className="meta-icon" />
                  <span>Expected Graduation: 2027</span>
                </div>
                <div className="meta-pill">
                  <MapPin size={14} className="meta-icon" />
                  <span>India</span>
                </div>
              </div>
            </div>

            <div className="university-row">
              <span className="university-name">Vel Tech University</span>
            </div>

            <p className="edu-description">
              Studying Computer Science with a focus on Artificial Intelligence and Machine Learning, while developing skills in programming, algorithms, software development, backend technologies, and modern AI applications.
            </p>

            <div className="coursework-box">
              <div className="coursework-title">
                <BookOpen size={16} className="cw-icon" /> Core Academic Focus &amp; Coursework
              </div>
              <div className="coursework-grid">
                {academicHighlights.map((highlight) => (
                  <div key={highlight} className="cw-item">
                    <CheckCircle size={14} className="cw-check" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
