import FloatingCards from "@/components/auth/FloatingCards";
import SignupForm from "@/components/auth/SignupForm";
import Image from "next/image";

export default function SignupPage() {
  return (
    <main className=" bg-[#003BE2]">
      <div className="min-h-screen mx-auto relative overflow-hidden">
        <Image
          src="/images/logo2.svg"
          alt="grid"
          width={50}
          height={50}
          className="object-cover"
        />

        <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-5 px-6 py-12 lg:py-0 max-w-7xl mx-auto">
          {/* LEFT SIDE */}
          <div className="flex-1 w-full max-w-lg lg:max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              Sign up and come in
            </h2>
            <p className="text-blue-100 text-base md:text-lg leading-relaxed max-w-md mb-10">
              The registration process is straightforward, uncomplicated, and
              efficient, allowing users to sign up quickly, easily, and at no
              cost
            </p>

            <FloatingCards />
          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <SignupForm />
          </div>
        </div>
      </div>
    </main>
  );
}
