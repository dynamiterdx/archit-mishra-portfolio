Personal Portfolio (Red-Black Tech Theme)

Overview
- Single-page portfolio for data science projects and photography.
- Techy red/black aesthetic with subtle grid/glow accents.
- Data-driven via simple JSON so you can add content quickly.

Quick Start
1) Open a terminal in this folder.
2) Run a local web server to avoid browser restrictions loading JSON files:
   - Python: `python3 -m http.server 5173` then visit http://localhost:5173
   - Node (if installed): `npx serve -l 5173` then visit http://localhost:5173
3) Edit content and refresh the browser.

Structure
- `index.html`: Main page with sections for Home, Projects, Photography, Contact.
  - Includes About Me, Technical Expertise, Skills, Resume link, and a recruiter JD box.
- `assets/css/styles.css`: Theme styles.
- `assets/js/main.js`: Global behaviors and profile links.
- `assets/js/home.js`: Home page helpers for the JD box (copy, download, send).
- `assets/js/projects.js`: Renders projects from `data/projects.json`.
- `assets/js/gallery.js`: Renders photography grid from `data/photos.json` + lightbox.
- `assets/img/*`: Logo and placeholder images. Put your thumbnails/photos here.
- `assets/img/profile-placeholder.svg`: Replace with your portrait photo.
- `data/projects.json`: Your projects data.
- `data/photos.json`: Your photography data.

Customizing Your Info
- Name/brand: Update the text node in `index.html:14` and (optionally) the logo SVG at `assets/img/logo.svg`.
- Contact links: Update the LINKS object in `assets/js/main.js` (email, GitHub, LinkedIn, external).
- Resume link: Set `resume` in `assets/js/main.js` to your PDF path or URL; e.g. upload `assets/resume/resume.pdf` and point to it.

Add/Update Projects
- Edit `data/projects.json`. Each project supports:
  - `title` (string): Project name
  - `description` (string): Short summary/impact
  - `image` (string): Path to thumbnail (e.g., `assets/img/my-project.jpg`)
  - `tags` (array of strings): Tech/keywords
  - `repoUrl` (string): GitHub repository URL
  - `demoUrl` (string): Live demo URL (Streamlit, HuggingFace Space, etc.)

Example project entry
{
  "title": "Customer Churn Prediction",
  "description": "End-to-end churn model with feature engineering, model explainability, and FastAPI serving.",
  "image": "assets/img/churn-thumb.jpg",
  "tags": ["Classification", "XGBoost", "SHAP", "FastAPI"],
  "repoUrl": "https://github.com/yourusername/churn-prediction",
  "demoUrl": "https://your-demo.example.com/churn"
}

Add/Update Photography
- Edit `data/photos.json`. Each photo supports:
  - `src` (string): Path to image (e.g., `assets/img/travel-1.jpg`)
  - `alt` (string): Short description for accessibility

Example photo entry
{ "src": "assets/img/mountains.jpg", "alt": "Sunrise over mountains" }

Assets & Images
- Place all custom images under `assets/img/`.
- Thumbnails should ideally be 16:9 for projects (e.g., 1280x720) and ~120–300 KB for performance.
- Photography will auto-fit a responsive grid; large originals will still work.

Notes
- Opening `index.html` directly via the file system may prevent JSON loading in some browsers. Use a local server as shown above.
- The demo contact form is non-functional by default. Use the email link (or integrate a form service if needed).
- The “Am I Fit For Your Job?” box opens a prefilled email to you with the pasted JD. Copy and Download options are provided for convenience.

License
- This is a simple template you can freely adapt for your personal use.
