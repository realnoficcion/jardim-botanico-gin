"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { DecoBackground } from "../components/DecoBackground";

interface Drink {
  name: string;
  subtitle: string;
  story: string;
  glass: string;
  ingredients: string[];
  method: string;
  garnish: string;
  tagline: string;
}

const DRINKS: Drink[] = [
  {
    name: "Jardim & Tônica",
    subtitle: "O serve clássico, assinado.",
    story:
      "A forma mais honesta de experimentar um gin. Taça balão, muito gelo, tônica neutra e um botânico vivo como guarnição.",
    glass: "Taça balão",
    ingredients: [
      "50ml Jardim Botânico Gin",
      "150ml água tônica Mediterrânea",
      "Gelo em cubos grandes",
    ],
    method:
      "Encha a taça até a borda com gelo, adicione o gin, complete com a tônica deslizando pela colher bar. Mexa uma vez, apenas.",
    garnish: "Zeste de limão-siciliano e três bagas de pimenta-rosa.",
    tagline: "Simples. Essencial.",
  },
  {
    name: "Negroni Paulistano",
    subtitle: "O amargo em três atos.",
    story:
      "A conversa italiana que ganha sotaque paulistano quando o Jardim Botânico entra. Herbal, cítrico, redondo.",
    glass: "Old fashioned",
    ingredients: [
      "30ml Jardim Botânico Gin",
      "30ml Campari",
      "30ml vermute tinto",
    ],
    method:
      "Mexa com gelo em copo misturador por 20 segundos. Coe para um old fashioned com uma pedra grande.",
    garnish: "Casca de laranja flambada.",
    tagline: "Herbal. Amargo. Perfeito.",
  },
  {
    name: "Martini Urbano",
    subtitle: "Sagrado, com fundo mineral.",
    story:
      "Um Dry Martini onde o gin é protagonista. O vermute seco apenas vista a taça; o limão assina a saída.",
    glass: "Taça martini gelada",
    ingredients: [
      "70ml Jardim Botânico Gin",
      "10ml vermute seco",
      "1 twist de limão",
    ],
    method:
      "Lave a taça com o vermute. Mexa o gin com gelo por 30 segundos. Coe fino. Expresse os óleos da casca sobre a taça.",
    garnish: "Twist de limão.",
    tagline: "Austero. Preciso. Memorável.",
  },
];

