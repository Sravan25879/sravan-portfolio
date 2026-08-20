import React from 'react';
import { motion } from 'framer-motion';
import { Server, Code2, Layout, Database, Brain, Cpu, Wrench, Sparkles } from 'lucide-react';
import StackFlow from './StackFlow';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      id: 'backend',
      title: 'Backend Development',
      badge: 'PRIMARY FEATURED FOCUS',
      icon: <Server size={24} className="cat-icon yellow" />,
      prominent: true,
      description: 'Server-side application architecture, REST API design, HTTP protocols, authentication, and database connectivity.',
      skills: [
        'Node.js',
        'Express.js',
        'Python',
        'Flask',
        'REST API Development',
        'Backend Development',
        'Server-Side Development',
        'CRUD Operations',
        'JSON',
        'HTTP / HTTPS',
        'API Integration',
        'Client-Server Architecture',
        'Authentication & Authorization',
      ],
    },
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: <Code2 size={22} className="cat-icon green" />,
      skills: ['Java', 'Python', 'C++', 'JavaScript'],
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <Layout size={22} className="cat-icon green" />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Responsive Web Design'],
    },
    {
      id: 'databases',
      title: 'Databases',
      icon: <Database size={22} className="cat-icon green" />,
      skills: ['MySQL', 'SQL', 'Database Design', 'Database Queries', 'CRUD Operations', 'Relational Databases'],
    },
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      icon: <Brain size={22} className="cat-icon yellow" />,
      skills: ['Artificial Intelligence', 'Machine Learning', 'Generative AI', 'LLM Applications', 'AI API Integration'],
    },
    {
      id: 'core-cs',
      title: 'Core Computer Science',
      icon: <Cpu size={22} className="cat-icon green" />,
      skills: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Problem Solving',
        'DBMS',
        'Computer Networks',
        'Operating Systems',
      ],
    },
    {
      id: 'tools',
      title: 'Tools & Deployment',
      icon: <Wrench size={22} className="cat-icon green" />,
      skills: ['Git', 'GitHub', 'VS Code', 'Render'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="skills" className="section-spacing skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag yellow-tag">
            <Sparkles size={14} /> TECHNICAL TOOLKIT
          </div>
          <h2 className="section-title">Technical Skills &amp; Stack</h2>
          <p className="section-subtitle">
            A comprehensive overview of programming languages, frameworks, backend services, databases, and AI technologies I build with.
          </p>
        </div>

        {/* Stack Architecture Flow Component */}
        <StackFlow />

        {/* Categorized Skills Grid with Framer Motion */}
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              className={`skill-category-card ${category.prominent ? 'prominent-card' : ''}`}
              variants={cardVariants}
            >
              {category.badge && (
                <span className="category-badge">{category.badge}</span>
              )}
              <div className="category-header">
                <div className="category-icon-wrapper">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              {category.description && (
                <p className="category-desc">{category.description}</p>
              )}
              <div className="skills-pill-wrapper">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`skill-pill ${
                      category.prominent ? 'prominent-pill' : ''
                    }`}
                  >
                    <span className="bullet-dot"></span> {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
