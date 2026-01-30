import { Sparkles, Users, Heart, LayoutGrid, ArrowRight } from "lucide-react"
import Link from "next/link"

type Props = {
  points?: string[]
  extraText?: string
}

export default function UniqueSection({ points = [], extraText }: Props) {
  const icons = [Users, Sparkles, LayoutGrid, Heart]

  return (
    <section className="relative py-28 overflow-hidden">

      {/* soft background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-indigo-50 blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* header */}
        <div className="max-w-3xl mb-16">

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Why Choose Us
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
            What makes Hey Pilates unique?
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            A premium movement space designed for mindful strength,
            quality coaching, and a supportive wellness community.
          </p>

        </div>

        {/* cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">

          {points.map((text, i) => {
            const Icon = icons[i % icons.length]

            return (
              <div
                key={i}
                className="
                  group relative
                  bg-white border border-gray-200
                  rounded-2xl p-7
                  shadow-sm hover:shadow-xl
                  hover:-translate-y-2
                  transition-all duration-300
                "
              >
                {/* icon */}
                <div className="
                  w-14 h-14 rounded-xl
                  bg-indigo-100
                  flex items-center justify-center
                  mb-6
                  group-hover:bg-indigo-600
                  transition-colors
                ">
                  <Icon className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors" />
                </div>

                {/* text */}
                <p className="text-gray-800 font-medium leading-relaxed">
                  {text}
                </p>

                {/* hover accent line */}
                <div className="
                  absolute bottom-0 left-0 right-0 h-1
                  bg-gradient-to-r from-indigo-500 to-rose-500
                  scale-x-0 group-hover:scale-x-100
                  transition-transform duration-300
                  origin-left
                  rounded-b-2xl
                " />
              </div>
            )
          })}

        </div>

        {/* extra text block */}
        <div className="max-w-3xl mt-20">
          <p className="text-lg text-gray-600 leading-relaxed">
            {extraText ||
              "Beyond classes, we host wellness events, mobility workshops, and mindfulness sessions to build a thriving wellness community."}
          </p>
        </div>

        {/* CTA panel */}
        <div className="mt-16">
          <div className="
            inline-flex items-center gap-6
            bg-gradient-to-r from-indigo-600 to-indigo-700
            text-white
            px-10 py-6
            rounded-2xl
            shadow-xl shadow-indigo-600/20
          ">
            <div>
              <p className="font-semibold text-lg">
                Ready to begin your movement journey?
              </p>
              <p className="text-indigo-100 text-sm mt-1">
                Book your class and experience the difference.
              </p>
            </div>

            <Link
              href="/contact"
              className="
                group inline-flex items-center gap-2
                bg-white text-indigo-700
                font-semibold
                px-6 py-3 rounded-xl
                hover:bg-gray-100
                transition
                whitespace-nowrap
              "
            >
              Book Your Class
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
