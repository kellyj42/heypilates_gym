import { ChevronRight } from "lucide-react";

type Props = {
  ctaText?: string;
};

export default function HeroCTA({ ctaText }: Props) {
  return (
    <div className="mt-12 flex flex-wrap gap-4 animate-slide-up delay-300">
      <a
        href="/contact"
        className="relative group bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-indigo-600/25 hover:shadow-xl hover:shadow-indigo-600/40 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
      >
        <span className="relative z-10">
          {ctaText || "Book Your First Class"}
        </span>
        <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </a>

      <a
        href="/classes"
        className="group bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-indigo-300 text-gray-800 hover:text-indigo-700 font-medium px-8 py-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
      >
        <span>View Schedule</span>
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
}
