import { motion } from "framer-motion";
import { Leaf, Quote } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function CoachingStory() {
  return (
    <motion.section
      variants={staggerChildren}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      className="max-w-5xl mx-auto px-6 pb-28"
    >
      <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
        <Leaf className="w-8 h-8 text-[#6E7A3C]" />
        <h2 className="text-3xl font-light">My Story</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        <motion.div
          variants={fadeInUp}
          className="space-y-6 text-[#5B544D] text-lg leading-relaxed"
        >
          <p className="relative pl-6 border-l-4 border-[#A3AD5F]">
            My journey into nutrition began during an internship in Greece.
            Surrounded by incredible food, I gained nearly 10 kilos in just 4.5
            months.
          </p>
          <p>
            Returning to Denmark, I felt disconnected from myself. That moment
            became a turning point — not just physically, but mentally. I
            rebuilt my habits, restructured my nutrition, and reconnected with
            strength through movement.
          </p>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="space-y-6 text-[#5B544D] text-lg leading-relaxed"
        >
          <p>
            What began as a personal transformation evolved into a deeper
            mission: helping others build sustainable systems that work in real
            life — not extreme diets, not temporary fixes.
          </p>
          <p>
            Through Green Bean, I combine structured nutrition, real
            accountability, and practical systems that create measurable
            results.
          </p>
          <div className="bg-[#E8ECCf]/30 p-6 rounded-2xl flex items-start gap-4">
            <Quote className="w-8 h-8 text-[#6E7A3C] flex-shrink-0" />
            <p className="italic text-[#2E2A26]">
              &ldquo;Wellness isn't about perfection — it's about building a
              life you don't need to escape from.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
