import Hero from "@/components/Hero";
import Services from "./services/page";

export default function Home() {
  return (
      <div className="bg-hero-bcg bg-cover bg-fixed bg-center max-w-[1536px] mx-auto h-full">
      <Hero/>
        <Services/>
    </div>
  );
}
