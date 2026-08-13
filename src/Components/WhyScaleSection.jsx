import React from "react";
import { motion } from "framer-motion";
import tick from "../assets/tick.svg";
import ProgressLoad from "./ProgressLoad";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function WhyScaleSection({ isPopupOpen = false, openPopup }) {
  return (
    <section className="relative bg-black px-4 sm:px-6 py-10 sm:py-16 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 text-center text-[25px] leading-snug sm:text-4xl md:text-6xl font-extrabold"
        >
          WHY MOST FIRMS DON&apos;T
          <br />
          SCALE AND WHAT YOU
          <br />
          CAN DO ABOUT IT
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto grid max-w-5xl gap-6 sm:gap-8 md:grid-cols-2"
        >
          
          {/* Left Card */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/30 bg-black/60 p-5 sm:p-8 shadow-[0_0_80px_rgba(255,255,255,0.03)]"
          >
            <h3 className="mb-4 sm:mb-6 text-base sm:text-2xl font-semibold">
              You may be juggling:
            </h3>

            <ul className="space-y-4 sm:space-y-5 text-sm sm:text-lg text-gray-300">
              {[
                "Leads spread across inboxes and chats, losing track of enquiries from multiple sources.",
                "Design stages tracked in multiple places, with scattered project info across chats, emails, and files.",
                "Procurement and BOQ hassles, like tracking orders, pending deliveries, or duplicated purchases.",
                "Vendor delays and missing delivery dates, with details spread across calls and spreadsheets.",
                "Site inventory leaks and cost surprises, without real-time stock visibility or delay records.",
                "Manual task follow-ups and feedback threads everywhere, plus petty cash hard to monitor.",
              ].map((text, i) => (
                <motion.li key={i} variants={fadeUp}>
                  {text}
                </motion.li>
              ))}
            </ul>

            <motion.p
              variants={fadeUp}
              className="mt-5 sm:mt-6 text-xs sm:text-base text-gray-500"
            >
              This operational noise silently eats into your profit, time,
              and growth capability.
            </motion.p>
          </motion.div>

          {/* Right Card */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-white/30 bg-black/60 p-5 sm:p-8 shadow-[0_0_80px_rgba(255,255,255,0.03)]"
          >
            <motion.p
              variants={fadeUp}
              className="mb-6 sm:mb-8 text-sm sm:text-xl leading-relaxed text-gray-200"
            >
              Zygn centralizes everything as your CRM capturing every enquiry
              with source, status, owner, and auto-nurturing via WhatsApp or
              brochures so teams shift from firefighting to predictable delivery.
            </motion.p>

            <motion.ul
              variants={stagger}
              className="space-y-4 sm:space-y-6 text-sm sm:text-lg"
            >
              {[
                {
                  title: "Exposes Hidden Cost Leaks",
                  desc: "Pinpoint ₹5–15L quarterly losses via project-wise procurement reports and stock audit logs.",
                },
                {
                  title: "Unifies Your Workflow",
                  desc: "Sales → Design → Procurement → Site → Finance in one dashboard with live project views and team alignment.",
                },
                {
                  title: "Real-Time Control",
                  desc: "Catch delays or overruns instantly with reminders, pending follow-ups, and office-site syncs.",
                },
                {
                  title: "Impress Premium Clients",
                  desc: "Client portals log changes for approval and share pro records to seal bigger deals.",
                },
              ].map((item, i) => (
                <motion.li key={i} variants={fadeUp} className="flex gap-3 sm:gap-4">
                  <img src={tick} alt="tick" className="mt-1.5 h-4 w-4 shrink-0" />
                  <span>
                    <strong className="text-red-500">{item.title}</strong>{" "}
                    – {item.desc}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <button
  onClick={() => {
    openPopup();
   
  }}
  className="w-full sm:w-auto rounded-full bg-red-600 px-2 sm:px-10 py-4 text-sm sm:text-lg font-bold tracking-wide transition hover:bg-red-700"
>
  UNLOCK CHAOS-FREE WORKFLOW TODAY
</button>

          <p className="mt-4 text-xs sm:text-[16px] text-gray-300">
         <span className="text-red-400"> Last 6 demo slots this week</span> | 50+ certified studios onboarded.
          </p>

          <ProgressLoad />
        </motion.div>

      </div>
    </section>
  );
}
