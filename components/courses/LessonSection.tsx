import { modules } from "../utilities/data/lessonData";

type LessonSectionProps = {
  progress?: number;
};

function PlayIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="30"
      height="20"
      viewBox="0 0 30 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 3.33333V16.6667H3.33333V3.33333H20ZM21.6667 0L1.66667 0C0.75 0 0 0.75 0 1.66667L0 18.3333C0 19.25 0.75 20 1.66667 20H21.6667C22.5833 20 23.3333 19.25 23.3333 18.3333V12.5L30 19.1667V0.833333L23.3333 7.5V1.66667C23.3333 0.75 22.5833 0 21.6667 0Z"
        fill="#242528"
      />
    </svg>
  );
}

export default function LessonSection({ progress = 55 }: LessonSectionProps) {
  return (
    <section className="bg-white px-4 py-10 sm:py-12">
      <div className="max-w-[723px]">
        {/* Header */}
        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
          Explore the Modules
        </h2>
        <p className="mt-2 text-sm leading-relaxed font-medium text-[#4B4C53] sm:text-base">
          Immerse yourself in the course content as we break down each module
          into comprehensive lessons, providing practical insights and hands-on
          experiences.
        </p>

        {/* Lesson List */}
        <h3 className="mt-8 text-base font-bold text-gray-900 sm:text-lg">
          Lesson List
        </h3>

        <ul className="mt-4 space-y-5 sm:space-y-12">
          {modules.map((mod) => (
            <li key={mod.id} className="flex items-start gap-3 sm:gap-4">
              <div className="mt-0.5 flex h-16 w-16 shrink-0 items-center justify-center rounded-[24px] bg-secondary sm:h-16 sm:w-16">
                <PlayIcon className="h-6 w-6 text-white sm:h-5 sm:w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-[#242528] sm:text-base">
                  {mod.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#4B4C53] sm:text-base font-medium">
                  {mod.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Lesson Content */}
        <h3 className="mt-10 text-base font-semibold text-[#242528] sm:text-lg">
          Lesson Content
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#4B4C53] sm:text-base">
          Engage with each lesson through captivating video content, detailed
          textual explanations, and interactive elements. Download resources,
          complete assignments, and test your understanding with quizzes.
        </p>

        {/* Lesson Progress Tracking */}
        <h3 className="mt-10 text-base font-semibold text-[#242528] sm:text-xl">
          Lesson Progress Tracking
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-[#4B4C53] sm:text-base">
          Witness your growth as you complete lessons, with an intuitive
          progress tracking feature guiding you through your learning journey.
        </p>

        {/* Progress card */}
        <div className="mt-5 rounded-2xl border border-gray-200 bg-white p-4 sm:p-5">
          <p className="text-sm font-medium text-[#242528] py-5">
            Learning Progress
          </p>
          <p className="text-sm font-bold text-[#242528] sm:text-4xl">
            {progress}%
          </p>

          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-[#CED0D3] sm:h-2">
            <div
              className="h-full rounded-full bg-[#D4FB20] transition-all duration-500"
              style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
