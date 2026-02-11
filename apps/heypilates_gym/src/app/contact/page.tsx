import { client } from "@/sanity/lib/client";
import { contactQuery } from "@/sanity/lib/queries";
import ContactForm from "../components/section/ContactForm";

export const metadata = {
  title: "Contact Us | Hey Pilates",
  description: "Get in touch with Hey Pilates. We'd love to hear from you!",
};

export default async function ContactPage() {
  const contactInfo = await client.fetch(contactQuery);

  return (
    <main>
      <ContactForm contactInfo={contactInfo} />
    </main>
  );
}
