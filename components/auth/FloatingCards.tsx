"use client";

import { Star } from "lucide-react";

export default function FloatingCards() {
  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0 h-[480px]">
      {/* Main Course Card */}
      <div className="absolute top-8 left-4 right-8 z-20 animate-float">
        <div className="bg-white rounded-2xl shadow-float overflow-hidden">
          <div className="relative h-36 bg-gradient-to-br from-slate-900 to-slate-800 p-3">
            <div className="flex gap-2 h-full">
              <div className="flex-1 bg-slate-800/80 rounded-lg p-2 flex flex-col justify-end">
                <div className="flex items-end gap-1 h-16">
                  {[40, 65, 45, 80, 55, 90, 70, 50].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-blue-400 rounded-t-sm opacity-80"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="flex-1 bg-slate-800/80 rounded-lg p-2 flex items-center justify-center">
                <div className="w-full h-20 relative">
                  <svg viewBox="0 0 100 40" className="w-full h-full">
                    <polyline
                      fill="none"
                      stroke="#60a5fa"
                      strokeWidth="2"
                      points="0,30 15,25 30,28 45,15 60,20 75,10 90,18 100,8"
                    />
                    <polyline
                      fill="none"
                      stroke="#34d399"
                      strokeWidth="1.5"
                      strokeDasharray="3,2"
                      points="0,35 20,32 40,30 60,25 80,22 100,15"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full border-[6px] border-yellow-400 opacity-90" />
          </div>

          <div className="p-4">
            <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                17 Lessons
              </span>
              <span>2 hours 16 mins</span>
              <span>89 Comments</span>
            </div>

            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-slate-900 text-[15px] leading-tight">
                  the Power of Big Data
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  by{" "}
                  <span className="text-blue-600 font-medium">
                    purepearl studio
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-1 text-sm font-semibold text-slate-800 shrink-0">
                4.5{" "}
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              </div>
            </div>

            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-[11px] font-medium text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Beginner
                </span>
                <div className="flex -space-x-1.5">
                  {[
                    "bg-rose-400",
                    "bg-amber-400",
                    "bg-sky-400",
                    "bg-violet-400",
                  ].map((c, i) => (
                    <div
                      key={i}
                      className={`w-6 h-6 rounded-full border-2 border-white ${c}`}
                    />
                  ))}
                </div>
                <span className="text-[11px] text-slate-500 font-medium">
                  26+
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Card */}
      <div className="absolute top-28 -left-2 w-56 z-10 animate-float-delayed opacity-95">
        <div className="bg-white rounded-xl shadow-card p-3 border border-slate-100">
          <div className="h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg mb-2 flex items-center justify-center">
            <div className="text-white text-xs font-medium opacity-80">
              Digital Skills
            </div>
          </div>
          <h4 className="font-semibold text-slate-800 text-sm leading-tight">
            Build Digital
          </h4>
          <p className="text-[11px] text-slate-500 mt-0.5">
            by purepearl studi
          </p>
          <div className="flex items-center justify-between mt-2">
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-slate-100 text-[10px] font-medium text-slate-600">
              <span className="w-1 h-1 rounded-full bg-emerald-500" />
              Beginner
            </span>
            <span className="text-sm font-bold text-blue-600">$25</span>
          </div>
          <div className="flex items-center gap-1 mt-1.5">
            <div className="flex -space-x-1">
              {["bg-pink-400", "bg-cyan-400", "bg-lime-400"].map((c, i) => (
                <div
                  key={i}
                  className={`w-5 h-5 rounded-full border-2 border-white ${c}`}
                />
              ))}
            </div>
            <span className="text-[10px] text-slate-500">20+</span>
          </div>
          <p className="text-[10px] text-slate-400 mt-1">$25/lifetime</p>
        </div>
      </div>

      {/* Happy Students Card */}
      <div className="absolute bottom-4 left-12 right-6 z-30">
        <div className="bg-lime-300 rounded-2xl shadow-float p-4 flex items-center gap-3">
          <div>
            <p className="text-sm font-bold text-slate-900">Happy Students</p>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-xs font-semibold text-slate-800">4.9</span>
              <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
              <span className="text-[10px] text-slate-600">(247)</span>
            </div>
          </div>
          <div className="flex -space-x-2 ml-auto">
            {[
              "bg-rose-500",
              "bg-amber-500",
              "bg-emerald-500",
              "bg-sky-500",
              "bg-violet-500",
            ].map((c, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full border-2 border-lime-300 ${c} flex items-center justify-center text-white text-[10px] font-bold`}
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-lime-300 bg-slate-800 flex items-center justify-center text-white text-[10px] font-bold">
              2K+
            </div>
          </div>
        </div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute -bottom-2 -left-6 w-16 h-16 bg-yellow-400 rotate-12 rounded-lg opacity-90 shadow-lg" />
      <div className="absolute top-0 right-0 w-12 h-12 rounded-full border-[5px] border-yellow-400 opacity-80" />
    </div>
  );
}
