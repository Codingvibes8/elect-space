import Hero from "@/components/Hero";
import Services from "./services/page";
import About from "@/app/about/page";

import ContactSection from "@/app/contact/page";

export default function Home() {
  return (
      <div className="bg-hero-bcg bg-cover bg-fixed bg-center max-w-[1536px] mx-auto h-full">
      <Hero/>
          <About/>
        <Services/>
          <ContactSection/>
    </div>
  );
}
