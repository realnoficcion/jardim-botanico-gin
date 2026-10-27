import { Navbar } from "./components/Navbar";
import { SiteShell } from "./components/SiteShell";
import { SmoothScroll } from "./components/SmoothScroll";
import { Hero } from "./sections/Hero";
import { Manifesto } from "./sections/Manifesto";
import { OGin } from "./sections/OGin";
import { Botanicos } from "./sections/Botanicos";
import { Processo } from "./sections/Processo";
import { Serve } from "./sections/Serve";
import { Galeria } from "./sections/Galeria";
import { Contato } from "./sections/Contato";
import { Footer } from "./sections/Footer";

export default function Home() {
  return (
    <SiteShell>
      <SmoothScroll />
      <Navbar />
      <main className="relative">
        <Hero />
        <Manifesto />
        <OGin />
        <Botanicos />
        <Processo />
        <Serve />
        <Galeria />
        <Contato />
      </main>
      <Footer />
    </SiteShell>
  );
}
