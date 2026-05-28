================================================================
DANIEL STAGGS — PORTFOLIO SITE PLAN
Written by Claude | May 2026
================================================================
This document explains what should be on your portfolio site,
why each piece matters, and how to think about it as you build
and update it over time. Read this before making changes.
================================================================


----------------------------------------------------------------
THE CORE PHILOSOPHY
----------------------------------------------------------------

Your portfolio has one job: make a stranger trust you in 60
seconds or less.

That stranger might be a recruiter skimming 40 resumes. It
might be a hiring manager who clicked your link from LinkedIn.
It might be a freelance client who found you through Google.
They will not read everything. They will scroll fast, look for
signals that you are competent and real, and either close the
tab or reach out.

Every decision about what goes on this site — what to include,
what order to put it in, how to word it — should be made with
that 60-second stranger in mind.

The second principle: your site should show who you are
BECOMING, not just who you are today. You are currently an IT
technician. You are becoming a developer and eventually an AI
and security engineer. Your site should reflect the trajectory,
not just the current job title. That is not dishonest — it is
strategic. You are not pretending to have a job you don't have.
You are showing skills you genuinely have and a direction you
are genuinely headed.


----------------------------------------------------------------
SECTION 1: NAVIGATION
----------------------------------------------------------------

WHAT: Fixed top nav with links to each section.
      Logo (DS), About, Projects, Skills, Experience, Contact.

WHY: Fixed nav means it's always accessible no matter where the
     visitor is on the page. The logo click scrolls back to top.
     Keep it minimal — too many links creates decision fatigue.

ENGINEERING NOTE: The nav should change appearance on scroll
(add a background/border once the user scrolls past the hero)
so it doesn't visually clash with the hero section. This is
already implemented in main.js using a scroll event listener
that adds a "scrolled" class to the nav element.

FUTURE: When you add a blog or case studies page, you can add
that link here. Don't add it until the content exists.


----------------------------------------------------------------
SECTION 2: HERO
----------------------------------------------------------------

WHAT: The first thing anyone sees. Your name, a one-line
      positioning statement, two buttons, and a status line.

WHY: This is the most important section on the entire site.
     You have about 3 seconds before someone decides to keep
     scrolling or close the tab. Your name needs to be huge and
     confident. The positioning statement needs to answer
     "who is this person and why should I care" immediately.

CURRENT POSITIONING LINE:
"Developer & IT Engineer — building full-stack web apps and
exploring the intersection of AI and security."

WHY THIS WORDING WORKS:
- "Developer & IT Engineer" is honest. You have not held a
  developer job title but you are actively building real
  products. This is accurate.
- "full-stack web apps" is backed up immediately by your
  projects section. You are not claiming something you cannot
  prove.
- "intersection of AI and security" signals where you are
  headed and makes you interesting and differentiated. Very
  few people are pursuing both seriously.

THE TWO BUTTONS:
- "See My Work" scrolls to projects. This is the primary CTA
  (call to action). Most visitors want to see what you built.
- "Download Résumé" is the secondary CTA. Some people,
  especially corporate recruiters, want a PDF. Give it to them.

