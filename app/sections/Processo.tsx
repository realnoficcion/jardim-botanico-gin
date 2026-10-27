"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { DecoBackground } from "../components/DecoBackground";

const STEPS = [
  {
    number: "I",
    title: "Colheita",
    text: "Botânicos frescos, colhidos no auge da estação, por produtores com rastreabilidade total. Nada vem de catálogo.",
  },
  {
    number: "II",
    title: "Maceração",
    text: "Repouso em álcool neutro de cereais por 24 horas. Cada botânico cede seus óleos essenciais em seu próprio tempo.",
  },
  {
    number: "III",
    title: "Destilação em Cobre",
    text: "Alambique de cobre tradicional. O cobre captura compostos sulfurados e devolve pureza aromática ao destilado.",
  },
  {
    number: "IV",
    title: "Corte & Repouso",
    text: "Corte manual de cabeça e cauda. Apenas o coração do destilado segue adiante, descansando antes do engarrafamento.",
  },
  {
    number: "V",
    title: "Engarrafamento",
    text: "Lote numerado, rolha de cortiça, rótulo prensado à mão. Cada garrafa é um registro: data, lote e assinatura.",
  },
];

export function Processo() {
  return (
    <section
      id="processo"
      className="relative py-32 md:py-48 overflow-hidden border-t border-[color:var(--color-navy-500)]/10 bg-[color:var(--color-mist-100)]"
    >
      <DecoBackground
        variant="arcs"
        className="absolute -left-[30%] top-[10%] w-[1000px] h-[1000px] text-[color:var(--color-navy-500)]/[0.18] pointer-events-none"
      />
      <DecoBackground
        variant="flourish"
        className="absolute right-[6%] bottom-[12%] w-[560px] h-[380px] text-[color:var(--color-navy-500)]/[0.20] pointer-events-none rotate-[8deg]"
      />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="hairline text-[color:var(--color-navy-500)] mb-6 flex items-center gap-3"
            >
              <span className="inline-block w-10 h-px bg-current" />
              Processo
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="font-deco text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.1] text-[color:var(--color-navy-500)] tracking-wider"
            >
              DA RAIZ
              <br />
              <span className="font-display italic font-light tracking-normal normal-case lowercase text-[color:var(--color-navy-400)]">
                ao copo.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-8 text-[color:var(--color-navy-700)]/75 text-base md:text-lg leading-relaxed"
            >
              Cinco etapas, nenhuma pressa. É isso que distingue um gin
              artesanal de uma commodity — não só o que entra na receita, mas
              como ela é tratada em cada passo do caminho.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.35 }}
              className="mt-14 relative w-full max-w-[340px] aspect-[3/4] mx-auto lg:mx-0"
            >
              <Image
                src="/images/bottle-studio.png"
                alt="Jardim Botânico Gin em estúdio"
                fill
                sizes="(min-width: 1024px) 340px, 60vw"
                className="object-contain object-center"
              />
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <ol className="space-y-14 md:space-y-20">
              {STEPS.map((step, i) => (
                <motion.li
                  key={step.number}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.9,
                    delay: 0.05 * i,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative pl-8 md:pl-16 border-l border-[color:var(--color-navy-500)]/25"
                >
                  <div className="absolute left-0 top-2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[color:var(--color-navy-500)]" />
                  <div className="font-deco text-5xl md:text-6xl text-[color:var(--color-navy-500)]/35 tracking-widest leading-none mb-3">
                    {step.number}
                  </div>
                  <h3 className="font-deco text-2xl md:text-3xl text-[color:var(--color-navy-500)] tracking-wider mb-4">
                    {step.title.toUpperCase()}
                  </h3>
                  <p className="text-[color:var(--color-navy-700)]/70 leading-relaxed max-w-lg">
                    {step.text}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
