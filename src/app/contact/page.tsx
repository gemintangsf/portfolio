import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      {/* Background moved to layout.tsx */}
      <div className="inline-flex px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-base text-sm font-medium items-center gap-2 mb-6 backdrop-blur-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
        </span>
        Contact Me
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-brand-base">
        Contact Me
      </h1>

      <p className="text-lg md:text-xl text-gray-600 max-w-xl">
        Let’s build something great together!
        Feel free to reach out using the form below or connect with me on social media.
      </p>

      <form
        action="https://formsubmit.co/gemintangsfurqon@gmail.com"
        method="POST"
        className="mt-8 w-full max-w-md space-y-4"
      >
        {/* Anti-spam honeypot (optional but good) */}
        <input type="text" name="_honey" style={{ display: "none" }} />

        {/* Disable Captcha to maintain clean UI */}
        <input type="hidden" name="_captcha" value="false" />

        {/* Redirect back to this page after submit (Optional, remove if you want default success page) */}
        {/* <input type="hidden" name="_next" value="http://localhost:3000/contact" /> */}

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          required
          className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        />
        <button
          type="submit"
          className="w-full px-6 py-3 rounded-2xl bg-brand-base text-white font-medium hover:bg-brand-primary transform hover:scale-[1.02] transition-all shadow-lg"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
