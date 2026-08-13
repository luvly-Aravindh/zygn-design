import React from "react";
import { motion } from "framer-motion";
import ProgressLoad from "./ProgressLoad";
import Work from "../assets/mywork.png"
import Sales from "../assets/sales.png"
import Procurement from "../assets/procurement.png"
import Accounts from "../assets/Accounts.png"

/* =============================
   MOTION
============================= */
const rowAnim = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* =============================
   CONTENT BLOCK
============================= */
const ContentBlock = ({ title, highlight, desc }) => (
  <div>
    <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
      {title} <span className="text-red-500">{highlight}</span>
    </h3>

    <p className="mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-white/70">
      {desc}
    </p>

    {/* <ul className="mt-6 space-y-3 text-sm sm:text-base text-white/80">
      <li>• Clear ownership and accountability</li>
      <li>• Real-time visibility across teams</li>
      <li>• Fewer handoffs and faster execution</li>
    </ul> */}
  </div>
);

/* =============================
   IMAGE BLOCK
============================= */
const ImageBlock = ({ src }) => (
  <div className="relative">
    <div className="absolute -inset-3 rounded-3xl bg-red-500/20 blur-2xl" />
    <img
      src={src}
      alt=""
      loading="lazy"
      className="relative w-full rounded-2xl border border-white/10 object-cover"
    />
  </div>
);

/* =============================
   MAIN COMPONENT
============================= */
export default function CoreWorkflows({ openPopup }) {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-20 sm:py-32 text-white">
      {/* subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] bg-[size:28px_28px]" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative mx-auto max-w-7xl space-y-28"
      >
        {/* HEADER */}
        <div className="text-center">
          <h2 className="mx-auto max-w-6xl text-3xl sm:text-6xl font-extrabold leading-tight">
            One Platform For All Your Core Business
            <span className="block text-red-500">Workflows</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70">
            Zygn brings all your core workflows into a single, connected workspace so your team always knows what to do, when to do it, and where to find it.
          </p>
        </div>

        {/* ROW 1 – Content | Image */}
        <motion.div
          variants={rowAnim}
          className="grid items-center gap-14 md:grid-cols-2"
        >
          <ContentBlock
            title="Work &"
            highlight="Productivity"
            desc={
              <ul className="space-y-2">
                <li><b className="text-white">Task:</b> Effortlessly plan, assign, and track all your tasks in one organised view.</li>
                <li><b className="text-white">Notes:</b> Capture important details, ideas, and updates instantly against the right project or client.</li>
                <li><b className="text-white">Calendar:</b> Schedule client meetings, delivery dates, and project deadlines with ease and clarity.</li>
                <li><b className="text-white">My Work Hub:</b> Get a focused view of what each team member is working on for effortless productivity tracking.</li>
              </ul>
            }
          />
          <ImageBlock src={Work} />
        </motion.div>


        {/* ROW 2 – Image | Content */}
        <motion.div
          variants={rowAnim}
          className="grid items-center gap-14 md:grid-cols-2"
        >
          <ImageBlock src={Sales} />
          <ContentBlock
            title="Sales &"
            highlight="Client Collaboration"
            desc={
              <ul className="space-y-2">
                <li><b className="text-white">Sales:</b> Streamlined sales management to track enquiries, follow-ups, and closures across your pipeline.</li>
                <li><b className="text-white">Design Flow:</b> Enable seamless collaboration, real-time updates, and smarter design workflows across teams.</li>
                <li><b className="text-white">Conversation:</b>  Automate lead nurturing with intelligent WhatsApp integration and timely client touchpoints.</li>
              </ul>
            }
          />
        </motion.div>


        {/* ROW 3 – Content | Image */}
        <motion.div
          variants={rowAnim}
          className="grid items-center gap-14 md:grid-cols-2"
        >
          <ContentBlock
            title="Execution &"
            highlight="Operations"
            desc={
              <ul className="space-y-2">
                <li><b className="text-white">Procurement:</b> Intuitive dashboard designed to optimise your procurement lifecycle from request to delivery.</li>
                <li><b className="text-white">Onsite Operations:</b> Efficient onsite management for clear tasks, timelines, and seamless project execution.</li>
                <li><b className="text-white">Stock Inventory:</b> Efficiently manage and track your inventory across projects and locations with Zygn.</li>
                <li><b className="text-white">BOQ:</b> Create, manage, and track BOQs with clear quantities, costs, and project-wise visibility.</li>
                <li><b className="text-white">Site Coordination:</b> Coordinate site tasks, materials, and teams so execution stays aligned with plan.</li>
              </ul>
            }
          />
          <ImageBlock src={Procurement} />
        </motion.div>


        {/* ROW 4 – Image | Content */}
        <motion.div
          variants={rowAnim}
          className="grid items-center gap-14 md:grid-cols-2"
        >
          <ImageBlock src={Work} />
          <ContentBlock
            title="People &"
            highlight="Finance"
            desc={
              <ul className="space-y-2">
                <li><b className="text-white">Human Resources:</b> Streamline team management, attendance, and employee operations in one place.</li>
                <li><b className="text-white">Accounts:</b> Manage finances, invoicing, and expenses effortlessly with clear project-wise visibility.</li>
              </ul>
            }
          />
        </motion.div>



        {/* CTA */}
        <div className="text-center">
          <button
  onClick={() => {
    openPopup();}}
  className="w-full sm:w-auto rounded-full bg-red-600 px-10 py-4 text-sm sm:text-lg font-bold uppercase tracking-wide text-white transition hover:bg-red-700"
>
  See How Zygn Brings Everything Together
</button>
          <p className="mt-4 text-sm lg:text-[16px] text-white/60">
            <span className="text-red-400">Closing soon… 50+</span> India-certified studios use this daily workflow.
          </p>
          <div className="mt-3"> <ProgressLoad /></div>
        </div>

      </motion.div>
    </section>
  );
}
