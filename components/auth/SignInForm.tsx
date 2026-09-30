"use client";
import { FormEvent, useState } from "react";
import {
  FormData,
  FormErrors,
} from "../utilities/interfaces/formdata.interface";
import { CheckCircle2, Eye, EyeOff, Loader2 } from "lucide-react";

export default function SignInForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setErrors({});

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrors({
          general: data.error || "Something went wrong. Please try again.",
        });
        return;
      }

      setIsSuccess(true);
      if (typeof window !== "undefined") {
        localStorage.setItem("bytespace_user", JSON.stringify(data.user));
      }
    } catch {
      setErrors({ general: "Network error. Please check your connection." });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSuccess) {
    return (
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl p-8 md:p-10 text-center">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-9 h-9 text-emerald-600" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          Welcome to ByteSpace!
        </h2>
        <p className="text-slate-600 mb-6">
          Your account has been created successfully.
          <br />
          You can now start exploring courses.
        </p>
        <button
          onClick={() => {
            setIsSuccess(false);
            setFormData({ fullName: "", email: "", password: "" });
          }}
          className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors"
        >
          Create another account
        </button>
      </div>
    );
  }
  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 md:p-10">
      <div className="mb-8">
        <p className="text-primary text-sm font-medium mb-1">Sign In</p>
        <h1 className="text-3xl md:text-[2rem] font-bold text-slate-900 leading-tight">
          Welcome Back
        </h1>
      </div>

      {errors.general && (
        <div className="mb-5 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600">
          {errors.general}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700 mb-1.5"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="designer@example.com"
            className={`w-full px-4 py-3 rounded-xl border bg-white text-slate-900 placeholder:text-slate-400 transition-all
              ${
                errors.email
                  ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                  : "border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              }`}
            disabled={isLoading}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-slate-700 mb-1.5"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
              placeholder="••••••••"
              className={`w-full px-4 py-3 pr-12 rounded-xl border bg-white text-slate-900 placeholder:text-slate-400 transition-all
                ${
                  errors.password
                    ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                    : "border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                }`}
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              tabIndex={-1}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1.5 text-xs text-red-500">{errors.password}</p>
          )}
        </div>

        {/* Submit */}
        <div className="flex justify-end mt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="py-3 px-6 bg-lime-400 hover:bg-lime-500 active:bg-lime-600 text-slate-900 font-semibold rounded-full transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Creating account...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </div>

        {/* Divider + Social + New user */}
        <div className="mt-6">
          {/* or divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-sm text-slate-400">or</span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          {/* Social buttons */}
          <div className="flex items-center justify-center gap-4 my-12">
            <button
              type="button"
              className="w-12 h-12 rounded-2xl border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-50 transition-colors shadow-sm"
              aria-label="Sign in with Facebook"
            >
              {/* Facebook icon */}
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36.6668 19.9999C36.6668 10.7952 29.2049 3.33325 20.0002 3.33325C10.7954 3.33325 3.3335 10.7952 3.3335 19.9999C3.3335 28.3187 9.42826 35.2138 17.396 36.4641V24.8176H13.1642V19.9999H17.396V16.328C17.396 12.151 19.8842 9.84366 23.6912 9.84366C25.5147 9.84366 27.422 10.1692 27.422 10.1692V14.2707H25.3204C23.25 14.2707 22.6043 15.5555 22.6043 16.8735V19.9999H27.2267L26.4878 24.8176H22.6043V36.4641C30.5721 35.2138 36.6668 28.3187 36.6668 19.9999Z"
                  fill="black"
                />
              </svg>
            </button>

            <button
              type="button"
              className="w-12 h-12 rounded-2xl border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-50 transition-colors shadow-sm"
              aria-label="Sign in with Google"
            >
              {/* Google icon */}
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.9585 20.3749C35.9585 19.2777 35.8613 18.236 35.6946 17.2221H20.0002V23.486H28.9863C28.5835 25.5416 27.4029 27.2777 25.6529 28.4583V32.6249H31.0141C34.1529 29.7221 35.9585 25.4444 35.9585 20.3749Z"
                  fill="black"
                />
                <path
                  d="M20.0002 9.93047C22.4585 9.93047 24.6529 10.7777 26.3891 12.4305L31.1391 7.68048C28.2641 4.98603 24.5002 3.33325 20.0002 3.33325C13.4863 3.33325 7.86127 7.08326 5.12516 12.5277L10.6529 16.8194C11.9724 12.861 15.6529 9.93047 20.0002 9.93047Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.0002 36.6666C13.4863 36.6666 7.86127 32.9166 5.12516 27.4721L10.6529 23.1805C11.9724 27.1388 15.6529 30.0694 20.0002 30.0694C22.2502 30.0694 24.1529 29.4583 25.6529 28.4583L31.0141 32.6249C28.2641 35.1666 24.5002 36.6666 20.0002 36.6666ZM10.6529 16.8194V12.5277H5.12516L10.6529 16.8194Z"
                  fill="black"
                />
                <path
                  d="M5.12516 23.1805H10.6529C10.3057 22.1805 10.1252 21.111 10.1252 19.9999C10.1252 18.8888 10.3196 17.8194 10.6529 16.8194L5.12516 12.5277C3.98627 14.7777 3.3335 17.3055 3.3335 19.9999C3.3335 22.6944 3.98627 25.2221 5.12516 27.4721V23.1805Z"
                  fill="black"
                />
                <path
                  d="M10.6529 23.1805H5.12516V27.4721L10.6529 23.1805Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>

          {/* New user link */}
          <p className="text-center text-sm text-slate-500">
            New user?{" "}
            <a
              href="/signup"
              className="text-primary font-medium hover:underline underline-offset-2"
            >
              Create an account
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
