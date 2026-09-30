import { DesktopArtwork, MobileArtwork } from "./HeroBanner";


export default function HeroSection() {
  return (
    <section className="relative isolate h-[760px] overflow-hidden text-white lg:h-[906px]">
      <DesktopArtwork />
      <MobileArtwork />

      <div className="relative z-40 mx-auto flex max-w-full flex-col items-center px-5 pt-[54px] text-center sm:px-8 lg:pt-[55px]">
        <h1 className="font-heading max-w-[1000px] text-[42px] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-[54px] lg:text-heading-l lg:scale-x-[1.05] lg:tracking-[-0.02em]">
          <span className="block">Get Access to Hundreds</span>
          <span className="block">Courses Available</span>
        </h1>
        <p className="mt-9 max-w-[850px] text-[14px] leading-6 text-white/90 sm:text-[16px] lg:mt-10">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <form
          action="#courses"
          className="mt-[58px] flex w-full max-w-[582px] flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <label className="flex h-[52px] flex-1 items-center gap-3 rounded-full bg-white px-6 py-4 sm:py-0 text-left shadow-sm">
            <span className="sr-only">Search courses</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7549 14.2549H14.9649L14.6849 13.9849C15.6649 12.8449 16.2549 11.3649 16.2549 9.75488C16.2549 6.16488 13.3449 3.25488 9.75488 3.25488C6.16488 3.25488 3.25488 6.16488 3.25488 9.75488C3.25488 13.3449 6.16488 16.2549 9.75488 16.2549C11.3649 16.2549 12.8449 15.6649 13.9849 14.6849L14.2549 14.9649V15.7549L19.2549 20.7449L20.7449 19.2549L15.7549 14.2549ZM9.75488 14.2549C7.26488 14.2549 5.25488 12.2449 5.25488 9.75488C5.25488 7.26488 7.26488 5.25488 9.75488 5.25488C12.2449 5.25488 14.2549 7.26488 14.2549 9.75488C14.2549 12.2449 12.2449 14.2549 9.75488 14.2549Z"
                fill="#82868E"
              />
            </svg>

            <input
              className="min-w-0 flex-1 bg-transparent text-[16px] text-[#202126] outline-none placeholder:text-[#8c909a]"
              name="q"
              placeholder="Course, topic, creator"
              type="search"
            />
          </label>
          <button
            className="bg-secondary h-[52px] rounded-full px-7 text-[16px] font-medium text-[#101515] transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
