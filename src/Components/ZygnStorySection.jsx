import React from "react";
import { motion } from "framer-motion";
import ProgressLoad from "./ProgressLoad"; // ✅ FIXED IMPORT

// assets you already have
import bgImage from "../assets/zygn-story-bg.png";
import storyImg from "../assets/logo.svg";

export default function ZygnStorySection({ isPopupOpen = false, openPopup }) {
  return (
    <section
      className="relative overflow-hidden sm:py-24 py-10 text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16 text-center text-[25px] font-extrabold uppercase tracking-wide sm:text-4xl md:text-6xl"
      >
        The Story of Zygn, 2+ Years
        <br className="hidden sm:block" /> In The Making
      </motion.h2>

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Content Grid */}
        <div className="grid items-center gap-16 md:grid-cols-2">
          
          {/* LEFT IMAGE STACK */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[350px]"
          >
            {/* Red backing card */}
            
            

            {/* Image card */}
            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              whileInView={{ opacity: 1, rotate: -3 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative z-10 overflow-hidden rounded-xl shadow-2xl"
            >
              <img
                src={storyImg}
                alt="Zygn Story"
                className="h-full w-[350px] object-cover"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="max-w-xl"
          >
            {[
              "At Zygn, we value the lives of design firms through business significance. A family-run operation for architectural excellence.",
              "Zygn was born from a reputation in design workflow and desire to maximize firm profitability solving pains like forgotten tasks, misplaced invoices, and poor stock visibility.",
              "Proudly leading project management with integrations that help bring your firm to life.",
            ].map((text, index) => (
              <motion.p
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mb-6 text-sm sm:text-lg leading-relaxed text-gray-200"
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        className="sm:mt-16 mt-8 flex flex-col items-center"
      >
       <button
  onClick={() => {
    openPopup();
   
  }}
  className="rounded-full bg-red-600 px-8 py-4 text-sm sm:text-lg font-bold uppercase tracking-wide shadow-lg transition hover:bg-red-700"
>
  Meet The Team Behind Zygn
</button>

        <p className="mt-3 text-xs sm:text-[16px] text-gray-200 pb-2">
          <span className="text-red-400">2+ years perfecting workflows</span> for 50+ Indian studios
        </p>

        <ProgressLoad />
      </motion.div>
    </section>
  );
}
