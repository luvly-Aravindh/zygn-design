import React from "react";
import { motion } from "framer-motion";
import ProgressLoad from "./ProgressLoad";

// icons
import onboardingIcon from "../assets/icon-onboarding.png";
import workflowIcon from "../assets/icon-workflow.png";
import nolockIcon from "../assets/icon-nolock.png";
import bg from "../assets/bg.png";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ZygnConfidencePromise({ isPopupOpen = false, openPopup }) {
  return (
    <section
      className="relative overflow-hidden bg-black sm:py-24 py-8 text-white"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative mx-auto max-w-6xl px-6">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-[25px] font-extrabold uppercase tracking-wide sm:text-4xl md:text-6xl"
        >
          The Zygn Confidence
          <br /> Promise
        </motion.h2>


        {/* Footer text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-14 text-center text-sm sm:text-lg text-gray-300 max-w-5xl mx-auto"
        >
Zygn is purpose-built for Indian design-build operations with a transparent, risk-free adoption model. Start with 2 months completely free, no credit card required. After that, commit to a 12-month paid subscription for full platform access. Within the first 30 days of your paid subscription, you're protected by our money-back guarantee. No inflated claims just proven workflows, dedicated support, and the certainty you need to scale.        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center"
        >
         <button
  onClick={() => {
    openPopup();
  
  }}
  className="rounded-full bg-red-600 px-10 py-4 text-sm font-bold uppercase tracking-wide shadow-lg transition hover:bg-red-700"
>
  Start Free Risk Protected Guarantee Inside
</button>
        </motion.div>

        <p className="mt-6 text-center text-xs sm:text-[16px] text-white pb-2">
Certified India Design-Build Ready | 50+ Studios Verified | <span className="text-red-400">Last 6 slots left</span>      </p>

        <ProgressLoad />
      </div>
    </section>
  );
}
