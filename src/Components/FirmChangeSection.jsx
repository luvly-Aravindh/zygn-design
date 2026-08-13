import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/how-bg.png";
import ProgressLoad from "./ProgressLoad";

// icons
import salesIcon from "../assets/icon-sales.png";
import designIcon from "../assets/icon-design.png";
import vendorIcon from "../assets/icon-vendor.png";
import siteIcon from "../assets/icon-site.png";
import inventoryIcon from "../assets/icon-inventory.png";
import leadershipIcon from "../assets/icon-leadership.png";

/* ------------------ DATA ------------------ */
const items = [
  {
    title: "Sales Follow-Ups",
    desc: "Sales follow-ups won’t fall through cracks, with reminders and owner assignments preventing confusion.",
    icon: salesIcon,
  },
  {
    title: "Design Stages",
    desc: "Design stages become trackable and reportable, with real-time status and organized references.",
    icon: designIcon,
  },
  {
    title: "Vendor & Procurement",
    desc: "Vendor and procurement risks shrink via tracked POs, invoices, and duplication alerts.",
    icon: vendorIcon,
  },
  {
    title: "Site Teams",
    desc: "Site teams get timely task clarity, synced updates, and delay reason logs for contractors.",
    icon: siteIcon,
  },
  {
    title: "Inventory & Costs",
    desc: "Inventory & project costs get real visibility, with audit trails and trend-based reordering.",
    icon: inventoryIcon,
  },
  {
    title: "Leadership Insights",
    desc: "Leadership gets insights, not noise, centralized attendance, tasks, and transparent accountability.",
    icon: leadershipIcon,
  },
];

/* ------------------ MOTION VARIANTS ------------------ */
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const rowVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === "left" ? 80 : -80,
  }),
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ------------------ COMPONENT ------------------ */
export default function FirmChangeSection({ isPopupOpen = false, openPopup }) {
  return (
    <section
      className="relative overflow-hidden sm:py-24 py-16 text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <motion.div
        className="relative mx-auto max-w-6xl px-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        variants={containerVariants}
      >
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className="mb-4 text-center text-[25px] font-extrabold sm:text-4xl md:text-6xl"
        >
          HOW YOUR FIRM WILL
          <br />
          CHANGE WITH ZYGN
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mx-auto mb-16 max-w-2xl text-center text-sm sm:text-md text-gray-300"
        >
          This isn’t a nice-to-have. It’s the foundation that turns workload into
          a dependable process and growth.
        </motion.p>

        {/* Feature Rows */}
        <motion.div className="space-y-8" variants={containerVariants}>
          {items.map((item, index) => {
            const iconLeft = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                custom={iconLeft ? "left" : "right"}
                variants={rowVariants}
                whileHover={{ y: -4 }}
                className={`
                  flex flex-col gap-4
                  sm:flex-row sm:items-stretch sm:gap-6
                  ${iconLeft ? "sm:flex-row-reverse" : ""}
                `}
              >
                {/* Icon Box */}
                <div className="
                  flex h-20 w-[80px] mx-auto items-center justify-center
                  rounded-xl border border-white/20 bg-black/60 backdrop-blur
                  sm:h-auto sm:w-28 sm:shrink-0
                ">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-8 w-8 sm:h-12 sm:w-12"
                  />
                </div>

                {/* Content Box */}
                <div className="
                  flex flex-1 flex-col justify-center
                  rounded-xl border border-white/20 bg-black/40 p-6 backdrop-blur
                  text-center sm:text-left
                ">
                  <h3 className="mb-1 text-sm font-semibold sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-gray-300 sm:text-lg">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          className="mt-12 flex flex-col items-center"
        >
          <button
  onClick={() => {
    openPopup();
  }}
  className="rounded-full bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-wide shadow-lg transition hover:bg-red-700 sm:text-lg"
>
  Watch Live Zygn Demo
</button>

          <p className="mt-3 text-center text-xs lg:text-[16px] text-gray-400 sm:text-sm">
            <span className="text-red-400">Next 6 slots filling fast </span>| 35% productivity boost proven verified.
          </p>

          <ProgressLoad />
        </motion.div>
      </motion.div>
    </section>
  );
}
