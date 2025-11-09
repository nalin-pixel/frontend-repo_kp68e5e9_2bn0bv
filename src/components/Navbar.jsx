import { Layers, Link as LinkIcon } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-md">
              <Layers className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">SkillChain</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
            <a href="#aa" className="hover:text-slate-900 transition-colors">AA Portal</a>
            <a href="#ab" className="hover:text-slate-900 transition-colors">AB Portal</a>
            <a href="#verify" className="hover:text-slate-900 transition-colors flex items-center gap-1"><LinkIcon className="h-4 w-4"/>Verification</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="md:hidden inline-flex items-center justify-center rounded-lg border border-slate-300 p-2 text-slate-600 hover:bg-slate-50" aria-label="Open Menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
            <a href="#get-started" className="hidden md:inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-slate-800">Get Started</a>
          </div>
        </div>
      </div>
    </header>
  );
}
