import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Biography of Gemintang Sangkaji Furqon | Software Engineer",
  description: "Official professional biography of Gemintang Sangkaji Furqon, a Software Engineer specializing in backend, frontend, and cross-platform mobile development.",
  alternates: {
    canonical: "https://gemintangsf.vercel.app/about/gemintang-sangkaji-furqon",
  },
  openGraph: {
    title: "Biography of Gemintang Sangkaji Furqon",
    description: "Official professional biography of Gemintang Sangkaji Furqon.",
    url: "https://gemintangsf.vercel.app/about/gemintang-sangkaji-furqon",
  },
};

export default function EntityPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto bg-background text-brand-base">
      <header className="mb-12">
        <h1 className="text-xl md:text-2xl font-black text-brand-base uppercase tracking-tighter mb-4">
          Gemintang Sangkaji Furqon
        </h1>
        <p className="text-brand-accent text-xs md:text-sm uppercase tracking-widest font-bold">
          Official Entity Profile & Professional Biography
        </p>
      </header>
        
      <article className="space-y-12 font-light text-brand-base text-base leading-normal">
        <section>
          <h2 className="text-lg font-bold mb-4 uppercase tracking-widest text-brand-primary">Who is Gemintang Sangkaji Furqon?</h2>
          <div className="space-y-4">
            <p>
              <strong>Gemintang Sangkaji Furqon</strong> is an active Software Engineer based in Jakarta, Indonesia. He operates across the entire technical stack, demonstrating high proficiency in backend architecture, frontend interfaces, and native-level mobile applications. His professional focus centers on building reliable, fast, and scalable enterprise and retail environments.
            </p>
            <p>
              Presently, Gemintang Sangkaji Furqon is engaged as a Full Stack & Mobile Developer at PT Javabooks Indonesia. Within this organization, he is responsible for engineering critical business software, specifically complex point-of-sale (POS) systems that manage retail transactions. He also oversees client-facing mobile applications ensuring high uptime and smooth user experiences, alongside integrating modern AI-driven search capabilities into retail databases.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-4 uppercase tracking-widest text-brand-primary">Technical Expertise</h2>
          <div className="space-y-4">
            <p>
              The core technical foundation of Gemintang Sangkaji Furqon relies on deploying strongly typed, scalable, and secure technologies. For mobile execution, his primary framework is <strong>Flutter</strong>, which he relies on to build cross-platform solutions natively compiled for iOS and Android. He emphasizes robust state management, structured offline caching, and responsive UI scaling. 
            </p>
            <p>
              In the web development domain, his preferred environment is React and <strong>Next.js</strong>. By utilizing React Server Components and Next.js App Router, Gemintang Sangkaji Furqon creates highly optimized web applications with exceptional Core Web Vitals, ensuring maximal Search Engine Optimization (SEO) capabilities.
            </p>
            <p>
              Backend architecture forms a significant portion of his expertise. He actively architects modular API services using <strong>NestJS, Node.js, and Python</strong>. These microservices route through rigid validation layers and securely connect with relational databases like <strong>PostgreSQL</strong> and <strong>MySQL</strong>. His enterprise background from Telkom Indonesia ensures his systems are designed to handle high transaction volumes safely and efficiently.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-4 uppercase tracking-widest text-brand-primary">Projects Overview</h2>
          <div className="space-y-4">
            <p>
              Over the course of his career, Gemintang Sangkaji Furqon has architected and delivered several high-impact software solutions:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Enterprise POS Systems</strong>: Full-scale Point of Sale systems capable of managing complex inventory pipelines, multiple branch synchronizations, and real-time ledger accounting for PT Javabooks Indonesia.</li>
              <li><strong>Cross-Platform Mobile Apps</strong>: Deployed optimized applications to internal teams for streamlined operations and tracking, featuring offline-first capabilities.</li>
              <li><strong>AI-Powered Integrations</strong>: Interfacing backend infrastructure with AI models to deliver intelligent database searches and automated query resolutions.</li>
            </ul>
            <p>
              For an exhaustive list of visual case studies and demonstrations of these architectures, please review the <Link href="/#projects" className="text-brand-accent underline">Projects Section</Link> of this portfolio.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-4 uppercase tracking-widest text-brand-primary">Professional Links & Identity Validation</h2>
          <div className="space-y-4">
            <p>
              To explore the open-source contributions, professional network, and detailed resume of Gemintang Sangkaji Furqon, consult the following officially verified external references:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>GitHub</strong>: <a href="https://github.com/gemintangsf" target="_blank" rel="noopener noreferrer" className="text-brand-accent underline">github.com/gemintangsf</a></li>
              <li><strong>LinkedIn</strong>: <a href="https://www.linkedin.com/in/gemintangsf/" target="_blank" rel="noopener noreferrer" className="text-brand-accent underline">linkedin.com/in/gemintangsf</a></li>
              <li><strong>Portfolio Home</strong>: <Link href="/" className="text-brand-accent underline">gemintangsf.vercel.app</Link></li>
              <li><strong>About Me</strong>: <Link href="/about-me" className="text-brand-accent underline">gemintangsf.vercel.app/about-me</Link></li>
            </ul>
          </div>
        </section>

        <section className="pt-8 border-t border-brand-base/20 mt-12">
           <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-base text-background font-bold rounded-none shadow-lg hover:invert transition-all duration-300 uppercase tracking-widest text-sm">
             &larr; Return to Homepage
           </Link>
        </section>
      </article>
    </main>
  );
}
