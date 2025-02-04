import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBook,
  FaHandshake,
  FaBalanceScale,
  FaCheck,
} from "react-icons/fa";

const Internship = () => {
  const benefits = [
    {
      icon: <FaBook />,
      title: "Practical Experience",
      description:
        "Gain hands-on experience in various aspects of legal practice",
    },
    {
      icon: <FaHandshake />,
      title: "Mentorship",
      description: "Direct guidance from experienced legal professionals",
    },
    {
      icon: <FaBalanceScale />,
      title: "Court Exposure",
      description: "Opportunity to observe court proceedings and case handling",
    },
  ];

  const requirements = [
    "Law students in 3 years or 5 years course",
    "Strong academic background",
    "Excellent communication skills",
    "Keen interest in legal research",
    "Proficiency in English",
    "Basic computer skills",
  ];

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] w-full flex items-center justify-center bg-stone-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 via-stone-900/70 to-stone-900/90" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-stone-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative w-full max-w-7xl z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="max-w-3xl mx-auto"
          >
            <FaGraduationCap className="text-6xl mx-auto mb-6 text-gray-300" />
            <h1 className="text-4xl md:text-5xl font-serif mb-4 text-stone-100">
              Legal Internship Program
            </h1>
            <p className="text-xl text-stone-300 mb-8">
              Join our team and gain valuable experience in legal practice
            </p>
            <motion.button className="bg-amber-400/80 text-gray-100 px-8 py-3 rounded-full">
              Apply Now
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="relative py-20 bg-gradient-to-b from-stone-900 to-stone-800 w-full">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-stone-600/5 rounded-full blur-3xl" />
        </div>
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-stone-100 mb-6">
              Why Join Us?
            </h2>
            <p className="text-stone-300 max-w-2xl mx-auto">
              Our internship program offers unique opportunities for aspiring
              legal professionals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="backdrop-blur-md bg-stone-800/30 border border-stone-700/50 rounded-xl p-8 text-center hover:bg-stone-800/50 transition-all duration-300"
              >
                <div className="text-4xl text-amber-400/80 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-stone-100">
                  {benefit.title}
                </h3>
                <p className="text-stone-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="relative py-20 bg-gradient-to-b from-stone-900 to-stone-800 w-full">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-stone-600/5 rounded-full blur-3xl" />
        </div>
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif text-stone-100 mb-6">
                Requirements
              </h2>
              <div className="space-y-4">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <FaCheck className="text-stone-300 flex-shrink-0" />
                    <span className="text-stone-300">{req}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="backdrop-blur-sm bg-stone-900/30 rounded-xl p-8 border border-stone-700/50"
            >
              <h3 className="text-2xl font-serif text-stone-100 mb-6">
                How to Apply
              </h3>
              <p className="text-stone-300 mb-6">
                To apply for the internship program, please send your
                application to:
              </p>
              <div className="backdrop-blur-sm bg-stone-900/30 p-4 rounded-lg">
                <a
                  href="mailto:advgokulbalakrishnan6824@gmail.com"
                  className="text-stone-300 hover:underline"
                >
                  advgokulbalakrishnan6824@gmail.com
                </a>
              </div>
              <div className="mt-6 space-y-4 text-stone-300">
                <p>Please include:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Updated Resume/CV</li>
                  <li>Cover Letter</li>
                  <li>Academic Credentials</li>
                  <li>Letter of Recommendation (if any)</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Internship;
