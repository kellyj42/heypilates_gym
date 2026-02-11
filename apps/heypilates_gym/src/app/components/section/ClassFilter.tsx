// app/classes/components/ClassFilter.tsx - Mobile responsive
"use client";

import { Filter, Target, TrendingUp, Heart, Zap, Sparkles } from "lucide-react";

interface ClassFilterProps {
  categories: string[];
}

export default function ClassFilter({ categories }: ClassFilterProps) {
  const filters = [
    { id: "all", label: "All Classes", icon: <Sparkles className="w-4 h-4" /> },
    { id: "beginner", label: "Beginner", icon: <Target className="w-4 h-4" /> },
    { id: "strength", label: "Strength", icon: <TrendingUp className="w-4 h-4" /> },
    { id: "mindfulness", label: "Mindfulness", icon: <Heart className="w-4 h-4" /> },
    { id: "energetic", label: "High Energy", icon: <Zap className="w-4 h-4" /> },
  ];

  const validCategories = categories?.filter((cat): cat is string => 
    typeof cat === 'string' && cat.trim().length > 0
  ) || [];

  const uniqueCategories = Array.from(new Set(validCategories));

  return (
    <div className="mb-8 sm:mb-12 px-2 sm:px-0">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-brand-charcoal flex items-center gap-2">
          <Filter className="w-4 h-4 sm:w-5 sm:h-5" />
          Filter Classes
        </h3>
        <button className="text-xs sm:text-sm text-brand-sageDark font-medium hover:text-brand-sage">
          Clear All
        </button>
      </div>
      
      {/* Category Filters - Scrollable on mobile */}
      <div className="mb-4 sm:mb-6 overflow-x-auto pb-2 -mx-2 px-2">
        <div className="flex gap-2 min-w-max">
          <button className="px-3 sm:px-4 py-2 bg-brand-sageDark text-white rounded-full text-sm sm:text-base font-medium hover:bg-brand-sage transition-colors whitespace-nowrap">
            All Classes
          </button>
          {uniqueCategories.map(category => (
            <button
              key={category}
              className="px-3 sm:px-4 py-2 bg-white border border-gray-300 rounded-full text-gray-700 text-sm sm:text-base hover:border-brand-sage hover:bg-brand-cream transition-colors whitespace-nowrap"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      {/* Other Filters - Scrollable on mobile */}
      <div className="overflow-x-auto pb-2 -mx-2 px-2">
        <div className="flex gap-2 min-w-max">
          {filters.map(filter => (
            <button
              key={filter.id}
              className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-white border border-gray-300 rounded-full hover:border-brand-sage hover:bg-brand-cream transition-colors group whitespace-nowrap"
            >
              <span className="text-gray-600 group-hover:text-brand-sageDark">
                {filter.icon}
              </span>
              <span className="text-gray-700 group-hover:text-brand-charcoal text-sm sm:text-base font-medium">
                {filter.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}