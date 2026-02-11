import { client } from "@/sanity/lib/client";
import { homeQuery, founderQuery } from "@/sanity/lib/queries";

import HomeHero from "./components/section/HomeHero";
import UniqueSection from "./components/section/UniqueSection";
import FounderSection from "./components/section/FounderSection";
import PrivateTrainingPreview from "./components/section/PrivateTraining";

export default async function HomePage() {
  const home = await client.fetch(homeQuery);
  const founder = await client.fetch(founderQuery);

  return (
    <>
      <HomeHero data={home} />

      <UniqueSection
        points={home?.uniquePoints ?? []}
        gallery={home?.uniqueGallery ?? []}
      />

      <FounderSection
        name={founder?.name}
        title={founder?.title}
        bio={founder?.bio}
        points={founder?.credentials ?? []}
        vision={founder?.vision}
        imageUrl={founder?.image?.asset?.url}
      />

      <PrivateTrainingPreview />
    </>
  );
}
