"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Structured Weight Loss Programs",
    description:
      "Our Lean and Balanced programs are designed with clear macro structure, portion control, and measurable results.",
    image: "/meal1.jpg",
    link: "/programs",
  },
  {
    title: "Performance Meal Plans",
    description:
      "Balanced nutrition built for energy, strength, and sustainable performance — tailored to real lifestyles.",
    image: "/meal2.jpg",
    link: "/meal-plans",
  },
  {
    title: "Nutrition Coaching",
    description:
      "Personalized strategy, accountability, and data-driven adjustments to transform how you approach food and fitness.",
    image: "/coaching.jpg",
    link: "/coaching",
  },
];

export default function OfferShowcase() {
  return (
    <section className="bg-[#F5F3EE] text-[#2E2A26] py-28">
      <div className="max-w-6xl mx-auto px-6 space-y-32">

        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className={`grid md:grid-cols-2 gap-16 items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={section.image}
                alt={section.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light leading-snug">
                {section.title}
              </h2>

              <p className="mt-6 text-lg text-[#5B544D] leading-relaxed">
                {section.description}
              </p>

              <Link
                href={section.link}
                className="inline-block mt-8 text-[#6E7A3C] font-medium text-sm hover:underline"
              >
                Discover More →
              </Link>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
