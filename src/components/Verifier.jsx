import { Search, QrCode } from 'lucide-react';

export default function Verifier() {
  return (
    <section id="verify" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-slate-900">Verify a certificate</h3>
              <p className="mt-2 text-slate-600 text-sm">Enter a certificate ID or paste a verification link.</p>
              <div className="mt-4 flex gap-3">
                <input className="flex-1 rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="e.g. SC-9F2A-44" />
                <button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-800"><Search className="h-4 w-4"/>Check</button>
              </div>
              <p className="mt-2 text-xs text-slate-500">No data is stored — we only verify proofs.</p>
            </div>
            <div className="rounded-xl border border-dashed border-slate-300 bg-white p-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white">
                <QrCode className="h-6 w-6" />
              </div>
              <p className="text-sm text-slate-600">Scan a QR on any SkillChain certificate to open this verifier instantly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
