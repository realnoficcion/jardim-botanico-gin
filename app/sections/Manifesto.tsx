"use client";

import { motion } from "framer-motion";
import { DecoOrnament } from "../components/BotanicalOrnament";
import { DecoBackground } from "../components/DecoBackground";

export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative py-32 md:py-48 overflow-hidden bg-[color:var(--color-mist-100)]"
    >
      <DecoBackground
        variant="crescent"
        className="absolute -left-[30%] top-[8%] w-[900px] h-[900px] text-[color:var(--color-navy-500)]/[0.21] pointer-events-none"
      />
      <div className="relative max-w-4xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="hairline text-[color:var(--color-navy-500)] mb-10 flex items-center justify-center gap-3"
        >
          <span className="inline-block w-10 h-px bg-current" />
          Manifesto
          <span className="inline-block w-10 h-px bg-current" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.25] text-[color:var(--color-navy-700)] font-light"
        >
          Nasce na metrópole. Entre o asfalto e os canteiros, destilamos{" "}
          <span className="italic text-[color:var(--color-navy-500)]">
            uma São Paulo
          </span>{" "}
          que raramente é dita, mas sempre sentida. Urbana, botânica e{" "}
          <span className="italic text-[color:var(--color-navy-500)]">
            inquieta.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="my-14 flex justify-center"
        >
          <DecoOrnament className="w-48 text-[color:var(--color-navy-500)]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[color:var(--color-navy-700)]/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Pequenos lotes. Alambique de cobre. Botânicos escolhidos com rigor.
          Nenhum atalho. Cada garrafa é um registro de tempo, método e lugar.
          Numerada à mão, assinada pela destilaria.
        </motion.p>
      </div>
    </section>
  );
}
