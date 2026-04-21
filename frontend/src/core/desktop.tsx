import { useMemo, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { WindowDefinition } from '../types';
import LineWaves from '../components/LineWaves';
import WindowManager from '../components/windowManager';
import StartMenu from '../components/startMenu';
import Taskbar from '../components/taskbar';
import SangrawLogo from '../logos/Sangraw.svg';
import { webShortcuts } from '../lib/webShortcuts';

const appIcons = [
  { id: 'browser', title: 'Browser' },
  { id: 'calculator', title: 'Calculator' },
  { id: 'notes', title: 'Notes' },
  { id: 'games', title: 'Games' },
  { id: 'soundboard', title: 'Soundboard' }
];

export default function Desktop({
  username,
  openWindow,
  windows,
  setWindows,
  browserUrl
}: {
  username: string;
  openWindow: (app: string, initialUrl?: string) => void;
  windows: WindowDefinition[];
  setWindows: Dispatch<SetStateAction<WindowDefinition[]>>;
  browserUrl: string;
}) {
  const [showStart, setShowStart] = useState(false);
  const shortcuts = useMemo(() => appIcons, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-slate-950 text-slate-100">
      <LineWaves
        speed={0.3}
        innerLineCount={32}
        outerLineCount={36}
        warpIntensity={1}
        rotation={-45}
        edgeFadeWidth={0}
        colorCycleSpeed={1}
        brightness={0.2}
        color1="#002156"
        color2="#0012ff"
        color3="#0014ff"
        enableMouseInteraction
        mouseInfluence={2}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950/25 via-transparent to-slate-950/60" />
      <div className="relative z-10 h-full select-none px-6 py-6">
        <div className="mb-8 grid gap-4 rounded-3xl border border-slate-800/80 bg-slate-950/85 p-6 shadow-glow backdrop-blur-xl sm:grid-cols-[auto_1fr]">
          <img src={SangrawLogo} alt="Lunmix logo" className="h-24 w-24 rounded-3xl border border-slate-700/70 bg-slate-900/90 p-4" />
          <div>
            <h1 className="text-4xl font-semibold text-white">Welcome back, {username}</h1>
            <p className="mt-3 max-w-2xl text-slate-400">Lunmix now includes browser quick links, GN-Math games, and a living desktop experience with animated background effects.</p>
          </div>
        </div>

        <section className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Applications</h2>
            <p className="text-sm text-slate-400">Drag windows, launch apps, or open web services instantly.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-5">
            {shortcuts.map((item) => (
              <button
                key={item.id}
                className="group flex flex-col items-center gap-3 rounded-3xl border border-slate-800/75 bg-slate-950/80 px-4 py-6 text-center text-slate-200 transition hover:border-sky-400 hover:bg-slate-900"
                onClick={() => openWindow(item.id)}
              >
                <div className="h-16 w-16 rounded-3xl bg-slate-900/90 shadow-glow" />
                <span className="text-sm font-medium">{item.title}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Web Shortcuts</h2>
            <p className="text-sm text-slate-400">Launch popular services in the browser window.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {webShortcuts.map((shortcut) => (
              <button
                key={shortcut.id}
                onClick={() => openWindow('browser', shortcut.url)}
                className="rounded-3xl border border-slate-800/75 bg-slate-950/80 p-5 text-left text-slate-200 transition hover:border-sky-400 hover:bg-slate-900"
              >
                <div className="mb-3 inline-flex rounded-2xl bg-slate-900/90 px-3 py-2 text-xs uppercase tracking-[0.2em] text-slate-300">{shortcut.label}</div>
                <p className="text-sm text-slate-400">{shortcut.description}</p>
              </button>
            ))}
          </div>
        </section>
      </div>
      <Taskbar onStart={() => setShowStart((value) => !value)} />
      {showStart && <StartMenu onLaunch={openWindow} onClose={() => setShowStart(false)} />}
      <WindowManager windows={windows} setWindows={setWindows} browserUrl={browserUrl} />
    </div>
  );
}
