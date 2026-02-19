import { motion } from "framer-motion";

const clients = [
  {
    name: "Laura, Kampala",
    focus: "Fat loss and energy",
    comment:
      "Working with Klaudia changed my life. Her personalized approach helped me lose weight sustainably while still enjoying my favorite foods. I sustainably lost 15 kg in 5 months with Green bean plus meal plan and Klaudia’s guidance. With my meal plan I never felt any cravings and I created long lasting healthy habits.",
    beforeSrc: "/1.jpg",
    
  },
  {
    name: "Sara, Kampala",
    focus: "Performance and recovery",
    comment:
      "I wanted to see results that reflected my hard work at the gym, and the meal plan from Green Bean Plus has been a game changer. Focusing on protein helped me feel fuller and more energized for my workouts. The guidance I received made it easy to stay on track, and I’m so excited to see the muscle toning I’ve achieved in just a month!",
    beforeSrc: "/3.jpg",
    
  },
  {
    name: "Klaudia, Kampala",
    focus: "Lifestyle reset",
    comment:
      "I've been where my clients are. I understand the frustration, the self-doubt, the emotional relationship with food especially during the postpartum period. This isn't theoretical for me - I've lived it.",
    beforeSrc: "/2.jpg",
   
  },
];

export default function ClientTransformations() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light mb-4">Client Transformations</h2>
          <p className="text-xl text-[#5B544D] max-w-2xl mx-auto">
            Before and after results with real stories from clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#F5F3EE] rounded-3xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className=" gap-3 mb-6">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={client.beforeSrc}
                    alt={`${client.name} before`}
                    className="w-full h-70 object-cover"
                  />
                </div>
              </div>
              <p className="text-sm uppercase tracking-wider text-[#6E7A3C] font-semibold">
                {client.focus}
              </p>
              <p className="mt-3 text-[#5B544D]">
                &ldquo;{client.comment}&rdquo;
              </p>
              <p className="mt-4 font-medium">{client.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
