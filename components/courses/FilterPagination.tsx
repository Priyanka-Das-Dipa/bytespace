import Image from "next/image";
import {
  FilterButtonProps,
  IconProps,
  PaginationArrowProps,
} from "../utilities/types/courseSearch.types";

export function FilterButton({
  children,
  icon,
  iconHeight,
  iconWidth,
}: FilterButtonProps) {
  return (
    <button
      className="flex h-12 items-center gap-2 rounded-full border border-[#CED0D3] bg-white px-4 text-label-s text-[#4B4C53] transition-colors hover:bg-shuttle-gray-50"
      type="button"
    >
      <SearchIcon file={icon} height={iconHeight} width={iconWidth} />
      {children}
    </button>
  );
}

export function PaginationArrow({
  direction,
  disabled,
  onClick,
}: PaginationArrowProps) {
  return (
    <button
      aria-label={`${direction === "left" ? "Previous" : "Next"} page`}
      className="grid h-12 w-14 place-items-center rounded-3xl border border-gray-200 bg-white px-4 py-3 text-gray-700 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      <span
        aria-hidden="true"
        className={`size-2.5 rotate-45 border-shuttle-gray-700 ${
          direction === "left"
            ? "border-b-2 border-l-2"
            : "border-r-2 border-t-2"
        }`}
      />
    </button>
  );
}

const assetRoot = "/images";

export function SearchIcon({ alt = "", file, height, width }: IconProps) {
  return (
    <Image
      alt={alt}
      height={height}
      src={`${assetRoot}/search/${file}`}
      width={width}
    />
  );
}
