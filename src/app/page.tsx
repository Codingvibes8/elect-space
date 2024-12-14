import Hero from "@/components/Hero";
import Services from "./services/page";

export default function Home() {
  return (
    <div className="bg-hero-bcg bg-cover bg-center min-w-full h-full">
      <Hero/>
        <Services/>
    </div>
  );
}
