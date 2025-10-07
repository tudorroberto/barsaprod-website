
import { useEffect, useState } from "react";
export default function Counter({ to=100, duration=1500 }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const step = (t) => {
      const p = Math.min(1, (t - start) / duration);
      setValue(Math.floor(p * to));
      if (p < 1) requestAnimationFrame(step);
    };
    const r = requestAnimationFrame(step);
    return () => cancelAnimationFrame(r);
  }, [to, duration]);
  return <span>{value.toLocaleString("ro-RO")}</span>;
}
