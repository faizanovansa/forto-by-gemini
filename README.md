# Faiza Novansa — Digital Archive

This is a personal portfolio and digital identity for Faiza Novansa, designed to function as a sophisticated digital archive. 

## 1. Technology Used & Why
* **Vite + React:** The modern standard for building user interfaces. It's incredibly fast to load while you edit.
* **Tailwind CSS:** Allows us to style the website using classes directly in the HTML, avoiding messy CSS files.
* **Framer Motion:** A professional library used to create the smooth, cinematic fade-ins as you scroll.
* **Lucide React:** A clean, minimal icon library.

## 2. Installation & Running Locally
1. Download and install [Node.js](https://nodejs.org/).
2. Open your terminal (or Command Prompt / VS Code terminal).
3. Navigate to your project folder: `cd path/to/faiza-archive`
4. Install the required packages: `npm install`
5. Start the local server: `npm run dev`
6. Open `http://localhost:5173` in your browser.

## 3. How to Update Your Information
**You do not need to touch the UI code to update your text.**
1. Open `src/data/content.js`.
2. This file contains simple variables. Change the text inside the quotes `""`.
3. Save the file, and your website will update instantly in the browser.

## 4. How to Update the Profile Photo
1. Find your best, cinematic, moody portrait photo. (High contrast works best).
2. Name it exactly `profile.jpg`.
3. Put it inside the `public/images/` folder (Replace the one that is there).
4. The website will automatically pull it in and apply the cinematic black-and-white filtering via code.

## 5. Adding Projects
In `src/data/content.js`, find the `projects` array. Simply copy an existing project block `{ ... }` and paste it below. Update the title, description, and replace `"YOUR_GITHUB_URL"` with actual links. If you don't have a demo link, just delete the `demo: "..."` line for that project, and the icon will automatically hide itself.

## 6. How to Deploy (Make it live on the internet for free)
The absolute simplest way to deploy a Vite React app is using **Vercel**:
1. Create a free account at [Vercel.com](https://vercel.com).
2. Upload this entire project to a free GitHub repository.
3. On Vercel, click "Add New Project", connect your GitHub account, and select your repository.
4. Vercel will automatically detect that it's a Vite app. Click **Deploy**.
5. Within 2 minutes, you will have a live, shareable URL.

## 7. Common Error Fixes
* **"Command not found: npm"** - You forgot to install Node.js.
* **Website is blank** - Check your terminal. You might have made a typo (like missing a comma) in `src/data/content.js`.
