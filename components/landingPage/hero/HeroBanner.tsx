import Image from "next/image";
import CourseCardHero from "./CourseCardHero";
import ProgressCardHero from "./ProgressCardHero";
import StudentsCardHero from "./StudentCardHero";

export function DesktopArtwork() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block"
    >
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-1/2 w-full -translate-x-1/2"
      >
        <Image
          alt=""
          className="absolute bottom-0 left-[145px] z-10"
          height={442}
          priority
          src="/images/halfCircle.svg"
          width={1149}
        />
        <Image
          alt=""
          className="absolute bottom-0 left-[359px] z-20"
          height={515}
          priority
          src="/images/personSVG.svg"
          width={722}
        />
        {/* correct */}
        <Image
          alt=""
          className="absolute left-0 top-[103px] z-20"
          height={387}
          src="/images/leftSVG.svg"
          width={267}
        />
        <Image
          alt=""
          className="absolute right-0 top-[92px] z-20"
          height={372}
          src="/images/rightTop.svg"
          width={213}
        />
        <Image
          alt=""
          className="absolute left-[182px] top-[356px] z-20"
          height={176}
          src="/images/whitesquiggle.svg"
          width={177}
        />
        <Image
          alt=""
          className="absolute left-[1126px] top-[553px] z-20"
          height={332}
          src="/images/whitesquiggle.svg"
          width={317}
        />
        <Image
          alt=""
          className="absolute left-[15px] top-[572px] z-20"
          height={343}
          src="/images/whiteCircle.svg"
          width={346}
        />
        <Image
          alt=""
          className="absolute left-[1105px] top-[346px] z-20"
          height={189}
          src="/images/whiteCorn.svg"
          width={190}
        />
        <CourseCardHero />
        <ProgressCardHero />
        <StudentsCardHero />
      </div>
    </div>
  );
}

export function MobileArtwork() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[350px] overflow-hidden lg:hidden"
    >
      <Image
        alt=""
        className="absolute bottom-0 left-1/2 h-auto w-[720px] max-w-none -translate-x-1/2"
        height={442}
        src="/images/halfCircle.svg"
        width={1149}
      />
      <Image
        alt=""
        className="absolute bottom-[-12px] left-1/2 h-auto w-[490px] max-w-none -translate-x-1/2"
        height={515}
        priority
        src="/images/personSVG.svg"
        width={722}
      />
    </div>
  );
}
