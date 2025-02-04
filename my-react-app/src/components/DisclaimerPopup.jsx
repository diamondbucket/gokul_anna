import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const DisclaimerPopup = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const accepted = sessionStorage.getItem("disclaimerAccepted");
    console.log("Disclaimer accepted:", accepted); // Debug log
    if (accepted === "true") {
      setShowPopup(false);
    }
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem("disclaimerAccepted", "true");
    console.log("Disclaimer set to accepted"); // Debug log
    setShowPopup(false);
  };

  return (
    showPopup && (
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-stone-900/80 backdrop-blur-sm z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="backdrop-blur-lg bg-stone-900/80 p-8 rounded-2xl border border-stone-700/50 shadow-xl max-w-lg mx-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
        >
          <h2 className="text-2xl font-serif text-stone-100 mb-4">
            DISCLAIMER
          </h2>
          <p className="text-stone-300 mb-6 text-sm leading-relaxed">
            As per the rules of the Bar Council of India, an advocate shall not
            solicit work or advertise. However, as per the 2008 amendment,
            advocates are permitted to furnish information on their website for
            informational purposes only. By visiting this website, you
            acknowledge that the information provided here is solely for
            informational purposes and is neither soliciting nor an
            advertisement. Further, I hereby declare that the information given
            here is true to the best of my knowledge.
          </p>
          <button
            onClick={handleAccept}
            className="w-full bg-amber-600/80 text-stone-100 px-6 py-3 rounded-xl 
                       hover:bg-amber-700/80 transition-all duration-300
                       border border-amber-700/50 hover:border-amber-600/50
                       focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          >
            Accept & Proceed
          </button>
        </motion.div>
      </motion.div>
    )
  );
};

export default DisclaimerPopup;