export function Serve() {
  const [active, setActive] = useState(0);
  const drink = DRINKS[active];

  return (
    <section
      id="serve"
      className="relative py-32 md:py-48 overflow-hidden border-t border-[color:var(--color-navy-500)]/15 bg-white"
    >
      <DecoBackground
        variant="crescent"
        className="absolute -right-[30%] top-[12%] w-[900px] h-[900px] text-[color:var(--color-navy-500)]/[0.19] pointer-events-none"
      />
      <DecoBackground
        variant="scroll"
        className="absolute left-0 bottom-[8%] w-full h-[200px] text-[color:var(--color-navy-500)]/[0.20] pointer-events-none"
      />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="hairline text-[color:var(--color-navy-500)] mb-6 flex items-center gap-3"
          >
            <span className="inline-block w-10 h-px bg-current" />
            Serve
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="font-deco text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.1] text-[color:var(--color-navy-500)] tracking-wider"
          >
            TRÊS DRINKS.
            <br />
            <span className="font-display italic font-light tracking-normal normal-case lowercase text-[color:var(--color-navy-400)]">
              uma única garrafa.
            </span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="hairline text-[color:var(--color-navy-500)]/50 mb-6 text-[0.6rem]">
              Receitas da casa
            </div>
            <div className="space-y-2">
              {DRINKS.map((d, i) => (
                <button
                  key={d.name}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`w-full text-left p-5 border transition-all duration-500 group ${
                    active === i
                      ? "border-[color:var(--color-navy-500)] bg-[color:var(--color-mist-100)]"
                      : "border-[color:var(--color-navy-500)]/20 hover:border-[color:var(--color-navy-500)]/50 bg-[color:var(--color-mist-100)]/40"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="hairline text-[color:var(--color-navy-500)]/50 text-[0.6rem] mb-2 font-mono-brand">
                        N<span className="underline underline-offset-1">o</span> 0{i + 1}
                      </div>
                      <div
                        className={`font-deco text-lg md:text-xl tracking-wider transition-colors ${
                          active === i
                            ? "text-[color:var(--color-navy-500)]"
                            : "text-[color:var(--color-navy-500)]/70 group-hover:text-[color:var(--color-navy-500)]"
                        }`}
                      >
                        {d.name.toUpperCase()}
                      </div>
                    </div>
                    <div
                      className={`transition-opacity text-[color:var(--color-navy-500)] ${
                        active === i ? "opacity-100" : "opacity-30"
                      }`}
                    >
                      →
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={drink.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 relative"
          >
            <div className="relative p-8 md:p-14 border border-[color:var(--color-navy-500)]/30 bg-[color:var(--color-mist-100)]">
              {/* Art-déco corner marks */}
              <div className="absolute top-0 left-0 w-16 h-px bg-[color:var(--color-navy-500)]" />
              <div className="absolute top-0 left-0 w-px h-16 bg-[color:var(--color-navy-500)]" />
              <div className="absolute top-3 left-3 w-6 h-px bg-[color:var(--color-navy-500)]/50" />
              <div className="absolute top-3 left-3 w-px h-6 bg-[color:var(--color-navy-500)]/50" />
              <div className="absolute bottom-0 right-0 w-16 h-px bg-[color:var(--color-navy-500)]" />
              <div className="absolute bottom-0 right-0 w-px h-16 bg-[color:var(--color-navy-500)]" />
              <div className="absolute bottom-3 right-3 w-6 h-px bg-[color:var(--color-navy-500)]/50" />
              <div className="absolute bottom-3 right-3 w-px h-6 bg-[color:var(--color-navy-500)]/50" />

              <div className="hairline text-[color:var(--color-navy-500)] text-[0.6rem] mb-4">
                {drink.glass}
              </div>

              <h3 className="font-deco text-3xl md:text-4xl text-[color:var(--color-navy-500)] tracking-wider mb-3">
                {drink.name.toUpperCase()}
              </h3>

              <p className="font-display italic text-xl text-[color:var(--color-navy-400)] mb-8">
                {drink.subtitle}
              </p>

              <p className="text-[color:var(--color-navy-700)]/80 leading-relaxed mb-10 max-w-xl">
                {drink.story}
              </p>

              <div className="grid md:grid-cols-2 gap-8 md:gap-14">
                <div>
                  <div className="hairline text-[color:var(--color-navy-500)]/60 text-[0.6rem] mb-4">
                    Ingredientes
                  </div>
                  <ul className="space-y-3">
                    {drink.ingredients.map((ing) => (
                      <li
                        key={ing}
                        className="flex items-start gap-3 text-[color:var(--color-navy-700)]/80 text-sm leading-relaxed"
                      >
                        <span className="text-[color:var(--color-navy-500)] mt-1.5">
                          ·
                        </span>
                        {ing}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="hairline text-[color:var(--color-navy-500)]/60 text-[0.6rem] mb-4">
                    Método
                  </div>
                  <p className="text-[color:var(--color-navy-700)]/80 text-sm leading-relaxed mb-6">
                    {drink.method}
                  </p>

                  <div className="hairline text-[color:var(--color-navy-500)]/60 text-[0.6rem] mb-4">
                    Guarnição
                  </div>
                  <p className="text-[color:var(--color-navy-700)]/80 text-sm leading-relaxed">
                    {drink.garnish}
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-[color:var(--color-navy-500)]/15 font-display italic text-2xl text-[color:var(--color-navy-500)]">
                — {drink.tagline}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
