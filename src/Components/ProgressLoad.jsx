import React, { useEffect, useRef, useState } from "react";

export default function ProgressLoad() {
  const TOTAL = 20;

  // Animated disappear boxes (11th–13th)
  const ANIMATE_INDEXES = [11, 12, 13];

  // Static completed boxes (14th–20th)
  const STATIC_COMPLETED_START = 14;

  const [activeStep, setActiveStep] = useState(-1);
  const containerRef = useRef(null);
  const startedRef = useRef(false);

  /* ================================
     START ANIMATION ON SCROLL
  ================================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;

          let step = 0;
          const interval = setInterval(() => {
            setActiveStep(step);
            step++;

            if (step === ANIMATE_INDEXES.length) {
              clearInterval(interval);
            }
          }, 350);
        }
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full py-4 flex justify-center bg-transparent"
    >
      <div className="flex gap-[4px] sm:gap-[6px] md:gap-2">
        {Array.from({ length: TOTAL }).map((_, i) => {
          const animatedIndex = ANIMATE_INDEXES[activeStep];
          const isAnimatedActive = i === animatedIndex;
          const isStaticCompleted = i >= STATIC_COMPLETED_START;

          const bgClass =
            isAnimatedActive || isStaticCompleted
              ? "bg-[#FE0000]"
              : "bg-[#4a4a4a]";

          const showTick = isAnimatedActive || isStaticCompleted;

          return (
            <div
              key={i}
              className={`
                h-4 w-2 sm:h-7 sm:w-4
                rounded-sm
                flex items-center justify-center
                transition-colors duration-300
                ${bgClass}
              `}
            >
              {showTick && (
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
