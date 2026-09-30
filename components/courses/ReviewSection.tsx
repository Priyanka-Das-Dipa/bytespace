"use client";
import { useMemo, useState } from "react";
import { RatingFilter } from "../utilities/types/review.types";
import { Star } from "lucide-react";
import { reviews } from "../utilities/data/review";
import StarIcon from "./StarIcon";
import Image from "next/image";

const RATING_COUNTS: Record<1 | 2 | 3 | 4 | 5, number> = {
  5: 720,
  4: 120,
  3: 21,
  2: 12,
  1: 16,
};

const TOTAL_REVIEWS = Object.values(RATING_COUNTS).reduce((a, b) => a + b, 0);
const AVERAGE_RATING = 4.7;

function StarRow({ count, size = 16 }: { count: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          style={{ width: size, height: size }}
          className={
            i < count
              ? "fill-gray-800 text-gray-800"
              : "fill-gray-200 text-gray-200"
          }
        />
      ))}
    </div>
  );
}

const FILTER_TABS: { label: string; value: RatingFilter }[] = [
  { label: "All rating", value: "all" },
  { label: "5", value: 5 },
  { label: "4", value: 4 },
  { label: "3", value: 3 },
  { label: "2", value: 2 },
  { label: "1", value: 1 },
];

export default function ReviewsSection() {
  const [activeFilter, setActiveFilter] = useState<RatingFilter>("all");

  const filteredReviews = useMemo(() => {
    if (activeFilter === "all") return reviews;
    return reviews.filter((r) => r.rating === activeFilter);
  }, [activeFilter]);

  return (
    <section className="bg-white py-12 ">
      <div className=" max-w-[723px]">
        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-900">
          What Learners Are Saying
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-500">
          Discover what our learners have to say about their experience with
          &apos;Build Digital Assets: A Comprehensive Guide&apos;. Read reviews
          and ratings from individuals who have embarked on the transformative
          journey of mastering digital asset creation.
        </p>

        {/* Rating summary card */}
        <div className="mt-8 flex flex-col gap-6 rounded-2xl border border-gray-100 bg-gray-50/80 p-5 sm:flex-row sm:items-center sm:gap-10">
          {/* Score badge */}
          <div className="flex shrink-0 flex-col items-center justify-center rounded-xl bg-secondary px-6 py-5">
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
              Rating
            </span>
            <span className="mt-1 text-4xl font-bold text-gray-900">
              {AVERAGE_RATING}
            </span>
          </div>

          {/* Distribution bars */}
          <div className="flex flex-1 flex-col gap-2">
            {([5, 4, 3, 2, 1] as const).map((stars) => {
              const count = RATING_COUNTS[stars];
              const pct = Math.round((count / TOTAL_REVIEWS) * 100);
              return (
                <div key={stars} className="flex items-center gap-3">
                  <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-secondary  transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <StarIcon count={stars} size={14} />
                  <span className="w-8 text-right text-xs tabular-nums text-gray-500">
                    {count}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Individual Reviews */}
        <h3 className="mt-10 text-lg font-bold text-gray-900">
          Individual Reviews:
        </h3>

        {/* Filter tabs */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {FILTER_TABS.map((tab) => {
            const isActive = activeFilter === tab.value;
            return (
              <button
                key={String(tab.value)}
                type="button"
                onClick={() => setActiveFilter(tab.value)}
                className={`flex h-9 items-center rounded-full gap-2 px-4 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#000000] bg-secondary font-medium"
                    : "border-gray-200 bg-[#F5F5F6] text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                {tab.value !== "all" && (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0"
                  >
                    <path
                      d="M12.43 8L10 0L7.57 8H0L6.18 12.41L3.83 20L10 15.31L16.18 20L13.83 12.41L20 8H12.43Z"
                      fill={isActive ? "#000000" : "#9CA3AF"}
                    />
                  </svg>
                )}
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Review list */}
        <div className="mt-6 space-y-4">
          {filteredReviews.length === 0 ? (
            <p className="py-10 text-center text-sm text-gray-400">
              No reviews with this rating yet.
            </p>
          ) : (
            filteredReviews.map((review) => (
              <article
                key={review.id}
                className="rounded-2xl border border-[#CED0D3] bg-white p-5 sm:p-7 md:p-10 lg:p-12"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      width={40}
                      height={40}
                      className="h-10 w-10 shrink-0 rounded-full object-cover"
                    />

                    <div className="min-w-0">
                      <p className="truncate text-base font-semibold text-[#242528] sm:text-lg">
                        {review.name}
                      </p>

                      <p className="text-sm text-[#4B4C53] sm:text-base">
                        {review.role}
                      </p>
                    </div>
                  </div>

                  <span className="shrink-0 text-xs text-gray-400 sm:text-right">
                    {review.date}
                  </span>
                </div>

                <div className="mt-4 sm:mt-5">
                  <StarIcon count={review.rating} size={16} />
                </div>

                <p className="mt-4 text-sm leading-7 text-[#4B4C53] sm:mt-5 sm:text-base sm:leading-relaxed">
                  {review.comment}
                </p>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
