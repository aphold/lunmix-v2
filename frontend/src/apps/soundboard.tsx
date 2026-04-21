export default function SoundboardApp() {
  return (
    <div className="flex h-full flex-col gap-4 rounded-3xl border border-slate-800/80 bg-slate-950/90 p-4">
      <div className="grid grid-cols-2 gap-3">
        {['Beat', 'Pulse', 'Glow', 'Atmos'].map((sound) => (
          <button key={sound} className="rounded-3xl bg-slate-900/90 px-4 py-4 text-sm font-semibold text-white transition hover:bg-slate-800">
            {sound}
          </button>
        ))}
      </div>
      <div className="rounded-3xl border border-slate-800/80 bg-slate-900/90 p-4 text-sm text-slate-300">
        <p>Loads an external soundboard experience via iframe in a future release.</p>
      </div>
    </div>
  );
}
