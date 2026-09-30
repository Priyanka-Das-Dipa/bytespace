import { learningPaths } from "@/components/utilities/data/learningData";
import { LearningPathCard } from "./LearningPathCard";



export function LearningPaths() {
  return (
    <section className="bg-white px-6 py-[120px]" id="learning-paths">
      <div className="mx-auto max-w-full">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-[#040819] sm:text-[40px]">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="text-body-l text-[#82868E] mx-auto mt-4 max-w-[917px] text-shuttle-gray-400">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your potential
            and explore our carefully curated categories.
          </p>
        </div>

        <div className="mt-[72px] grid grid-cols-2 justify-center gap-4 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-[repeat(6,167px)] xl:gap-10">
          {learningPaths.map((path) => (
            <LearningPathCard key={path.title} path={path} />
          ))}
        </div>
      </div>
    </section>
  );
}
