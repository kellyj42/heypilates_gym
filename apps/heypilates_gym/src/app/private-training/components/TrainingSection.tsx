import { Dumbbell, Sparkles } from "lucide-react";
import { TrainingCard } from "./TrainingCard";
import type { PackageItem, PrivateTrainingData } from "./types";

type Props = {
  data?: PrivateTrainingData;
};

export function TrainingSection({ data }: Props) {
  const defaultPersonalPackages: PackageItem[] = [
    {
      label: "2 Sessions / Week",
      amount: "600,000 UGX",
      note: "4-week commitment",
    },
    {
      label: "3 Sessions / Week",
      amount: "800,000 UGX",
      note: "4-week commitment",
    },
  ];

  return (
    <div className="space-y-24">
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-sageLight rounded-full text-brand-sageDark text-sm font-medium mb-4">
          <Dumbbell className="w-4 h-4" />
          OUR PRIVATE OFFERINGS
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-6">
          Tailored Training{" "}
          <span className="text-brand-sageDark">Experiences</span>
        </h2>
        <p className="text-lg text-brand-muted">
          Choose the perfect private training option that aligns with your goals
          and preferences
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <TrainingCard
          title={data?.reformer?.title || "Private Reformer Pilates"}
          description={
            data?.reformer?.description ||
            "Experience the perfect blend of strength, flexibility, and mindfulness with personalized Reformer Pilates sessions designed just for you."
          }
          imageUrl={data?.reformer?.image?.asset?.url}
          icon={<Sparkles className="w-6 h-6" />}
          color="sage"
          features={[
            "Personalized Alignment",
            "Core Strength Focus",
            "Flexibility Training",
            "Mindful Movement",
          ]}
          prices={[
            {
              label: "Single Session",
              amount: data?.reformer?.priceSingle || "120,000 UGX",
              note: "Perfect for beginners",
            },
            {
              label: "8-Session Package",
              amount: data?.reformer?.pricePack || "800,000 UGX",
              note: "Best value - Save 20%",
            },
          ]}
          highlight="Most Popular"
        />

        <TrainingCard
          title={data?.personalTraining?.title || "Personal Training"}
          description={
            data?.personalTraining?.description ||
            "Build strength, confidence, and consistency with a customized training program that evolves with your fitness journey."
          }
          imageUrl={data?.personalTraining?.image?.asset?.url}
          icon={<Dumbbell className="w-6 h-6" />}
          color="charcoal"
          features={[
            "Strength & Conditioning",
            "Cardiovascular Health",
            "Nutrition Guidance",
            "Progress Tracking",
          ]}
          prices={data?.personalTraining?.packages || defaultPersonalPackages}
          highlight="Fast Results"
        />
      </div>
    </div>
  );
}
