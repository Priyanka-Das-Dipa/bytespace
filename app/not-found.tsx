import { Navbar } from "@/components/layout/Navbar";
import Link from "next/link";
// update path to your Navbar

export default function NotFound() {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-primary text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(71, 130, 238, 0.52) 1px, transparent 1px), linear-gradient(90deg, rgba(71, 130, 238, 0.52) 1px, transparent 1px)",
        backgroundSize: "120px 120px",
      }}
    >
      <Navbar />

      <main className="flex flex-1 flex-col items-center justify-center px-5 pb-20 pt-10 text-center">
        {/* Big 404 */}
        <h1
          className="font-heading text-[120px] font-bold leading-none tracking-[-0.04em] sm:text-[160px] md:text-[200px] lg:text-[240px]"
          style={{
            background: "linear-gradient(180deg, #E8FF4A 0%, #B8E000 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </h1>

        {/* Message */}
        <h2 className="mt-2 max-w-[600px] font-heading text-[28px] font-bold leading-[1.2] tracking-[-0.03em] text-white sm:text-[36px] md:text-[44px]">
          The page you are looking
          <br className="hidden sm:block" /> for doesn&apos;t exist
        </h2>

        <p className="mt-4 max-w-[400px] text-[14px] leading-relaxed text-white/70 sm:text-[15px]">
          Try to use a correct url or go back to homepage to start again
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-secondary px-8 text-[15px] font-semibold text-[#0A0A0A] transition-opacity hover:opacity-90 sm:h-[52px] sm:px-10"
        >
          Back to Home
        </Link>
      </main>
    </div>
  );
}
