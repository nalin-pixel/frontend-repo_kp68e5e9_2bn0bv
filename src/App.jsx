import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Verifier from './components/Verifier';
import CTA from './components/CTA';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <p className="text-sm text-slate-500">© {year} SkillChain. All rights reserved.</p>
        <div className="text-sm text-slate-600 flex items-center gap-4">
          <a href="#aa" className="hover:text-slate-900">AA Portal</a>
          <a href="#ab" className="hover:text-slate-900">AB Portal</a>
          <a href="#verify" className="hover:text-slate-900">Verifier</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Verifier />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
