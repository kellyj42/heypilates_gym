// components/layout/Footer.tsx

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2E2A26] text-[#F5F3EE] mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <div className="mb-4">
            <Image
              src="/gb.JPG.jpeg"
              alt="Green Bean"
              width={140}
              height={36}
              className="h-20 w-52 object-cover"
            />
          </div>
          <p className="text-sm text-[#A3AD5F]">
            Structured Nutrition. Sustainable Results.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-medium">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>Meal Plans</li>
            <li>Programs</li>
            <li>Coaching</li>
            <li>Order</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-medium">Contact</h4>
          <p className="text-sm">Kampala, Uganda</p>
          <p className="text-sm">WhatsApp Ordering Available</p>
        </div>
      </div>

      <div className="border-t border-[#5B544D] py-6 text-center text-sm">
        © 2026 Green Bean. All rights reserved.
      </div>
    </footer>
  );
}
