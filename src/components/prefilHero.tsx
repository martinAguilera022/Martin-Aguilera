import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

export default function PerfilHero() {
  return (
    <motion.div
      className="flex items-center justify-center mt-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative flex items-center">
        {/* Imagen circular */}
        <img
          src="/Perfil-Cv.jpg"
          alt="Foto de Martín Aguilera"
          className="w-20 h-20 rounded-full object-cover border border-slate-700 shadow-md"
        />

        {/* Etiqueta con nombre */}
        <motion.div
          className="absolute left-[75%] top-1/6 -translate-y--2/3 "
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
      		<span className="inline-flex flex-nowrap items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-[3px] text-[9px] font-medium uppercase tracking-[0.15em] text-emerald-300 whitespace-nowrap shadow-lg shadow-emerald-500/10 backdrop-blur-sm">
  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
  <span>Open to Work</span>
</span>

        </motion.div>
      </div>
    </motion.div>
  );
}
