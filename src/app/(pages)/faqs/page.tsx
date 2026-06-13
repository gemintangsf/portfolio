import type { Metadata } from "next";
import { FAQSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Gemintang Sangkaji Furqon | Software Engineer",
  description: "Find answers to common questions about Gemintang Sangkaji Furqon's development expertise, freelance services, tech stack, and rates.",
  alternates: {
    canonical: "https://gemintangsf.vercel.app/faqs",
  },
};

export default function FAQPage() {
  return <FAQSection />;
}