import Image from "next/image";
import { Award, HeartPulse, Globe, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

type Props = {
  name?: string;
  title?: string;
  bio?: string;
  points?: string[];
  vision?: string;
  imageUrl?: string;
};

export default function FounderSection({
  name = "Klaudia Kaliisa",
  title = "Founder & Lead Instructor",
  bio = "Experienced movement specialist with deep expertise in Pilates, functional training, and holistic wellness.",
  points = [],
  vision,
  imageUrl,
}: Props) {
  const icons = [Award, Globe, HeartPulse];

  return (
    <section className="py-20 md:py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* IMAGE SIDE */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl bg-brand-sageLight">
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-brand-muted text-sm">
                  Add founder image
                </div>
              )}
            </div>

            {/* floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg border border-brand-sage/30 p-5 hidden md:block">
              <p className="text-sm text-brand-muted">Experience</p>
              <p className="text-xl font-semibold text-brand-charcoal">
                10+ Years
              </p>
            </div>
          </div>

          {/* CONTENT SIDE */}
          <div>
            {/* label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-sage/20 text-brand-sageDark rounded-full text-sm font-medium mb-6">
              Founder Spotlight
            </div>

            {/* name */}
            <h2 className="text-3xl md:text-5xl font-semibold text-brand-charcoal leading-tight">
              Meet {name}
            </h2>

            <p className="text-brand-sageDark font-medium mt-2">
              {title}
            </p>

            {/* bio */}
            <p className="mt-6 text-lg text-brand-muted leading-relaxed">
              {bio}
            </p>

            {/* credentials */}
            <div className="mt-8 space-y-4">
              {(points ?? []).map((text, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-brand-sage/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-sageDark" />
                    </div>
                    <p className="text-brand-charcoal leading-relaxed">
                      {text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* vision */}
            {vision && (
              <div className="mt-8 p-6 bg-white rounded-2xl border border-brand-sage/30 shadow-sm">
                <p className="text-brand-charcoal leading-relaxed">
                  {vision}
                </p>
              </div>
            )}

            {/* CTA */}
            <div className="mt-10">
              <Button
                href="/private-training"
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                Train with Klaudia
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
