# Sundara Kanda - The Beautiful Chapter

A web application for exploring Slokas 11-20 of Sundara Kanda (The Beautiful Chapter) from Ramayana, featuring audio narration and multilingual summaries.

## Features

- **10 Sacred Slokas**: Explore verses 11-20 of Sundara Kanda
- **Audio Narration**: Listen to divine chanting and AI-generated audio
- **Multilingual Support**: Translations and summaries in 6 languages
- **Word-by-Word Meaning**: Detailed explanations for each verse
- **Beautiful UI**: Modern, responsive design with traditional aesthetics

## Technologies

This project is built with:

- **Vite** - Fast build tool and dev server
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **shadcn-ui** - High-quality React components
- **Tailwind CSS** - Utility-first CSS framework
- **Supabase** - Backend services (optional, for audio generation)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sundara-sara-sangam-main
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:8080
```

## Configuration

### Optional: Supabase Setup (for Audio Generation)

To enable AI audio generation features, create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_key
```

The application works without Supabase configuration, but audio generation features will be disabled.

### Text-to-Speech (TTS) fallback for Indian languages

Browsers may not include Telugu, Tamil, Malayalam or Kannada voices. To ensure summaries can be spoken in those languages, the app implements a server-side TTS fallback. Configure the fallback by adding the following to your `.env`:

```env
# URL of your deployed TTS endpoint which accepts POST { text, language }
VITE_TTS_API_URL=https://your-domain/functions/generate-sloka-audio
```

How it works:
- The client attempts to use the browser's native `SpeechSynthesis` voice for the requested language.
- If a matching native voice isn't available, the client sends `{ text, language }` to `VITE_TTS_API_URL` and plays the returned audio blob.

Supabase Edge Function example:
- The repository contains `supabase/functions/generate-sloka-audio/index.ts` which posts to ElevenLabs' multilingual model and returns an MP3 stream.
- To deploy to Supabase Edge Functions, follow Supabase docs and set `ELEVENLABS_API_KEY` in the function's environment.

Testing locally:
1. Ensure `VITE_TTS_API_URL` points to a reachable endpoint (deployed function or local tunnel).
2. Run the app (`npm run dev`) and open a Sloka detail page.
3. Click the summary audio button — if native voice is missing, the app will call the configured endpoint and play generated audio.

Security note: keep API keys (e.g., `ELEVENLABS_API_KEY`) server-side and never expose them to the browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
  ├── components/     # React components
  ├── pages/          # Page components
  ├── hooks/          # Custom React hooks
  ├── data/           # Static data (slokas)
  ├── integrations/   # External service integrations
  └── lib/            # Utility functions
```

## License

This project is open source and available for educational and spiritual purposes.

---

जय श्री राम | जय बजरंग बली

