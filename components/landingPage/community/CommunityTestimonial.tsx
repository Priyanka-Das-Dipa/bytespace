import { communitySection } from "@/components/utilities/data/tastimonials";
import { TestimonialCard } from "./TestimonialCard";

export function CommunityTestimonials() {
  const { heading, description, testimonials } = communitySection;

  return (
    <section
      aria-labelledby="community-heading"
      className="relative overflow-hidden testimonials-background border-b border-[#CED0D3] text-[#4F4F4F]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 "
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
          <h2
            id="community-heading"
            className="max-w-xl text-balance text-4xl font-extrabold tracking-tight text-fg sm:text-5xl lg:leading-tight"
          >
            {heading}
          </h2>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted lg:justify-self-end lg:text-lg lg:leading-8">
            {description}
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id} className="h-full">
              <TestimonialCard testimonial={testimonial} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
