import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const NbaPage = lazy(() => import('./pages/NbaPage'));
const F1Page = lazy(() => import('./pages/F1Page'));

function PageFallback() {
  return (
    <div style={{ padding: 60, textAlign: 'center', color: 'var(--color-text-faint)' }}>
      Loading…
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="app-main">
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/nba" element={<NbaPage />} />
            <Route path="/nba/:category" element={<NbaPage />} />
            <Route path="/f1" element={<F1Page />} />
            <Route path="/f1/:season" element={<F1Page />} />
            <Route path="/f1/:season/:race" element={<F1Page />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
