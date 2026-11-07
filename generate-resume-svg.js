import fs from 'fs';
import path from 'path';

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 595 842" width="100%" height="100%" style="background:#fff;font-family:Arial,Helvetica,sans-serif;color:#111;">
  <style>
    .name { font-size: 20px; font-weight: 800; letter-spacing: 0.5px; fill: #000; }
    .contact { font-size: 8.5px; fill: #222; }
    .links { font-size: 8.5px; fill: #0044cc; }
    .heading { font-size: 11px; font-weight: bold; fill: #000; text-transform: none; }
    .rule { stroke: #000; stroke-width: 1; }
    .subhead { font-size: 9px; font-weight: bold; fill: #111; }
    .body { font-size: 8.5px; fill: #222; line-height: 1.35; }
    .meta { font-size: 8.5px; fill: #333; font-style: italic; }
    .bullet { font-size: 8px; fill: #222; }
  </style>

  <!-- Name & Header -->
  <text x="35" y="48" class="name">HARISHKUMAR L</text>
  <text x="35" y="65" class="contact">
    <tspan font-weight="bold">Email:</tspan> 717825f317@kce.ac.in | <tspan font-weight="bold">Mobile:</tspan> +91-9025574625 | Coimbatore, Tamil Nadu, India
  </text>
  <text x="35" y="78" class="links">LinkedIn | GitHub | LeetCode | CodeChef | GeeksforGeeks</text>

  <!-- Career Objective -->
  <text x="35" y="102" class="heading">Career Objective</text>
  <line x1="35" y1="106" x2="560" y2="106" class="rule" />
  <text x="35" y="120" class="meta" font-style="italic">Aspiring software developer seeking an opportunity to solve real-world problems through technology, continuously</text>
  <text x="35" y="132" class="meta" font-style="italic">improve my programming abilities, and build impactful software applications.</text>

  <!-- Education -->
  <text x="35" y="156" class="heading">Education</text>
  <line x1="35" y1="160" x2="560" y2="160" class="rule" />
  <text x="35" y="174" class="subhead">Karpagam College of Engineering <tspan font-weight="normal">– B.Tech Information Technology (3rd Semester)</tspan></text>
  <text x="560" y="174" text-anchor="end" class="body">Coimbatore | 2025 – 2029</text>

  <!-- Skills -->
  <text x="35" y="202" class="heading">Skills</text>
  <line x1="35" y1="206" x2="560" y2="206" class="rule" />
  <text x="35" y="220" class="body"><tspan font-weight="bold">Languages:</tspan> C, C++, Java, JavaScript, HTML5, CSS3, Bootstrap</text>
  <text x="35" y="233" class="body"><tspan font-weight="bold">Core CS &amp; Tools:</tspan> Data Structures &amp; Algorithms, Object-Oriented Programming, Git, GitHub, VS Code</text>
  <text x="35" y="246" class="body"><tspan font-weight="bold">Currently Learning:</tspan> Node.js, Express.js, Oracle Database, MongoDB</text>

  <!-- Internship -->
  <text x="35" y="274" class="heading">Internship</text>
  <line x1="35" y1="278" x2="560" y2="278" class="rule" />
  <text x="35" y="292" class="subhead">Thiranex <tspan font-weight="normal">– Full Stack Development Intern</tspan></text>
  <text x="560" y="292" text-anchor="end" class="meta">29 June 2026 – 28 July 2026</text>
  <circle cx="42" cy="305" r="1.5" fill="#111" />
  <text x="50" y="308" class="body">Successfully completed the internship, gaining exposure to full stack development and professional software</text>
  <text x="50" y="320" class="body">development practices</text>

  <!-- Projects -->
  <text x="35" y="348" class="heading">Projects</text>
  <line x1="35" y1="352" x2="560" y2="352" class="rule" />
  <circle cx="42" cy="366" r="1.5" fill="#111" />
  <text x="50" y="369" class="body"><tspan font-weight="bold">E-commerce Website</tspan> (HTML | CSS | Bootstrap | JavaScript) – Web-based shopping application with organized</text>
  <text x="50" y="381" class="body">product displays and shopping functionality. <tspan fill="#0044cc">Live Demo</tspan></text>

  <circle cx="42" cy="397" r="1.5" fill="#111" />
  <text x="50" y="400" class="body"><tspan font-weight="bold">AI Error Tracking System</tspan> – AI-powered application to identify, analyze and track software errors so developers can</text>
  <text x="50" y="412" class="body">debug more efficiently. <tspan fill="#0044cc">GitHub</tspan></text>

  <circle cx="42" cy="428" r="1.5" fill="#111" />
  <text x="50" y="431" class="body"><tspan font-weight="bold">Bus Ticket Reservation System</tspan> – Application to search buses, check seat availability and book tickets.</text>

  <!-- Research Work -->
  <text x="35" y="460" class="heading">Research Work</text>
  <line x1="35" y1="464" x2="560" y2="464" class="rule" />
  <circle cx="42" cy="478" r="1.5" fill="#111" />
  <text x="50" y="481" class="body"><tspan font-weight="bold">Tamil Sentiment Analysis</tspan> – Research on improving sentiment analysis in Tamil using multimodal learning that</text>
  <text x="50" y="493" class="body">combines language and visual information.</text>

  <!-- Hackathons -->
  <text x="35" y="522" class="heading">Hackathons</text>
  <line x1="35" y1="526" x2="560" y2="526" class="rule" />
  <circle cx="42" cy="540" r="1.5" fill="#111" />
  <text x="50" y="543" class="body"><tspan font-weight="bold">Participated in ALGOTHON (Virtual Round), HackeVerse and Prompt Run</tspan> – participation certificates received.</text>

  <!-- Problems Solved & Coding Activities -->
  <text x="35" y="572" class="heading">Problems Solved &amp; Coding Activities</text>
  <line x1="35" y1="576" x2="560" y2="576" class="rule" />
  <circle cx="42" cy="590" r="1.5" fill="#111" />
  <text x="50" y="593" class="body"><tspan font-weight="bold">1,500+ CodeChef | 100+ LeetCode problems | 50+ GeeksforGeeks problems | 15+ coding contests</tspan></text>

  <!-- Achievements -->
  <text x="35" y="622" class="heading">Achievements</text>
  <line x1="35" y1="626" x2="560" y2="626" class="rule" />
  <circle cx="42" cy="640" r="1.5" fill="#111" />
  <text x="50" y="643" class="body"><tspan font-weight="bold">Executive Member of Quantum X</tspan> – contributing to technical and student community activities.</text>

  <circle cx="42" cy="658" r="1.5" fill="#111" />
  <text x="50" y="661" class="body"><tspan font-weight="bold">25+ DSA certificates;</tspan> completed C Programming Course from Simplilearn with certification.</text>
</svg>`;

const pubDir = 'C:/Users/acer/.gemini/antigravity/scratch/harish-portfolio/public';
fs.writeFileSync(path.join(pubDir, 'Harish_Kumar_Resume_preview.svg'), svgContent, 'utf8');
console.log('Saved Harish_Kumar_Resume_preview.svg');
