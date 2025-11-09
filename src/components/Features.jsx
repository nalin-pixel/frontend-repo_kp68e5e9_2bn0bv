import { BadgeCheck, Building2, GraduationCap, Link2, Lock, Scan } from 'lucide-react';

const features = [
  {
    icon: GraduationCap,
    title: 'Academy Issuance',
    desc: 'Issue tamper-proof skill certificates directly to learners.',
  },
  {
    icon: Building2,
    title: 'Employer Access',
    desc: 'Search and verify candidate credentials in seconds.',
  },
  {
    icon: BadgeCheck,
    title: 'Standards Aligned',
    desc: 'Supports common credential frameworks and schemas.',
  },
  {
    icon: Link2,
    title: 'Interoperable',
    desc: 'Portable certificates that work across platforms and wallets.',
  },
  {
    icon: Lock,
    title: 'Privacy First',
    desc: 'Only proofs are on-chain; personal data remains secure.',
  },
  {
    icon: Scan,
    title: 'One-tap Verification',
    desc: 'QR codes and short links make validation effortless.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Built for trust and speed</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Everything you need to issue, manage, and verify skills with confidence.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="mt-3 text-slate-600 text-sm">{desc}</p>
    </div>
  );
}
