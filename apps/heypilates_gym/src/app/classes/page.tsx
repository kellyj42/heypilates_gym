import ClassFilter from "../components/section/ClassFilter";
import ClassGrid from "../components/section/ClassGrid";
import ClassHero from "../components/section/ClassHero";
import ScheduleTable from "../components/section/ClassSchedule";
import PricingSection from "../components/section/Pricing";
import { client } from "@/sanity/lib/client";
import { classTypesQuery, classScheduleQuery } from "@/sanity/lib/queries";

// app/classes/page.tsx - Updated with better mobile responsiveness
export default async function ClassesPage() {
  const classes = await client.fetch(classTypesQuery);
  const schedule = await client.fetch(classScheduleQuery);
  
  const categories: string[] = [...new Set((classes as any[])
    .filter((c: any) => c.category)
    .map((c: any) => c.category as string)
  )];

  return (
    <div className="min-h-screen">
      <ClassHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <ClassFilter categories={categories} />
        <ClassGrid classes={classes} />
        <div className="mt-12 sm:mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-charcoal mb-6 sm:mb-8 text-center px-4">
            Weekly Schedule
          </h2>
          <div className="px-2 sm:px-0">
            <ScheduleTable schedule={schedule} classTypes={classes || []} />
          </div>
        </div>
        <PricingSection />
      </div>
    </div>
  );
}