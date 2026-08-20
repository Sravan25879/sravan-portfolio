import React from 'react';
import { Layout, Server, Database, Brain, ArrowDown } from 'lucide-react';
import './StackFlow.css';

const StackFlow = () => {
  const layers = [
    {
      step: '01',
      title: 'Frontend Interface',
      subtitle: 'Responsive UI & Client Interactions',
      icon: <Layout size={22} className="layer-icon green" />,
      tags: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design'],
      highlight: false
    },
    {
      step: '02',
      title: 'Backend Services & APIs',
      subtitle: 'Server Logic, Routes & Operations',
      icon: <Server size={22} className="layer-icon yellow" />,
      tags: ['Node.js', 'Express.js', 'Python', 'Flask', 'REST API Development', 'CRUD', 'Authentication'],
      highlight: true // Visually prominent
    },
    {
      step: '03',
      title: 'Database Management',
      subtitle: 'Data Modeling & Query Execution',
      icon: <Database size={22} className="layer-icon green" />,
      tags: ['MySQL', 'SQL', 'Database Design', 'Relational Schemas', 'Queries'],
      highlight: false
    },
    {
      step: '04',
      title: 'AI & ML Integration',
      subtitle: 'Intelligent Assistants & GenAI Capabilities',
      icon: <Brain size={22} className="layer-icon yellow" />,
      tags: ['Artificial Intelligence', 'Machine Learning', 'Generative AI', 'LLM Apps', 'AI APIs'],
      highlight: false
    }
  ];

  return (
    <div className="stack-flow-wrapper">
      <div className="stack-flow-header">
        <span className="flow-badge">FULL-STACK &amp; BACKEND DIRECTION</span>
        <h3 className="flow-title">Architectural Development Stack Flow</h3>
        <p className="flow-subtitle">
          How I connect user interfaces, server logic, database storage, and AI capabilities into functional applications.
        </p>
      </div>

      <div className="stack-flow-pipeline">
        {layers.map((layer, index) => (
          <React.Fragment key={layer.step}>
            <div className={`flow-layer-card ${layer.highlight ? 'prominent-backend' : ''}`}>
              {layer.highlight && <div className="prominent-badge">PRIMARY FOCUS</div>}
              <div className="layer-left">
                <span className="layer-step">{layer.step}</span>
                <div className="layer-icon-box">{layer.icon}</div>
              </div>
              <div className="layer-center">
                <h4 className="layer-title-text">{layer.title}</h4>
                <p className="layer-subtitle-text">{layer.subtitle}</p>
              </div>
              <div className="layer-tags">
                {layer.tags.map((tag) => (
                  <span key={tag} className="layer-tag-pill">{tag}</span>
                ))}
              </div>
            </div>
            {index < layers.length - 1 && (
              <div className="flow-arrow-connector">
                <ArrowDown size={18} className="arrow-svg" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StackFlow;
