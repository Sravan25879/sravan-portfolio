import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles, Server, Brain, BookOpen, Layers, Check, Info, X, Play, RefreshCw } from 'lucide-react';
import { GithubIcon as Github } from './Icons';
import './Projects.css';

const Projects = () => {
  const [activeSandboxModule, setActiveSandboxModule] = useState('study');
  const [customPrompt, setCustomPrompt] = useState('');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulatedOutput, setSimulatedOutput] = useState(null);
  const [selectedProjectModal, setSelectedProjectModal] = useState(null);

  const featuredProject = {
    id: 'campusgpt',
    number: '01',
    name: 'CampusGPT',
    subtitle: 'AI-Powered Campus Assistant',
    description:
      'CampusGPT is an AI-powered campus assistant designed to help B.Tech students with learning, placement preparation, resume improvement, interview practice, and project guidance through a unified platform.',
    technologies: ['Python', 'Flask', 'AI Integration', 'REST APIs', 'Render Deployment'],
    features: [
      'AI Study Assistant',
      'AI Flashcards & Quizzes',
      'Resume Analyzer',
      'Placement Preparation',
      'Mock Interview',
      'Project Helper',
    ],
    liveUrl: 'https://campus-copilot-48sq.onrender.com',
    githubUrl: 'https://github.com/Sravan25879/CAMPUSGPT',
    badge: 'FEATURED CENTERPIECE',
    liveBadge: 'LIVE ON RENDER',
  };

  const sandboxPresetOutputs = {
    study: {
      title: 'AI Study Assistant & Flashcard Engine',
      prompt: 'Explain RESTful APIs and generate 2 flashcards.',
      response: `[CampusGPT AI Engine]:
REST (Representational State Transfer) is an architectural style for network applications using stateless HTTP requests.

Flashcard #1:
Q: What is idempotency in HTTP methods?
A: GET, PUT, DELETE are idempotent (multiple identical requests yield same server state). POST is non-idempotent.

Flashcard #2:
Q: What status code represents successful resource creation?
A: HTTP 201 Created.`,
    },
    resume: {
      title: 'Resume Analyzer & ATS Optimizer',
      prompt: 'Analyze my B.Tech CSE resume for AI/ML Engineer roles.',
      response: `[CampusGPT ATS Scoring]:
Overall Match Score: 88% (High Alignment for Junior AI/ML Engineer)

Key Strengths Identified:
✓ Python & Flask Backend API Integration
✓ LeetCode Problem Solving (109+ Solved)
✓ GenAI & LLM Application Projects

Recommended Additions:
+ Include specific model evaluation metrics (accuracy %, latency ms).`,
    },
    placement: {
      title: 'Placement Preparation & Company Insights',
      prompt: 'Top 3 Technical Interview Questions for Flask & Python Backend.',
      response: `[CampusGPT Placement Prep]:
1. How does Flask handle request contexts and thread local storage?
2. Explain the difference between Python lists, tuples, and sets in terms of memory & lookup complexity.
3. How do you implement JWT authentication in a RESTful API?`,
    },
    mock: {
      title: 'Interactive Mock Interview Simulator',
      prompt: 'Start mock interview for Python Developer role.',
      response: `[CampusGPT Interviewer]:
"Hello Sravan! Let's start with Data Structures. Can you explain how a Hash Map operates internally in Python (dictionaries), and how collisions are resolved?"`,
    },
  };

  const handleSimulatePrompt = (overridePrompt = null) => {
    const promptToUse = overridePrompt || customPrompt || sandboxPresetOutputs[activeSandboxModule].prompt;
    setIsSimulating(true);
    setSimulatedOutput(null);

    setTimeout(() => {
      setSimulatedOutput({
        prompt: promptToUse,
        response: `[CampusGPT AI Response]:\nProcessed request for "${promptToUse}" using Python/Flask engine.\n\n` + sandboxPresetOutputs[activeSandboxModule].response,
      });
      setIsSimulating(false);
    }, 600);
  };

  const otherProjects = [
    {
      id: 'smart-study',
      number: '02',
      name: 'Smart Study Assistant with AI Flashcards',
      description:
        'An AI-powered study assistant designed to help students organize learning, generate flashcards, and improve revision efficiency.',
      technologies: ['Python', 'AI Integration', 'Flashcard Engine'],
      features: ['AI Flashcard Generator', 'Revision Efficiency Tracker', 'Study Planner'],
    },
    {
      id: 'smart-business',
      number: '03',
      name: 'Smart Business Management Analysis',
      description:
        'A business-focused application designed to organize information and provide useful analysis to support better decision-making.',
      technologies: ['Python', 'Data Analytics', 'Management Interface'],
      features: ['Data Organization', 'Analysis Dashboard', 'Decision Support'],
    },
    {
      id: 'resume-analyzer',
      number: '04',
      name: 'AI Resume Analyzer & Job Recommendation System',
      description:
        'An AI/NLP-based project focused on analyzing resumes and helping match candidates with relevant job opportunities.',
      technologies: ['Python', 'NLP Analysis', 'AI Algorithms'],
      features: ['Resume Content Analysis', 'Skill Matcher', 'Job Opportunity Recommendations'],
    },
  ];

  return (
    <section id="projects" className="section-spacing projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} /> PRACTICAL ENGINEERING
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Exploring artificial intelligence, building full-stack platforms, and solving student &amp; software challenges through real code.
          </p>
        </div>

        {/* FEATURED CENTERPIECE SHOWCASE — CAMPUSGPT */}
        <motion.div
          className="featured-project-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="featured-card-glow"></div>
          <div className="featured-grid">
            {/* Left Content */}
            <div className="featured-content">
              <div className="featured-badges-row">
                <span className="badge-featured">{featuredProject.badge}</span>
                <span className="badge-live">
                  <span className="live-ping"></span> {featuredProject.liveBadge}
                </span>
              </div>

              <span className="project-number-tag">{featuredProject.number}</span>
              <h3 className="featured-title">{featuredProject.name}</h3>
              <h4 className="featured-subtitle">{featuredProject.subtitle}</h4>

              <p className="featured-description">{featuredProject.description}</p>

              {/* Known Features List */}
              <div className="featured-features-block">
                <h5 className="block-label">Key Platform Capabilities:</h5>
                <div className="features-grid">
                  {featuredProject.features.map((feat) => (
                    <div key={feat} className="feature-item">
                      <Check size={15} className="check-icon" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="tech-tags-row">
                {featuredProject.technologies.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="featured-actions">
                <a
                  href={featuredProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Live Demo <ExternalLink size={16} />
                </a>
                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Github size={16} /> GitHub Repository ↗
                </a>
              </div>
            </div>

            {/* Right Column: INTERACTIVE CAMPUSGPT SANDBOX SIMULATOR */}
            <div className="sandbox-simulator-box">
              <div className="sandbox-header">
                <div className="sandbox-dots">
                  <span className="dot dot-r"></span>
                  <span className="dot dot-y"></span>
                  <span className="dot dot-g"></span>
                </div>
                <div className="sandbox-url">campus-copilot-48sq.onrender.com</div>
              </div>

              {/* Sandbox Tabs */}
              <div className="sandbox-tabs">
                <button
                  className={`sandbox-tab ${activeSandboxModule === 'study' ? 'active' : ''}`}
                  onClick={() => { setActiveSandboxModule('study'); setSimulatedOutput(null); }}
                >
                  <BookOpen size={13} /> Study Assistant
                </button>
                <button
                  className={`sandbox-tab ${activeSandboxModule === 'resume' ? 'active' : ''}`}
                  onClick={() => { setActiveSandboxModule('resume'); setSimulatedOutput(null); }}
                >
                  <Sparkles size={13} /> Resume Analyzer
                </button>
                <button
                  className={`sandbox-tab ${activeSandboxModule === 'placement' ? 'active' : ''}`}
                  onClick={() => { setActiveSandboxModule('placement'); setSimulatedOutput(null); }}
                >
                  <Server size={13} /> Placement Prep
                </button>
                <button
                  className={`sandbox-tab ${activeSandboxModule === 'mock' ? 'active' : ''}`}
                  onClick={() => { setActiveSandboxModule('mock'); setSimulatedOutput(null); }}
                >
                  <Brain size={13} /> Mock Interview
                </button>
              </div>

              {/* Sandbox Output Area */}
              <div className="sandbox-viewport">
                <div className="sandbox-banner">
                  <span className="sb-module-title">{sandboxPresetOutputs[activeSandboxModule].title}</span>
                </div>

                <div className="sandbox-output-content">
                  <pre className="output-pre">
                    <code>
                      {isSimulating
                        ? '⚡ Querying CampusGPT AI Engine (Python/Flask backend)...'
                        : simulatedOutput
                        ? simulatedOutput.response
                        : sandboxPresetOutputs[activeSandboxModule].response}
                    </code>
                  </pre>
                </div>

                {/* Interactive Tester Controls */}
                <div className="sandbox-tester-controls">
                  <div className="preset-pill-row">
                    <span className="preset-label">Test Preset:</span>
                    <button
                      className="preset-pill-btn"
                      onClick={() => handleSimulatePrompt(sandboxPresetOutputs[activeSandboxModule].prompt)}
                    >
                      Run Preset Query <Play size={10} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* OTHER PROJECTS GRID */}
        <h3 className="other-projects-heading">More Practical Projects</h3>
        <div className="other-projects-grid">
          {otherProjects.map((project) => (
            <motion.div
              key={project.id}
              className="other-project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="other-card-top">
                <span className="other-project-num">{project.number}</span>
                <span className="other-tag">AI / SOFTWARE</span>
              </div>

              <h4 className="other-project-title">{project.name}</h4>
              <p className="other-project-desc">{project.description}</p>

              <div className="other-features-list">
                {project.features.map((feat) => (
                  <span key={feat} className="other-feature-pill">
                    • {feat}
                  </span>
                ))}
              </div>

              <div className="other-tech-row">
                {project.technologies.map((tech) => (
                  <span key={tech} className="other-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="other-card-footer">
                <button
                  className="btn-details"
                  onClick={() => setSelectedProjectModal(project)}
                >
                  <Info size={15} /> Project Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProjectModal && (
          <div className="project-modal-backdrop" onClick={() => setSelectedProjectModal(null)}>
            <div className="project-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>{selectedProjectModal.name}</h3>
                <button className="modal-close" onClick={() => setSelectedProjectModal(null)}>
                  <X size={20} />
                </button>
              </div>
              <div className="modal-body">
                <p className="modal-desc">{selectedProjectModal.description}</p>
                <div className="modal-section">
                  <h4>Key Capabilities</h4>
                  <ul>
                    {selectedProjectModal.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="modal-section">
                  <h4>Technologies Used</h4>
                  <div className="tech-tags-row">
                    {selectedProjectModal.technologies.map((t) => (
                      <span key={t} className="tech-pill">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
