"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Galeria() {
  return (
    <section
      id="galeria"
      className="relative py-32 md:py-48 overflow-hidden border-t border-[color:var(--color-navy-500)]/10 bg-[color:var(--color-mist-100)]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="hairline text-[color:var(--color-navy-500)] mb-6 flex items-center gap-3"
          >
            <span className="inline-block w-10 h-px bg-current" />
            Galeria
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="font-deco text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.1] text-[color:var(--color-navy-500)] tracking-wider"
          >
            A GARRAFA,
            <br />
            <span className="font-display italic font-light tracking-normal normal-case lowercase text-[color:var(--color-navy-400)]">
              em cena.
            </span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-12 gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 relative aspect-[4/5] bg-white overflow-hidden group"
          >
            <Image
              src="/images/bottle-splash.webp"
              alt="Jardim Botânico Gin com drink de taça coupe sobre base de madeira"
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-cover object-center transition-transform duration-[1200ms] group-hover:scale-[1.03]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 relative aspect-[4/5] bg-white overflow-hidden group"
          >
            <Image
              src="/images/bottle-shelf.webp"
              alt="Jardim Botânico Gin em prateleira iluminada"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover object-center transition-transform duration-[1200ms] group-hover:scale-[1.03]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 relative aspect-[3/4] bg-white overflow-hidden group"
          >
            <Image
              src="/images/bottle-ice.jpg"
              alt="Jardim Botânico Gin com balde de gelo e copos de cristal"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover object-center transition-transform duration-[1200ms] group-hover:scale-[1.03]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 relative aspect-[3/4] bg-white overflow-hidden group"
          >
            <Image
              src="/images/bottle-rosemary.png"
              alt="Jardim Botânico Gin com alecrim, zimbro e laranja desidratada"
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-contain object-center transition-transform duration-[1200ms] group-hover:scale-[1.03]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
