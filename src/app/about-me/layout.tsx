import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Gemintang Sangkaji Furqon | Software Engineer",
  description: "Learn about Gemintang Sangkaji Furqon, a Software Engineer specializing in backend, frontend, and mobile development in Jakarta, Indonesia.",
  alternates: {
    canonical: "https://gemintangsf.vercel.app/about-me",
  },
  openGraph: {
    title: "About Gemintang Sangkaji Furqon | Software Engineer",
    description: "Learn about Gemintang Sangkaji Furqon, a Software Engineer specializing in backend, frontend, and mobile development.",
    url: "https://gemintangsf.vercel.app/about-me",
  },
};

export default function AboutMeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
