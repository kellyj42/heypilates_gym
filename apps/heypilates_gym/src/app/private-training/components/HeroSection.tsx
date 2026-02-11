import Image from "next/image";
import {
  ChevronRight,
  Heart,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import type { PrivateTrainingData } from "./types";

type Props = {
  data?: PrivateTrainingData;
};

export function HeroSection({ data }: Props) {
  const features = [
    { icon: <Target className="w-5 h-5" />, text: "100% Personalized Plans" },
    { icon: <Users className="w-5 h-5" />, text: "One-on-One Attention" },
    { icon: <Heart className="w-5 h-5" />, text: "Mind-Body Connection" },
    { icon: <Zap className="w-5 h-5" />, text: "Faster Results" },
  ];

  return (
    <div className="relative h-[85vh] min-h-[600px] rounded-b-[4rem] overflow-hidden">
      {data?.heroImage?.asset?.url ? (
        <Image
          src={data.heroImage.asset.url}
          alt="Private Training at Hey Pilates"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-sageLight to-brand-sage">
          <div className="text-center text-brand-charcoal">
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-brand-sageDark" />
            <p className="text-lg">Add Private Training hero image in Sanity</p>
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/60 via-brand-charcoal/40 to-brand-charcoal/60" />

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-2xl text-white mb-8 border border-white/20">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium tracking-wider">PRIVATE TRAINING</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8 max-w-4xl">
            {data?.heroHeadline || "Private Training Designed Around You"}
            <span className="block text-3xl md:text-4xl lg:text-5xl font-normal mt-4 text-brand-sageLight">
              {data?.heroSubtext?.split(".")[0] ||
                "Transform Your Body, Transform Your Life"}
            </span>
          </h1>

          <div className="flex flex-wrap gap-4 mt-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-md rounded-xl text-white/90 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
              >
                <div className="p-2 bg-brand-sage/30 rounded-lg group-hover:bg-brand-sage/50 transition-colors">
                  {feature.icon}
                </div>
                <span className="font-medium text-sm tracking-wide">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronRight className="w-8 h-8 text-white rotate-90" />
          </div>
        </div>
      </div>
    </div>
  );
}
