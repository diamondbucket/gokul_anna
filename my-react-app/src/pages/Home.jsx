import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBalanceScale,
  FaGavel,
  FaUniversity,
  FaChevronDown,
} from "react-icons/fa";
import ImageWithFallback from "../components/ImageWithFallback";
import DisclaimerPopup from "../components/DisclaimerPopup";
import { clientLogos, profilePhotos } from "../config/images";
import logo1 from "../assets/images/istox-logo.png"; // Update with your actual image paths
import logo2 from "../assets/images/sar-logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const clientConfig = {
    logos: [
      {
        id: 1,
        image: logo1,
        alt: "Client 1",
        maxWidth: "180px",
        maxHeight: "90px",
        padding: "p-6",
        invert: false,
      },
      {
        id: 2,
        image: logo2,
        alt: "Client 2",
        maxWidth: "0px", // Larger width for smaller logos
        maxHeight: "50px",
        padding: "p-4",
        invert: false, // Don't invert if the logo is already dark
      },
      // Add more logos with custom configurations
    ],
  };

  return (
    <>
      <DisclaimerPopup />
      {/* Hero Section */}
      <motion.div
        className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={profilePhotos[0].image}
            alt="Background"
            className="w-full h-full object-cover -translate-y-10 brightness-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 via-stone-900/70 to-stone-900/90" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-stone-500/10 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="backdrop-blur-sm bg-stone-900/30 p-8 rounded-2xl border border-stone-700/50 mt-0 sm:mt-4"
          >
            <h1 className="text-5xl md:text-7xl font-serif mb-6 text-stone-100 tracking-wide">
              Gokul Balakrishnan
            </h1>
            <p className="text-3xl md:text-2xl mb-8 text-stone-300 font-serif">
              ADVOCATE
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/works">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="backdrop-blur-sm bg-stone-100/10 text-stone-100 px-8 py-3 rounded-full hover:bg-stone-100/20 transition-all duration-300 border border-stone-400/20 w-full sm:w-auto"
                >
                  Our Services
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="backdrop-blur-sm bg-stone-800/50 text-stone-100 px-8 py-3 rounded-full hover:bg-stone-700/50 transition-all duration-300 border border-stone-600/50 w-full sm:w-auto"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FaChevronDown className="text-stone-400 text-2xl" />
        </motion.div>
      </motion.div>

      <section className="relative py-20 bg-stone-900">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="backdrop-blur-sm bg-stone-800/30 p-8 rounded-2xl border border-stone-700/50"
          >
            <h2 className="text-3xl font-serif mb-6 text-stone-100">
              About Adv. Gokul Balakrishnan
            </h2>
            <p className="text-stone-300 mb-6">
              Mr.Gokul Balakrishnan is a distinguished Advocate practicing at
              Madras High Court, District Courts and other Sub-Ordinate Courts
              of Tamil Nadu and other states. He holds the esteemed position of
              the Co-Founder – cum – Secretary of Law Seed an Non-Governmental
              Organisation(NGO). He is qualified with B.A.,LL.B(Hons) from a
              recognized university and enrolled himself as an Advocate at Tamil
              Nadu and Puducherry Bar Council at Chennai. He have also completed
              Short Term Training Program on Information Technology, Artificial
              Technology and Cyber Security by Mahatma Gandhi University,
              Kottayam, Kerala. Mr.Gokul have also been a part of various social
              service and Legal Aid activities and have also intended for the
              welfare of the People. He have also participated in International
              Lawyers Conference conducted by Bar Council of India in
              Collaboration with Bar Council of England & Wales and Common
              Wealth Lawyers Association at Vigyan Bhawan, New Delhi.
              Furthermore he have done an extensive research and have published
              various Research Papers and Articles in several International
              Journals. He has been a part of various National and International
              Conferences and Seminars. Moreover, He has organized various
              competitions at National and State Level for the welfare Law
              Students and Public in this Society. He provides expert legal
              services in all areas of Criminal Side, Civil disputes,
              Intellectual Property Right related issues, Family Disputes,
              Corporate Issues and many more. Mr. Gokul provide the right legal
              solution to our valuable clients irrespective of the field of
              service required, may it be for individuals or business. He has
              proven success in many parts, for adequate legal support.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-300">
              <div>
                <h3 className="text-xl font-semibold text-amber-400 mb-3">
                  Areas of Practice
                </h3>
                <ul className="space-y-2">
                  <li>Criminal Law</li>
                  <li>Civil Law</li>
                  <li>Intellectual Property Rights</li>
                  <li>Corporate Law</li>
                  <li>Family Law</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-400 mb-3">
                  Contact Information
                </h3>
                <ul className="space-y-2">
                  <li>Phone: 73395 73344</li>
                  <li>WhatsApp: 94881 66334</li>
                  <li>Email: advgokulbalakrishnan6824@gmail.com</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-20 bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-stone-600/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif text-stone-100 mb-4">
              Our Trusted Clients
            </h2>
            <p className="text-stone-400">
              Proudly serving leading organizations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch justify-items-center">
            {clientConfig.logos.map((client) => (
              <motion.div
                key={client.id}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className="w-full"
              >
                <div
                  className="backdrop-blur-md bg-stone-800/30 rounded-xl border border-stone-700/50 
                        hover:bg-stone-800/50 transition-all duration-300 h-48 
                        flex items-center justify-center group relative overflow-hidden"
                >
                  {/* Gradient Hover Effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 
                          transition-opacity duration-300 bg-gradient-to-b 
                          from-stone-800/0 via-stone-800/5 to-stone-800/10"
                  />

                  {/* Logo Container */}
                  <div
                    className={`relative z-10 ${client.padding} 
                           transition-transform duration-300 
                           group-hover:scale-105`}
                  >
                    <ImageWithFallback
                      src={client.image}
                      alt={client.alt}
                      className={`
                  object-contain
                  transition-all duration-300
                  ${client.invert ? "filter invert opacity-75" : "opacity-90"}
                  group-hover:opacity-100
                `}
                      style={{
                        maxWidth: client.id === "2" ? "100px" : client.maxWidth, // Adjust size for SAR logo
                        maxHeight: client.id === "" ? "50px" : client.maxHeight,
                        width: "auto",
                        height: "auto",
                      }}
                    />
                  </div>

                  {/* Subtle Border Glow on Hover */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 
                          group-hover:opacity-100 transition-opacity duration-300 
                          border-2 border-amber-500/10"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Optional: Add a "View All Clients" button */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="backdrop-blur-sm bg-stone-800/50 text-stone-100 
                   px-8 py-3 rounded-full hover:bg-stone-700/50 
                   transition-all duration-300 border border-stone-600/50"
            >
              View All Clients
            </motion.button>
          </motion.div> */}
        </div>
      </section>
    </>
  );
};

export default Home;
