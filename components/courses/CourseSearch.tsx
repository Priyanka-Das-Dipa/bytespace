"use client";

import { useMemo, useState } from "react";
import { courses } from "../utilities/data/courseData";
import { FilterButton, PaginationArrow } from "./FilterPagination";
import CourseCard from "../landingPage/course/CourseCard";

const assetRoot = "/images";

const searchImages = [
  `${assetRoot}/course1.svg`,
  `${assetRoot}/course2.svg`,
  `${assetRoot}/course3.svg`,
  `${assetRoot}/course4.svg`,
  `${assetRoot}/course5.svg`,
  `${assetRoot}/course6.svg`,
];

const searchCategories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

const searchCourses = Array.from({ length: 3 }, (_, groupIndex) =>
  courses.map((course, courseIndex) => ({
    ...course,
    id: groupIndex * courses.length + course.id,
    image: searchImages[courseIndex],
  })),
).flat();

export default function CourseSearch() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Featured");
  const [currentPage, setCurrentPage] = useState(2);

  const visibleCourses = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return searchCourses.filter((course) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        course.title.toLowerCase().includes(normalizedQuery) ||
        course.author.toLowerCase().includes(normalizedQuery);
      const matchesCategory =
        selectedCategory === "Featured" ||
        course.categories.includes(selectedCategory);

      return matchesQuery && matchesCategory;
    });
  }, [query, selectedCategory]);

  return (
    <>
      <section
        className="h-[280px] bg-primary px-6 text-white sm:h-[242px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(71, 130, 238, 0.52) 1px, transparent 1px), linear-gradient(90deg, rgba(71, 130, 238, 0.52) 1px, transparent 1px)",
          backgroundPosition: "0 -118px",
          backgroundSize: "120px 120px",
        }}
      >
        <div className="mx-auto max-w-[1200px] pt-[44px] text-center">
          <h1 className="font-heading text-[36px] font-semibold leading-[1.2] tracking-[-0.035em] sm:text-heading-m text-[#F5F5F6]">
            Find Your Next Course
          </h1>

          <form
            className="mx-auto mt-6 flex max-w-[624px] flex-col gap-3 sm:flex-row sm:gap-4"
            onSubmit={(event) => event.preventDefault()}
            role="search"
          >
            <label className="flex h-[52px] flex-1 items-center gap-4 rounded-full bg-white px-6 text-[#82868E]">
              <span className="sr-only">Search courses</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7549 14.255H14.9649L14.6849 13.985C15.6649 12.845 16.2549 11.365 16.2549 9.755C16.2549 6.165 13.3449 3.255 9.75488 3.255C6.16488 3.255 3.25488 6.165 3.25488 9.755C3.25488 13.345 6.16488 16.255 9.75488 16.255C11.3649 16.255 12.8449 15.665 13.9849 14.685L14.2549 14.965V15.755L19.2549 20.745L20.7449 19.255L15.7549 14.255ZM9.75488 14.255C7.26488 14.255 5.25488 12.245 5.25488 9.755C5.25488 7.26501 7.26488 5.255 9.75488 5.255C12.2449 5.255 14.2549 7.26501 14.2549 9.755C14.2549 12.245 12.2449 14.255 9.75488 14.255Z"
                  fill="#82868E"
                />
              </svg>

              <input
                className="min-w-0 flex-1 bg-transparent text-body-l outline-none placeholder:text-[#82868E] py-4 sm:py-0"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search"
                type="search"
                value={query}
              />
            </label>

            <button
              className="flex h-[52px] bg-secondary items-center justify-center gap-2 rounded-full  px-6 text-label-l font-medium text-[#242528] sm:w-[146px]"
              type="button"
            >
              Courses
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.41 8.29504L12 12.875L16.59 8.29504L18 9.70504L12 15.705L6 9.70504L7.41 8.29504Z"
                  fill="#242528"
                />
              </svg>
            </button>
          </form>
        </div>
      </section>

      <section className="bg-white px-1 sm:px-6 pb-[72px] pt-[72px]" id="courses">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-4">
              <FilterButton icon="filter.svg" iconHeight={16} iconWidth={16}>
                Filter
              </FilterButton>
              <FilterButton icon="level.svg" iconHeight={16} iconWidth={15}>
                Level
              </FilterButton>
              <FilterButton icon="category.svg" iconHeight={20} iconWidth={19}>
                Category
              </FilterButton>
            </div>

            <FilterButton icon="relavent.svg" iconHeight={12} iconWidth={18}>
              Most relevant
            </FilterButton>
          </div>

          <div
            aria-label="Course categories"
            className="mt-8 flex flex-wrap gap-4"
          >
            {searchCategories.map((category) => {
              const selected = selectedCategory === category;

              return (
                <button
                  aria-pressed={selected}
                  className={`h-10 rounded-full px-4 text-label-s transition-colors ${
                    selected
                      ? "bg-secondary font-medium text-[#242528]"
                      : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-gray-100"
                  }`}
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  type="button"
                >
                  {category}
                </button>
              );
            })}
          </div>

          {visibleCourses.length > 0 ? (
            <div className="mt-20 grid justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
              {visibleCourses.map((course) => (
                <CourseCard course={course} key={course.id} />
              ))}
            </div>
          ) : (
            <div className="mt-20 grid min-h-[384px] place-items-center rounded-3xl border border-[#F5F5F6] text-center">
              <div>
                <p className="font-heading text-heading-xs font-semibold text-[#4B4C53]">
                  No courses found
                </p>
                <p className="mt-2 text-body-s text-gray-700">
                  Try another search or category.
                </p>
              </div>
            </div>
          )}

          <nav
            aria-label="Course result pages"
            className="mt-[72px] flex h-12 items-center justify-center gap-6"
          >
            <PaginationArrow
              direction="left"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
            />
            <div className="flex items-center gap-6">
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  aria-current={currentPage === page ? "page" : undefined}
                  className={`font-heading text-[20px] leading-7 ${
                    currentPage === page
                      ? "font-semibold text-gray-950"
                      : page < currentPage
                        ? "font-normal text-gray-200"
                        : "font-normal text-gray-950"
                  }`}
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  type="button"
                >
                  {page}
                </button>
              ))}
            </div>
            <PaginationArrow
              direction="right"
              disabled={currentPage === 5}
              onClick={() => setCurrentPage((page) => Math.min(5, page + 1))}
            />
          </nav>
        </div>
      </section>
    </>
  );
}
