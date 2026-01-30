import Image from "next/image"
import { Award, HeartPulse, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"

type Props = {
  name?: string
  title?: string
  bio?: string
  points?: string[]
  vision?: string
  imageUrl?: string
}

export default function FounderSection({
  name = "Klaudia Kaliisa",
  title = "Founder & Lead Instructor",
  bio = "Experienced movement specialist with deep expertise in Pilates, functional training, and holistic wellness.",
  points = [],
  vision,
  imageUrl,
}: Props) {
  const icons = [Award, Globe, HeartPulse]

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* IMAGE SIDE */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Add founder image
                </div>
              )}
            </div>

            {/* floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg border border-gray-100 p-5 hidden md:block">
              <p className="text-sm text-gray-500">Experience</p>
              <p className="text-xl font-semibold text-gray-900">
                10+ Years
              </p>
            </div>
          </div>

          {/* CONTENT SIDE */}
          <div>

            {/* label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium mb-6">
              Founder Spotlight
            </div>

            {/* name */}
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
              Meet {name}
            </h2>

            <p className="text-indigo-600 font-medium mt-2">
              {title}
            </p>

            {/* bio */}
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {bio}
            </p>

            {/* credentials */}
            <div className="mt-8 space-y-4">
              {(points ?? []).map((text, i) => {
                const Icon = icons[i % icons.length]
                return (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {text}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* vision */}
            {vision && (
              <div className="mt-8 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  {vision}
                </p>
              </div>
            )}

            {/* CTA */}
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition"
              >
                Train With Klaudia
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