THE STATUS LINE AT THE BOTTOM:
"Pursuing Security+ · AI Engineering · BBA in Progress"
This does two things: it shows momentum (you are actively
learning and growing) and it sets expectations honestly (you
are in progress, not claiming completed certs you don't have).

THE GREEN DOT:
Signals you are active and available. Small detail but it reads
subconsciously as "this person is present." If you are ever not
looking for work, remove it or change the color.

ENGINEERING NOTE: The hero uses CSS animations with animation-
delay to stagger the entrance of each element. This creates a
polished feel without being distracting. The background grid
uses a CSS mask to fade out at the edges so it doesn't look
cheap. The blue glow is a pseudo-element with a radial gradient.


----------------------------------------------------------------
SECTION 3: ABOUT
----------------------------------------------------------------

WHAT: Short bio on the left, four stat cards on the right.

WHY: People want to know who they are dealing with before they
     look at your work. Keep this SHORT. Three paragraphs max.
     Nobody reads long bios on portfolio sites. The stat cards
     give visual anchors that communicate quickly.

THE FOUR STATS AND WHY THESE FOUR:
- "3+ Years in IT" — establishes that you are not a complete
  beginner. You have real professional experience.
- "6+ Live Projects" — the word LIVE matters. Not tutorials,
  not coursework, not mockups. Real deployed things.
- "2 Certs in Progress" — honest. You don't have them yet but
  you are actively pursuing them. Shows initiative.
- "1st BEST Robotics 2024" — this one is important. It shows
  leadership, mentorship, and winning. Those are character
  signals that technical skills alone don't show.

WHAT THE BIO SHOULD COMMUNICATE:
1. You have real professional experience (not just a hobbyist)
2. You build real things outside of work (not just an IT guy)
3. You have a clear direction (AI + security intersection)
4. You are finishing a degree (almost there, not a dropout)

WHAT THE BIO SHOULD NOT DO:
- Do not apologize or hedge ("I'm still learning")
- Do not list every tool you have ever touched
- Do not use corporate buzzwords like "synergy" or "leverage"
- Do not write in third person ("Daniel is a developer who...")

UPDATE THIS WHEN:
- You finish your BBA (change "in progress" to graduation year)
- You pass Security+ (update the cert line and remove it from
  "in progress")
- You hit more live projects (update the count)


----------------------------------------------------------------
SECTION 4: PROJECTS
----------------------------------------------------------------

THIS IS THE MOST IMPORTANT SECTION AFTER THE HERO.

Your projects are your proof of work. In the absence of a
traditional job title that matches what you can do, your
projects ARE your resume. A hiring manager who sees Aura and
understands what it took to build it will overlook the fact
that your day job says "IT Technician."

CURRENT PROJECT ORDER AND WHY:

1. AURA (Featured)
   Lead with this. It is your most complex, most complete, most
   impressive project. It has real users. It has an economy
   with real game theory baked in. It is a PWA. It uses a
   production stack. The fact that you built a social app with
   a real economy from scratch, deployed it, and have real
   users on it is genuinely remarkable for someone at your
   career stage. This needs to be first and described in full.

2. CFB DYNASTY HUB (Featured)
   Second because it demonstrates different skills — multi-user
   systems, row-level security, relational database design with
   real relationships between dynasties, seasons, games,
   trophies, coaches. This shows you understand data modeling
   and security at the database level, not just the UI level.

3. CFB GAME PREDICTION MODEL
   Third because it introduces the AI/ML angle. This matters
   for the direction you are headed. Even if it is not your
   most polished project, it signals that you are working in
   that space and thinking about data and prediction.

4. FOG SERVER — NWSCC
   Fourth. This is your infrastructure credibility. It shows
   you can engineer systems from scratch, work with Linux,
   understand networking (PXE, DHCP, LAN), and solve real
   institutional problems. The key detail is that it did not
   exist before you built it. You identified a problem and
   created a solution. That is engineering thinking.

5. UBUNTU HOMELAB
   Fifth. This shows you run a real production-adjacent
   environment at home. Docker, Nginx, Tailscale, local LLMs,
   automated backups. This is the kind of thing that separates
   serious people from people who just take courses.

6. FANTASY FOOTBALL ANALYZER
   Sixth. ML angle with a real API integration. Good project
   but less impressive than the ones above it.

WHAT EVERY PROJECT CARD NEEDS:
- A tag (Featured, AI, Infra, etc.) — quick visual category
- The name
- What it does and what was hard about it (not just features)
- The tech stack as chips
- Live link if it exists
- GitHub link if it is public

WHAT TO ADD WHEN YOU HAVE IT:
- Screenshots or preview images for each project. Visual proof
  makes a huge difference. Even a simple screenshot of the UI
  increases trust significantly.

PROJECTS TO ADD IN THE FUTURE:
- Any AI project you build while learning AI engineering
- Any security-related project (even a small CTF writeup)
- If you do freelance work, add it (with client permission)

DO NOT ADD:
- Tutorial projects you followed step by step
- Anything that is not deployed or runnable
- Projects you cannot explain in an interview


----------------------------------------------------------------
SECTION 5: SKILLS
----------------------------------------------------------------

WHAT: Four columns — Languages, Frameworks & Tools,
      Backend & Infra, IT & Systems.

WHY: Hiring managers and ATS (applicant tracking systems) scan
     for specific keywords. Having your skills listed clearly
     increases the chance you show up in searches and pass
     automated screening. The four-column grid is scannable
     in about 5 seconds.

WHY THESE FOUR CATEGORIES:
- Languages: what you write
- Frameworks & Tools: what you build with
- Backend & Infra: what you deploy and run
- IT & Systems: your professional background (this matters
  because it is real paid experience, not just side projects)

IMPORTANT: Only list things you can have a basic conversation
about. If someone asks you "what did you use Nginx for" you
should be able to answer. You used it in your homelab as a
reverse proxy — you can answer that question.

DO NOT list things just because they sound impressive. If you
put "Kubernetes" on there and someone asks you about it in
an interview, you need to be able to talk about it.

UPDATE THIS WHEN:
- You pass Security+ (add it as a cert, not just a skill)
- You start working with AI frameworks (LangChain, OpenAI API,
  Anthropic API, vector databases like Pinecone or pgvector)
- You learn new tools through your AI engineering journey

FUTURE SKILLS TO ADD AS YOU LEARN THEM:
- OpenAI / Anthropic API
- LangChain or similar orchestration
- Vector databases (pgvector, Pinecone, Weaviate)
- Prompt engineering
- RAG (Retrieval Augmented Generation) pipelines
- Python security libraries
- Network security concepts from Security+


----------------------------------------------------------------
SECTION 6: EXPERIENCE
----------------------------------------------------------------

WHAT: Timeline of your work history with bullet points.

WHY: Even though projects are your strongest signal, employers
     still want to see a work history. The timeline format is
     clean and chronological. Each entry shows company, title,
     dates, and what you actually did.

KEY FRAMING DECISIONS:

NWSCC entry — The FOG server bullet is critical here. It reads:
"Independently engineered a FOG server solution on Linux from
scratch — enabling automated PXE network imaging across the
fleet, replacing a fully manual process."
The word "engineered" and "from scratch" are doing real work.
This is not "helped with imaging." You built something that
did not exist. Own that language.

Covenant Christian School — The robotics 1st place result is
important to keep. It shows leadership and that you produce
results, not just effort.

Contract work — Shows you have operated independently and
clients have trusted you with real systems.

WHAT NOT TO DO:
- Do not use passive voice ("was responsible for")
- Do not list duties, list accomplishments
- "Managed IT systems" is a duty
- "Engineered a FOG server from scratch that eliminated manual
  PC imaging" is an accomplishment

UPDATE THIS WHEN:
- You get a new job (add it at the top)
- You do notable freelance work


----------------------------------------------------------------
SECTION 7: CONTACT
----------------------------------------------------------------

WHAT: Email, GitHub, Resume PDF link.

WHY: Make it dead simple to reach you. Do not use a contact
     form — forms have friction and often break. Just put your
     email directly. Anyone serious enough to hire you is
     serious enough to open their email client.

CONSIDER ADDING:
- LinkedIn URL (if your LinkedIn is up to date)
- A one-line note about what you are open to:
  "Open to remote roles in development, AI engineering,
  or security."

DO NOT ADD:
- Phone number on the public site (email is enough)
- Physical address


----------------------------------------------------------------
TECHNICAL NOTES FOR MAINTAINING THE SITE
----------------------------------------------------------------

FILE STRUCTURE:
src/
  index.html   — all page content and structure
  style.css    — all visual styling (CSS variables at top)
  main.ts      — TypeScript source (edit this)
  main.js      — compiled JS (this is what the browser runs)

HOW TO EDIT AND REDEPLOY:
1. Edit index.html or style.css directly — changes are instant
2. If you edit main.ts, you need to recompile it:
   Run: npx tsc src/main.ts --outDir src --target ES2020 --lib ES2020,DOM
   This regenerates main.js from your TypeScript source
3. Push changes to GitHub and it auto-deploys via GitHub Pages

CSS VARIABLES (top of style.css):
All colors are defined as CSS variables in :root {}
To change the accent color (currently blue #5b8cff), just
change --accent in one place and it updates everywhere.
To change fonts, update the Google Fonts import in index.html
and the font variables in :root.

ADDING A NEW PROJECT:
Copy an existing .project-card div in index.html and update
the content. To make it "featured" (larger, highlighted border)
add the class "project-featured" to the div.

ADDING IMAGES TO PROJECT CARDS:
Add an <img> tag inside the project card div, above the stack
chips. Store images in an assets/ folder. Keep them under 200kb
for fast loading. Use WebP format if possible.


----------------------------------------------------------------
WHAT TO BUILD NEXT ON THE SITE
----------------------------------------------------------------

SHORT TERM (do these soon):
- Add project screenshots/preview images to each card
- Add LinkedIn link to contact section
- Update the BBA expected completion date
- Make sure all live links actually work

MEDIUM TERM (as you grow):
- Add a "Currently Learning" section near the about area
  showing Security+ and AI engineering progress. This signals
  momentum and is honest about where you are headed.
- Add case study pages for Aura and Dynasty Hub — deeper dives
  into the architecture decisions, problems you solved, what
  you would do differently. These are gold for interviews.

LONG TERM (when you have the certs and AI projects):
- Add an AI projects section separate from general projects
- Add your Security+ cert prominently near your name/headline
- Consider a short blog or notes section where you write about
  things you are learning — even 3-4 posts signals that you
  think deeply about your craft


----------------------------------------------------------------
THE BIGGER PICTURE
----------------------------------------------------------------

This site is not finished. No portfolio ever is. It is a living
document of who you are as a professional and where you are
going. The version you have now is dramatically better than
what you had. But the goal is to keep updating it as you grow.

Every time you finish a new project, add it. Every time you
learn something significant, update the skills section. Every
time you hit a milestone (cert, degree, new job), update the
hero and about section.

The person who finds this site in two years should see someone
who has clearly been on a trajectory — not someone who built
a portfolio once and forgot about it.

You have the instincts, the projects, and the work ethic. The
site now reflects that. Keep building.

================================================================
END OF DOCUMENT
================================================================
