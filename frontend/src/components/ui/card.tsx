import type { PropsWithChildren } from 'react';

export default function Card({ children, className = '' }: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`rounded-3xl border border-slate-800/80 bg-slate-950/90 p-6 shadow-glow ${className}`}>{children}</div>
  );
}
