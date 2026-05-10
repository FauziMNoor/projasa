# Projas AI Widget

## Overview

AI Chat Widget yang aman untuk landing page Projasa. Widget ini menggunakan arsitektur **air-gapped** — user tidak bisa akses system prompt atau inject perintah berbahaya.

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    SKEMA KEAMANAN                            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  [User di Landing Page]                                     │
│         │                                                    │
│         ▼                                                    │
│  ┌──────────────────┐                                        │
│  │  Widget (Frontend) │  ◄── Cuma bisa Kirim pesan         │
│  │  - Input sanitized │      & terima response              │
│  │  - No system prompt│      Tidak bisa akses system        │
│  └────────┬─────────┘                                       │
│           │ HTTP Request                                     │
│           ▼                                                  │
│  ┌──────────────────┐                                        │
│  │  API Proxy Server │  ◄── Disini baru ada:                │
│  │  (Express.js)    │      - API Key AI                    │
│  │  - Input validate │      - System prompt                 │
│  │  - KB injection   │      - Knowledge base               │
│  └────────┬─────────┘      - Rate limiting                  │
│           │                                                  │
│           ▼                                                  │
│  ┌──────────────────┐                                        │
│  │  AI (Knowledge   │  ◄── Cuma dapat KB, bukan            │
│  │  Only)           │      system asli                      │
│  └──────────────────┘                                        │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Security Features

### 1. Prompt Injection Prevention
- Pattern detection untuk berbagai teknik injection:
  - English injection: "ignore previous", "forget all", "you are now"
  - Symbol-based: `---`, ````system`
  - Encoding: base64, decode attempts
  - Multilingual: Chinese chars (你是谁, 内置), Russian (новый)
  
### 2. Server-Side Protection
- System prompt **NIK PERNAH** dikirim ke frontend
- API key hanya ada di server
- Input sanitization sebelum diproses

### 3. Rate Limiting
- 20 requests per menit per IP
- Automatic cleanup untuk expired entries

### 4. Input Validation
- Max message length: 2000 chars
- Type checking: harus string
- Null/empty check

## File Structure

```
projasa-landing/
├── server/
│   └── api/
│       └── projas-ai.js      # Express API server
├── src/
│   └── components/
│       └── ProjasAIWidget.jsx # React widget component
├── knowledge/
│   └── PROJASA_KNOWLEDGE.md  # Knowledge base
└── README_AI_WIDGET.md        # This file
```

## Installation

```bash
cd projasa-landing
npm install

# Development
npm run dev          # Frontend (Vite)
node server/api/projas-ai.js  # API Server (separate terminal)

# Production
npm run build
node server/api/projas-ai.js
npm start
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | API server port | `3001` |
| `ALLOWED_ORIGIN` | CORS origin | `*` |

## API Endpoints

### `GET /api/health`
Health check endpoint.

**Response:**
```json
{ "status": "ok", "timestamp": 1234567890 }
```

### `POST /api/chat`
Send a chat message.

**Request:**
```json
{
  "message": "Apa harga izin usaha mikro?",
  "sessionId": "uuid-optional"
}
```

**Response:**
```json
{
  "response": "Untuk layanan Izin Usaha Mikro, harganya mulai dari Rp 1.500.000..."
}
```

## Integration

Widget sudah terintegrasi di `App.jsx`. Untuk custom placement:

```jsx
import ProjasAIWidget from './components/ProjasAIWidget';

function App() {
  return (
    <div>
      {/* Your content */}
      <ProjasAIWidget />
    </div>
  );
}
```

## Future Enhancements

- [ ] Integrate real AI provider (OpenAI, Claude, etc.)
- [ ] Add conversation history persistence
- [ ] Add typing indicators customization
- [ ] Add dark/light theme support
- [ ] Add analytics for widget usage
- [ ] Add multiple language support
