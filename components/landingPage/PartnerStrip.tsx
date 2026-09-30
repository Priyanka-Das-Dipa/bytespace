import Image from "next/image";

const partners = [
  { src: "/images/partner1.svg", width: 167, height: 41 },
  { src: "/images/partner2.svg", width: 168, height: 41 },
  { src: "/images/partner3.svg", width: 170, height: 41 },
  { src: "/images/partner4.svg", width: 170, height: 41 },
  { src: "/images/partner5.svg", width: 169, height: 42 },
];

export function PartnerStrip() {
  return (
    <section aria-label="Our partners" className="bg-[#F5F5F6]">
      <div className="mx-auto grid min-h-[200px] max-w-[1200px] grid-cols-2 place-items-center gap-x-8 gap-y-7 px-6 py-10 sm:grid-cols-3 lg:grid-cols-5 lg:px-0 lg:py-0">
        {partners.map((partner, index) => (
          <Image
            alt={`Partner ${index + 1}`}
            className="h-auto max-w-[140px] lg:max-w-none"
            height={partner.height}
            key={partner.src}
            src={partner.src}
            width={partner.width}
          />
        ))}
      </div>
    </section>
  );
}
