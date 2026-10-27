"use client";

import { motion } from "framer-motion";
import { DecoOrnament } from "../components/BotanicalOrnament";
import { DecoBackground } from "../components/DecoBackground";

export function Contato() {
  return (
    <section
      id="contato"
      className="relative py-32 md:py-48 overflow-hidden border-t border-[color:var(--color-navy-500)]/15 bg-white"
    >
      <DecoBackground
        variant="radial"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] text-[color:var(--color-navy-500)]/[0.16] pointer-events-none"
      />
      <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="hairline text-[color:var(--color-navy-500)] mb-10 flex items-center justify-center gap-3"
        >
          <span className="inline-block w-10 h-px bg-current" />
          Contato
          <span className="inline-block w-10 h-px bg-current" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="font-deco text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] text-[color:var(--color-navy-500)] tracking-wider"
        >
          RESERVE UMA
          <br />
          <span className="font-display italic font-light tracking-normal normal-case lowercase text-[color:var(--color-navy-400)]">
            garrafa.
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="my-14 flex justify-center"
        >
          <DecoOrnament className="w-48 text-[color:var(--color-navy-500)]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-[color:var(--color-navy-700)]/75 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-14"
        >
          Trabalhamos em lotes pequenos. Para encomendas, visitas à destilaria,
          curadoria de bares ou eventos privados, escreva. Respondemos cada
          mensagem.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.55 }}
          className="grid md:grid-cols-3 gap-6 md:gap-10 mb-16"
        >
          <ContactCard
            label="Encomendas"
            value="pedidos@jardimbotanicogin.com"
            href="mailto:pedidos@jardimbotanicogin.com"
          />
          <ContactCard
            label="Imprensa & Parcerias"
            value="imprensa@jardimbotanicogin.com"
            href="mailto:imprensa@jardimbotanicogin.com"
          />
          <ContactCard
            label="Instagram"
            value="@jardimbotanicogin"
            href="https://www.instagram.com/jardimbotanicogin"
            external
          />
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
          href="https://www.instagram.com/jardimbotanicogin"
          target="_blank"
          rel="noopener noreferrer"
          className="hairline inline-flex items-center gap-3 px-8 py-4 bg-[color:var(--color-navy-500)] text-white hover:bg-[color:var(--color-navy-600)] transition-colors"
        >
          Falar com a destilaria
          <span className="inline-block w-5 h-px bg-current" />
        </motion.a>
      </div>
    </section>
  );
}

interface ContactCardProps {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

function ContactCard({ label, value, href, external }: ContactCardProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group p-6 border border-[color:var(--color-navy-500)]/25 hover:border-[color:var(--color-navy-500)] hover:bg-[color:var(--color-mist-100)] transition-all duration-500 text-left"
    >
      <div className="hairline text-[color:var(--color-navy-500)]/60 text-[0.6rem] mb-3">
        {label}
      </div>
      <div className="font-display italic text-xl text-[color:var(--color-navy-500)] break-all">
        {value}
      </div>
      <div className="mt-4 flex items-center gap-2 hairline text-[color:var(--color-navy-500)] text-[0.6rem]">
        {external ? "Abrir" : "Escrever"}
        <span className="inline-block w-4 h-px bg-current" />
      </div>
    </a>
  );
}
