import { ArrowRight, Check } from 'lucide-react';

export default function CTA() {
  return (
    <section id="get-started" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">Start issuing verifiable skill certificates</h3>
            <ul className="mt-4 space-y-2 text-slate-700 text-sm">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Connect your academy or HR system</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Customize certificate templates</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Share QR codes or links for instant verification</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Work Email</label>
                <input type="email" required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="you@company.com" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">First Name</label>
                  <input type="text" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="Alex" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Last Name</label>
                  <input type="text" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="Kim" />
                </div>
              </div>
              <button className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-slate-900 px-4 py-2.5 text-white font-medium hover:bg-slate-800">
                Request Access
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-xs text-slate-500 text-center">We’ll reach out within 1-2 business days.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
