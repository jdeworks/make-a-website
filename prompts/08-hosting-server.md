# Hosting: Server Apps on Railway

Deploy an Express + SQLite app to Railway. See `prompts/03-project-structure.md` for file layout.

## Minimal Express Server

Create `server.js`:

```js
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;
const DB_PATH = process.env.DB_PATH || './data/app.db';

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
app.use(express.static(join(__dirname, 'public')));

// Database
const db = new Database(DB_PATH);
db.pragma('journal_mode = WAL');
db.exec(`CREATE TABLE IF NOT EXISTS items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
)`);

// Routes — ALWAYS use parameterized queries
app.get('/api/items', (req, res) => {
  const items = db.prepare('SELECT * FROM items ORDER BY created_at DESC').all();
  res.json(items);
});

app.post('/api/items', (req, res) => {
  const { name } = req.body;
  if (!name || typeof name !== 'string') return res.status(400).json({ error: 'Name required' });
  const result = db.prepare('INSERT INTO items (name) VALUES (?)').run(name.trim());
  res.status(201).json({ id: result.lastInsertRowid, name: name.trim() });
});

app.delete('/api/items/:id', (req, res) => {
  db.prepare('DELETE FROM items WHERE id = ?').run(req.params.id);
  res.status(204).end();
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

Install dependencies:
```bash
npm install express helmet cors express-rate-limit better-sqlite3
```

Add to `package.json`:
```json
"type": "module",
"scripts": { "start": "node server.js" }
```

## Deploy to Railway

1. Push your project to GitHub
2. Go to https://railway.com and connect your GitHub repo
3. **Add a persistent volume:**
   - In the service settings, go to Volumes
   - Mount path: `/data`
4. **Set environment variables:**
   - `DB_PATH=/data/app.db`
5. Railway auto-detects Node.js and runs `npm start`
6. Railway provides a public URL for your app

## Gotchas

- **Persistent volume is required** — without it, SQLite data is lost on every deploy
- **Use Node.js 20 LTS** — set in Railway environment or add `"engines": {"node": "20"}` to package.json
- **Single instance only** — SQLite doesn't support multiple concurrent writers
- **Never concatenate user input into SQL** — always use parameterized queries (`?` placeholders)

## Verify

- [ ] Server starts with `node server.js` or `npm start`
- [ ] API routes respond correctly (test with curl or browser)
- [ ] SQLite database file is in `.gitignore`
- [ ] Environment variables configured on hosting platform
- [ ] Persistent volume attached for SQLite data
