import { Award, FolderOpen, MessageCircle, Video } from "lucide-react";
import Image from "next/image";

export default function SideCard() {
  return (
    <div className="bg-white border border-[#CED0D3] rounded-2xl shadow-xl overflow-hidden text-gray-900 sticky top-24 w-full sm:w-[412px] p-5">
      <div className="p-6">
        <h3 className="font-bold text-lg text-[#242528] mb-4">
          112 Lessons (24 hours)
        </h3>

        <ul className="space-y-3.5 mb-3">
          {[
            {
              number: "01",
              title: "Introduction to Digital Assets",
              duration: "12 mins",
            },
            {
              number: "02",
              title: "Design Principles for Impacts",
              duration: "21 mins",
            },
            {
              number: "03",
              title: "Advanced Techniques in Digital Creation",
              duration: "16 mins",
            },
          ].map((lesson) => (
            <li key={lesson.number} className="flex items-start gap-3 text-sm">
              <span className="flex-shrink-0 text-[#242528] font-medium w-6">
                {lesson.number}
              </span>
              <div className="flex-1 flex items-start justify-between gap-2">
                <p className="text-[#242528] leading-snug sm:w-[150px]">{lesson.title}</p>
                <span className="text-primary text-xs whitespace-nowrap mt-0.5">
                  {lesson.duration}
                </span>
              </div>
            </li>
          ))}
        </ul>

        <p className="text-sm text-[#4B4C53] mb-4">99 more videos</p>

        <p className="text-sm text-[#4B4C53] mb-4 leading-snug">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        <div className="mb-4">
          <span className="text-3xl font-bold text-primary">$25</span>
          <span className="text-gray-400 text-sm">/lifetime</span>
        </div>

        <button className="w-full py-3 bg-secondary hover:bg-secondary text-gray-900 font-semibold rounded-full transition-colors">
          Enroll Now
        </button>
      </div>

      {/* This course include */}
      <div className="px-6 pb-6">
        <h4 className="font-bold text-[#242528] mb-5">This course include</h4>
        <ul className="space-y-3.5">
          <li className="flex items-center gap-3 text-sm text-[#4B4C53]">
            <FolderOpen className="w-5 h-5 text-primary" /> Learning Resources
          </li>
          <li className="flex items-center gap-3 text-sm text-[#4B4C53]">
            <Video className="w-5 h-5 text-primary" /> Quality Lesson Videos
          </li>
          <li className="flex items-center gap-3 text-sm text-[#4B4C53]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 10H12V11.5H16V10Z" fill="#003BE2" />
              <path d="M16 13H12V14.5H16V13Z" fill="#003BE2" />
              <path
                d="M18 5H13V2C13 0.9 12.1 0 11 0L9 0C7.9 0 7 0.9 7 2V5H2C0.9 5 0 5.9 0 7L0 18C0 19.1 0.9 20 2 20H18C19.1 20 20 19.1 20 18V7C20 5.9 19.1 5 18 5ZM9 2H11V7H9V2ZM18 18H2V7H7C7 8.1 7.9 9 9 9H11C12.1 9 13 8.1 13 7H18V18Z"
                fill="#003BE2"
              />
              <path
                d="M7 13C7.82843 13 8.5 12.3284 8.5 11.5C8.5 10.6716 7.82843 10 7 10C6.17157 10 5.5 10.6716 5.5 11.5C5.5 12.3284 6.17157 13 7 13Z"
                fill="#003BE2"
              />
              <path
                d="M9.08 14.18C8.44 13.9 7.74 13.75 7 13.75C6.26 13.75 5.56 13.9 4.92 14.18C4.36 14.42 4 14.96 4 15.57V16H10V15.57C10 14.96 9.64 14.42 9.08 14.18Z"
                fill="#003BE2"
              />
            </svg>
            Certificate of Completion
          </li>
          <li className="flex items-center gap-3 text-sm text-[#4B4C53]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 12H7C7 7.03 11.03 3 16 3V5C12.13 5 9 8.13 9 12ZM16 9V7C13.24 7 11 9.24 11 12H13C13 10.34 14.34 9 16 9ZM5 2C5 0.89 4.11 0 3 0C1.89 0 1 0.89 1 2C1 3.11 1.89 4 3 4C4.11 4 5 3.11 5 2ZM9.45 2.5H7.45C7.21 3.92 5.99 5 4.5 5H1.5C0.67 5 0 5.67 0 6.5L0 9H6V6.74C7.86 6.15 9.25 4.51 9.45 2.5ZM17 15C18.11 15 19 14.11 19 13C19 11.89 18.11 11 17 11C15.89 11 15 11.89 15 13C15 14.11 15.89 15 17 15ZM18.5 16H15.5C14.01 16 12.79 14.92 12.55 13.5H10.55C10.75 15.51 12.14 17.15 14 17.74V20H20V17.5C20 16.67 19.33 16 18.5 16Z"
                fill="#003BE2"
              />
            </svg>
            Private Consultation
          </li>
        </ul>
      </div>

      {/* Instructor */}
      <div className="border-t border-t-2 border-[#CED0D3] px-6 py-5">
        <div className="flex items-center gap-3 mb-3">
          <Image
            src="/images/creator.svg"
            alt="Instructor"
            width={40}
            height={40}
          />
          <div>
            <p className="font-medium text-[#242528] text-sm">
              PurePearl Studio
            </p>
            <p className="text-xs text-[#4B4C53]">Professional Creator</p>
          </div>
        </div>
        <p className="text-xs text-[#4B4C53] mb-4">
          Ready to Dive In? Enroll Now and Start <br /> Building Your Digital
          Future!
        </p>
        <button className="py-2.5 px-4 border border-[#CED0D3] text-gray-700 font-medium rounded-full hover:bg-gray-50 text-sm">
          See Full Profile
        </button>
      </div>
    </div>
  );
}
