export function Footer() {
  return (
    <footer className="relative border-t border-[color:var(--color-navy-500)]/15 py-14 md:py-20 bg-[color:var(--color-mist-100)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <div className="font-deco text-lg md:text-xl tracking-widest text-[color:var(--color-navy-500)]">
              JARDIM<span className="opacity-50"> · </span>BOTÂNICO
            </div>
            <div className="hairline text-[color:var(--color-navy-500)]/70 mt-2 text-[0.65rem]">
              London Dry Gin · N<span className="underline underline-offset-1">o</span> 5
            </div>
            <p className="mt-6 text-[color:var(--color-navy-700)]/60 max-w-md text-sm leading-relaxed">
              São Paulo Urban Distillery. Lotes pequenos, botânicos
              selecionados, método clássico.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="hairline text-[color:var(--color-navy-500)]/60 mb-5 text-[0.6rem]">
              Navegar
            </div>
            <ul className="space-y-3 text-sm">
              {[
                { href: "#manifesto", label: "Manifesto" },
                { href: "#gin", label: "O Gin" },
                { href: "#botanicos", label: "Botânicos" },
                { href: "#processo", label: "Processo" },
                { href: "#serve", label: "Serve" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[color:var(--color-navy-700)]/70 hover:text-[color:var(--color-navy-500)] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="hairline text-[color:var(--color-navy-500)]/60 mb-5 text-[0.6rem]">
              Social
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://www.instagram.com/jardimbotanicogin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[color:var(--color-navy-700)]/70 hover:text-[color:var(--color-navy-500)] transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:pedidos@jardimbotanicogin.com"
                  className="text-[color:var(--color-navy-700)]/70 hover:text-[color:var(--color-navy-500)] transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="hairline text-[color:var(--color-navy-500)]/60 mb-5 text-[0.6rem]">
              Responsabilidade
            </div>
            <p className="text-[color:var(--color-navy-700)]/60 text-sm leading-relaxed">
              Beba com moderação. Venda proibida para menores de 18 anos.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[color:var(--color-navy-500)]/15 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-[color:var(--color-navy-500)]/50 hairline">
          <div>© 2026 Jardim Botânico Gin</div>
          <div className="font-mono-brand normal-case tracking-normal">
            Lote N<span className="underline underline-offset-1">o</span> 5 · Destilado em São Paulo
          </div>
        </div>
      </div>
    </footer>
  );
}
