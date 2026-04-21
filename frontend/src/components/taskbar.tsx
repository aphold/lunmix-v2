import { useEffect, useState } from 'react';

export default function Taskbar({ onStart }: { onStart: () => void }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setTime(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="absolute bottom-4 left-4 right-4 z-30 flex items-center justify-between rounded-3xl border border-slate-800/80 bg-slate-950/85 px-4 py-3 shadow-glow backdrop-blur-xl">
      <button
        onClick={onStart}
        className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-slate-800"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
        Menu
      </button>
      <div className="flex items-center gap-3 text-sm text-slate-300">
        <span>Lunmix</span>
        <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
      </div>
    </div>
  );
}
