export default function WeightLossPage() {
  return (
    <section className="bg-[#F6F4EF] min-h-screen py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#6B7D6D] tracking-[0.3em] text-sm font-medium">
            GREEN BEAN CAFÉ
          </p>
          <h1 className="text-6xl font-serif text-[#2F3E34] mt-6 mb-6">
            Weight Loss Program
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Calorie-conscious meals that keep you full and energized while
            supporting steady, healthy weight loss.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-serif text-[#2F3E34] mb-4">
            What You Get
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>✔ Portion-controlled meals with macro balance</li>
            <li>✔ High-fiber ingredients to keep you satisfied</li>
            <li>✔ Weekly menu rotation to prevent boredom</li>
            <li>✔ Optional add-on for nutrition check-ins</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
