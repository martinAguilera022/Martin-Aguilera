"use client";

import { motion } from "motion/react";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";

export default function Hero() {
  return (
    <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row ">
      <LayoutTextFlip
        text=""
        words={[  "Martín Aguilera ",
            "Desarrollador Front-End ⚡",
            "Apasionado por la web 🌐",
            "Creador de Webs únicas 🚀",
        "Futuro licenciado en informatica"]}
      />
    </motion.div>
  );
}
