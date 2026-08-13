import React from "react";
import { motion } from "framer-motion";
import ProgressLoad from "./ProgressLoad";

// assets
import tickIcon from "../assets/white-tick.png";

// animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardAnim = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function DemoAuditValue({openPopup}) {
  return (
    <section className="bg-white py-10 sm:py-20 px-4 sm:px-6">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto max-w-5xl text-center"
      >
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className="text-[20px] font-extrabold uppercase leading-snug sm:text-4xl md:text-6xl"
        >
          WHAT YOU’LL GET IN YOUR FREE <br /> ZYGN DEMO & WORKFLOW AUDIT
          <span className="mt-2 block text-red-600">(₹25,000 VALUE)</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          className="mt-5 text-sm text-gray-600 sm:text-base"
        >
          This isn’t a pitch, it’s a clarity session. In 30 minutes, you’ll see:
        </motion.p>

        {/* Red Value Card */}
        <motion.div
          variants={cardAnim}
          className="
            mx-auto mt-10 w-full max-w-xl
            rounded-2xl bg-red-600
            px-6 sm:px-8 py-8 sm:py-10
            text-left text-white shadow-2xl
          "
        >
          {/* Main Paragraph */}
          <p className="mb-6 text-sm leading-relaxed sm:mb-8 sm:text-base">
            Zygn centralizes everything as your CRM capturing every enquiry
            with source, status, owner, and auto-nurturing via WhatsApp or
            brochures so teams shift from firefighting to predictable delivery.
          </p>

          {/* Bullet List */}
     <motion.ul
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="space-y-5 sm:space-y-6"
>
  {[
    {
      title: "Discover Your Perfect Dashboard Setup",
      desc: "Our experts show you mood boards, BOQ automation, quality execution, live stock views, and task reminders tailored for your firm.",
    },
    {
      title: "We'll Bring Your Firm To Life",
      desc: "With a tailored live demo of how your new unified system can look without you paying a cent, covering design changes, site syncs, and HR oversight.",
    },
    {
      title: "How To Ensure You're Not Losing ₹5-15L Quarterly",
      desc: "The 3 best tips to reveal hidden leaks in procurement, labor, vendor management, inventory, and petty cash.",
    },
    {
      title: "Your Complete Project Timeline & Fixed Costs",
      desc: "So you know exactly what you're paying for all upfront, with vendor databases and cost reports.",
    },
    {
      title: "Plus",
      desc: "Curated samples of custom workflows, real-time alerts, mobile site controls, attendance digitization, and more for unique control in any design-build operation.",
    },
  ].map((item, index) => (
    <motion.li
      key={index}
      variants={fadeUp}
      className="flex items-start gap-3 sm:gap-4"
    >
      <img
        src={tickIcon}
        alt="Tick"
        className="mt-1 h-4 w-4 flex-shrink-0"
      />
      <p className="text-sm leading-relaxed sm:text-base">
        <span className="font-semibold">{item.title}</span>
        {item.desc && <> - {item.desc}</>}
      </p>
    </motion.li>
  ))}
</motion.ul>

        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          className="mt-10 flex flex-col items-center sm:px-2 px-0"
        >
          <button onClick={openPopup} className="rounded-full bg-red-600 sm:px-8 px-4 py-4 text-xs font-bold uppercase tracking-wide text-white shadow-lg transition hover:bg-red-700 sm:text-lg">
            UNLOCK YOUR ₹25K AUDIT TODAY For Free
          </button>

          <p className="mt-3 text-center text-xs text-gray-900 sm:text-[16px]">
            <span className="text-red-400">Only 6 audit slots left today</span> - 35 firms already claimed their roadmap.
          </p>

          <ProgressLoad />
        </motion.div>
      </motion.div>
    </section>
  );
}
