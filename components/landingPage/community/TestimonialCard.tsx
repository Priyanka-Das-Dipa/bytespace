
import { Testimonial } from "@/components/utilities/types/testimonial.types";
import Image from "next/image";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { name, role, quote, avatar } = testimonial;

  return (
    <article className="flex h-full flex-col rounded-3xl bg-white p-7 shadow-card sm:p-8">
      <Image
        src={avatar.src}
        alt={avatar.alt}
        width={72}
        height={72}
        className="size-16 rounded-full object-cover sm:size-20"
      />

      <header className="mt-5">
        <h3 className="text-lg font-bold tracking-tight text-fg">{name}</h3>
        <p className="mt-0.5 text-sm font-medium text-accent">{role}</p>
      </header>

      <blockquote className="mt-5 text-pretty text-base leading-relaxed text-muted">
        <p>&ldquo;{quote}&rdquo;</p>
      </blockquote>
    </article>
  );
}
