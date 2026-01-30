import Link from "next/link"
import { Instagram, Mail, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="mt-28">

      {/* Top area */}
      <div className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid lg:grid-cols-5 gap-12">

            {/* Brand */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
                HeyPilates
              </h3>

              <p className="mt-5 text-gray-600 leading-relaxed max-w-md">
                A boutique movement studio blending Pilates, Barre and TRX
                to build strength, balance, and body awareness.
              </p>

              {/* Social with icons */}
              <div className="flex gap-5 mt-6">

                <a
                  href="#"
                  className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition"
                >
                  <Instagram size={18} />
                  <span className="text-sm">Instagram</span>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition"
                >
                  <MessageCircle size={18} />
                  <span className="text-sm">WhatsApp</span>
                </a>

                <a
                  href="mailto:hello@heypilates.com"
                  className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition"
                >
                  <Mail size={18} />
                  <span className="text-sm">Email</span>
                </a>

              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
                Navigation
              </h4>

              <div className="mt-5 space-y-3 text-sm">
                <Link href="/" className="block text-gray-700 hover:text-indigo-600">Home</Link>
                <Link href="/classes" className="block text-gray-700 hover:text-indigo-600">Classes</Link>
                <Link href="/pricing" className="block text-gray-700 hover:text-indigo-600">Pricing</Link>
                <Link href="/private-training" className="block text-gray-700 hover:text-indigo-600">Private Training</Link>
              </div>
            </div>

            {/* Studio */}
            <div>
              <h4 className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
                Studio
              </h4>

              <div className="mt-5 space-y-3 text-sm text-gray-700">
                <p>Kampala, Uganda</p>
                <p>Mon – Sat</p>
                <p>By appointment</p>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900">
                Start Your Practice
              </h4>

              <p className="text-sm text-gray-600 mt-3">
                Book your first class and experience mindful strength training.
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-3 rounded-xl transition"
              >
                Book a Class
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} HeyPilates Studio</p>

          <div className="flex gap-6">
            <Link href="#" className="hover:text-indigo-600">Privacy</Link>
            <Link href="#" className="hover:text-indigo-600">Terms</Link>
          </div>
        </div>
      </div>

    </footer>
  )
}
