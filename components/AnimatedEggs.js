
import { motion } from "framer-motion";
const Egg = ({ delay=0, x=0, y=0, scale=1, opacity=0.25 }) => (
  <motion.svg initial={{ y: y + 20, opacity: 0 }} animate={{ y, opacity }} transition={{ delay, duration: 1.2 }}
    style={{ position: "absolute", left: x, top: 0, transform: `scale(${scale})` }} width="120" height="160" viewBox="0 0 120 160" fill="none">
    <motion.ellipse cx="60" cy="90" rx="46" ry="64" stroke="rgba(255,255,255,0.25)" strokeWidth="3" fill="transparent"
      animate={{ rotate: [0, 2, -2, 0] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }} />
  </motion.svg>
);
export default function AnimatedEggs(){ return (
  <div style={{position:"absolute", inset:0, pointerEvents:"none"}}>
    <Egg delay={0.2} x={900} y={40} scale={1} />
    <Egg delay={0.6} x={1040} y={120} scale={0.85} opacity={0.2} />
    <Egg delay={1.0} x={980} y={220} scale={0.7} opacity={0.18} />
  </div>
);}
