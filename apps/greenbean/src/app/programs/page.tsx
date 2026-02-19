import Link from "next/link";

export default function ProgramsPage() {
  const programs = [
    {
      title: "Weight Loss",
      description:
        "Structured, calorie-aware menus and support to help you lose weight sustainably.",
      href: "/programs/weight-loss",
    },
    {
      title: "Muscle Gain",
      description:
        "High-protein meals and timing guidance to support muscle growth and recovery.",
      href: "/programs/muscle-gain",
    },
    {
      title: "Wellness",
      description:
        "Balanced, whole-food meals focused on energy, digestion, and everyday health.",
      href: "/programs/wellness",
    },
  ];

  return (
    <section className="bg-[#F6F4EF] min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#6B7D6D] tracking-[0.3em] text-sm font-medium">
            GREEN BEAN CAFÉ
          </p>
          <h1 className="text-6xl font-serif text-[#2F3E34] mt-6 mb-6">
            Programs
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Choose a program that matches your goals. Each plan is crafted with
            clean ingredients, smart portions, and clear guidance.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">
            Green Bean Cafe is a wellness-first kitchen built for everyday life.
            We curate seasonal menus, offer flexible meal plans, and pair them
            with coaching so you can eat well without overthinking it. Explore
            our programs to see how we support your routine from breakfast to
            dinner, whether you are focused on energy, performance, or balance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-serif text-[#2F3E34] mb-3">
                {program.title}
              </h3>
              <p className="text-gray-600 mb-6">{program.description}</p>
              <Link
                href={program.href}
                className="inline-flex items-center text-sm font-medium text-[#6B7D6D] hover:text-[#2F3E34]"
              >
                View Program →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
