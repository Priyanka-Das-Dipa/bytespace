import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      <Image
        src="/images/logo.svg"
        alt="Bytespace Logo"
        width={100}
        height={24}
      />
      Navbar
    </div>
  );
}
