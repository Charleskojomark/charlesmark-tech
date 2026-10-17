# Charles Mark — AI Systems Engineer

> **Personal Engineering Website & Production Portfolio**  
> Primary Domain: [https://charlesmark.tech](https://charlesmark.tech)  
> Brand: **CHARLES MARK | AI SYSTEMS ENGINEER**

---

## ✦ System Overview

This repository houses the personal brand, interactive engineering portfolio, service catalog, and educational insights platform for **Charles Mark**.

The website is engineered for performance, precision, and longevity:
- **Framework**: Next.js 16 with App Router
- **Type Safety**: TypeScript in strict mode
- **Styling**: Tailwind CSS v4 with bespoke editorial tokens
- **Icons**: Lucide Icons
- **Validation**: Server-side & client-side schema validation with Zod
- **Typography**: Space Grotesk (headings), Inter (body), JetBrains Mono (code & technical labels)
- **Palette**: Warm editorial espresso & milk palette (`#F5F0E8`, `#4A3428`, `#B58A64`, `#D8C5AF`, `#241A15`)

---

## ✦ Key Features & Interactive Architecture

1. **Continuous Typing Hero**: Real character-by-character typing loop with natural cadence, blinking caret, zero layout shifts, and graceful fallback for `prefers-reduced-motion`.
2. **Interactive System Map**: Lightweight SVG diagram showcasing connected nodes (Client Requests, Backend API Gateway, Agent Orchestrator, PostgreSQL/pgvector, and n8n Workflow Automation) with live telemetry inspection.
3. **Engineering Disciplines Trust Strip**: Highlights AI systems, backend engineering, workflow automation, API integration, and cloud-based applications.
4. **Detailed Case Studies (`/work` & `/work/[slug]`)**: In-depth architecture breakdowns, problems solved, specific contributions, trade-offs, and key learnings for Klinik, n8n automation, enterprise backend APIs, and RAG systems.
5. **Services Catalog (`/services`)**: Visually distinct breakdowns of the 3 primary offerings (AI Workflow Automation, Custom AI Agents, Backend Development & AI Integration) with direct prefilling into the contact workflow.
6. **How I Work Methodology**: 5-stage interactive lifecycle (01 Understand, 02 Design, 03 Build, 04 Test, 05 Improve).
7. **Educational Insights & Articles (`/insights` & `/insights/[slug]`)**: Editorial guides covering automation evaluation, stateful agents vs. chatbots, webhook reliability, and AI API integration.
8. **Contact & Lead Pipeline (`/contact` & `/api/contact`)**: Zod-validated input handling, honeypot spam prevention, resilient error feedback, and optional Resend email delivery.
9. **Footer Compliance**: Adheres to exact social color rules:
   - LinkedIn logo only: `#0A66C2`
   - GitHub logo: `#000000`
   - Usernames and domain: `#000000`

---

## ✦ Local Development

### Prerequisites
- Node.js (v18.17+ or v20+)
- npm (v9+)

### Installation
```bash
# Clone or navigate to the directory
cd CHARLESTECH

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Test
```bash
# Compile and validate production build
npm run build

# Start production server
npm run start
```

---

## ✦ Centralized Configuration

All core personal information, social links, and navigation items are decoupled from UI components:

### 1. Site Metadata & Socials (`src/config/site.ts`)
Edit profile usernames, URLs, turnaround times, and CV settings:
```typescript
export const siteConfig = {
  name: "Charles Mark",
  title: "AI Systems Engineer",
  url: "https://charlesmark.tech",
  social: {
    linkedin: { username: "markcharleskojo", url: "https://www.linkedin.com/in/markcharleskojo/" },
    github: { username: "Charleskojomark", url: "https://github.com/Charleskojomark" }
  },
  cv: {
    url: "/cv-charles-mark.pdf",
    available: false // Change to true once you place your PDF in /public
  }
};
```

### 2. Adding a New Project (`src/data/projects.ts`)
Add a new object to the `projects` array with:
- `slug`: URL identifier (e.g. `my-new-system`)
- `title`, `tagline`, `category`, `status`, `timeline`
- `problem`, `solution`, `contribution`
- `architecture`, `decisions`, `tradeoffs`, `learnings`
- `githubUrl` or `demoUrl`

### 3. Adding an Article (`src/data/articles.ts`)
Add a new object to the `articles` array with:
- `slug`, `title`, `summary`, `category`
- `readingTime`, `publishedDate`
- `keyTakeaways`: array of core points
- `content`: array of paragraphs

---

## ✦ Adding Your CV / Resume

1. Place your compiled PDF file in the `public` directory:
   ```
   public/cv-charles-mark.pdf
   ```
2. Open `src/config/site.ts` and set:
   ```typescript
   cv: {
     url: "/cv-charles-mark.pdf",
     available: true
   }
   ```
The download buttons will automatically activate on the Hero and About pages.

---

## ✦ Contact Form Configuration

Create a `.env.local` file from the provided `.env.example`:

```bash
cp .env.example .env.local
```

### Variables:
- `RESEND_API_KEY`: *(Optional)* API key from [Resend](https://resend.com) for forwarding contact inquiries directly to your inbox.
- `CONTACT_EMAIL`: Your destination email (default: `markcharleskojo@gmail.com`).
- `NEXT_PUBLIC_SITE_URL`: Set to `https://charlesmark.tech`.

> **Note**: In development or if `RESEND_API_KEY` is omitted, inquiries are validated, safely simulated in server console logs, and return a verified receipt message without throwing runtime errors.

---

## ✦ Deployment Guide (Vercel)

The project is preconfigured for zero-config deployment to Vercel:

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial Charles Mark personal engineering platform"
   git remote add origin https://github.com/Charleskojomark/charlesmark-web.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) and import the repository.
3. In **Project Settings -> Environment Variables**, add:
   - `CONTACT_EMAIL` = `markcharleskojo@gmail.com`
   - `RESEND_API_KEY` = `re_...` *(optional)*
4. Click **Deploy**.
5. Under **Domains**, add `charlesmark.tech` and configure your DNS records (CNAME or A record) as instructed by Vercel.

---

## ✦ License
© 2026 Charles Mark. Engineered with practical precision.
