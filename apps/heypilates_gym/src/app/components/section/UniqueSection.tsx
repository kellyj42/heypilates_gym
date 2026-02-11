"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type UniquePoint = {
  title?: string;
  description?: string;
};

type Props = {
  points?: UniquePoint[];
  gallery?: {
    asset?: { url?: string };
    caption?: string;
  }[];
};

export default function UniqueSection({
  points = [],
  gallery = [],
}: Props) {
  const displayPoints =
    points.length > 0
      ? points
      : [
          {
            title: "Expert-led movement",
            description:
              "Highly trained instructors guiding every session with precision and care.",
          },
          {
            title: "Personal attention",
            description:
              "Small group sessions designed around your individual body and goals.",
          },
          {
            title: "Mind–body focus",
            description:
              "Movement that builds strength, balance, and deep body awareness.",
          },
          {
            title: "Sustainable results",
            description:
              "Progressive programs that support long-term strength and mobility.",
          },
        ];

  const mainImage = gallery?.[0]?.asset?.url;
  const accentImage = gallery?.[1]?.asset?.url;

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* IMAGES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            {mainImage && (
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <Image
                  src={mainImage}
                  alt="Hey Pilates studio"
                  fill
                  className="object-cover grayscale-[20%]"
                  sizes="(min-width: 768px) 40vw, 90vw"
                />
                <div className="absolute inset-0 bg-white/10" />
              </div>
            )}

            {/* Accent Image */}
            {accentImage && (
              <div className="absolute -bottom-12 -right-12 w-48 aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hidden md:block">
                <Image
                  src={accentImage}
                  alt="Studio detail"
                  fill
                  className="object-cover grayscale-[30%]"
                  sizes="192px"
                />
              </div>
            )}
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-widest text-brand-sageDark font-medium mb-4">
              WHY HEY PILATES
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold text-brand-charcoal mb-8">
              A calmer way to
              <span className="block text-brand-sageDark">
                build lasting strength
              </span>
            </h2>

            <div className="space-y-6">
              {displayPoints.map((point, i) => (
                <div key={i}>
                  <h3 className="text-lg font-semibold text-brand-charcoal mb-1">
                    {point.title}
                  </h3>
                  <p className="text-brand-muted leading-relaxed max-w-lg">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
