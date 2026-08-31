import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import About from "@/components/about";
import Services from "@/components/services";
import Gallery from "@/components/gallery";
import Reviews from "@/components/reviews";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="border-y border-ink/10 bg-cream py-6">
        <Marquee
          items={[
            "Facials",
            "Bridal Makeup",
            "Hair Spa",
            "Keratin",
            "Colour",
            "Threading",
            "Mani & Pedi",
            "Mehndi",
          ]}
        />
      </div>

      <About />
      <Services />
      <Gallery />
      <Reviews />
      <Contact />
    </>
  );
}
