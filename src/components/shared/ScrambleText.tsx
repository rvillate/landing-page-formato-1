// components/shared/ScrambleText.tsx
import { useEffect, useState } from "react";

interface ScrambleTextProps {
  text: string;
  speed?: number;
  duration?: number;
  start?: boolean; // 👈 nuevo: controla cuándo empieza
}

export const ScrambleText = ({
  text,
  speed = 40,
  duration = 1500,
  start = false,
}: ScrambleTextProps) => {
  const [display, setDisplay] = useState(start ? "" : text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  useEffect(() => {
    if (!start) return; // 👈 solo animar si start=true

    let frame = 0;
    const totalFrames = duration / speed;

    const interval = setInterval(() => {
      let output = "";
      for (let i = 0; i < text.length; i++) {
        if (frame < totalFrames) {
          if (Math.random() > frame / totalFrames) {
            output += chars[Math.floor(Math.random() * chars.length)];
          } else {
            output += text[i];
          }
        } else {
          output = text;
        }
      }
      setDisplay(output);
      frame++;
      if (frame > totalFrames) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [start, text, speed, duration]);

  return <span>{display}</span>;
};
