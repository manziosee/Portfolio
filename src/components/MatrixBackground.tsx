import { useEffect, useRef } from 'react';

export function MatrixBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const languages = [
      'TypeScript (48.97%)',
      'Python (19.4%)',
      'JavaScript (18.79%)',
      'Java (6.69%)',
      'Vue (3.75%)',
      'PowerShell (2.39%)',
      'HTML (32.72%)',
      'TypeScript (30.62%)',
      'Python (12.01%)',
      'JavaScript (11.64%)',
      'CSS (8.88%)',
      'Java (4.14%)'
    ];

    const createBox = (text: string) => {
      const box = document.createElement('div');
      box.className = 'matrix-box';
      box.textContent = text;
      box.style.top = `${Math.random() * 100}vh`;
      box.style.left = `${Math.random() * 100}vw`;
      container.appendChild(box);
    };

    languages.forEach(createBox);

    const interval = setInterval(() => {
      languages.forEach(createBox);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div ref={containerRef} className="matrix-background"></div>
  );
}
