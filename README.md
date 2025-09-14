# StarPath Notion Facade (Next.js + Notion API + Vercel Blob)

A minimal starter that lets **students/teachers only see *your* website** while
all data is stored in **Notion**. Files are uploaded to **Vercel Blob** and the
file URL is saved into Notion.

## What you get
- `/`      — Home with 4 role buttons (Student / Teacher / Counselor / Boss)
- `/student` — Student upload form (name, email, notes, file)
- `/teacher` — Simple dashboard (list recent submissions) — protected by `ADMIN_KEY`
- API routes:
  - `POST /api/submit` — create a Notion page, upload file to Blob, attach URL
  - `GET /api/list` — list recent pages for teachers (admin key)

## One-time setup
1. Create a Notion **integration** at https://www.notion.so/my-integrations and copy the **Internal Integration Secret**.
2. Create a Notion **database** with at least these properties (case sensitive):
   - `Name` (title)
   - `Email` (email)
   - `Role` (select) — add options like `Student`, `Teacher`
   - `Notes` (rich_text)
   - `File` (files)
3. Open the database, click **Share** → invite your integration.
4. Copy the database ID from the URL (the 32-char part).
5. On Vercel: create a project from this folder. Add these **Environment Variables**:
   - `NOTION_TOKEN` = your Notion integration secret
   - `NOTION_DATABASE_ID` = your database id
   - `ADMIN_KEY` = any strong random string (used by the teacher dashboard)
   - `BLOB_READ_WRITE_TOKEN` = Create on Vercel: Settings → Storage → Blob → Tokens
6. (Optional) Bind your custom domain in Vercel.

## Local dev
```bash
npm i
npm run dev
```
Open http://localhost:3000

## Deployment to Vercel
Push to GitHub and import in Vercel, or use Vercel CLI:
```bash
npm i -g vercel
vercel
```

## Notes
- Next.js **App Router** with `app/` directory.
- For production, add rate limiting, validation, and more granular auth.
- If you prefer **no file uploads**, remove Blob code; the app will still work for text.
