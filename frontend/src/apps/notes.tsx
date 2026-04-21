import { useEffect, useState } from 'react';

const STORAGE_KEY = 'lunmix-notes';

export default function NotesApp() {
  const [notes, setNotes] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setNotes(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, notes);
  }, [notes]);

  return (
    <textarea
      value={notes}
      onChange={(event) => setNotes(event.target.value)}
      placeholder="Write your notes here..."
      className="h-full w-full rounded-3xl border border-slate-800/80 bg-slate-950/90 p-4 text-sm leading-6 text-slate-100 outline-none focus:border-sky-400"
    />
  );
}
