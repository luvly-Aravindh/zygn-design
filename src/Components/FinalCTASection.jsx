import React from "react";
import { motion } from "framer-motion";

// background image + avatars
import bgImage from "../assets/final-cta-bg.png";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";

const container = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function FinalCTASection({ isPopupOpen = false, openPopup }) {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-8 text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <motion.div
        className="relative mx-auto max-w-6xl px-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Outer Border Frame */}
        <motion.div
          variants={item}
          className="rounded-3xl border border-white/20 sm:px-8 px-2 py-20 sm:px-16 text-center backdrop-blur-2xl"
        >
          {/* Heading */}
<motion.h2
  variants={item}
  className="mx-auto max-w-4xl text-center text-[22px] font-extrabold uppercase leading-tight sm:text-center sm:text-4xl md:text-6xl"
>
  <span className="block sm:inline">Ready to bring clarity,</span>{" "}
  <span className="block sm:inline">control & growth to</span>{" "}
  <span className="block sm:inline">your firm?</span>
</motion.h2>


          {/* Subtext */}
          <motion.p
            variants={item}
            className="mx-auto mt-8 max-w-2xl text-sm sm:text-base text-gray-300"
          >
            our next level of structured operations starts with one demo.
          </motion.p>

          {/* Highlight line */}
          <motion.p
            variants={item}
            className="mt-6 text-lg sm:text-xl font-semibold"
          >
            Book your FREE Zygn Demo & Workflow Audit today.
          </motion.p>

          {/* Social proof */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            {/* Avatars */}
            <motion.div
              className="flex -space-x-3"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src={user1}
                alt=""
                className="h-10 w-10 rounded-full border-2 border-black"
              />
              <img
                src={user2}
                alt=""
                className="h-10 w-10 rounded-full border-2 border-black"
              />
              <img
                src={user3}
                alt=""
                className="h-10 w-10 rounded-full border-2 border-black"
              />
            </motion.div>

            {/* Text */}
            <p className="sm:text-sm text-xs text-gray-300">
              <span className="font-semibold text-red-500">300+</span> users across{" "}
              <span className="font-semibold text-red-500">50+</span> studios have
              already started.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={item} className="sm:mt-12 mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => {
                openPopup();
               
              }}
              className="rounded-full bg-red-600 px-12 py-4 text-sm font-bold uppercase tracking-wide shadow-xl hover:bg-red-700"
            >
              Book My Free Demo
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Footer text */}
        <motion.p
          variants={item}
          className="mx-auto mt-14 max-w-3xl text-center text-xs sm:text-sm text-gray-400"
        >
          zygn is an all-in-one SaaS platform designed for interior design excellence.
          It adapts to your workflow, simplifies decision making and accelerates
          delivery all while keeping your client experience flow.
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 text-center text-xs sm:text-sm text-gray-400"
        >
          © 2026 <span className="font-bold text-red-500">Zygn</span>. All rights reserved.
        </motion.p>
      </motion.div>
    </section>
  );
}
