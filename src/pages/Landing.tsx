import { Header } from "../components/Header/Header";
import { Hero } from "../sections/Hero/Hero";
import { Problem } from "../sections/Problem/Problem";
import { Pipeline } from "../sections/Pipeline/Pipeline";
import { ShaDemo } from "../sections/ShaDemo/ShaDemo";
import { Benefits } from "../sections/Benefits/Benefits";
import { Pricing } from "../sections/Pricing/Pricing";
import { Testimonials } from "../sections/Testimonials/Testimonials";
import { Faq } from "../sections/Faq/Faq";
import { FinalCta } from "../sections/FinalCta/FinalCta";
import { Footer } from "../components/Footer/Footer";

/** Página principal: ensambla las 9 secciones en el orden de la narrativa. */
export function Landing() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Pipeline />
        <ShaDemo />
        <Benefits />
        <Pricing />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
