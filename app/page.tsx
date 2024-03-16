import Games from "@/components/main/Games";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Sponsors from "@/components/main/Sponsors";
import Testimonials from "@/components/main/Testimonials";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Testimonials />
        {/* <Projects /> */}
        {/* <Games /> */}
        <Sponsors />
      </div>
    </main>
  );
}
