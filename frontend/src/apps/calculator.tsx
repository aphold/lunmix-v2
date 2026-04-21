import { useMemo, useState } from 'react';

const operations = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'];

export default function CalculatorApp() {
  const [display, setDisplay] = useState('0');

  const evaluateExpression = (expression: string) => {
    const sanitized = expression.replace(/[^0-9+\-*/.() ]/g, '');
    try {
      // eslint-disable-next-line no-new-func
      const result = new Function(`return ${sanitized}`)();
      return String(result);
    } catch {
      return 'Error';
    }
  };

  const handleClick = (value: string) => {
    if (value === '=') {
      setDisplay(evaluateExpression(display));
      return;
    }

    if (display === '0' && value !== '.') {
      setDisplay(value);
      return;
    }
    setDisplay((current) => (current === 'Error' ? value : current + value));
  };

  const buttons = useMemo(
    () =>
      operations.map((symbol) => (
        <button
          key={symbol}
          onClick={() => handleClick(symbol)}
          className="rounded-2xl border border-slate-700/80 bg-slate-900/90 px-4 py-3 text-lg font-semibold text-white transition hover:bg-slate-800"
        >
          {symbol}
        </button>
      )),
    [display]
  );

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="rounded-3xl border border-slate-800/80 bg-slate-950/90 p-4 text-right text-4xl font-semibold text-white shadow-inner">
        {display}
      </div>
      <div className="grid grid-cols-4 gap-3">{buttons}</div>
    </div>
  );
}
