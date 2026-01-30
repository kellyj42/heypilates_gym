import { client } from "@/sanity/lib/client";
import { homeQuery } from "@/sanity/lib/queries";
import HomeHero from "./components/section/HomeHero";
import UniqueSection from "./components/section/UniqueSection";

export default async function HomePage() {
  const home = await client.fetch(homeQuery);

  return (
    <>
      <HomeHero data={home} />

      <UniqueSection
        points={home.uniquePoints}
        extraText="Beyond classes, we host wellness events, mobility workshops, and mindfulness sessions to build a thriving wellness community."
      />
    </>
  );
}
