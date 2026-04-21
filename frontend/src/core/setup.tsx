import { useMemo } from 'react';
import type { LunmixSettings } from '../types';
import { themes } from '../lib/themes';

export default function SetupScreen({
  settings,
  update,
  onContinue
}: {
  settings: LunmixSettings;
  update: (partial: Partial<LunmixSettings>) => void;
  onContinue: () => void;
}) {
  const themeOptions = useMemo(() => Object.entries(themes), []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-950/95 p-6 backdrop-blur-sm">
      <div className="w-full max-w-2xl rounded-3xl border border-slate-700/80 bg-slate-950/95 p-8 shadow-glow">
        <h2 className="text-4xl font-semibold text-white">Welcome to Lunmix</h2>
        <p className="mt-3 text-slate-400">Personalize your workspace and continue to the desktop experience.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <label className="space-y-3 rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
            <span className="text-sm font-medium text-slate-300">Username</span>
            <input
              className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none focus:border-sky-400"
              value={settings.username}
              onChange={(event) => update({ username: event.target.value })}
            />
          </label>
          <label className="space-y-3 rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
            <span className="text-sm font-medium text-slate-300">Theme</span>
            <select
              className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none focus:border-sky-400"
              value={settings.theme}
              onChange={(event) => update({ theme: event.target.value as LunmixSettings['theme'] })}
            >
              {themeOptions.map(([key, item]) => (
                <option key={key} value={key}>{item.name}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-6 flex flex-col gap-3 rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
          <span className="text-sm font-medium text-slate-300">Settings</span>
          <label className="flex items-center justify-between gap-3 rounded-2xl bg-slate-950/80 px-4 py-3 text-sm text-slate-200">
            <span>Background effects</span>
            <input
              type="checkbox"
              checked={settings.backgroundEnabled}
              onChange={(event) => update({ backgroundEnabled: event.target.checked })}
            />
          </label>
          <label className="flex items-center justify-between gap-3 rounded-2xl bg-slate-950/80 px-4 py-3 text-sm text-slate-200">
            <span>Engine sound</span>
            <input
              type="checkbox"
              checked={settings.engineSound}
              onChange={(event) => update({ engineSound: event.target.checked })}
            />
          </label>
        </div>

        <button
          className="mt-8 inline-flex items-center justify-center rounded-3xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
          onClick={onContinue}
        >
          Continue to desktop
        </button>
      </div>
    </div>
  );
}
