import { Heart } from "lucide-react";

type Props = {
  philosophy?: string;
};

export function PhilosophySection({ philosophy }: Props) {
  if (!philosophy) {
    return null;
  }

  return (
    <div className="relative bg-gradient-to-r from-brand-sageDark to-brand-sage rounded-[3rem] p-16 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-48 translate-y-48" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-8">
          <Heart className="w-6 h-6 text-white" />
          <span className="text-white/90 font-medium tracking-wider">
            OUR PHILOSOPHY
          </span>
        </div>
        <h3 className="text-4xl font-bold text-white mb-8 leading-tight">
          More Than Just Exercise
        </h3>
        <p className="text-xl text-white/90 leading-relaxed">{philosophy}</p>
      </div>
    </div>
  );
}
