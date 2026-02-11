import ClientScrollIndicator from "./hero/ClientScrollIndicator";
import "./hero/hero.css";
import HeroHeading from "./hero/HeroHeading";
import HeroDescription from "./hero/HeroDescription";

import HeroCTA from "./hero/HeroCTA";

import HeroImage from "./hero/HeroImage";
import HeroBackground from "./hero/HeroBackground";

type Props = {
  data: {
    introText?: string;
    conceptText?: string;
    uniquePoints?: string[];
    ctaText?: string;
    heroImage?: { asset?: { url: string } };
  };
};

export default function HomeHero({ data }: Props) {
  return (
    <section className="relative mt-10 overflow-hidden bg-gradient-to-b from-white to-indigo-50/30">
      {/* Enhanced Background Glow Effects */}
      <HeroBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT — TEXT CONTENT */}
        <div className="relative z-10">
          
          <HeroHeading introText={data?.introText} />
          <HeroDescription conceptText={data?.conceptText} />
          <HeroCTA ctaText={data?.ctaText} />
          
        </div>

        {/* RIGHT — IMAGE SECTION */}
        <HeroImage heroImage={data?.heroImage} />

        {/* Scroll Indicator */}
        <ClientScrollIndicator />
      </div>
    </section>
  );
}
