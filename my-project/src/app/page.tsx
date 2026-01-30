import { client } from "@/sanity/lib/client";
import { homeQuery } from "@/sanity/lib/queries";
import HomeHero from "./components/section/HomeHero";
import UniqueSection from "./components/section/UniqueSection";
import FounderSection from "./components/section/FounderSection";
import { founderQuery } from "@/sanity/lib/queries";

export default async function HomePage() {
  const home = await client.fetch(homeQuery);
  const founder = await client.fetch(founderQuery);

  return (
    <>
      <HomeHero data={home} />

      <UniqueSection
        points={home.uniquePoints}
        gallery={home.uniqueGallery}
        extraText="Beyond classes..."
      />

      <FounderSection
        name={founder.name}
        title={founder.title}
        bio={founder.bio}
        points={founder.credentials}
        vision={founder.vision}
        imageUrl={founder.image?.asset?.url}
      />
    </>
  );
}
