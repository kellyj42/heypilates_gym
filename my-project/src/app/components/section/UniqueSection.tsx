import { Sparkles, Users, Heart, LayoutGrid, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type Props = {
  points?: string[];
  extraText?: string;
  gallery?: { asset?: { url?: string } }[];
};

export default function UniqueSection({ points = [], extraText, gallery }: Props) {
  const icons = [Users, Sparkles, LayoutGrid, Heart];

  const galleryImages = gallery ?? [];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-indigo-50 blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* HEADER */}
        <div className="max-w-3xl mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium mb-5">
            <Sparkles className="w-4 h-4" />
            Why Choose Us
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
            What makes Hey Pilates unique?
          </h2>

          <p className="mt-5 text-base md:text-lg text-gray-600 leading-relaxed">
            A premium movement space designed for mindful strength, quality
            coaching, and a supportive wellness community.
          </p>
        </div>

        {/* IMAGE STRIP — NEW */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {galleryImages.length === 0 && (
            <div className="col-span-full text-gray-400 text-sm">
              Add Unique Section gallery images in Sanity
            </div>
          )}

          {galleryImages.map((img, i) => {
            const url = img?.asset?.url;
            if (!url) return null;

            return (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={url}
                  alt={`Hey Pilates studio gallery image ${i + 1}`}
                  fill
                  sizes="(max-width:768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div
                  className="
          absolute inset-0
          bg-gradient-to-t from-black/50 to-transparent
          opacity-0 group-hover:opacity-100
          transition duration-300
          flex items-end p-4
        "
                >
                  <span className="text-white text-sm font-medium">
                    View Studio
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {(points ?? []).map((text, i) => {
            const Icon = icons[i % icons.length];

            return (
              <div
                key={i}
                className="
                  group relative
                  bg-white border border-gray-200
                  rounded-2xl p-6 md:p-7
                  shadow-sm hover:shadow-xl
                  hover:-translate-y-2
                  transition-all duration-300
                "
              >
                <div
                  className="
                  w-12 h-12 md:w-14 md:h-14 rounded-xl
                  bg-indigo-100
                  flex items-center justify-center
                  mb-5
                  group-hover:bg-indigo-600
                  transition-colors
                "
                >
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-indigo-600 group-hover:text-white transition-colors" />
                </div>

                <p className="text-gray-800 font-medium leading-relaxed text-sm md:text-base">
                  {text}
                </p>

                <div
                  className="
                  absolute bottom-0 left-0 right-0 h-1
                  bg-gradient-to-r from-indigo-500 to-rose-500
                  scale-x-0 group-hover:scale-x-100
                  transition-transform duration-300
                  origin-left
                  rounded-b-2xl
                "
                />
              </div>
            );
          })}
        </div>

        {/* EXTRA TEXT */}
        <div className="max-w-3xl mt-16 md:mt-20">
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            {extraText ||
              "Beyond classes, we host wellness events, mobility workshops, and mindfulness sessions to build a thriving wellness community."}
          </p>
        </div>

        {/* CTA — RESPONSIVE FIXED */}
        <div className="mt-14 md:mt-16">
          <div
            className="
            flex flex-col md:flex-row
            items-start md:items-center
            justify-between
            gap-6
            bg-gradient-to-r from-indigo-600 to-indigo-700
            text-white
            px-6 md:px-10 py-7
            rounded-2xl
            shadow-xl shadow-indigo-600/20
          "
          >
            <div>
              <p className="font-semibold text-lg">
                Ready to begin your movement journey?
              </p>
              <p className="text-indigo-100 text-sm mt-1">
                Book your class and experience the difference.
              </p>
            </div>

            <Link
              href="/contact"
              className="
                group inline-flex items-center gap-2
                bg-white text-indigo-700
                font-semibold
                px-6 py-3 rounded-xl
                hover:bg-gray-100
                transition
                whitespace-nowrap
              "
            >
              Book Your Class
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
