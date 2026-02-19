export default function MealPlanPage() {
  return (
    <section className="bg-[#f5f3ee] min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Brand */}
        <div className="text-center mb-6">
          <p className="text-green-800 tracking-[0.3em] text-sm font-medium">
            GREEN BEAN CAFÉ
          </p>
        </div>

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-serif text-green-900 mb-6">
            Meal Plans
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Structured nutrition programs designed to help you achieve your
            health goals with consistency and balance.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Starter Plan */}
          <div className="bg-white rounded-3xl shadow-md p-10 hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-serif text-green-900 mb-4">
              Starter Plan
            </h3>

            <p className="text-4xl font-bold text-green-800 mb-6">
              UGX 250,000
              <span className="text-sm font-normal text-gray-500"> / week</span>
            </p>

            <ul className="space-y-3 text-gray-600 mb-8">
              <li>✔ 5 Healthy Lunch Meals</li>
              <li>✔ Calorie Controlled</li>
              <li>✔ Nutrition Guidance</li>
              <li>✔ Weekly Menu Rotation</li>
            </ul>

            <button className="w-full bg-green-800 text-white py-3 rounded-full hover:bg-green-900 transition">
              Choose Plan
            </button>
          </div>

          {/* Transformation Plan */}
          <div className="bg-green-900 text-white rounded-3xl shadow-lg p-10 relative scale-105">
            <span className="absolute top-6 right-6 bg-white text-green-900 text-xs px-3 py-1 rounded-full">
              Most Popular
            </span>

            <h3 className="text-2xl font-serif mb-4">
              Transformation Plan
            </h3>

            <p className="text-4xl font-bold mb-6">
              UGX 450,000
              <span className="text-sm font-normal text-green-200"> / week</span>
            </p>

            <ul className="space-y-3 mb-8">
              <li>✔ 10 Balanced Meals</li>
              <li>✔ High Protein Options</li>
              <li>✔ Body Composition Tracking</li>
              <li>✔ Dedicated Nutrition Support</li>
            </ul>

            <button className="w-full bg-white text-green-900 py-3 rounded-full hover:bg-gray-100 transition">
              Choose Plan
            </button>
          </div>

          {/* Elite Plan */}
          <div className="bg-white rounded-3xl shadow-md p-10 hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-serif text-green-900 mb-4">
              Elite Plan
            </h3>

            <p className="text-4xl font-bold text-green-800 mb-6">
              UGX 700,000
              <span className="text-sm font-normal text-gray-500"> / week</span>
            </p>

            <ul className="space-y-3 text-gray-600 mb-8">
              <li>✔ 14 Premium Meals</li>
              <li>✔ Customized Macros</li>
              <li>✔ Fitness Consultation</li>
              <li>✔ Priority Delivery</li>
            </ul>

            <button className="w-full bg-green-800 text-white py-3 rounded-full hover:bg-green-900 transition">
              Choose Plan
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
