import { Users, Target } from "lucide-react";

export default function HeroStats() {
  return (
    <div className="mt-12 flex items-center gap-8 animate-slide-up delay-400">
      <div className="flex items-center gap-3">
        <Users className="w-5 h-5 text-brand-sage" />
        <div>
          <div className="text-2xl font-bold text-gray-900">500+</div>
          <div className="text-sm text-gray-500">Happy Members</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Target className="w-5 h-5 text-rose-600" />
        <div>
          <div className="text-2xl font-bold text-gray-900">98%</div>
          <div className="text-sm text-gray-500">Satisfaction Rate</div>
        </div>
      </div>
    </div>
  );
}
