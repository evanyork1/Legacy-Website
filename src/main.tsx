import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const container = document.getElementById("root")!;

// react-snap pre-renders our public marketing routes to real HTML files
// during the build. When the page is loaded with that prerendered markup
// present, hydrate it instead of replacing it (avoids a flash and keeps
// the crawlable HTML stable for SEO). Otherwise do a normal client render.
// Prerendered HTML (from a headless browser) merges adjacent text nodes, so
// hydrating it always mismatches and React re-renders anyway. Render fresh
// over the prerendered markup instead: crawlers still get full HTML, and the
// browser skips the failed-hydration pass and its console errors.
createRoot(container).render(<App />);
