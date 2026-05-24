/**
 * ==========================================================================
 * PORTFOLIO CORE INTERACTION LOGIC (SWISS TYPOGRAPHY STANDARDS)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initProjectFilter();
  initInteractiveTerminal();
  initScrollProgress();
});

/**
 * 1. Scroll-Reveal Animations using IntersectionObserver
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
  
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      threshold: 0.1, // Trigger when 10% of the element is visible
      rootMargin: '0px 0px -50px 0px' // Offset trigger point slightly for better rhythm
    };
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target); // Reveal only once
        }
      });
    }, observerOptions);
    
    revealElements.forEach(element => {
      revealObserver.observe(element);
    });
  } else {
    // Fallback if IntersectionObserver is not supported
    revealElements.forEach(element => {
      element.classList.add('revealed');
    });
  }
}

/**
 * 2. Project Category Filtering with Transition States
 */
function initProjectFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // 1. Reset active button states
      filterButtons.forEach(button => button.classList.remove('active'));
      e.currentTarget.classList.add('active');
      
      const filterValue = e.currentTarget.getAttribute('data-filter');
      
      // 2. Perform filtering with a quick micro-fade transition
      projectCards.forEach(card => {
        // Prepare fade animation
        card.style.opacity = '0';
        card.style.transform = 'scale(0.98)';
        card.style.transition = 'opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)';
        
        setTimeout(() => {
          const cardCategories = (card.getAttribute('data-category') || '').split(/\s+/);
          
          if (filterValue === 'all' || cardCategories.includes(filterValue)) {
            card.classList.remove('hidden');
            // Force browser reflow to apply display change before opacity transition
            void card.offsetWidth; 
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          } else {
            card.classList.add('hidden');
          }
        }, 250);
      });
    });
  });
}

/**
 * 3. Interactive CLI Console Shell Simulator (Highly Engaging Micro-interaction)
 */
function initInteractiveTerminal() {
  const consoleBody = document.querySelector('.console-body');
  if (!consoleBody) return;
  
  // Custom mock commands registry
  const commands = {
    help: () => [
      'Available CLI commands:',
      '  help      - Show this reference menu',
      '  about     - Core developer profile',
      '  skills    - List core web development skills',
      '  projects  - Summarize portfolio projects',
      '  clear     - Wipe terminal history logs'
    ],
    about: () => [
      'SYS_INFO // DEVELOPER PROFILE:',
      '  Name:           Nguyen Duy Hung',
      '  Role:           Web Developer Intern',
      '  Education:      ICT, University of Science and Technology of Hanoi',
      '  GPA:            3.2/4.0',
      '  Focus Areas:    Backend development, databases, realtime systems,',
      '                  AI-assisted web products, team collaboration.'
    ],
    skills: () => [
      'CORE_ENGINE_CAPABILITIES:',
      '  - Languages: JavaScript, TypeScript, Python',
      '  - Backend:   Node.js, Express.js, NestJS, Socket.io, JWT Auth',
      '  - Frontend:  Next.js, Tailwind CSS',
      '  - Databases: MongoDB, PostgreSQL, PostGIS',
      '  - Tools:     Git, GitHub, Postman, Docker, Prisma ORM, Vercel'
    ],
    projects: () => [
      'PROJECT_EXPERIENCE_SUMMARY:',
      '  1. STUDY BUDDY MATCH - Matching, realtime chat, Gemini quiz generation',
      '  2. HANOIGO           - Hanoi travel platform with maps, trips, AI mentor'
    ]
  };

  // Convert HTML terminal to editable input structure
  consoleBody.innerHTML = `
    <div class="terminal-history">
      <div class="console-line cmd-output">> Connection established: PORTFOLIO_CV_MODE</div>
      <div class="console-line cmd-output">> Type 'help' to examine Nguyen Duy Hung's profile.</div>
    </div>
    <div class="console-line terminal-input-line">
      <span class="cmd-prompt">visitor@portfolio:~$</span>
      <span class="terminal-input-wrapper">
        <input type="text" class="terminal-input" autofocus autocomplete="off" spellcheck="false">
        <span class="terminal-cursor"></span>
      </span>
    </div>
  `;

  const inputEl = consoleBody.querySelector('.terminal-input');
  const historyEl = consoleBody.querySelector('.terminal-history');
  
  // Auto-focus terminal input when clicking inside console box
  const consoleBox = document.querySelector('.console-box');
  if (consoleBox) {
    consoleBox.addEventListener('click', () => {
      inputEl.focus();
    });
  }

  // Handle command submissions
  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const fullCmd = inputEl.value.trim();
      const cmd = fullCmd.toLowerCase().split(' ')[0];
      
      // Append entered command to history
      const userCommandLine = document.createElement('div');
      userCommandLine.className = 'console-line';
      userCommandLine.innerHTML = `<span class="cmd-prompt">visitor@portfolio:~$</span> <span class="cmd-input">${escapeHTML(fullCmd)}</span>`;
      historyEl.appendChild(userCommandLine);
      
      // Handle logic execution
      if (cmd === 'clear') {
        historyEl.innerHTML = '';
      } else if (cmd === '') {
        // Do nothing for empty enter
      } else if (commands[cmd]) {
        const outputLines = commands[cmd]();
        outputLines.forEach(line => {
          const lineEl = document.createElement('div');
          lineEl.className = 'console-line cmd-output';
          lineEl.innerHTML = escapeHTML(line);
          historyEl.appendChild(lineEl);
        });
      } else {
        const errorEl = document.createElement('div');
        errorEl.className = 'console-line cmd-output text-accent';
        errorEl.innerHTML = `shell: command not found: ${escapeHTML(cmd)}. Type 'help' for options.`;
        historyEl.appendChild(errorEl);
      }
      
      // Clear input and scroll console container to the bottom
      inputEl.value = '';
      consoleBody.scrollTop = consoleBody.scrollHeight;
      
      // Ensure cursor is positioned correctly at scroll bottom
      setTimeout(() => {
        consoleBody.scrollTop = consoleBody.scrollHeight;
      }, 10);
    }
  });

  // Helper utility to escape HTML content input securely
  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }
}

/**
 * 4. Header scroll progress indicator
 */
function initScrollProgress() {
  const progressEl = document.querySelector('.scroll-progress');
  if (!progressEl) return;

  const updateProgress = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    progressEl.style.transform = `scaleX(${Math.min(progress, 100) / 100})`;
  };

  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
}
