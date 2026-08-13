import React from "react";
import { motion } from "framer-motion";

// assets
import bgRight from "../assets/industry-bg.png";
import badgeImg from "../assets/most-trusted-badge.png";
import ProgressLoad from "./ProgressLoad";

export default function IndustryTestedSection({openPopup}) {
  return (
    <section className="relative overflow-hidden bg-black py-0 text-white md:py-10">

      {/* Mobile background image */}
      <div
        className="absolute top-0 left-0 h-56 w-full md:hidden"
        style={{
          backgroundImage: `url(${bgRight})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Desktop right background */}
      <div
        className="absolute inset-y-0 right-0 hidden w-1/2 md:block"
        style={{
          backgroundImage: `url(${bgRight})`,
          backgroundSize: "cover",
          backgroundPosition: "left",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/30" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-stretch sm:gap-12 gap-4 px-6 pt-12 md:grid-cols-2 md:gap-0 md:pt-0">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center md:justify-start hidden md:block"
        >
          <h2 className="text-center text-3xl font-extrabold leading-tight sm:text-4xl md:text-left md:text-7xl">
            INDUSTRY-
            TESTED
            WORKFLOW
            EXCELLENCE
            YOU CAN
            TRUST
          </h2>
        </motion.div>

             <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center md:justify-start block md:hidden"
        >
          <h2 className="text-center text-[25px] font-extrabold leading-tight sm:text-4xl md:text-left md:text-7xl">
            INDUSTRY-
            TESTED
            WORKFLOW
            EXCELLENCE
            YOU CAN
            TRUST
          </h2>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative flex flex-col justify-center"
        >
          <p className="sm:mb-6 mb-20 text-center text-sm text-gray-300 sm:text-base md:text-left">
            Did you know top design studios require platforms to pass rigorous
            testing before adoption?
          </p>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
            className="relative rounded-2xl border border-white/20 bg-black/60 p-6 backdrop-blur"
          >
            {/* Badge */}
            <motion.img
              src={badgeImg}
              alt="Most Trusted Brand"
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              className="
                absolute -top-16 sm:left-1/2 left-[34%] h-24 w-24 -translate-x-1/2
                md:-left-20 md:top-6 md:h-32 md:w-32 md:translate-x-0
              "
            />

            <p className="pt-10 text-sm leading-relaxed text-gray-300 sm:text-base md:pl-10 md:pt-0">
              Only <span className="font-semibold text-white">3%</span> of workflow tools
              have been verified as{" "}
              <span className="font-semibold text-white">
                "India Design-Build Ready".
              </span>
              
              Having achieved this certification means Zygn is the professional
              team you can trust to transform your firm's operations no more
              manual attendance, untracked tasks, or siloed HR data.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            className="mt-10 flex flex-col items-center"
          >
            <button
  onClick={() => {
    openPopup();
    
  }}
  className="rounded-full bg-red-600 sm:px-8 px-3 py-4 text-center text-xs font-bold uppercase tracking-wide shadow-lg transition hover:bg-red-700 sm:text-lg"
>
  SEE HOW ZYGN BRINGS EVERYTHING TOGETHER
</button>

            <p className="mt-3 text-center text-xs lg:text-[16px] text-gray-400 sm:text-sm">
              <span className="text-red-400">Closing soon… 50+</span> India-certified studios use this daily workflow.
            </p>

            <ProgressLoad />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
