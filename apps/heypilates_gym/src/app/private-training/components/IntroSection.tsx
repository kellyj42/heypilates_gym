import { Star } from "lucide-react";

type Props = {
  introText?: string;
};

export function IntroSection({ introText }: Props) {
  if (!introText) {
    return null;
  }

  return (
    <div className="relative">
      <div className="absolute -top-6 -left-6 w-12 h-12 bg-brand-sage/20 rounded-full" />
      <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-brand-sageLight shadow-lg">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-brand-sageLight rounded-full">
            <Star className="w-6 h-6 text-brand-sageDark" />
          </div>
          <h2 className="text-3xl font-bold text-brand-charcoal">
            Why Choose Private Training?
          </h2>
        </div>
        <p className="text-lg text-brand-muted leading-relaxed pl-4 border-l-4 border-brand-sage">
          {introText}
        </p>
      </div>
    </div>
  );
}
