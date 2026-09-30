import Image from "next/image";
import { courses } from "../utilities/data/courseData";

export const creatorCourses = courses;
export const categories = Array.from(
  new Set(creatorCourses.flatMap((course) => course.categories)),
).sort();

type SelectControlProps = {
  icon: string;
  label: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
  value: string;
};

export function SelectControl({
  icon,
  label,
  onChange,
  options,
  value,
}: SelectControlProps) {
  return (
    <label className="relative flex h-12 items-center gap-2 rounded-full border border-[#CED0D3] bg-white px-4 text-label-s text-shuttle-gray-700 transition-colors hover:bg-shuttle-gray-50">
      <Image alt="" height={18} src={`/images/search/${icon}`} width={18} />
      <span>{label}</span>
      <select
        aria-label={label}
        className="absolute inset-0 cursor-pointer appearance-none rounded-full opacity-0"
        onChange={(event) => onChange(event.target.value)}
        value={value}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
