import { motion } from "framer-motion";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    emailjs
      .sendForm(
        "service_e5xtram", // Replace with your EmailJS service ID
        "template_rj8i6o5", // Replace with your EmailJS template ID
        formRef.current,
        "J1kKIRhCIb1KxN3_F" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );

    // Optionally, clear the form fields after submission
    e.target.reset();
  };

  return (
    <>
      {/* Existing Contact Form Section */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-stone-800/30 rounded-xl border border-stone-700/50 p-8 hover:bg-stone-800/50 transition-all duration-300"
          >
            <h2 className="text-3xl font-serif text-stone-100 mb-8 text-center">
              Send us a Message
            </h2>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-stone-100 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    required
                    className="w-full px-4 text-stone-300 py-2 backdrop-blur-md bg-stone-800/30 border border-stone-700/50 rounded-lg focus:bg-stone-800/50 focus:ring-2 focus:ring-amber-400/80"
                  />
                </div>
                <div>
                  <label className="block text-stone-100 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-2 text-stone-300 backdrop-blur-md bg-stone-800/30 border border-stone-700/50 rounded-lg focus:bg-stone-800/50 focus:ring-2 focus:ring-amber-400/80"
                  />
                </div>
              </div>
              <div>
                <label className="block text-stone-100 mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 text-stone-300 backdrop-blur-md bg-stone-800/30 border border-stone-700/50 rounded-lg focus:bg-stone-800/50 focus:ring-2 focus:ring-amber-400/80"
                />
              </div>
              <div>
                <label className="block text-stone-100 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  className="w-full px-4 py-2 text-stone-300 backdrop-blur-md bg-stone-800/30 border border-stone-700/50 rounded-lg focus:bg-stone-800/50 focus:ring-2 focus:ring-amber-400/80"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-amber-400/80 text-white py-3 rounded-lg hover:bg-amber-400 transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
