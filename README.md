# My Portfolio Website

**Live Demo:** [Add Your Deployment Link Here]

## Project Overview
A personal portfolio website built with Next.js and Prisma, allowing the portfolio owner to manage blogs, projects, and other content via a secure dashboard. Public users can view blogs, projects, and personal details.

**Key Features:**
- **Authentication & Authorization:** JWT-based secure login for the portfolio owner.
- **Dashboard:** Owner-only dashboard to manage blogs, projects, and content.
- **Blog Management:** Create, read, update, and delete blogs (Owner only). Public users can view all blogs and individual blog posts.
- **Projects Showcase:** Display personal projects with thumbnails, live links, features, and descriptions.
- **About Me Section:** Publicly accessible personal info, bio, and work experience.
- **Responsive UI & UX:** Optimized for mobile and desktop devices.
- **Notifications:** Feedback with `Shancn sonner toast`.

## Technology Stack
- **Frontend:** Next.js, TypeScript, Tailwind CSS
- **Backend:**  Express.js, PostgreSQL (Prisma)
- **Authentication:** Next Auth
- **Notifications:** Shancn sonner toast
- **Rendering:** SSG & ISR for performance and dynamic content

## Setup Instructions
1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd <project-folder>
   npm install
  DATABASE_URL=your_database_url(example)
  JWT_SECRET=your_jwt_secret(example)
