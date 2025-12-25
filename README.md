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

