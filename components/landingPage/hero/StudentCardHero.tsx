import Image from "next/image";

const avatars = Array.from(
  { length: 7 },
  (_, index) => `/avater/ava${index + 1}.svg`,
);

type StudentsCardProps = {
  className?: string;
};

export default function StudentsCardHero({
  className = "left-[328px] top-[719px]",
}: StudentsCardProps) {
  return (
    <div
      className={`absolute z-30 w-[258px] rounded-[16px] bg-white px-4 py-4 text-[#202126] shadow-[0_8px_28px_rgba(29,40,67,0.08)] ${className}`}
    >
      <p className="text-[16px] font-medium leading-5">Happy Students</p>
      <p className="text-[12px] text-[#858995]">
        4.5 (240) <span className="text-secondary">★</span>
      </p>
      <div className="mt-2 flex items-center">
        {avatars.map((avatar, index) => (
          <Image
            alt=""
            className={`size-[38px] rounded-full border-2 border-white object-cover ${index === 0 ? "" : "-ml-3.5"}`}
            height={43}
            key={avatar}
            src={avatar}
            width={43}
          />
        ))}
        <span className="bg-secondary/90 -ml-3.5 grid size-[43px] shrink-0 place-items-center rounded-full border-2 border-white text-[12px] font-semibold">
          2K+
        </span>
      </div>
    </div>
  );
}
