import type { Metadata } from "next";
import { ServicesSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Services | Gemintang Sangkaji Furqon | Software Engineer",
  description: "Explore the professional services offered by Gemintang Sangkaji Furqon, including front-end, back-end, mobile app development, and system analysis.",
  alternates: {
    canonical: "https://gemintangsf.vercel.app/services",
  },
};

export default function ServicesPage() {
  return <ServicesSection />;
}
