"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { DecoOrnament } from "../components/BotanicalOrnament";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bottleY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const bottleScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-10 bg-white"
    >
      {/* Light wash backdrop */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 70% 40%, rgba(243,243,241,0.9) 0%, rgba(255,255,255,1) 55%)",
        }}
      />

      <div className="relative max-w-[1400px] w-full mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="relative z-10 order-2 lg:order-1 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="hairline text-[color:var(--color-navy-500)] mb-6 flex items-center justify-center lg:justify-start gap-3"
          >
            <span className="inline-block w-10 h-px bg-current" />
            São Paulo Urban Distillery
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2 }}
            className="font-deco text-[clamp(2.75rem,7vw,5.75rem)] leading-[1.05] text-[color:var(--color-navy-500)] tracking-wider"
          >
            JARDIM
            <br />
            BOTÂNICO
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-8 mb-6 flex items-center justify-center lg:justify-start"
          >
            <DecoOrnament className="w-56 text-[color:var(--color-navy-500)]" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.65 }}
            className="font-display italic text-[color:var(--color-navy-400)] text-2xl md:text-3xl tracking-wide"
          >
            London Dry Gin · N<span className="underline underline-offset-2">o</span> 5
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-8 max-w-md text-[color:var(--color-navy-700)]/70 text-base md:text-lg leading-relaxed mx-auto lg:mx-0"
          >
            Um London Dry Gin destilado em São Paulo. Alambique de cobre,
            botânicos selecionados, método clássico. Cidade grande, no copo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.95 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="#gin"
              className="hairline inline-flex items-center justify-center gap-3 px-8 py-4 bg-[color:var(--color-navy-500)] text-white hover:bg-[color:var(--color-navy-600)] transition-colors"
            >
              Conhecer o Gin
              <span className="inline-block w-5 h-px bg-current" />
            </a>
            <a
              href="#serve"
              className="hairline inline-flex items-center justify-center gap-3 px-8 py-4 border border-[color:var(--color-navy-500)]/40 text-[color:var(--color-navy-500)] hover:border-[color:var(--color-navy-500)] hover:bg-[color:var(--color-navy-500)]/5 transition-colors"
            >
              Como Servir
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: bottleY, scale: bottleScale }}
          className="relative order-1 lg:order-2 flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[520px] aspect-[3/4]"
          >
            <div className="bottle-float h-full w-full">
              <Image
                src="/images/bottle-ice.jpg"
                alt="Garrafa Jardim Botânico London Dry Gin ao lado de um balde de gelo e copos"
                fill
                priority
                sizes="(min-width: 1024px) 520px, (min-width: 768px) 60vw, 85vw"
                className="object-contain object-center"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[color:var(--color-navy-500)]/50"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-[color:var(--color-navy-500)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
