import Image from "next/image";

import { motion } from "framer-motion";

export default function CoachingHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#E8ECCf]/30 to-transparent" />
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-[#6E7A3C] bg-[#E8ECCf] rounded-full">
            FOUNDER & LEAD COACH
          </span>
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6">
            Meet Klaudia Kaliisa
          </h1>
          <p className="text-xl text-[#5B544D] max-w-2xl mx-auto leading-relaxed">
            Founder of Green Bean | Certified Nutrition Coach | Wellness
            Strategist.
          </p>
          <div className="mt-10 flex justify-center">
            <div className="relative w-full max-w-3xl aspect-[16/9] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/klaudia.jpg"
                alt="Fresh meal on a table"
                fill
                sizes="(min-width: 1024px) 768px, 90vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
