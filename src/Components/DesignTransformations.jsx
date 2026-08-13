import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ProgressLoad from "./ProgressLoad";
// Replace with your real images
import img1 from "../assets/design1.png";
import img2 from "../assets/design2.png";
import img3 from "../assets/design3.png";

const images = [img1, img2, img3];

export default function DesignTransformations(onClick={openPopup}) {
  const [index, setIndex] = useState(0);

  // Auto-slide (DESKTOP ONLY)
  useEffect(() => {
    if (window.innerWidth < 768) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Helpers
  const getImage = (offset) =>
    images[(index + offset + images.length) % images.length];

  return (
    <section className="relative bg-black sm:py-20 py-12 text-white overflow-hidden">
      {/* Heading */}
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="mb-14 text-[25px] font-extrabold uppercase leading-tight text-red-600 sm:text-6xl">
          See Some Of Our Design Firm Transformations
          <br />
          All Around India
        </h2>
      </div>

      {/* Slider */}
      <div className="relative mx-auto max-w-7xl px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            drag={window.innerWidth < 768 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(e, info) => {
              if (info.offset.x < -80)
                setIndex((prev) => (prev + 1) % images.length);
              if (info.offset.x > 80)
                setIndex((prev) =>
                  prev === 0 ? images.length - 1 : prev - 1
                );
            }}
          >
            {/* Left Image */}
            <motion.div
              className="hidden md:block w-[28%] overflow-hidden rounded-xl opacity-60"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={getImage(-1)}
                alt="Transformation left"
                className="h-[420px] w-full object-cover"
              />
            </motion.div>

            {/* Center Image (BIG FOCUS) */}
            <motion.div
              className="w-full md:w-[44%] overflow-hidden rounded-2xl shadow-2xl"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={getImage(0)}
                alt="Transformation center"
                className="h-[460px] w-full object-cover"
              />
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="hidden md:block w-[28%] overflow-hidden rounded-xl opacity-60"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={getImage(1)}
                alt="Transformation right"
                className="h-[420px] w-full object-cover"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CTA */}


             {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                  className="mt-10 flex flex-col items-center"
                >
                  <button onClick={openPopup} className="rounded-full bg-red-600 px-8 py-4 text-sm sm:text-lg font-bold uppercase tracking-wide shadow-lg transition hover:bg-red-700">
          View Real Studio Success Stories
                  </button>
      
                  <p className="mt-3 text-xs sm:text-sm text-gray-400">
98% on-time delivery + 25% margin increase proven                  </p>
      
                  <ProgressLoad />
                </motion.div>

      {/* Bottom Glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-red-600/40 to-transparent" />
    </section>
  );
}
