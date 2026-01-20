import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
            <h1 className="text-9xl font-bold bg-gradient-to-r from-brand-accent to-brand-primary bg-clip-text text-transparent mb-4 animate-pulse">
                404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-base mb-6">
                Oops! Page Not Found
            </h2>
            <p className="text-gray-600 text-lg max-w-md mb-10 leading-relaxed">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            <Link
                href="/"
                className="px-8 py-3 rounded-full bg-brand-base text-white font-semibold hover:bg-brand-accent transition-all shadow-lg transform hover:scale-105 active:scale-95"
            >
                Back to Home
            </Link>
        </div>
    );
}
