import { motion } from "framer-motion";
import {
  FaGavel,
  FaBalanceScale,
  FaCopyright,
  FaBuilding,
  FaUsers,
  FaFileAlt,
} from "react-icons/fa";

const Works = () => {
  const services = [
    {
      icon: <FaGavel />,
      title: "Criminal Law",
      description:
        "Expert legal solution in disputes related to Cheque Bounce Case, Cyber Crime Disputes, Corruption Cases and all other criminal side works.",
    },
    {
      icon: <FaBalanceScale />,
      title: "Civil Law",
      description:
        "Handles various types of Civil Cases in respect of contractual disputes, property disputes, real estate issues and many more.",
    },
    {
      icon: <FaCopyright />,
      title: "Intellectual Property Rights",
      description:
        "Engage in Trade Mark and Patent Search works and assist with proper legal guidance for registration of intellectual work.",
    },
    {
      icon: <FaBuilding />,
      title: "Corporate Law",
      description:
        "Valuable legal guidance in corporate issues, including Contract Drafting, Company Formation, and Alternative Dispute Resolution.",
    },
    {
      icon: <FaUsers />,
      title: "Family Law",
      description:
        "Expert handling of cases involving Divorce, Maintenance, Conjugal Rights, Nullity, Guardianship, and Domestic Violence issues.",
    },
    {
      icon: <FaFileAlt />,
      title: "Document Review",
      description:
        "Essential document review services for business activities and contract formation.",
    },
  ];

  const registrationServices = [
    "Company Registration",
    "Partnership Registration",
    "Trust Registration",
    "Society Registration",
    "NGO Registration",
    "Trademark Registration",
  ];

  return (
    <div className="overflow-hidden w-full">
      <main className="min-h-screen bg-stone-900">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] w-full flex items-center justify-center">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 via-stone-900/70 to-stone-900/90" />
            <div className="absolute top-20 left-20 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-stone-500/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="backdrop-blur-sm bg-stone-900/30 p-8 rounded-2xl border border-stone-700/50 text-center"
            >
              <h1 className="text-4xl md:text-5xl font-serif mb-4 text-stone-100">
                Our Legal Services
              </h1>
              <p className="text-lg text-stone-300">
                Comprehensive legal solutions tailored to your needs
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative py-20 w-full bg-gradient-to-b from-stone-900 to-stone-800">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-stone-600/5 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="backdrop-blur-md bg-stone-800/30 rounded-xl border border-stone-700/50 p-6 hover:bg-stone-800/50 transition-all duration-300"
                >
                  <div className="text-amber-400/80 text-3xl mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-stone-100 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-stone-300">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Services */}
        <section className="relative py-20 w-full bg-gradient-to-b from-stone-800 to-stone-900">
          <div className="absolute inset-0">
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-serif text-stone-100 mb-4">
                Registration Services
              </h2>
              <p className="text-stone-400">
                Professional assistance in all types of registrations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {registrationServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="backdrop-blur-md bg-stone-800/30 rounded-xl border border-stone-700/50 p-6 flex items-center space-x-4 hover:bg-stone-800/50 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-amber-400/80 rounded-full" />
                  <span className="text-stone-100">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Works;
