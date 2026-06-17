export const SITE_CONFIG = {
  name: "Gemintang Sangkaji Furqon",
  shortName: "Gemintang",
  role: "Software Engineer",
  title: "Gemintang – Software Engineer | Gemintang Sangkaji Furqon",
  description: "Gemintang (Gemintang Sangkaji Furqon) is a software engineer specializing in Backend, Frontend, and Mobile Development.",
  url: "https://gemintangsf.vercel.app",
  location: "Jakarta, Indonesia",
  email: "gemintangsfurqon@gmail.com",
  phone: "+62 821-1839-7901",
  resumeUrl: "https://drive.google.com/file/d/1pM1gkkSRh9u7QdJRbPwICaRId_3yLnb8/view?usp=sharing",
  googleVerification: "V4LXIZhcFBbe-hon_g9EleuX573WoTVY40LlsHLGgmI",
};

export const SOCIAL_LINKS = {
  github: "https://github.com/gemintangsf",
  linkedin: "https://www.linkedin.com/in/gemintangsf/",
  email: `mailto:${SITE_CONFIG.email}`,
  phone: `tel:${SITE_CONFIG.phone.replace(/\s+/g, "").replace(/-/g, "")}`,
};

export const NAVIGATION_LINKS = [
  { name: "Home", href: "home" },
  { name: "About", href: "about-me" },
  { name: "Portfolio", href: "projects" },
  { name: "Contact", href: "contact" },
];
