import { Rocket, Shield, CheckCircle2 } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7N8tG5iwZzqNQ1F2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
                <Shield className="h-3.5 w-3.5 text-emerald-600" />
                Blockchain-backed credentials
              </div>
              <h1 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
                Verify skills instantly with SkillChain
              </h1>
              <p className="mt-4 text-slate-600 text-lg">
                A unified way to issue, manage, and verify skill certificates across academies, employers, and learners.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a href="#get-started" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-white shadow hover:bg-slate-800">
                  <Rocket className="h-4 w-4" />
                  Get Started
                </a>
                <a href="#verify" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-2.5 text-slate-800 hover:bg-slate-50">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Verify a Certificate
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-6 shadow-lg">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <Stat label="Issued" value="12,480" />
                  <Stat label="Verified" value="11,972" />
                  <Stat label="Issuers" value="128" />
                  <Stat label="Learners" value="64,300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 p-4 bg-white">
      <div className="text-slate-500 text-xs uppercase tracking-wide">{label}</div>
      <div className="mt-1 text-2xl font-semibold text-slate-900">{value}</div>
    </div>
  );
}
