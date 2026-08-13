import React from "react";
import { motion } from "framer-motion";
import ProgressLoad from "./ProgressLoad";

// Assets
import quoteIcon from "../assets/quote-circle.png";
import starImg from "../assets/star.png";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";

const testimonials = [
  {
    text: `Working with Zygn has been life-changing for our 15-project/month operation. The quality of workflow unification and the speed you get back control is unbelievable leads assigned clearly and procurement tracked end-to-end.`,
    name: "Arjun Verma",
    role: "Founder, Bengaluru",
    profile: profile1,
  },
  {
    text: `Zygn eliminated our ₹8L quarterly losses overnight. Real-time BOQ and site tracking changed everything for our 12-project studio no more misplaced POs or untracked vendor details.`,
    name: "Priya Sharma",
    role: "Founder, Pune",
    profile: profile2,
  },
  {
    text: `From WhatsApp chaos to professional client portals in 2 weeks. Our close rate jumped 35% with the unified pipeline, plus reminders keeping follow-ups on track.`,
    name: "Rahul Mehta",
    role: "Founder, Chennai",
    profile: profile3,
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function TestimonialsSection({ isPopupOpen = false, openPopup }) {
  return (
    <section className="bg-white px-4 sm:px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-20 text-[25px] leading-snug font-extrabold uppercase tracking-tight sm:text-4xl md:text-5xl"
        >
          WHAT DESIGN FIRMS ARE
          <br />
          SAYING ABOUT US
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 sm:gap-10 md:grid-cols-3"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative grid h-full grid-rows-[1fr_auto_auto] rounded-2xl bg-black p-6 sm:p-8 text-left text-white shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
            >
              {/* Quote Icon */}
              <img
                src={quoteIcon}
                alt="Quote"
                className="absolute -top-5 right-6 sm:-top-6 sm:right-8 h-10 w-10 sm:h-12 sm:w-12"
              />

              {/* Text */}
              <p className="text-sm sm:text-md leading-relaxed text-gray-300">
                “{item.text}”
              </p>

              {/* Divider */}
              <div className="my-5 sm:my-6 h-px w-full bg-white/20" />

              {/* Bottom */}
              <div>
                <div className="mb-3 sm:mb-4 flex">
                  <img src={starImg} alt="star" className="h-4 sm:h-5" />
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <img
                    src={item.profile}
                    alt={item.name}
                    className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-gray-400">{item.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 sm:mt-10"
        >
          <button
  onClick={() => {
    openPopup();
   
  }}
  className="w-full sm:w-auto rounded-full bg-red-600 px-0 sm:px-10 py-4 text-sm sm:text-lg font-bold uppercase tracking-wide text-white transition hover:bg-red-700"
>
  SEE MORE SUCCESS STORIES
</button>

          <p className="mt-4 text-xs sm:text-[16px] text-black">
          Real studios,<span className="text-red-600"> real results ₹8L-₹12L quarterly</span> savings verified
          </p>
          <div className="mt-3"> <ProgressLoad /></div>
         
        </motion.div>

      </div>
    </section>
  );
}
