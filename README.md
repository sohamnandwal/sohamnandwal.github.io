# Soham Nandwal — Portfolio & Game Zone

Personal portfolio website and interactive browser game hub of **Soham Nandwal** (B.Tech Engineering Physics student at IIT Roorkee, programmer, physics & math enthusiast, and gamer).

Live site: [sohamnandwal.github.io](https://sohamnandwal.github.io/)

---

## Overview & Highlights

- **Modern Minimalist Architecture**: Built with React 19, TypeScript, and Vite using vanilla Web Standards without heavy third-party UI frameworks.
- **5 Aesthetic Color Themes**: Fully custom CSS variable theme system featuring low-contrast, soft borders, and ample whitespace:
  - **Nordic Frost**: Crisp, cool Scandinavian studio light with cobalt accents.
  - **Matcha Garden**: Serene, organic Kyoto herbal tea aesthetic with moss green accents.
  - **Warm Terracotta**: Sun-baked Mediterranean clay & golden sand parchment.
  - **Twilight Mauve**: Atmospheric, dreamy dusk lavender & antique amethyst.
  - **Obsidian Night**: Deep, comfortable eye-friendly midnight slate dark mode.
  - *Theme preference is automatically saved and restored via `localStorage`.*
- **Interactive Game Arcade**: Catalog of 13 playable browser games (Scratch & Unity WebGL) playable directly on the page with fullscreen support, randomized suggestions, and expand/collapse controls.
- **Clean Sticky Navigation**: Pinned top navigation with custom offset scrolling (`scroll-padding-top` / `scroll-margin-top`) so sections never get hidden behind the header.

---

## Repository Structure

```text
├── public/                # Static assets (games, me.jpg, app-ads.txt, .nojekyll)
│   ├── scratch-games/     # HTML5, WebGL, and Scratch game bundles
│   └── me.jpg             # Profile avatar image
├── scripts/
│   └── deploy.js          # Cross-platform deployment script for GitHub Pages
├── src/
│   ├── components/        # Reusable components (GameCard, etc.)
│   ├── data/              # Structured data mappings (gamesData)
│   ├── pages/             # View pages (GamePage)
│   ├── App.tsx            # Main layout and section orchestration
│   ├── App.css            # Component and layout styling
│   ├── index.css          # Design system tokens and 5 theme palettes
│   └── main.tsx           # React entry point
├── dist/                  # Production build output (gitignored on dev)
└── vite.config.ts         # Vite build configuration
```

---

## Branching Strategy

To host a React/Vite Single Page Application on GitHub Pages under a user domain (`<username>.github.io`), this repository uses a dual-branch structure:

| Branch | Role | Description |
| :--- | :--- | :--- |
| **`dev`** | **Source Code** | The active working branch containing React source code, TypeScript files, styling, and assets. |
| **`main`** | **Production Deployment** | Standalone static build output (`dist/`) served directly by GitHub Pages. |

---

## Getting Started Locally

### Prerequisites
- Node.js (version 18 or newer recommended)
- npm

### Installation & Development
1. Clone the repository and checkout the `dev` branch:
   ```bash
   git clone https://github.com/sohamnandwal/sohamnandwal.github.io.git
   cd sohamnandwal.github.io
   git checkout dev
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

---

## Steps to Build & Deploy to GitHub Pages

Deploying updates to [sohamnandwal.github.io](https://sohamnandwal.github.io/) is automated through the deployment script:

1. **Ensure your changes are committed on `dev`**:
   ```bash
   git add .
   git commit -m "feat: your update description"
   git push origin dev
   ```

2. **Build the production bundle**:
   ```bash
   npm run build
   ```
   *(Or `npm.cmd run build` on Windows PowerShell)*

3. **Deploy to `main`**:
   ```bash
   npm run deploy
   ```
   *(Or `node scripts/deploy.js`)*

The deploy script packages the compiled `dist/` directory (including the `.nojekyll` configuration and games) and pushes it directly to `origin/main`, prompting GitHub Pages to update automatically.
