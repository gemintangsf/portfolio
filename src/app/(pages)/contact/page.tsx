import type { Metadata } from "next";
import { ContactSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Contact | Gemintang Sangkaji Furqon | Software Engineer",
  description: "Get in touch with Gemintang Sangkaji Furqon for freelance opportunities, backend/frontend development, or mobile application projects.",
  alternates: {
    canonical: "https://gemintangsf.vercel.app/contact",
  },
};

export default function ContactPage() {
  return <ContactSection />;
}
