import React from "react";
import { motion } from "framer-motion";

import logo1 from "../assets/forali.png";
import logo2 from "../assets/good_living.png";
import logo3 from "../assets/infratech.png";
import logo4 from "../assets/kotagi.png";
import logo5 from "../assets/mahani1.png";
import logo6 from "../assets/slp.png";
import logo7 from "../assets/urbano1.png";
import logo8 from "../assets/vertigo.png";
import logo9 from "../assets/my_nivasa.png";


const logos = [
  logo1, logo2, logo3, logo4, logo5,
  logo6, logo7, logo8, logo9, logo1, logo2, logo3, logo4, logo5,
  logo6, logo7, logo8, logo9];

const SocialProofSection = () => {
  return (
    <section className="sm:py-0 py-0 pb-0 sm:pb-10  bg-black overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-white text-2xl sm:text-4xl font-extrabold tracking-wide">
          Trusted By
        </h2>

        <div className="mx-auto mt-3 h-1 w-20 bg-red-600 rounded-full" />
      </div>

      {/* Logo Marquee */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-10 min-w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="
                relative
                flex items-center justify-center
                w-44 h-28
                rounded-xl
                bg-[#fff]
                border border-white/10
                transition-all duration-300
                hover:border-red-600/50
                hover:shadow-[0_0_40px_rgba(220,38,38,0.35)]
              "
            >
              <img
                src={logo}
                alt="brand"
                className="
                  h-12 md:h-14
                  w-auto
                  object-contain
                  opacity-80
                  transition
                  group-hover:opacity-100
                "
              />
            </div>
          ))}
        </motion.div>

        {/* Edge fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent" />
      </div>
    </section>
  );
};

export default SocialProofSection;
