import { useEffect } from "react";
import ProgressLoad from "./ProgressLoad";
import bg from "../assets/bg-video.png";
import videoThumb from "../assets/video-thumb.png";
import dashboard from "../assets/dashboard.png";

export default function ExperienceSection({openPopup }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="relative overflow-hidden text-white">

      {/* TOP BACKGROUND */}
      <div
        className="relative z-10 sm:pt-8 pt-10 pb-10 sm:pt-24 sm:pb-52 text-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mx-auto max-w-5xl text-[25px] leading-snug font-extrabold sm:text-4xl md:text-6xl md:leading-tight sm:pb-28">
            EXPERIENCE THE
            <br />
            TRANSFORMATION OF A
            <br />
            <span className="text-white">ZYGN-POWERED INTERIOR</span>
            <br />
            DESIGN STUDIO
          </h2>
        </div>
      </div>

      {/* VIDEO OVERLAY */}
      {/* Wistia Scripts */}
<script src="https://fast.wistia.com/player.js" async></script>
<script
  src="https://fast.wistia.com/embed/80mouu09w6.js"
  async
  type="module"
></script>

<style>
  {`
    wistia-player[media-id='80mouu09w6']:not(:defined) {
      background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/80mouu09w6/swatch');
      display: block;
      filter: blur(5px);
      padding-top:56.25%;
    }
  `}
</style>

{/* Video Container */}
<div className="absolute left-1/2 top-[33%] sm:top-[35%] z-30 w-full max-w-3xl -translate-x-1/2 px-4">
  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl bg-black">

    <div className="relative aspect-video">
      <wistia-player
        media-id="80mouu09w6"
        aspect="1.7777777777777777"
        style={{ width: "100%", height: "100%" }}
      ></wistia-player>
    </div>

  </div>
</div>

      {/* BOTTOM CTA SECTION */}
      <div className="relative z-20 pt-48 sm:pt-52 pb-8 sm:pb-16 text-center overflow-hidden">

        {/* Background image */}
        <div
          className="absolute inset-0 bg-red-600"
          style={{
            backgroundImage: `url(${videoThumb})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Red overlay */}
        <div className="absolute inset-0 bg-red-600/80" />

        {/* Content */}
        <div className="relative z-10 px-4">
         <button
  onClick={() => {
    openPopup();
  }}
  className="mb-5 w-full sm:w-auto rounded-full bg-white px-2 sm:px-10 py-4 text-sm md:text-lg font-bold tracking-wide text-red-600 transition hover:bg-gray-100"
>
  UNLOCK CHAOS-FREE WORKFLOW TODAY
</button>

          <p className="sm:mb-5 mb-2 text-xs md:text-[16px] text-white/90">
            Limited access, real dashboards trusted by 300+ verified users.
          </p>

          <ProgressLoad />
        </div>
      </div>

    </section>
  );
}
