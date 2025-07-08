# NeighborFit

NeighborFit is a full-stack web application that matches users to neighborhoods based on their lifestyle preferences using real-world data and algorithmic logic.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Prisma ORM (SQLite/Postgres)
- Zod (validation)

## Folder Structure

- `src/app/` — App Router pages
- `src/components/` — Reusable UI components
- `src/lib/` — Server/client utilities
- `src/types/` — TypeScript types
- `src/utils/` — Pure utility functions
- `src/api/` — API route handlers
- `prisma/` — Prisma schema and migrations
- `docs/` — Documentation

## Setup

1. Install dependencies: `npm install`
2. Set up database: `npx prisma migrate dev --name init`
3. Run dev server: `npm run dev`

## Matching Logic

See `src/utils/matchNeighborhoods.ts` for algorithm details.

## Documentation

See `docs/` for:

- Problem definition
- Research & assumptions
- Matching algorithm
- Data acquisition
- Scalability

## Deployment Checklist

- [ ] Code is commented and documented
- [ ] All environment variables are set (see .env.example)
- [ ] Database is migrated and seeded with data
- [ ] App runs locally with `npm run dev`
- [ ] App is pushed to GitHub
- [ ] App is deployed to Vercel
- [ ] README is up to date

## Sample Commit Message

```
feat: initial NeighborFit MVP with survey, results, and API endpoints
```

---

_Work in progress. See issues for roadmap._

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
