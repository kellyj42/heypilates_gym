import { motion } from "framer-motion";
import { Briefcase, Leaf, Target, Users } from "lucide-react";

export default function CoachingAudience() {
  return (
    <section className="py-28 bg-[#F5F3EE]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Users className="w-10 h-10 text-[#6E7A3C] mx-auto mb-4" />
          <h2 className="text-4xl font-light mb-4">Who Is This For?</h2>
          <p className="text-xl text-[#5B544D] max-w-2xl mx-auto">
            Tailored coaching for real people with real goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-md transition"
          >
            <div className="w-16 h-16 bg-[#E8ECCf] rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-[#6E7A3C]" />
            </div>
            <h3 className="text-xl font-medium mb-2">Sustainable Fat Loss</h3>
            <p className="text-[#5B544D]">
              Adults seeking healthy, lasting weight management.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-md transition"
          >
            <div className="w-16 h-16 bg-[#E8ECCf] rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-[#6E7A3C]" />
            </div>
            <h3 className="text-xl font-medium mb-2">Lifestyle Improvement</h3>
            <p className="text-[#5B544D]">
              Individuals wanting better daily habits and energy.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-md transition"
          >
            <div className="w-16 h-16 bg-[#E8ECCf] rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-[#6E7A3C]" />
            </div>
            <h3 className="text-xl font-medium mb-2">Sports Performance</h3>
            <p className="text-[#5B544D]">
              Clients aiming to optimize performance and recovery.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
