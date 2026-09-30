

export default function CourseSearch() {
  return (
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
          //   onSubmit={(event) => event.preventDefault()}
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
              className="min-w-0 flex-1 bg-transparent text-body-l outline-none placeholder:text-[#82868E]"
              //   onChange={(event) => setQuery(event.target.value)}
              placeholder="Search"
              type="search"
              //   value={query}
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
  );
}
