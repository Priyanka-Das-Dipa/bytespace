"use client";
import Image from "next/image";
import SideCard from "./SideCard";
import ReviewsSection from "./ReviewSection";
import LessonSection from "./LessonSection";
import AboutSection from "./AboutSection";
import { useState } from "react";

export default function CourseDetailsContent() {
  const [activeTab, setActiveTab] = useState<"about" | "lessons" | "review">(
    "about",
  );
  const tabs: { id: "about" | "lessons" | "review"; label: string }[] = [
    { id: "about", label: "About" },
    { id: "lessons", label: "Lessons" },
    { id: "review", label: "Reviews" },
  ];

  return (
    <>
      <section
        className="h-auto bg-primary px-6 text-white sm:h-auto"
        style={{
          backgroundImage:
            "linear-gradient(rgba(71, 130, 238, 0.52) 1px, transparent 1px), linear-gradient(90deg, rgba(71, 130, 238, 0.52) 1px, transparent 1px)",
          backgroundPosition: "0 -118px",
          backgroundSize: "120px 120px",
        }}
      >
        <div className="mx-auto max-w-[1200px]">
          {/* image and content */}
          <div className=" pt-[44px] py-5">
            <div className="text-left">
              <h1 className=" text-[36px] font-semibold leading-[1.2] tracking-[-0.035em] sm:text-heading-m text-[#F5F5F6]">
                Build Digital Asset: A Comprehensive Guide
              </h1>
              <p className="text-xl font-semibold pt-1">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
              <div className="flex items-center gap-2 mt-3">
                by <span className="text-secondary">purepearl studio</span>
              </div>
              <div className="flex flex-wrap items-center gap-3 mt-4">
                <button
                  className="flex h-8 items-center gap-2 rounded-full border border-[#CED0D3] bg-white px-4 text-label-s text-[#4B4C53] transition-colors hover:bg-shuttle-gray-50"
                  type="button"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 4H19.5V20H16.5V4ZM4.5 14H7.5V20H4.5V14ZM10.5 9H13.5V20H10.5V9Z"
                      fill="#003BE2"
                    />
                  </svg>

                  <span className="text-[#242528] font-medium text-base">
                    Intermediate
                  </span>
                </button>
                <button
                  className="flex h-8 items-center gap-2 rounded-full border border-[#CED0D3] bg-white px-4 text-label-s text-[#4B4C53] transition-colors hover:bg-shuttle-gray-50"
                  type="button"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.3096 5.5525L8.8396 0.7125C8.5496 -0.2375 7.2096 -0.2375 6.9296 0.7125L5.4496 5.5525H0.999597C0.0295973 5.5525 -0.370403 6.8025 0.419597 7.3625L4.0596 9.9625L2.6296 14.5725C2.3396 15.5025 3.4196 16.2525 4.1896 15.6625L7.8796 12.8625L11.5696 15.6725C12.3396 16.2625 13.4196 15.5125 13.1296 14.5825L11.6996 9.9725L15.3396 7.3725C16.1296 6.8025 15.7296 5.5625 14.7596 5.5625H10.3096V5.5525Z"
                      fill="#003BE2"
                    />
                  </svg>

                  <span className="text-[#242528] font-medium text-base">
                    4.8 (172 reviews)
                  </span>
                </button>
                <button
                  className="flex h-8 items-center gap-2 rounded-full border border-[#CED0D3] bg-white px-4 text-label-s text-[#4B4C53] transition-colors hover:bg-shuttle-gray-50"
                  type="button"
                >
                  <svg
                    width="22"
                    height="16"
                    viewBox="0 0 22 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.67 9.13C17.04 10.06 18 11.32 18 13V16H22V13C22 10.82 18.43 9.53 15.67 9.13Z"
                      fill="#003BE2"
                    />
                    <path
                      d="M14 8C16.21 8 18 6.21 18 4C18 1.79 16.21 0 14 0C13.53 0 13.09 0.0999998 12.67 0.24C13.5 1.27 14 2.58 14 4C14 5.42 13.5 6.73 12.67 7.76C13.09 7.9 13.53 8 14 8Z"
                      fill="#003BE2"
                    />
                    <path
                      d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 2C9.1 2 10 2.9 10 4C10 5.1 9.1 6 8 6C6.9 6 6 5.1 6 4C6 2.9 6.9 2 8 2Z"
                      fill="#003BE2"
                    />
                    <path
                      d="M8 9C5.33 9 0 10.34 0 13L0 16H16V13C16 10.34 10.67 9 8 9ZM14 14H2V13.01C2.2 12.29 5.3 11 8 11C10.7 11 13.8 12.29 14 13V14Z"
                      fill="#003BE2"
                    />
                  </svg>

                  <span className="text-[#242528] font-medium text-base">
                    199 Students
                  </span>
                </button>
              </div>
            </div>
            <div className="mt-10 flex flex-col md:flex-col lg:flex-row gap-6 sm:flex-row sm:items-start sm:justify-between">
              <Image
                src={"/images/lady.svg"}
                alt="Lady"
                width={700}
                height={500}
                className=""
              />
              <div className="relative z-20 w-full max-w-[340px] shrink-0 self-start lg:mb-[-370px]">
                <SideCard />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white px-6">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col lg:flex-row ">
            {/* Left column: tabs + active section */}
            <div className="flex-1 min-w-0">
              {/* Tabs with 20px gap */}
              <div className="flex flex-wrap items-center gap-5 pt-6 pb-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 py-4 text-sm font-semibold rounded-full transition-colors ${
                      activeTab === tab.id
                        ? "bg-secondary text-[#242528]"
                        : "bg-[#F5F5F6] text-[#4B4C53] hover:text-gray-700"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <div className="mt-4">
                {activeTab === "about" && <AboutSection />}
                {activeTab === "lessons" && <LessonSection />}
                {activeTab === "review" && <ReviewsSection />}
              </div>
            </div>

            {/* Right spacer – matches SideCard width so content never overlaps */}
            <div className="hidden lg:block w-full max-w-[340px] shrink-0" />
          </div>
        </div>
      </section>
    </>
  );
}
