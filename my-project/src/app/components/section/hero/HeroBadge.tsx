import { Sparkles } from "lucide-react";

export default function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-indigo-100 mb-8 animate-fade-in">
      <Sparkles className="w-4 h-4 text-indigo-500" />
      <span className="text-sm font-medium text-indigo-700">
        Transforming Lives Since 2015
      </span>
    </div>
  );
}
