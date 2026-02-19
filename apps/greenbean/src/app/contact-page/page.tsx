"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section className="bg-[#F6F4EF] min-h-screen py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-sm tracking-[0.3em] text-[#6B7D6D] font-medium">
            GREEN BEAN CAFÉ
          </span>

          <h1 className="text-6xl font-serif text-[#2F3E34] mt-6 mb-6">
            Contact Us
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have a question about our meals, meal plans, or catering? We’d love
            to hear from you. Reach out and our team will respond shortly.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#6B7D6D]" />
              <div>
                <h3 className="text-xl font-semibold text-[#2F3E34]">
                  Location
                </h3>
                <p className="text-gray-600">
                  Plot 12, Wellness Street
                  <br />
                  Kampala, Uganda
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-[#6B7D6D]" />
              <div>
                <h3 className="text-xl font-semibold text-[#2F3E34]">Phone</h3>
                <p className="text-gray-600">+256 700 000 000</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-[#6B7D6D]" />
              <div>
                <h3 className="text-xl font-semibold text-[#2F3E34]">Email</h3>
                <p className="text-gray-600">info@greenbeancafe.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-[#6B7D6D]" />
              <div>
                <h3 className="text-xl font-semibold text-[#2F3E34]">
                  Opening Hours
                </h3>
                <p className="text-gray-600">
                  Monday – Friday: 7:00 AM – 9:00 PM
                  <br />
                  Saturday – Sunday: 8:00 AM – 10:00 PM
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 space-y-6"
          >
            <div>
              <label className="block text-sm text-[#2F3E34] mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6B7D6D]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm text-[#2F3E34] mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6B7D6D]"
                placeholder="you@email.com"
              />
            </div>

            <div>
              <label className="block text-sm text-[#2F3E34] mb-2">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6B7D6D]"
                placeholder="Write your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#2F3E34] text-white py-4 rounded-full font-medium hover:bg-[#1f2a24] transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>

        {/* Map */}
        <div className="mt-16">
          <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white">
            <div className="aspect-[16/9] w-full">
              <iframe
                title="Green Bean Cafe Location"
                src="https://www.google.com/maps?q=Plot%2012,%20Wellness%20Street,%20Kampala,%20Uganda&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
