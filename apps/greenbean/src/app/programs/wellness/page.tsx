export default function WellnessPage() {
  return (
    <section className="bg-[#F6F4EF] min-h-screen py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#6B7D6D] tracking-[0.3em] text-sm font-medium">
            GREEN BEAN CAFÉ
          </p>
          <h1 className="text-6xl font-serif text-[#2F3E34] mt-6 mb-6">
            Wellness Program
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A balanced approach focused on whole foods, gut-friendly options,
            and everyday vitality.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-serif text-[#2F3E34] mb-4">
            What You Get
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>✔ Seasonal ingredients and rotating menus</li>
            <li>✔ Hydration support with juices and teas</li>
            <li>✔ Options for vegetarian and gluten-free diets</li>
            <li>✔ Simple daily meal rhythm for consistency</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
