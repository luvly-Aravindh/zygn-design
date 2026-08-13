import React, { useState, useEffect, useRef } from "react";
import boatcraftLogo from "../assets/form-logo.png";
import "../Components/pop.css";

const Popup = ({ show, onClose }) => {
  const [msg, setMsg] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isCooldown, setIsCooldown] = useState(false);
  const cooldownTimerRef = useRef(null);

  // Add state for all form fields to maintain values
  const [formData, setFormData] = useState({
    full_name: "",
    studio_name: "",
    email: "",
    monthly_projects: "",
    project_details: ""
  });

  const countries = [
    { name: "AF", code: "+93", flag: "https://flagcdn.com/w20/af.png" },
    { name: "AL", code: "+355", flag: "https://flagcdn.com/w20/al.png" },
    { name: "DZ", code: "+213", flag: "https://flagcdn.com/w20/dz.png" },
    { name: "AD", code: "+376", flag: "https://flagcdn.com/w20/ad.png" },
    { name: "AO", code: "+244", flag: "https://flagcdn.com/w20/ao.png" },
    { name: "AR", code: "+54", flag: "https://flagcdn.com/w20/ar.png" },
    { name: "AM", code: "+374", flag: "https://flagcdn.com/w20/am.png" },
    { name: "AU", code: "+61", flag: "https://flagcdn.com/w20/au.png" },
    { name: "AT", code: "+43", flag: "https://flagcdn.com/w20/at.png" },
    { name: "AZ", code: "+994", flag: "https://flagcdn.com/w20/az.png" },
    { name: "BS", code: "+1-242", flag: "https://flagcdn.com/w20/bs.png" },
    { name: "BH", code: "+973", flag: "https://flagcdn.com/w20/bh.png" },
    { name: "BD", code: "+880", flag: "https://flagcdn.com/w20/bd.png" },
    { name: "BB", code: "+1-246", flag: "https://flagcdn.com/w20/bb.png" },
    { name: "BY", code: "+375", flag: "https://flagcdn.com/w20/by.png" },
    { name: "BE", code: "+32", flag: "https://flagcdn.com/w20/be.png" },
    { name: "BZ", code: "+501", flag: "https://flagcdn.com/w20/bz.png" },
    { name: "BJ", code: "+229", flag: "https://flagcdn.com/w20/bj.png" },
    { name: "BT", code: "+975", flag: "https://flagcdn.com/w20/bt.png" },
    { name: "BO", code: "+591", flag: "https://flagcdn.com/w20/bo.png" },
    { name: "BA", code: "+387", flag: "https://flagcdn.com/w20/ba.png" },
    { name: "BW", code: "+267", flag: "https://flagcdn.com/w20/bw.png" },
    { name: "BR", code: "+55", flag: "https://flagcdn.com/w20/br.png" },
    { name: "BN", code: "+673", flag: "https://flagcdn.com/w20/bn.png" },
    { name: "BG", code: "+359", flag: "https://flagcdn.com/w20/bg.png" },
    { name: "BF", code: "+226", flag: "https://flagcdn.com/w20/bf.png" },
    { name: "KH", code: "+855", flag: "https://flagcdn.com/w20/kh.png" },
    { name: "CM", code: "+237", flag: "https://flagcdn.com/w20/cm.png" },
    { name: "CA", code: "+1", flag: "https://flagcdn.com/w20/ca.png" },
    { name: "CL", code: "+56", flag: "https://flagcdn.com/w20/cl.png" },
    { name: "CN", code: "+86", flag: "https://flagcdn.com/w20/cn.png" },
    { name: "CO", code: "+57", flag: "https://flagcdn.com/w20/co.png" },
    { name: "CR", code: "+506", flag: "https://flagcdn.com/w20/cr.png" },
    { name: "HR", code: "+385", flag: "https://flagcdn.com/w20/hr.png" },
    { name: "CU", code: "+53", flag: "https://flagcdn.com/w20/cu.png" },
    { name: "CY", code: "+357", flag: "https://flagcdn.com/w20/cy.png" },
    { name: "CZ", code: "+420", flag: "https://flagcdn.com/w20/cz.png" },
    { name: "DK", code: "+45", flag: "https://flagcdn.com/w20/dk.png" },
    { name: "DO", code: "+1-809", flag: "https://flagcdn.com/w20/do.png" },
    { name: "EC", code: "+593", flag: "https://flagcdn.com/w20/ec.png" },
    { name: "EG", code: "+20", flag: "https://flagcdn.com/w20/eg.png" },
    { name: "SV", code: "+503", flag: "https://flagcdn.com/w20/sv.png" },
    { name: "EE", code: "+372", flag: "https://flagcdn.com/w20/ee.png" },
    { name: "ET", code: "+251", flag: "https://flagcdn.com/w20/et.png" },
    { name: "FI", code: "+358", flag: "https://flagcdn.com/w20/fi.png" },
    { name: "FR", code: "+33", flag: "https://flagcdn.com/w20/fr.png" },
    { name: "DE", code: "+49", flag: "https://flagcdn.com/w20/de.png" },
    { name: "GH", code: "+233", flag: "https://flagcdn.com/w20/gh.png" },
    { name: "GR", code: "+30", flag: "https://flagcdn.com/w20/gr.png" },
    { name: "HK", code: "+852", flag: "https://flagcdn.com/w20/hk.png" },
    { name: "HU", code: "+36", flag: "https://flagcdn.com/w20/hu.png" },
    { name: "IS", code: "+354", flag: "https://flagcdn.com/w20/is.png" },
    { name: "IN", code: "+91", flag: "https://flagcdn.com/w20/in.png" },
    { name: "ID", code: "+62", flag: "https://flagcdn.com/w20/id.png" },
    { name: "IR", code: "+98", flag: "https://flagcdn.com/w20/ir.png" },
    { name: "IQ", code: "+964", flag: "https://flagcdn.com/w20/iq.png" },
    { name: "IE", code: "+353", flag: "https://flagcdn.com/w20/ie.png" },
    { name: "IL", code: "+972", flag: "https://flagcdn.com/w20/il.png" },
    { name: "IT", code: "+39", flag: "https://flagcdn.com/w20/it.png" },
    { name: "JP", code: "+81", flag: "https://flagcdn.com/w20/jp.png" },
    { name: "JO", code: "+962", flag: "https://flagcdn.com/w20/jo.png" },
    { name: "KE", code: "+254", flag: "https://flagcdn.com/w20/ke.png" },
    { name: "KW", code: "+965", flag: "https://flagcdn.com/w20/kw.png" },
    { name: "LB", code: "+961", flag: "https://flagcdn.com/w20/lb.png" },
    { name: "LU", code: "+352", flag: "https://flagcdn.com/w20/lu.png" },
    { name: "MY", code: "+60", flag: "https://flagcdn.com/w20/my.png" },
    { name: "MV", code: "+960", flag: "https://flagcdn.com/w20/mv.png" },
    { name: "MX", code: "+52", flag: "https://flagcdn.com/w20/mx.png" },
    { name: "MA", code: "+212", flag: "https://flagcdn.com/w20/ma.png" },
    { name: "NP", code: "+977", flag: "https://flagcdn.com/w20/np.png" },
    { name: "NL", code: "+31", flag: "https://flagcdn.com/w20/nl.png" },
    { name: "NZ", code: "+64", flag: "https://flagcdn.com/w20/nz.png" },
    { name: "NG", code: "+234", flag: "https://flagcdn.com/w20/ng.png" },
    { name: "NO", code: "+47", flag: "https://flagcdn.com/w20/no.png" },
    { name: "OM", code: "+968", flag: "https://flagcdn.com/w20/om.png" },
    { name: "PK", code: "+92", flag: "https://flagcdn.com/w20/pk.png" },
    { name: "PH", code: "+63", flag: "https://flagcdn.com/w20/ph.png" },
    { name: "PL", code: "+48", flag: "https://flagcdn.com/w20/pl.png" },
    { name: "PT", code: "+351", flag: "https://flagcdn.com/w20/pt.png" },
    { name: "QA", code: "+974", flag: "https://flagcdn.com/w20/qa.png" },
    { name: "RO", code: "+40", flag: "https://flagcdn.com/w20/ro.png" },
    { name: "RU", code: "+7", flag: "https://flagcdn.com/w20/ru.png" },
    { name: "SA", code: "+966", flag: "https://flagcdn.com/w20/sa.png" },
    { name: "SG", code: "+65", flag: "https://flagcdn.com/w20/sg.png" },
    { name: "ZA", code: "+27", flag: "https://flagcdn.com/w20/za.png" },
    { name: "KR", code: "+82", flag: "https://flagcdn.com/w20/kr.png" },
    { name: "ES", code: "+34", flag: "https://flagcdn.com/w20/es.png" },
    { name: "LK", code: "+94", flag: "https://flagcdn.com/w20/lk.png" },
    { name: "SE", code: "+46", flag: "https://flagcdn.com/w20/se.png" },
    { name: "CH", code: "+41", flag: "https://flagcdn.com/w20/ch.png" },
    { name: "TW", code: "+886", flag: "https://flagcdn.com/w20/tw.png" },
    { name: "TH", code: "+66", flag: "https://flagcdn.com/w20/th.png" },
    { name: "TR", code: "+90", flag: "https://flagcdn.com/w20/tr.png" },
    { name: "AE", code: "+971", flag: "https://flagcdn.com/w20/ae.png" },
    { name: "UK", code: "+44", flag: "https://flagcdn.com/w20/gb.png" },
    { name: "UA", code: "+380", flag: "https://flagcdn.com/w20/ua.png" },
    { name: "US", code: "+1", flag: "https://flagcdn.com/w20/us.png" },
    { name: "VN", code: "+84", flag: "https://flagcdn.com/w20/vn.png" },
    { name: "ZW", code: "+263", flag: "https://flagcdn.com/w20/zw.png" },
  ];

  // useEffect(() => {
  //   fetch("https://getnos.io/zygn/php/index.php")
  //     .then((response) => response.json())
  //     .then((data) => setMsg(data.message))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  useEffect(() => {
    return () => {
      if (cooldownTimerRef.current) {
        clearTimeout(cooldownTimerRef.current);
        cooldownTimerRef.current = null;
      }
    };
  }, []);

  if (!show) return null;

  const startSubmitCooldown = () => {
    setIsCooldown(true);
    if (cooldownTimerRef.current) {
      clearTimeout(cooldownTimerRef.current);
    }
    cooldownTimerRef.current = setTimeout(() => {
      setIsCooldown(false);
      cooldownTimerRef.current = null;
    }, 12000);
  };

  const validatePhone = (value) => {
    let valid = true;
    let errMsg = "";

    if (countryCode === "+91") {
      if (!/^[0-9]{10}$/.test(value)) {
        valid = false;
        errMsg = "For +91, phone number must be exactly 10 digits.";
      }
    } else {
      if (!/^[0-9]{7,15}$/.test(value)) {
        valid = false;
        errMsg = "For international numbers, please enter 7–15 digits.";
      }
    }

    setError(errMsg);
    return valid;
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhone(value);
    validatePhone(value);
  };

  // Handle changes for all input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePhone(phone)) {
      return;
    }

    startSubmitCooldown();
    setIsSubmitting(true);

    const submissionData = {
      full_name: formData.full_name,
      studio_name: formData.studio_name,
      email: formData.email,
      country_code: countryCode,
      mobile: phone,
      monthly_projects: formData.monthly_projects,
      project_details: formData.project_details
    };

    try {
      const response = await fetch("/zygn/php/index.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData)
      });

      const data = await response.json();

      if (response.ok && data.status) {

  setSubmitSuccess(true);
  setMsg(data.message || "Form submitted successfully!");

  // ✅ Enable button BEFORE redirect
  setIsSubmitting(false);

  const redirectUrl = data.redirect || "/zygn/php/index.php";
  setTimeout(() => {
    window.location.href = redirectUrl;
  }, 1000);

} else {
  setMsg(data.message || "Submission failed.");
  setIsSubmitting(false); // ✅ also enable on failure
}

    } catch (error) {
      console.error("Error submitting form:", error);
      setMsg("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div
        className="
          relative bg-white w-full max-w-[95%] sm:max-w-3xl rounded-2xl shadow-xl
          pt-10 pb-10 px-6 sm:px-10 flex flex-col justify-center
          max-h-[90vh]
          overflow-hidden
          sm:overflow-hidden
          overflow-y-auto
          sm:overflow-y-hidden
        "
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-5 text-gray-600 text-3xl hover:text-red-600"
        >
          &times;
        </button>

        {/* Logo */}
        <div className="flex items-center justify-center mt-10 md:mt-0 mb-4">
          <img src={boatcraftLogo} alt="boatcraft" className="w-16 sm:w-28" />
        </div>

        {/* Success or Error Message */}
        {(msg || submitSuccess) && (
          <p className={`text-center text-sm mb-3 ${submitSuccess ? 'text-green-600' : 'text-red-600'}`}>
            {msg}
          </p>
        )}

        {/* Form */}
        <form
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          {/* Basic Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Full Name */}
            <input
              type="text"
              name="full_name"
              placeholder="Full Name*"
              value={formData.full_name}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#155DFC]"
            />

            {/* Studio Name */}
            <input
              type="text"
              name="studio_name"
              placeholder="Studio Name*"
              value={formData.studio_name}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#155DFC]"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#155DFC] sm:col-span-2"
            />

            {/* Phone with Country Code */}
            <div className="flex gap-2 items-center sm:col-span-2">
              <div className="flex items-center border border-gray-300 rounded-lg bg-white px-2 w-40 h-[46px] relative focus-within:ring-2 focus-within:ring-[#155DFC]">
                <img
                  src={
                    countries.find((c) => c.code === countryCode)?.flag ||
                    "https://flagcdn.com/w20/in.png"
                  }
                  alt="flag"
                  className="w-5 h-3 mr-2"
                />
                <select
                  name="country_code"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="bg-transparent text-sm w-full h-full pr-5 focus:outline-none cursor-pointer relative z-10"
                  style={{ WebkitAppearance: "none", MozAppearance: "none" }}
                >
                  {countries.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.name} ({c.code})
                    </option>
                  ))}
                </select>
                <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  ▼
                </span>
              </div>

              <input
                type="tel"
                name="mobile"
                placeholder="Phone Number*"
                value={phone}
                onChange={handlePhoneChange}
                required
                className={`flex-1 border rounded-lg px-3 h-[46px] focus:outline-none ${error ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-[#155DFC]`}
              />
            </div>
          </div>

          {/* Monthly Projects */}
          <input
            type="text"
            name="monthly_projects"
            placeholder="No. of Employees* (E.g., 1–10, 10–50.)"
            value={formData.monthly_projects}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#155DFC]"
          />

          {/* Project Details */}
          <textarea
            name="project_details"
            placeholder="Project Details* (Describe your biggest operational challenge - BOQs, follow-ups, site delays, stock leaks, etc.)"
            rows="3"
            value={formData.project_details}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#155DFC]"
          ></textarea>

          {/* Error message */}
          {error && (
            <p className="text-red-600 text-sm text-center">{error}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || isCooldown}
            className={`uppercase w-fit text-sm md:text-base mt-4 py-3 px-6 bg-gradient-to-r from-[#155DFC] to-[#155DFC] text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-200 mx-auto block ${(isSubmitting || isCooldown) ? 'opacity-50 cursor-not-allowed' : ''
              }`}
          >
            {isSubmitting ? 'SUBMITTING...' : isCooldown ? 'PLEASE WAIT...' : 'BOOK MY FREE DEMO'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
