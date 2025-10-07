
import { motion } from "framer-motion";
export default function FarmerSilhouette(){ return (
  <motion.svg initial={{ x: 80, opacity: 0 }} whileInView={{ x: 0, opacity: 0.3 }} viewport={{ once: true }} transition={{ duration: 1.2 }}
    width="160" height="200" viewBox="0 0 160 200" fill="none" style={{ position:"absolute", right: 40, top: 120 }}>
    <polygon points="40,20 120,20 95,40 65,40" fill="white" opacity="0.25" />
    <circle cx="80" cy="65" r="18" stroke="white" opacity="0.35" strokeWidth="3" fill="transparent" />
    <rect x="55" y="88" width="50" height="60" rx="16" stroke="white" opacity="0.25" strokeWidth="3" fill="transparent" />
  </motion.svg>
);}
