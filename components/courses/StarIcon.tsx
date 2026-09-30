type StarIconProps = {
  count?: number;
  size?: number;
  className?: string;
  filledColor?: string;
  emptyColor?: string;
};

export default function StarIcon({
  count = 5,
  size = 16,
  className = "",
  filledColor = "#4B4C53",
  emptyColor = "#E5E7EB",
}: StarIconProps) {
  const filled = Math.min(5, Math.max(0, Math.round(count)));

  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M12.43 8L10 0L7.57 8H0L6.18 12.41L3.83 20L10 15.31L16.18 20L13.83 12.41L20 8H12.43Z"
            fill={i < filled ? filledColor : emptyColor}
          />
        </svg>
      ))}
    </div>
  );
}