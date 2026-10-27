"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { DecoBackground } from "../components/DecoBackground";

const SPECS = [
  { label: "Teor Alcoólico", value: "43%", subtitle: "ABV" },
  { label: "Volume", value: "700", subtitle: "ML" },
  { label: "Edição", value: "No 5", subtitle: "lote assinado" },
  { label: "Destilaria", value: "SP", subtitle: "Urban Distillery" },
];

const NOTES = [
  {
    stage: "Primeiro Nariz",
    text: "Zimbro vivo, pinho fresco e cítricos. Abertura clássica London Dry, com acenos de cardamomo e flor-de-laranjeira.",
  },
  {
    stage: "Paladar",
    text: "Entrada seca e precisa. Notas de coentro, pimenta-rosa, erva-doce e um fundo mineral de raízes.",
  },
  {
    stage: "Finalização",
    text: "Longa, levemente especiada, com persistência vegetal e um resquício salino que lembra a cidade perto do mar.",
  },
];

export function OGin() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bottleY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      id="gin"
      ref={sectionRef}
      className="relative py-32 md:py-48 overflow-hidden border-t border-[color:var(--color-navy-500)]/10 bg-white"
    >
      <DecoBackground
        variant="arcs"
        className="absolute -right-[40%] top-[20%] w-[1100px] h-[1100px] text-[color:var(--color-navy-500)]/[0.19] pointer-events-none"
      />
      <DecoBackground
        variant="flourish"
        className="absolute left-[8%] bottom-[6%] w-[640px] h-[420px] text-[color:var(--color-navy-500)]/[0.20] pointer-events-none -rotate-6"
      />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div
            style={{ y: bottleY }}
            className="lg:col-span-5 flex justify-center items-start lg:sticky lg:top-32 lg:self-start"
          >
            <div className="relative w-full max-w-[420px] aspect-[4/5]">
              <Image
                src="/images/bottle-rosemary.png"
                alt="Jardim Botânico Gin com alecrim, zimbro e laranja desidratada"
                fill
                sizes="(min-width: 1024px) 420px, 70vw"
                className="object-contain object-center"
              />
            </div>
          </motion.div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="hairline text-[color:var(--color-navy-500)] mb-6 flex items-center gap-3"
            >
              <span className="inline-block w-10 h-px bg-current" />
              O Gin
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="font-deco text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.1] text-[color:var(--color-navy-500)] tracking-wider"
            >
              UM GIN URBANO,
              <br />
              <span className="font-display italic font-light tracking-normal normal-case lowercase text-[color:var(--color-navy-400)]">
                em método clássico.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-8 text-[color:var(--color-navy-700)]/75 text-base md:text-lg leading-relaxed"
            >
              Jardim Botânico é um London Dry Gin elaborado em alambique de
              cobre, com dupla destilação dos botânicos. O método é purista: sem
              açúcar, sem corantes, sem aromas adicionados após a destilação.
              Apenas o espírito e os botânicos, numa conversa calma.
            </motion.p>

            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
              {SPECS.map((spec, i) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                  className="border-t border-[color:var(--color-navy-500)]/25 pt-4"
                >
                  <div className="hairline text-[color:var(--color-navy-600)]/50 text-[0.6rem] mb-2">
                    {spec.label}
                  </div>
                  <div className="font-deco text-3xl md:text-4xl text-[color:var(--color-navy-500)] tracking-wider">
                    {spec.value}
                  </div>
                  <div className="hairline text-[color:var(--color-navy-600)]/50 text-[0.6rem] mt-1">
                    {spec.subtitle}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-20">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="hairline text-[color:var(--color-navy-500)] mb-10"
              >
                Notas de Prova
              </motion.h3>

              <div className="space-y-10">
                {NOTES.map((note, i) => (
                  <motion.div
                    key={note.stage}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.1 * i }}
                    className="grid grid-cols-[auto_1fr] gap-6 md:gap-8 items-start"
                  >
                    <div className="hairline text-[color:var(--color-navy-500)]/50 text-[0.6rem] font-mono-brand pt-2 min-w-[80px]">
                      0{i + 1}
                    </div>
                    <div className="border-l border-[color:var(--color-navy-500)]/25 pl-6">
                      <div className="font-display text-2xl md:text-3xl text-[color:var(--color-navy-500)] italic mb-2 font-light">
                        {note.stage}
                      </div>
                      <p className="text-[color:var(--color-navy-700)]/70 leading-relaxed">
                        {note.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
