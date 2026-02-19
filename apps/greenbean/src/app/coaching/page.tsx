"use client";

import CoachingAudience from "../components/sections/coaching/CoachingAudience";
import CoachingHero from "../components/sections/coaching/CoachingHero";
import CoachingPackages from "../components/sections/coaching/CoachingPackages";
import CoachingStory from "../components/sections/coaching/CoachingStory";
import ClientTransformations from "../components/sections/coaching/ClientTransformations";
import CorporateWellness from "../components/sections/coaching/CorporateWellness";

export default function CoachingPage() {
  return (
    <main className="bg-[#F5F3EE] text-[#2E2A26]">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none" />

      <CoachingHero />
      <CoachingStory />
      <CoachingPackages />
      <CoachingAudience />
      <ClientTransformations />
      <CorporateWellness />
    </main>
  );
}
