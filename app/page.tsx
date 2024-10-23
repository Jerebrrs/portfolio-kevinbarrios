import About from "@/components/About";
import Certificate from "@/components/Certificate";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work />
      <Certificate />
    </main>
  );
}
