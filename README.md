# levifackler.io - Content Management Guide

This project is built with Hugo and a custom "Hacker-Chic" theme called **Frosted Terminal**. It uses Tailwind CSS for its glassmorphism effects and strict Front Matter schemas to drive the landing page.

## 🚀 Quick Start: Adding Content

### 1. Adding Work Experience
To add a new job or role to your career story:
```bash
hugo new content experience/company-name/index.md --kind experience
```
*This creates a **Leaf Bundle** (a folder with an `index.md`), allowing you to keep job-specific images in the same folder.*

### 2. Adding a Project
To add a new technical project:
```bash
hugo new content projects/project-name/index.md --kind projects
```

### 3. Adding Education or Certifications
To add a new degree or certification:
```bash
hugo new content education/institution-name/index.md --kind education
```

---

## 📝 Required Front Matter Fields

Each `index.md` file must contain the following fields in the header (YAML):

| Field | Description | Example |
| :--- | :--- | :--- |
| `title` | The display title (Role, Project, or Degree) | `"Senior Engineer @ Google"` |
| `date` | Used for sorting (Latest first) | `2024-04-21` |
| `institution`| (Education Only) The school or platform. | `"State University"` |
| `location` | (Education Only) The city/state or "Remote". | `"Springfield, IL"` |
| `blurb` | **Crucial:** Short 1-2 sentence summary for the landing page cards. | `"Architected a Rust-based data engine..."` |
| `technologies_used` | A list of tags displayed on the cards. | `["Rust", "Go", "AWS"]` |
| `github_link` | (Projects Only) Link to the repository. | `"https://github.com/..."` |
| `images` | List of image filenames in the same folder for the Lightbox. | `["screenshot1.png"]` |
| `draft` | Set to `false` to make the page visible. | `false` |

---

## 🖼️ Working with Images (Lightbox)

1.  Place your images inside the same folder as the `index.md` (e.g., `content/projects/my-app/hero.png`).
2.  Add the filename to the `images` array in the Front Matter:
    ```yaml
    images: ["hero.png", "dashboard.png"]
    ```
3.  The theme will automatically generate a gallery at the bottom of the page that opens in a high-detail Lightbox.

---

## 🛠️ Development & Deployment

### Local Development
Run the following command to see changes in real-time (includes Tailwind compilation):
```bash
hugo server -D
```

### Building for Production
The theme uses Hugo Pipes and PostCSS. To generate the static site:
```bash
hugo --minify
```

### Styling
Custom styles and colors (like `hacker-green`) are defined in:
- `themes/frosted-terminal/assets/css/main.css`
- `tailwind.config.js` (Root directory)
