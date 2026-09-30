import Image from "next/image";
import { keyPoints } from "../utilities/data/lessonData";

const sneakPeekImages = [
  { src: "/images/img1.svg", alt: "Sneak peek 1" },
  { src: "/images/img2.svg", alt: "Sneak peek 2" },
  { src: "/images/img3.svg", alt: "Sneak peek 3" },
  { src: "/images/img4.svg", alt: "Sneak peek 4" },
];

function CheckIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
        fill="#003BE2"
      />
    </svg>
  );
}

export default function AboutSection() {
  return (
    <section className="bg-white px-4 py-10 sm:py-12">
      <div className="max-w-[723px]">
        {/* Description */}
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
          Description
        </h2>

        <div className="mt-4 space-y-8 text-sm leading-relaxed text-[#4B4C53] font-medium sm:text-base">
          <p>
            Embark on an enlightening exploration into the world of digital
            creation with our comprehensive course, &quot;Build Digital Assets:
            A Comprehensive Guide.&quot; This transformative learning experience
            invites you to delve deep into the intricacies of crafting impactful
            digital content. From laying the groundwork with foundational
            concepts to mastering advanced techniques, this guide is
            meticulously curated to empower you with the skills essential for
            navigating the dynamic landscape of digital asset creation.
          </p>
          <p>
            In the initial modules, you&apos;ll establish a solid foundation by
            immersing yourself in the foundational concepts that form the
            backbone of digital asset creation. Understand the fundamental
            elements that constitute compelling digital content and gain
            proficiency in leveraging these elements to communicate effectively
            in the digital realm.
          </p>
          <p>
            As you progress through the course, you&apos;ll ascend to higher
            levels of expertise, delving into the nuances of design principles
            that drive impactful creations. Uncover the secrets behind effective
            visual communication, exploring color theory, typography, and layout
            strategies that elevate your digital assets to new heights. Engage
            in hands-on exercises that reinforce your understanding, allowing
            you to apply these principles in practical scenarios.
          </p>
        </div>

        {/* Sneak Peek */}
        <h2 className="mt-10 text-xl font-bold text-gray-900 sm:text-2xl">
          Sneak Peek
        </h2>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {sneakPeekImages.map((img, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden rounded-xl bg-gray-100"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, 180px"
              />
            </div>
          ))}
        </div>

        {/* Key Points */}
        <h2 className="mt-10 text-xl font-bold text-gray-900 sm:text-2xl">
          Key Points
        </h2>

        <ul className="mt-4 space-y-3 sm:space-y-3.5">
          {keyPoints.map((point) => (
            <li key={point.id} className="flex items-center gap-3">
              <CheckIcon />
              <span className="text-sm text-gray-700 sm:text-base">
                {point.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
