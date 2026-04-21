# Lunmix

Lunmix is a browser-based desktop environment and modular application platform built with React, Tailwind CSS, shadcn/ui, and Fastify.

## Structure

- `frontend/` – React frontend app with desktop environment, boot flow, window manager, apps, and theme engine.
- `backend/` – Fastify server with proxy and internal routing modules.

## Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Open the frontend at the port printed by Vite and the backend at `http://localhost:3000`.

## Features

- Boot experience with animated startup log
- First-time setup and theme selection stored in `localStorage`
- Desktop environment with icons, taskbar, start menu, and draggable windows
- Apps: Calculator, Browser, Notes, Games Launcher, Soundboard
- Internal pseudo-protocol routing: `lunmix://home`, `lunmix://apps`, `lunmix://games`, `lunmix://settings`
- Fastify backend with proxy support, Scramjet-style routing, and custom transport modules
