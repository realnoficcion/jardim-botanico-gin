"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { DecoBackground } from "../components/DecoBackground";

interface AnatomyEntry {
  label: string;
  caption: string;
  position: string;
}

const ANATOMY: AnatomyEntry[] = [
  {
    label: "Cabeçalho",
    caption:
      "São Paulo Urban Distillery, selo da casa. Serifa clássica em pequeno porte, posta como assinatura discreta sobre o símbolo maior.",
    position: "top-[15%] left-[88%]",
  },
  {
    label: "Nome",
    caption:
      "Tipografia art déco geométrica desenhada à mão. Letras altas e finas, com remates em forma de régua — manifesto visual da marca.",
    position: "top-[36%] left-[88%]",
  },
  {
    label: "Medalhão",
    caption:
      "N° 5. Hexágono inscrito em moldura radial — o número do lote assinado da edição atual.",
    position: "top-[62%] left-[88%]",
  },
  {
    label: "Selos de Sol",
    caption:
      "700ml e 43% ABV emoldurados em círculos com raios saindo em sunburst — ícone art déco por excelência.",
    position: "top-[86%] left-[88%]",
  },
];

export function Rotulo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const labelY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      id="rotulo"
      ref={sectionRef}
      className="relative py-32 md:py-48 overflow-hidden border-t border-[color:var(--color-navy-500)]/10 bg-white"
    >
      <DecoBackground
        variant="radial"
        className="absolute -left-[25%] -bottom-[20%] w-[900px] h-[900px] text-[color:var(--color-navy-500)]/[0.18] pointer-events-none"
      />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div
            style={{ y: labelY }}
            className="lg:col-span-6 lg:sticky lg:top-32 lg:self-start"
          >
            <div className="relative mx-auto w-full max-w-[500px] aspect-[1147/1747] bg-[color:var(--color-mist-100)] shadow-[0_30px_80px_-20px_rgba(13,29,68,0.25)]">
              <Image
                src="/images/label-full-cropped.jpeg"
                alt="Rótulo completo do Jardim Botânico London Dry Gin, com moldura art déco e selos sunburst"
                fill
                sizes="(min-width: 1024px) 500px, 90vw"
                className="object-cover object-center"
              />
              {/* Subtle numbered anchors */}
              {ANATOMY.map((entry, i) => (
                <motion.span
                  key={entry.label}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                  className={`absolute ${entry.position} w-7 h-7 rounded-full border border-[color:var(--color-navy-500)] bg-white flex items-center justify-center text-[0.6rem] font-mono-brand text-[color:var(--color-navy-500)] -translate-x-1/2 -translate-y-1/2 shadow-sm`}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="hairline text-[color:var(--color-navy-500)] mb-6 flex items-center gap-3"
            >
              <span className="inline-block w-10 h-px bg-current" />
              O Rótulo
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="font-deco text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.08] text-[color:var(--color-navy-500)] tracking-wider"
            >
              ANATOMIA
              <br />
              <span className="font-display italic font-light tracking-normal normal-case lowercase text-[color:var(--color-navy-400)]">
                de uma assinatura.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-8 text-[color:var(--color-navy-700)]/75 text-base md:text-lg leading-relaxed max-w-xl"
            >
              Cada traço do rótulo é um gesto deliberado. A tipografia art déco
              foi desenhada à mão em homenagem aos cartazes paulistanos dos anos
              30 — quando a cidade descobria, pela primeira vez, que podia ser
              moderna sem perder a elegância.
            </motion.p>

            <div className="mt-14 space-y-8">
              {ANATOMY.map((entry, i) => (
                <motion.div
                  key={entry.label}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.08 * i }}
                  className="grid grid-cols-[auto_1fr] gap-5 md:gap-8 items-start border-t border-[color:var(--color-navy-500)]/20 pt-6"
                >
                  <div className="w-8 h-8 rounded-full border border-[color:var(--color-navy-500)] flex items-center justify-center text-[0.65rem] font-mono-brand text-[color:var(--color-navy-500)]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div className="hairline text-[color:var(--color-navy-500)] text-[0.65rem] mb-2">
                      {entry.label}
                    </div>
                    <p className="text-[color:var(--color-navy-700)]/70 leading-relaxed text-sm md:text-base">
                      {entry.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
