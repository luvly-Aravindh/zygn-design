import { Suspense, lazy } from "react";
import "./App.css";
import React, { useState } from "react";
import ZygnHero from "./Components/ZygnHero.jsx";

/* LAZY-LOADED SECTIONS */
const SocialProofSection = lazy(() =>
  import("./Components/SocialProofSection.jsx")
);
const WhyScaleSection = lazy(() =>
  import("./Components/WhyScaleSection.jsx")
);
const ExperienceSection = lazy(() =>
  import("./Components/ExperienceSection.jsx")
);
const TestimonialsSection = lazy(() =>
  import("./Components/TestimonialsSection.jsx")
);
const CoreWorkflows = lazy(() =>
  import("./Components/CoreWorkflows.jsx")
);
const IndustryTestedSection = lazy(() =>
  import("./Components/IndustryTestedSection.jsx")
);
const FirmChangeSection = lazy(() =>
  import("./Components/FirmChangeSection.jsx")
);

const RiskControlSection = lazy(() =>
  import("./Components/RiskControlSection.jsx")
);
const DesignTransformations = lazy(() =>
  import("./Components/DesignTransformations.jsx")
);
const ZygnStorySection = lazy(() =>
  import("./Components/ZygnStorySection.jsx")
);
const ZygnConfidencePromise = lazy(() =>
  import("./Components/ZygnConfidencePromise.jsx")
);
const FinalCTASection = lazy(() =>
  import("./Components/FinalCTASection.jsx")
);
const PopupModal = lazy(() =>
import ("./Components/pop.jsx")
);
const WistiaVideo = lazy(() =>
import ("./Components/Testmonial.jsx")
);

function App() {
      const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      {/* HERO — LOAD IMMEDIATELY */}
      <ZygnHero openPopup={() => setIsPopupOpen(true)}   />

      {/* EVERYTHING BELOW — LAZY */}
        <SocialProofSection openPopup={() => setIsPopupOpen(true)}  />
        <WhyScaleSection openPopup={() => setIsPopupOpen(true)} />
        <ExperienceSection openPopup={() => setIsPopupOpen(true)} />
        <TestimonialsSection openPopup={() => setIsPopupOpen(true)} />
        <CoreWorkflows openPopup={() => setIsPopupOpen(true)} />
        <IndustryTestedSection openPopup={() => setIsPopupOpen(true)} />
        <FirmChangeSection openPopup={() => setIsPopupOpen(true)} />
       
        <RiskControlSection openPopup={() => setIsPopupOpen(true)} />
        {/* <DesignTransformations /> */}
        <ZygnStorySection openPopup={() => setIsPopupOpen(true)} />
         
        <ZygnConfidencePromise openPopup={() => setIsPopupOpen(true)} />
           <WistiaVideo openPopup={() => setIsPopupOpen(true)} />
        <FinalCTASection openPopup={() => setIsPopupOpen(true)} />
            <PopupModal show={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
              

    </>
  );
}

export default App;
