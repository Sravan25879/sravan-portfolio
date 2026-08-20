import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal, Sparkles, Code, Cpu, Database, Play, CheckCircle2 } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';
import './Hero.css';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('app.py');
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState([
    { type: 'sys', text: 'Initializing SRAVAN.DEV Developer Kernel v2.0...' },
    { type: 'sys', text: 'Connected to Vel Tech University CSE AI/ML Node.' },
    { type: 'out', text: 'Type "help" or "sravan" to run system diagnostics.' },
  ]);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    const newLogs = [...terminalLogs, { type: 'cmd', text: `$ ${terminalInput}` }];

    if (cmd === 'help') {
      newLogs.push({
        type: 'out',
        text: 'Available commands: sravan, campusgpt, skills, clear, leetcode',
      });
    } else if (cmd === 'sravan') {
      newLogs.push({
        type: 'out',
        text: 'Sravan Kumar Reddy | B.Tech CSE (AI/ML) | Vel Tech University 2027',
      });
    } else if (cmd === 'campusgpt') {
      newLogs.push({
        type: 'out',
        text: 'CampusGPT AI Assistant: LIVE on Render (https://campus-copilot-48sq.onrender.com)',
      });
    } else if (cmd === 'skills') {
      newLogs.push({
        type: 'out',
        text: 'Stack: Python, Flask, Node.js, Express, React, MySQL, REST APIs, AI/ML',
      });
    } else if (cmd === 'leetcode') {
      newLogs.push({
        type: 'out',
        text: 'LeetCode Progress: 109+ Data Structures & Algorithms problems solved.',
      });
    } else if (cmd === 'clear') {
      setTerminalLogs([]);
      setTerminalInput('');
      return;
    } else {
      newLogs.push({
        type: 'err',
        text: `Command not found: "${cmd}". Type "help" for options.`,
      });
    }

    setTerminalLogs(newLogs);
    setTerminalInput('');
  };

  const codeSnippets = {
    'app.py': `# CampusGPT AI Backend Engine
from flask import Flask, request, jsonify
from ai_copilot import CampusGPTEngine

app = Flask(__name__)
ai_copilot = CampusGPTEngine(model="gemini-flash")

@app.route('/api/v1/copilot', methods=['POST'])
def handle_copilot():
    data = request.get_json()
    student_query = data.get('query')
    mode = data.get('mode', 'study_assistant')
    
    # Process AI prompt for B.Tech placement & revision
    response = ai_copilot.generate_response(
        prompt=student_query,
        context_mode=mode
    )
    return jsonify({
        "status": "success",
        "output": response,
        "engine": "CampusGPT v2.0"
    }), 200`,
    'ai_engine.py': `# Core AI & NLP Pipeline
class CampusGPTEngine:
    def __init__(self, model):
        self.model = model
        self.system_prompt = "You are CampusGPT, an AI assistant for CSE students."

    def generate_response(self, prompt, context_mode):
        # 1. Parse student intent (Flashcards, Resume, Interview)
        # 2. Query LLM API backend
        # 3. Format structured JSON response
        return {
            "mode": context_mode,
            "response": f"Generated insights for: {prompt[:30]}..."
        }`,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-background-glow">
        <div className="glow-circle glow-green"></div>
        <div className="glow-circle glow-yellow"></div>
      </div>

      <div className="container hero-container">
        {/* Left Column: Text & CTAs */}
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Small Badge */}
          <motion.div className="hero-badge" variants={itemVariants}>
            <Sparkles size={14} className="badge-sparkle" />
            <span>COMPUTER SCIENCE • AI/ML • DEVELOPER</span>
          </motion.div>

          {/* Main Greeting & Headline */}
          <motion.h1 className="hero-title" variants={itemVariants}>
            <span className="greeting-text">Hi, I'm Sravan Kumar Reddy.</span>
            <span className="headline-text">
              Building practical software with <span className="text-green-gradient">AI &amp; code</span>.
            </span>
          </motion.h1>

          {/* Supporting Paragraph */}
          <motion.p className="hero-subtitle" variants={itemVariants}>
            I'm a B.Tech Computer Science and AI/ML student passionate about building practical software, 
            exploring artificial intelligence, developing backend systems, solving problems, and turning ideas into useful applications.
          </motion.p>

          {/* Action CTAs */}
          <motion.div className="hero-ctas" variants={itemVariants}>
            <a href="#projects" className="btn-primary hero-btn">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="/resume.pdf" download="Sravan_Kumar_Reddy_Resume.pdf" className="btn-secondary hero-btn">
              <Download size={18} /> Download Resume
            </a>
            <a href="#contact" className="hero-connect-link">
              Let's Connect <span className="arrow-accent">→</span>
            </a>
          </motion.div>

          {/* Social Links & Stat Pill */}
          <motion.div className="hero-footer-row" variants={itemVariants}>
            <div className="social-links-inline">
              <a
                href="https://github.com/Sravan25879"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
              >
                <Github size={16} /> GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/sravan-vel-tech-chennai-496b2b39b/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
              >
                <Linkedin size={16} /> LinkedIn ↗
              </a>
            </div>

            <a
              href="https://leetcode.com/u/Sravan25879/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-stat-pill"
              title="View LeetCode Profile"
            >
              <span className="stat-highlight">109+</span> LeetCode Solved ↗
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Bespoke Interactive IDE & Terminal Canvas */}
        <motion.div
          className="hero-visual-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-ide-frame">
            {/* Top Bar with Tab Switchers */}
            <div className="ide-top-bar">
              <div className="ide-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>

              <div className="ide-tabs">
                <button
                  className={`ide-tab ${activeTab === 'app.py' ? 'active' : ''}`}
                  onClick={() => setActiveTab('app.py')}
                >
                  <Code size={13} className="tab-icon green" /> app.py
                </button>
                <button
                  className={`ide-tab ${activeTab === 'ai_engine.py' ? 'active' : ''}`}
                  onClick={() => setActiveTab('ai_engine.py')}
                >
                  <Cpu size={13} className="tab-icon yellow" /> ai_engine.py
                </button>
                <button
                  className={`ide-tab ${activeTab === 'terminal' ? 'active' : ''}`}
                  onClick={() => setActiveTab('terminal')}
                >
                  <Terminal size={13} className="tab-icon green" /> terminal
                </button>
              </div>
            </div>

            {/* IDE Body Content */}
            <div className="ide-body">
              {activeTab !== 'terminal' ? (
                <div className="code-editor-view">
                  <div className="line-numbers">
                    {codeSnippets[activeTab].split('\n').map((_, i) => (
                      <span key={i}>{i + 1}</span>
                    ))}
                  </div>
                  <pre className="code-content">
                    <code>{codeSnippets[activeTab]}</code>
                  </pre>
                </div>
              ) : (
                <div className="interactive-terminal-view">
                  <div className="terminal-logs-scroll">
                    {terminalLogs.map((log, idx) => (
                      <div key={idx} className={`term-log term-${log.type}`}>
                        {log.text}
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleCommandSubmit} className="terminal-input-form">
                    <span className="prompt-symbol">$</span>
                    <input
                      type="text"
                      className="term-input"
                      placeholder="Type 'help', 'sravan', or 'campusgpt'..."
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                    />
                    <button type="submit" className="term-exec-btn" title="Run command">
                      <Play size={12} />
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Status Footer Bar */}
            <div className="ide-footer-bar">
              <div className="status-live">
                <span className="live-pulse"></span>
                <span>Vel Tech University • CSE (AI/ML) 2027</span>
              </div>
              <div className="backend-indicator">
                <Database size={13} /> Python / Flask / REST API
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
