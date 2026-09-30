import SignInForm from "@/components/auth/SignInForm";
import Image from "next/image";
import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="auth-grid bg-primary">
      <div className="min-h-screen mx-auto relative overflow-hidden">
        <div className="relative z-10 min-h-screen flex flex-col max-w-6xl mx-auto px-6">
          {/* Logo – same horizontal alignment as content */}
          <div className="pt-6 lg:py-8">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo2.svg"
                alt="ByteSpace"
                width={40}
                height={40}
                className="object-cover"
              />
            </Link>
          </div>

          {/* Main content */}
          <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-5 py-12 lg:py-0">
            {/* LEFT SIDE */}
            <div className="flex-1 w-full max-w-lg lg:max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                Sign in with ease
              </h2>
              <p className="text-blue-100 text-base md:text-lg leading-relaxed max-w-md mb-10">
                Experience a seamless and efficient sign-in process that grants
                you instant access to a world of knowledge.
              </p>

              <Image
                src="/images/signupImg.svg"
                alt="Signup illustration"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>

            {/* RIGHT SIDE */}
            <div className="flex-1 w-full flex justify-center lg:justify-end items-center">
              <SignInForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
