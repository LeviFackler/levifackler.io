GEMINI.md: Project Context & Architectural Guidelines
Project Overview
Goal: A high-end, narrative-driven Hugo resume/portfolio website.

Core Philosophy: "Storytelling through Technical Excellence." The site uses a "Hacker-Chic" aesthetic with professional, modern design elements.

Target Audience: Technical Recruiters and Peer Engineers.

1. Visual Identity & Design Language
Theme Concept: "Frosted Terminal."

UI Style: Modern Glassmorphism (Frosted Touch).

Backgrounds: Semi-transparent with backdrop-filter: blur().

Terminal Block: The central skill/info block on the landing page is a frosted glass container. It must be interactive (simple enough for HR users, e.g., clickable "commands" or a simple typing simulation).

Navigation: A Floating Dock (macOS/Raycast style) that remains persistent across the landing page and sub-pages.

Syntax Highlighting: Hugo Chroma using the Monokai theme.

2. Site Structure & Logic
Landing Page: A single-page hybrid utilizing HTML Anchors for smooth scrolling.

Content Organization: * Uses Hugo Leaf Bundles (content/projects/my-project/index.md).

Job experience and project overviews on the landing page use a custom blurb field in Front Matter rather than auto-summaries.

Deep Dives: Individual project and work pages are text/paragraph heavy, focusing on narrative "career stories."

Media: Implementation of a Lightbox effect for all screenshots to maintain a clean layout while allowing high-detail inspection.

3. Data Schema (Front Matter)
For every index.md in experience/ or projects/, the following fields are mandatory:

title: String

date: Date

blurb: Short summary for the landing page.

github_link: URL (Optional for work experience).

technologies_used: List/Array of strings.

images: List of image paths for the Lightbox gallery.

4. Technical Requirements
Framework: Hugo (Custom Theme).

CSS: Vanilla CSS or Tailwind (focused on Glassmorphism utilities).

SEO: Full OpenGraph support for rich previews on LinkedIn and GitHub.

Deployment: Docker-based (Config managed externally; Gemini to focus on site-internal logic).

5. Gemini CLI Persona & Role
Role: Senior Front-End Developer.

Focus: Writing clean, semantic HTML5, modern CSS, and efficient Hugo Go-Templates.

Tone: Professional, technically precise, and helpful.

Instruction: Prioritize accessibility (A11y) even within the terminal aesthetic to ensure screen readers can navigate the "interactive" components.

Implementation To-Do List (Next Steps)
[ ] Initialize Hugo project with a blank custom theme.

[ ] Create the baseof.html and list.html layouts to support the Floating Dock.

[ ] Develop the "Frosted Terminal" CSS component.

[ ] Script the interactive "HR-friendly" CLI simulation for the landing page.

[ ] Configure the Lightbox JS/CSS for Leaf Bundle images.
