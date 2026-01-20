import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      {/* Background moved to layout.tsx */}
      <h1 className="text-4xl md:text-6xl font-bold text-brand-base">
        Contact Me
      </h1>

      <p className="text-lg md:text-xl text-gray-600 max-w-xl">
        Let’s build something great together!
        Feel free to reach out using the form below or connect with me on social media.
      </p>

      <form className="mt-8 w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        />
        <button
          type="submit"
          className="w-full px-6 py-3 rounded-2xl bg-brand-base text-white font-medium hover:bg-brand-primary transform hover:scale-[1.02] transition-all shadow-lg"
        >
          Send Message
        </button>
      </form>

      <div className="mt-6">
        <Link href="/" className="text-brand-base hover:text-brand-primary font-medium transition-colors flex items-center gap-2">
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}
