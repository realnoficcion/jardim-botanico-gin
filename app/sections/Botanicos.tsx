"use client";

import { motion } from "framer-motion";
import {
  JuniperIcon,
  CitrusIcon,
  LeafIcon,
  SpiceIcon,
  FlowerIcon,
  RootIcon,
} from "../components/BotanicalOrnament";

interface Botanical {
  name: string;
  origin: string;
  description: string;
  Icon: typeof JuniperIcon;
}

const BOTANICALS: Botanical[] = [
  {
    name: "Zimbro",
    origin: "Toscana · Itália",
    description:
      "A alma do London Dry. Baga carnuda, pinho vivo, resina e um toque silvestre que estrutura o destilado.",
    Icon: JuniperIcon,
  },
  {
    name: "Pimenta-Rosa",
    origin: "Mata Atlântica · Brasil",
    description:
      "Também chamada aroeira. Doçura resinada, calor sutil e perfume floral que assina o gin.",
    Icon: SpiceIcon,
  },
  {
    name: "Casca de Limão-Siciliano",
    origin: "Sul · Brasil",
    description:
      "Zeste fresco, amargor cítrico e óleos essenciais que elevam a entrada no nariz e no paladar.",
    Icon: CitrusIcon,
  },
  {
    name: "Flor de Laranjeira",
    origin: "São Paulo · Brasil",
    description:
      "Perfume delicado de azahar, nuance de mel e um fecho floral que suaviza o conjunto.",
    Icon: FlowerIcon,
  },
  {
    name: "Coentro",
    origin: "Vale do Itajaí · Brasil",
    description:
      "Semente, não folha. Terroso, cítrico-apimentado, essencial para o equilíbrio clássico.",
    Icon: LeafIcon,
  },
  {
    name: "Angélica",
    origin: "Alpes Franceses",
    description:
      "Raiz que amarra o destilado. Corpo, mineralidade e resquício de terra úmida.",
    Icon: RootIcon,
  },
  {
    name: "Cardamomo-Verde",
    origin: "Kerala · Índia",
    description:
      "Especiaria elegante. Mentolada, cítrica e eucaliptal — tempera a boca com frescor.",
    Icon: SpiceIcon,
  },
  {
    name: "Capim-Santo",
    origin: "Interior · Brasil",
    description:
      "Nota brasileira. Floral, cítrico-herbal, com aceno tropical que ventila o paladar.",
    Icon: LeafIcon,
  },
];

export function Botanicos() {
  return (
    <section
      id="botanicos"
      className="relative py-32 md:py-48 overflow-hidden border-t border-[color:var(--color-navy-500)]/15 bg-[color:var(--color-mist-100)]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="hairline text-[color:var(--color-navy-500)] mb-6 flex items-center gap-3"
          >
            <span className="inline-block w-10 h-px bg-current" />
            Botânicos
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="font-deco text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.1] text-[color:var(--color-navy-500)] tracking-wider"
          >
            DOZE MATÉRIAS-PRIMAS.
            <br />
            <span className="font-display italic font-light tracking-normal normal-case lowercase text-[color:var(--color-navy-400)]">
              uma única assinatura.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-8 text-[color:var(--color-navy-700)]/75 text-base md:text-lg leading-relaxed"
          >
            A seleção começa no campo e termina no alambique. Cada botânico é
            avaliado por produtores de confiança — do zimbro europeu ao capim-
            santo brasileiro — e preservado em sua pureza antes da destilação.
          </motion.p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[color:var(--color-navy-500)]/15">
          {BOTANICALS.map((botanical, i) => (
            <motion.article
              key={botanical.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.05 * (i % 4) }}
              className="group relative bg-white p-8 md:p-10 hover:bg-[color:var(--color-mist-200)] transition-colors duration-700"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[color:var(--color-navy-500)] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-700" />
              <div className="flex items-start justify-between mb-6">
                <div className="hairline text-[color:var(--color-navy-500)]/50 text-[0.6rem] font-mono-brand">
                  N<span className="underline underline-offset-1">o</span> {String(i + 1).padStart(2, "0")}
                </div>
                <botanical.Icon className="w-10 h-10 text-[color:var(--color-navy-500)] drift" />
              </div>
              <h3 className="font-deco text-xl md:text-2xl text-[color:var(--color-navy-500)] mb-2 tracking-wider">
                {botanical.name.toUpperCase()}
              </h3>
              <div className="font-display italic text-[color:var(--color-navy-400)] text-[0.75rem] mb-4">
                {botanical.origin}
              </div>
              <p className="text-[color:var(--color-navy-700)]/65 text-sm leading-relaxed">
                {botanical.description}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-10 text-[color:var(--color-navy-500)]/60 text-sm italic text-center font-display"
        >
          + quatro botânicos que preferimos manter como segredo da casa.
        </motion.p>
      </div>
    </section>
  );
}
