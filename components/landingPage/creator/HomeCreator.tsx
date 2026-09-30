import Image from "next/image";
import Link from "next/link";

export default function HomeCreator() {
  return (
    <section className="relative overflow-hidden bg-[#0047FF]">
      {/* Background artwork – designed at 1440×804 */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/background.svg"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[420px] max-w-[900px] flex-col items-center justify-center px-5 py-16 text-center sm:min-h-[520px] sm:px-8 sm:py-20 lg:min-h-[640px] lg:py-24">
        <h2 className="font-heading text-[28px] font-bold leading-[1.15] tracking-[-0.03em] text-white sm:text-[40px] md:text-[48px] lg:text-[56px]">
          Unlock Your Potential as a
          <br className="hidden sm:block" /> Creator with ByteSpace
        </h2>

        <p className="mt-5 max-w-[964px] text-[14px] leading-relaxed text-white/90 sm:mt-6 sm:text-[16px] md:text-[17px]">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <Link
          href="/register"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-secondary px-8 text-[15px] font-semibold text-[#0A0A0A] transition-opacity hover:opacity-90 sm:mt-10 sm:h-[52px] sm:px-10 sm:text-base"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
}
