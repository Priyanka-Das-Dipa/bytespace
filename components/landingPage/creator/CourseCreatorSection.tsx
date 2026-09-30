import Image from "next/image";

const STATS = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const FEATURES = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="mt-0.5 size-5 shrink-0 text-primary"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function CourseCreatorSection() {
  return (
    <section className="course-creator-background goverflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        {/* ── Block 1: Path to Growth ── */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <h2 className="font-heading text-[28px] font-bold leading-[1.2] tracking-[-0.03em] text-[#0F172A] sm:text-[36px] lg:text-[42px]">
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>
            <p className="mt-4 max-w-[420px] text-[15px] leading-relaxed text-[#64748B] sm:text-base">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            <div className="mt-8 flex flex-wrap gap-8 sm:gap-12">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="text-[28px] font-bold tracking-[-0.02em] text-primary sm:text-[32px]">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-sm text-[#94A3B8]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative order-1 mx-auto w-full max-w-[480px] lg:order-2 lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[4/3] w-full">
              <div className="absolute inset-0 overflow-hidden rounded-[24px]">
                <Image
                  src="/images/maleSVG.svg"
                  alt="Student learning with laptop"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Block 2: Create & Manage ── */}
        <div className=" mt-20 grid items-center gap-12 sm:mt-28 lg:mt-32 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto w-full max-w-[480px] lg:mx-0 lg:max-w-none">
            <Image
              src="/images/femaleSVG.svg"
              alt="Creator managing courses on tablet"
              width={480}
              height={600}
              className="h-auto w-full rounded-[24px]"
            />
          </div>
          <div>
            <h2 className="font-heading text-[28px] font-bold leading-[1.2] tracking-[-0.03em] text-[#0F172A] sm:text-[36px] lg:text-[42px]">
              Create & Manage
              <br />
              Courses Easily.
            </h2>
            <p className="mt-4 max-w-[400px] text-[15px] leading-relaxed text-[#64748B] sm:text-base">
              ByteSpace supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>

            <ul className="mt-6 space-y-3.5">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-[15px] font-medium text-[#0F172A] sm:text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
