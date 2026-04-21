import { useEffect, useMemo, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import interact from 'interactjs';
import BrowserApp from '../apps/browser';
import CalculatorApp from '../apps/calculator';
import NotesApp from '../apps/notes';
import GamesApp from '../apps/games';
import SoundboardApp from '../apps/soundboard';
import type { WindowDefinition } from '../types';

export default function WindowManager({ windows, setWindows, browserUrl }: { windows: WindowDefinition[]; setWindows: Dispatch<SetStateAction<WindowDefinition[]>>; browserUrl: string; }) {
  const [topId, setTopId] = useState('browser');

  useEffect(() => {
    windows.forEach((win) => {
      const selector = `#window-${win.id}`;
      interact(selector)
        .draggable({
          allowFrom: '.window-header',
          listeners: {
            move(event) {
              setWindows((current) =>
                current.map((item) => {
                  if (item.id !== win.id) return item;
                  return {
                    ...item,
                    x: item.x + event.dx,
                    y: item.y + event.dy
                  };
                })
              );
            }
          }
        })
        .resizable({
          edges: { left: true, right: true, bottom: true, top: true },
          listeners: {
            move(event) {
              setWindows((current) =>
                current.map((item) => {
                  if (item.id !== win.id) return item;
                  return {
                    ...item,
                    width: Math.max(300, item.width + event.deltaRect.width),
                    height: Math.max(260, item.height + event.deltaRect.height),
                    x: item.x + event.deltaRect.left,
                    y: item.y + event.deltaRect.top
                  };
                })
              );
            }
          },
          modifiers: [interact.modifiers.restrictSize({ min: { width: 300, height: 260 } })]
        });
    });
  }, [windows, setWindows]);

  const handleOpen = (id: string) => {
    setWindows((current) =>
      current.map((item) => (item.id === id ? { ...item, isOpen: true, minimized: false } : item))
    );
    setTopId(id);
  };

  const handleClose = (id: string) => setWindows((current) => current.map((item) => (item.id === id ? { ...item, isOpen: false } : item)));
  const handleMinimize = (id: string) => setWindows((current) => current.map((item) => (item.id === id ? { ...item, minimized: true } : item)));

  const content: Record<string, JSX.Element> = useMemo(
    () => ({
      browser: <BrowserApp initialUrl={browserUrl} />,
      calculator: <CalculatorApp />,
      notes: <NotesApp />,
      games: <GamesApp />,
      soundboard: <SoundboardApp />
    }),
    [browserUrl]
  );

  return (
    <>
      {windows.map((win) => {
        if (!win.isOpen || win.minimized) return null;
        return (
          <div
            id={`window-${win.id}`}
            key={win.id}
            style={{ width: win.width, height: win.height, transform: `translate(${win.x}px, ${win.y}px)`, zIndex: topId === win.id ? 40 : 30 }}
            className="window-drag absolute rounded-3xl border border-slate-800/90 bg-slate-950/95 shadow-glow backdrop-blur-2xl"
            onMouseDown={() => setTopId(win.id)}
          >
            <div className="window-header flex items-center justify-between rounded-t-3xl border-b border-slate-800/80 bg-slate-900/90 px-4 py-3 text-sm text-slate-100">
              <span>{win.title}</span>
              <div className="flex items-center gap-2">
                <button onClick={() => handleMinimize(win.id)} className="h-8 w-8 rounded-full bg-slate-800/80 text-xs hover:bg-slate-700">_</button>
                <button onClick={() => handleClose(win.id)} className="h-8 w-8 rounded-full bg-rose-500/90 text-xs font-bold text-white hover:bg-rose-400">×</button>
              </div>
            </div>
            <div className="h-full overflow-hidden rounded-b-3xl p-4">{content[win.id]}</div>
          </div>
        );
      })}
      <div className="absolute bottom-32 right-6 z-20 flex flex-col gap-3">
        {windows.map(
          (win) =>
            win.isOpen && (
              <button
                key={win.id}
                onClick={() => handleOpen(win.id)}
                className="rounded-2xl bg-slate-900/90 px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-800"
              >
                {win.title}
              </button>
            )
        )}
      </div>
    </>
  );
}
