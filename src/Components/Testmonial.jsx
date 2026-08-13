import { useEffect } from "react";
import ProgressLoad from "./ProgressLoad";
import videoThumb from "../assets/video-thumb.png";

const TestimonialSection = ({ isPopupOpen = false, openPopup }) => {
  useEffect(() => {
    const s1 = document.createElement("script");
    s1.src = "https://fast.wistia.com/player.js";
    s1.async = true;

    const s2 = document.createElement("script");
    s2.src = "https://fast.wistia.com/embed/wfyndms562.js";
    s2.async = true;
    s2.type = "module";

    document.body.appendChild(s1);
    document.body.appendChild(s2);

    return () => {
      document.body.removeChild(s1);
      document.body.removeChild(s2);
    };
  }, []);

  return (
    <section className="bg-black text-white py-10 px-4">
      <div className="max-w-6xl mx-auto">

        {/* COMMON TOP HEADING */}
        
         <h2 className="mx-auto max-w-6xl text-center text-3xl sm:text-6xl font-extrabold leading-tight">
  What A Real Studio Leader Says
  <span className="block text-red-500">About Zygn</span>
</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-20">

          {/* LEFT – VIDEO */}
          <div className="flex justify-center">
            <div className="bg-[#9b2c1a] rounded-3xl p-3 sm:p-4">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-[240px] sm:w-[280px]">
                <div className="aspect-[9/16] w-full">
                  <wistia-player
                    media-id="wfyndms562"
                    aspect="0.5625"
                    class="w-full h-full"
                  ></wistia-player>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT – CONTENT */}
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-3xl lg:text-5xl font-bold leading-tight mb-6">
              Stop Managing Chaos. <br />
              <span className="text-[#ff6b4a]">
                Start Leading With Clarity.
              </span>
            </h2>

            <p className="text-gray-300 text-xl leading-relaxed mb-8">
              See how{" "}
              <span className="text-white font-semibold">
                Aantarika Interior Design Studio, Bangalore
              </span>{" "}
              turned scattered WhatsApp threads and Excel sheets into a fully
              visible, accountable sales operation - without micromanaging
              anyone.
            </p>

            <div className="relative z-20  sm:pt-2 pb-8 sm:pb-16 overflow-hidden">

  {/* Content */}
  <div className="relative z-10 px-4
    flex flex-col
    items-center
    sm:items-start
    sm:text-left
    text-center">

    <button
      onClick={() => {
        openPopup();
        
      }}
      className="mb-5 w-full sm:w-auto rounded-full bg-white px-6 sm:px-10 py-4 text-sm md:text-lg font-bold tracking-wide text-red-600 transition hover:bg-gray-100"
    >
      Watch More Real Studio Transformations →
    </button>

    <p className="sm:mb-5 mb-2 text-xs md:text-[16px] text-white/90">
      300+ users. 50+ studios. Real dashboards. Real results.
     
    </p>
<div className="">
     <ProgressLoad />
</div>
    

  </div>
</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;