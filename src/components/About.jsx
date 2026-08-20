import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Server, CheckCircle2, GraduationCap, Compass, Terminal, Database } from 'lucide-react';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="about" className="section-spacing about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} /> ABOUT MY JOURNEY
          </div>
          <h2 className="section-title">Computer Science &amp; AI/ML Learner</h2>
          <p className="section-subtitle">
            Combining academic rigor in Computer Science with hands-on software engineering, backend architecture, and AI exploration.
          </p>
        </div>

        {/* Editorial Bento Grid Layout */}
        <motion.div
          className="bento-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Bento Box 1: Student Story & Positioning (Spans 2 columns) */}
          <motion.div className="bento-box bento-main-story" variants={cardVariants}>
            <div className="bento-badge-row">
              <span className="bento-tag green">01 • EDUCATION &amp; GOALS</span>
            </div>
            <h3 className="bento-title">Who I Am</h3>
            <p className="story-paragraph">
              I am currently pursuing my <strong>B.Tech in Computer Science and Engineering</strong> with a specialization in <strong>Artificial Intelligence &amp; Machine Learning</strong> at <strong>Vel Tech University</strong> (expected graduation <strong>2027</strong>).
            </p>
            <p className="story-paragraph">
              My technical journey is driven by curiosity and a desire to build software that solves actual user problems. Rather than focusing purely on theoretical concepts, I actively build full-featured applications that integrate intelligent AI models with structured backend services.
            </p>

            {/* Backend quote box */}
            <div className="backend-quote-box">
              <p className="quote-text">
                "I enjoy building applications across the stack, from responsive interfaces to backend services, REST APIs, databases, and AI-powered functionality."
              </p>
            </div>

            <div className="key-attributes-row">
              <div className="attribute-item">
                <CheckCircle2 size={16} className="attr-check" />
                <span>Vel Tech University (2027)</span>
              </div>
              <div className="attribute-item">
                <CheckCircle2 size={16} className="attr-check" />
                <span>Full-Stack &amp; Backend Learner</span>
              </div>
              <div className="attribute-item">
                <CheckCircle2 size={16} className="attr-check" />
                <span>Practical AI Integration</span>
              </div>
              <div className="attribute-item">
                <CheckCircle2 size={16} className="attr-check" />
                <span>109+ DSA Problems</span>
              </div>
            </div>
          </motion.div>

          {/* Bento Box 2: Backend & REST APIs Focus */}
          <motion.div className="bento-box bento-backend-card" variants={cardVariants}>
            <div className="bento-badge-row">
              <span className="bento-tag yellow">02 • BACKEND ARCHITECTURE</span>
            </div>
            <div className="bento-icon-header">
              <Server size={26} className="bento-icon yellow" />
              <h4 className="bento-sub-title">Backend &amp; APIs</h4>
            </div>
            <p className="bento-desc">
              Designing server-side services, RESTful API endpoints, HTTP request handlers, authentication flows, and relational database connections.
            </p>

            {/* Micro Code Snippet */}
            <div className="bento-micro-code">
              <div className="micro-code-bar">
                <Terminal size={12} /> REST Route Handler
              </div>
              <pre>
                <code>{`@app.route('/api/data')
def get_user_data():
    db.query("SELECT * FROM users")
    return jsonify(success=True)`}</code>
              </pre>
            </div>
          </motion.div>

          {/* Bento Box 3: AI & Machine Learning Pillar */}
          <motion.div className="bento-box bento-ai-card" variants={cardVariants}>
            <div className="bento-badge-row">
              <span className="bento-tag green">03 • AI &amp; MACHINE LEARNING</span>
            </div>
            <div className="bento-icon-header">
              <Brain size={26} className="bento-icon green" />
              <h4 className="bento-sub-title">AI &amp; Machine Learning</h4>
            </div>
            <p className="bento-desc">
              Focusing on artificial intelligence applications, LLM integration, generative tools, and applying intelligent algorithms to practical software problems.
            </p>
            <div className="bento-pills-row">
              <span className="b Bento-pill">Generative AI</span>
              <span className="bento-pill">LLM Applications</span>
              <span className="bento-pill">AI APIs</span>
            </div>
          </motion.div>

          {/* Bento Box 4: Software Development */}
          <motion.div className="bento-box bento-software-card" variants={cardVariants}>
            <div className="bento-badge-row">
              <span className="bento-tag yellow">04 • SOFTWARE DEV</span>
            </div>
            <div className="bento-icon-header">
              <Code size={26} className="bento-icon yellow" />
              <h4 className="bento-sub-title">Software Development</h4>
            </div>
            <p className="bento-desc">
              Building reliable software with clean architecture, modern frontend interfaces, object-oriented design principles, and intuitive user workflows.
            </p>
          </motion.div>

          {/* Bento Box 5: Problem Solving */}
          <motion.div className="bento-box bento-dsa-card" variants={cardVariants}>
            <div className="bento-badge-row">
              <span className="bento-tag green">05 • DSA &amp; LOGIC</span>
            </div>
            <div className="bento-icon-header">
              <Compass size={26} className="bento-icon green" />
              <h4 className="bento-sub-title">Problem Solving</h4>
            </div>
            <p className="bento-desc">
              Practicing Data Structures and Algorithms with 109+ LeetCode problems solved, continually honing algorithmic logic and optimal efficiency.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
