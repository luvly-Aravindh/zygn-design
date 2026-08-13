import React from "react";
import bgImage from "../assets/risk-bg.png";

export default function RiskControlSection() {
  return (
    <section
      className="
        relative overflow-hidden
        py-16 sm:py-20 md:py-24
        text-white
      "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: window.innerWidth >= 768 ? "fixed" : "scroll",
      }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-red-900/40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-8">

          {/* LEFT CONTENT */}
         <div>
  <h2 className="text-center text-[25px] font-extrabold leading-tight sm:text-left sm:text-4xl md:text-7xl">
    <span className="block sm:inline">KEEP PROJECT</span>{" "}
    <span className="block sm:inline">CHAOS & PROFIT RISKS</span>{" "}
    <span className="block sm:inline">OUT OF YOUR DESIGN FIRM</span>
  </h2>
</div>

          

          {/* RIGHT CONTENT */}
          <div>
            {/* Intro text */}
            <p className="mb-4 text-sm leading-relaxed text-gray-300 sm:text-base">
              At Zygn, we specialize in using the highest quality workflows
              because they are best for your firm’s growth. They have low
              “disruption risk” unlike generic tools that create operational
              breakdowns.
            </p>

            <p className="mb-8 sm:mb-10 text-sm leading-relaxed text-gray-300 sm:text-base">
              What your production process tells us today will determine
              tomorrow’s success. Why should you consider Zygn for your next
              project:
            </p>

            {/* Cards */}
            <div className="space-y-5 sm:space-y-6">

              {/* Card 1 — Highlighted */}
              <div className="rounded-2xl border border-red-500/40 bg-gradient-to-br from-red-700/60 to-black/80 p-5 sm:p-6 backdrop-blur">
                <h3 className="mb-2 text-base sm:text-lg text-red-400">
                  Workflow Automation
                </h3>
                <p className="text-sm leading-relaxed text-gray-200">
                  Zygn’s technology in workflow automation is proven to resist
                  project delays, budget overruns, and team confusion on live
                  projects with searchable projects, stock automation, and task
                  calendars.
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl border border-white/20 bg-black/50 p-5 sm:p-6 backdrop-blur">
                <h3 className="mb-2 text-base sm:text-lg font-bold">
                  Verified for Indian Design-Build
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  Zygn is the only platform verified for Indian design-build
                  operations, handling everything from lead ownership to
                  multi-location inventory.
                </p>
              </div>

              {/* Card 3 */}
              <div className="rounded-2xl border border-white/20 bg-black/50 p-5 sm:p-6 backdrop-blur">
                <h3 className="mb-2 text-base sm:text-lg font-bold">
                  Scaling Solutions
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  India’s National Choice for growing studios, meaning it helps
                  firms that suffer from scaling pains like scattered notes or
                  unaligned teams.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
