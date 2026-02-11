import Image from "next/image";
import { Sparkles, Users, Target } from "lucide-react";

type Props = {
  heroImage?: { asset?: { url: string } };
};

export default function HeroImage({ heroImage }: Props) {
  return (
    <div className="relative lg:mt-0">
      {/* Main Image Container */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-indigo-900/10 bg-gradient-to-br from-indigo-50 to-rose-50 group animate-slide-up delay-200">
        {heroImage?.asset?.url ? (
          <div className="relative">
            <Image
              src={heroImage.asset.url}
              alt="HeyPilates Studio"
              width={1200}
              height={600}
              className="w-full h-[500px] md:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Image Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ) : (
          <div className="h-[500px] md:h-[600px] flex flex-col items-center justify-center text-gray-400">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-100 to-rose-100 flex items-center justify-center mb-4">
              <Sparkles className="w-12 h-12 text-indigo-300" />
            </div>
            <p className="text-lg font-medium">Add hero image in CMS</p>
          </div>
        )}

        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-rose-100 to-pink-100 blur-xl opacity-60 group-hover:scale-125 transition-transform duration-700" />
        <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-gradient-to-br from-indigo-100 to-blue-100 blur-xl opacity-60 group-hover:scale-125 transition-transform duration-700" />
      </div>

      {/* Enhanced Floating Card - Left Bottom */}
      <div className="hidden md:block absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-6 w-72 animate-slide-up delay-300 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-brand-sage to-brand-sageDark flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">
              Personalized Attention
            </p>
            <p className="text-2xl font-bold text-gray-900">Small group training</p>
            <p className="text-sm text-gray-500 mt-2">
              Ensuring individual guidance and support
            </p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Book now for</span>
          </div>
        </div>
      </div>

      {/* Secondary Floating Card - Top Right */}
     
    </div>
  );
}
