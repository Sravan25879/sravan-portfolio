/* ============================================================
   SRAVAN.DEV — Electric Cyan / Violet Vanilla JS Engine
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // 1. DESKTOP CUSTOM CURSOR
  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');

  if (cursorDot && cursorRing && window.matchMedia('(hover: hover) and (min-width: 769px)').matches) {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    function animateCursor() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;
      requestAnimationFrame(animateCursor);
    }
    requestAnimationFrame(animateCursor);

    const hoverables = document.querySelectorAll('a, button, input, textarea, .bento-box, .skill-badge, .timeline-card, .other-project-card');
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

  // 2. STICKY NAVBAR & ACTIVE SECTION OBSERVER
  const navbarHeader = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbarHeader.classList.add('scrolled');
    } else {
      navbarHeader.classList.remove('scrolled');
    }
  });

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
      const isOpen = mobileDrawer.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (mobileDrawer) mobileDrawer.classList.remove('open');
    });
  });

  const sections = document.querySelectorAll('section[id]');
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    },
    { rootMargin: '-25% 0px -65% 0px', threshold: 0 }
  );

  sections.forEach((sec) => sectionObserver.observe(sec));

  // 3. HERO IDE TABS & INTERACTIVE TERMINAL
  const ideTabs = document.querySelectorAll('.ide-tab');
  const codeEditorView = document.getElementById('codeEditorView');
  const terminalView = document.getElementById('terminalView');
  const codeContent = document.getElementById('codeContent');
  const lineNumbers = document.getElementById('lineNumbers');

  const codeSnippets = {
    'app.py': `# Flask API — SRAVAN.DEV
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/api/student", methods=["GET"])
def student():
    """Returns verified student profile information"""
    return jsonify({
        "name": "Palreddy Sravan Kumar Reddy",
        "title": "Computer Science Student & Software Developer",
        "degree": "B.Tech CSE (AI & ML)",
        "university": "Vel Tech University, Chennai",
        "batch": "2023 - 2027",
        "leetcode_solved": "119+ (Easy, Medium, Hard)",
        "badge": "Mathematical Insight Badge"
    }), 200`,
    'ai_engine.py': `# Core CampusGPT AI Assistant Module
class CampusGPTEngine:
    def __init__(self, model="gemini-flash"):
        self.model = model
        self.system_prompt = "You are CampusGPT, an AI assistant for B.Tech CSE students."

    def generate_response(self, prompt, mode):
        # 1. Parse student query intent
        # 2. Query Flask backend API
        # 3. Format structured JSON response
        return {
            "mode": mode,
            "status": "success",
            "output": f"Generated study insights for: {prompt[:30]}..."
        }`,
  };

  ideTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      ideTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      const target = tab.getAttribute('data-tab');
      if (target === 'terminal') {
        codeEditorView.style.display = 'none';
        terminalView.style.display = 'flex';
      } else {
        terminalView.style.display = 'none';
        codeEditorView.style.display = 'flex';
        if (codeSnippets[target]) {
          const lines = codeSnippets[target].split('\n');
          lineNumbers.innerHTML = lines.map((_, i) => `<span>${i + 1}</span>`).join('');
          codeContent.textContent = codeSnippets[target];
        }
      }
    });
  });

  // Terminal CLI command executor
  const terminalForm = document.getElementById('terminalForm');
  const termInput = document.getElementById('termInput');
  const termLogs = document.getElementById('termLogs');

  if (terminalForm) {
    terminalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const cmd = termInput.value.trim().toLowerCase();
      if (!cmd) return;

      appendTermLog(`$ ${termInput.value}`, 'cmd');

      if (cmd === 'help') {
        appendTermLog('Available commands: sravan, campusgpt, skills, leetcode, certs, clear', 'out');
      } else if (cmd === 'sravan') {
        appendTermLog('Palreddy Sravan Kumar Reddy | B.Tech CSE (AI & ML) | Vel Tech University, Chennai | Batch 2027', 'out');
      } else if (cmd === 'campusgpt') {
        appendTermLog('CampusGPT AI Campus Assistant: LIVE on Render (https://campus-copilot-48sq.onrender.com)', 'out');
      } else if (cmd === 'skills') {
        appendTermLog('Languages: Java, C, C++, Python | Web/Backend: HTML, CSS, JS, Node.js, Express, Flask, MySQL, SQL', 'out');
      } else if (cmd === 'leetcode') {
        appendTermLog('LeetCode Profile: https://leetcode.com/u/36ff7ba8a7/ (119+ Solved across Easy, Medium, Hard)', 'out');
      } else if (cmd === 'certs') {
        appendTermLog('Certifications: Java/DSA (Infosys Springboard), Data Structures & Algorithms (Oracle)', 'out');
      } else if (cmd === 'clear') {
        termLogs.innerHTML = '';
        termInput.value = '';
        return;
      } else {
        appendTermLog(`Command not found: "${cmd}". Type "help" for options.`, 'err');
      }

      termInput.value = '';
      termLogs.scrollTop = termLogs.scrollHeight;
    });
  }

  function appendTermLog(text, type) {
    const div = document.createElement('div');
    div.className = `term-log term-${type}`;
    div.textContent = text;
    termLogs.appendChild(div);
  }

  // 4. CAMPUSGPT INTERACTIVE SANDBOX SIMULATOR
  const sandboxTabs = document.querySelectorAll('.sandbox-tab');
  const sbTitle = document.getElementById('sbModuleTitle');
  const sbOutput = document.getElementById('sbOutput');
  const presetBtn = document.getElementById('presetBtn');

  const sandboxModules = {
    study: {
      title: 'AI Study Assistant Simulator',
      prompt: 'Explain binary search.',
      response: `User: Explain binary search.

CampusGPT: Binary search efficiently searches a sorted array by repeatedly dividing the search space in half.

Algorithm Steps:
1. Compare target with middle element of sorted array.
2. If target matches, return index.
3. If target < mid, narrow search to left half.
4. If target > mid, narrow search to right half.
Time Complexity: O(log N).`,
    },
    resume: {
      title: 'Resume Analyzer Simulator',
      prompt: 'Analyze my B.Tech CSE resume for Software Developer roles.',
      response: `[CampusGPT Simulated Analysis]:
Overall Alignment: 92% Match for Junior Software Developer Roles

Key Strengths Identified:
✓ Java, Python & Flask REST API Development
✓ LeetCode Problem Solving (119+ Solved, Mathematical Insight Badge)
✓ Verified Certifications: Infosys Springboard & Oracle

Recommended Enhancements:
+ Detail specific API response times and database query optimization steps.`,
    },
    placement: {
      title: 'Placement Prep Simulator',
      prompt: 'Top Technical Interview Questions for Python & Flask Backend.',
      response: `[CampusGPT Placement Insights]:
1. How does Flask handle request routing and context locals?
2. Explain the differences between Python lists, tuples, and sets in terms of lookup complexity and mutability.
3. How do you design idempotent RESTful API endpoints?`,
    },
    mock: {
      title: 'Mock Interview Simulator',
      prompt: 'Start mock technical interview for Python Developer role.',
      response: `[CampusGPT Interviewer]:
"Hello Sravan! Let's begin our technical interview. Can you explain how a Hash Table handles hash collisions, and how Python dictionaries implement key lookups?"`,
    },
  };

  let currentModule = 'study';

  sandboxTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      sandboxTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      currentModule = tab.getAttribute('data-module');
      if (sandboxModules[currentModule]) {
        sbTitle.textContent = sandboxModules[currentModule].title;
        sbOutput.textContent = sandboxModules[currentModule].response;
      }
    });
  });

  if (presetBtn) {
    presetBtn.addEventListener('click', () => {
      const data = sandboxModules[currentModule];
      sbOutput.textContent = `⚡ Querying CampusGPT AI Engine...\nPrompt: "${data.prompt}"`;
      setTimeout(() => {
        sbOutput.textContent = data.response;
      }, 450);
    });
  }

  // 5. COPY EMAIL TO CLIPBOARD WITH ANIMATED TOAST
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const toastNotification = document.getElementById('toastNotification');

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('vtu25879@veltech.edu.in');
      showToast('Email copied!');
    });
  }

  function showToast(msg) {
    if (!toastNotification) return;
    toastNotification.textContent = msg;
    toastNotification.classList.add('active');
    setTimeout(() => {
      toastNotification.classList.remove('active');
    }, 2800);
  }

  // 6. RESUME PDF DOWNLOAD CHECKER & FALLBACK MODAL
  const downloadResumeBtn = document.getElementById('downloadResumeBtn');
  const heroDownloadResumeBtn = document.getElementById('heroDownloadResumeBtn');
  const viewResumeBtn = document.getElementById('viewResumeBtn');
  const resumeNoticeModal = document.getElementById('resumeNoticeModal');
  const closeResumeModal = document.getElementById('closeResumeModal');
  const closeResumeModalBtn = document.getElementById('closeResumeModalBtn');

  function checkAndHandleResume(e) {
    fetch('resume.pdf', { method: 'HEAD' })
      .then((res) => {
        if (!res.ok) {
          e.preventDefault();
          resumeNoticeModal.classList.add('active');
        }
      })
      .catch(() => {
        e.preventDefault();
        resumeNoticeModal.classList.add('active');
      });
  }

  [downloadResumeBtn, heroDownloadResumeBtn, viewResumeBtn].forEach((btn) => {
    if (btn) btn.addEventListener('click', checkAndHandleResume);
  });

  [closeResumeModal, closeResumeModalBtn].forEach((el) => {
    if (el) el.addEventListener('click', () => resumeNoticeModal.classList.remove('active'));
  });

  // 7. PROJECT DETAILS MODAL
  const projectDetailsBtns = document.querySelectorAll('.btn-details');
  const projectModal = document.getElementById('projectModal');
  const closeProjectModal = document.getElementById('closeProjectModal');
  const modalProjTitle = document.getElementById('modalProjTitle');
  const modalProjDesc = document.getElementById('modalProjDesc');
  const modalProjFeatures = document.getElementById('modalProjFeatures');
  const modalProjTech = document.getElementById('modalProjTech');

  const otherProjectDetails = {
    '02': {
      title: 'Smart Business Management Analysis',
      desc: 'Built a business analysis solution focused on organizing and interpreting business data to support better decision-making.',
      features: ['Business Data Interpretation', 'Analysis Dashboard', 'Decision Support Solution'],
      tech: ['Python', 'SQL', 'Data Analysis'],
    },
    '03': {
      title: 'Smart Study Assistant with AI Flashcards',
      desc: 'Designed a study-assistance concept that uses AI-generated flashcards to help students revise and learn more effectively.',
      features: ['AI Flashcard Generator', 'Revision Efficiency Tracker', 'Concept Mastery'],
      tech: ['Python', 'AI APIs', 'Flashcard Engine'],
    },
    '04': {
      title: 'Bagut Sales Analysis',
      desc: 'Created a sales-analysis project to explore business sales data and derive useful insights for decision-making.',
      features: ['Sales Data Exploration', 'Business Insights Mining', 'Decision Support'],
      tech: ['Python', 'SQL', 'Data Exploration'],
    },
  };

  projectDetailsBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const num = btn.getAttribute('data-project');
      const data = otherProjectDetails[num];
      if (data) {
        modalProjTitle.textContent = data.title;
        modalProjDesc.textContent = data.desc;
        modalProjFeatures.innerHTML = data.features.map((f) => `<li>${f}</li>`).join('');
        modalProjTech.innerHTML = data.tech.map((t) => `<span class="tech-pill">${t}</span>`).join('');
        projectModal.classList.add('active');
      }
    });
  });

  if (closeProjectModal) {
    closeProjectModal.addEventListener('click', () => projectModal.classList.remove('active'));
  }

  // 8. CONTACT FORM NOTICE ALERT
  const contactForm = document.getElementById('contactForm');
  const formSubmittedAlert = document.getElementById('formSubmittedAlert');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      formSubmittedAlert.style.display = 'flex';
    });
  }

  // 9. ANIMATED TIMELINE & SCROLL REVEALS (INTERSECTION OBSERVER)
  const timelineItems = document.querySelectorAll('.timeline-item');
  const timelineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    },
    { threshold: 0.3 }
  );
  timelineItems.forEach((item) => timelineObserver.observe(item));

  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    },
    { threshold: 0.1 }
  );
  revealElements.forEach((el) => revealObserver.observe(el));
});
