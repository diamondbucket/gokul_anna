import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profilePhotos } from "../config/images";

const Media = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Duplicate the photos array to create the infinite effect
  const extendedPhotos = [...profilePhotos, ...profilePhotos, ...profilePhotos];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % profilePhotos.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden w-full">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center bg-stone-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 via-stone-900/70 to-stone-900/90" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-stone-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center max-w-4xl px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="backdrop-blur-sm bg-stone-900/30 p-8 rounded-2xl border border-stone-700/50"
          >
            <h1 className="text-4xl md:text-5xl font-serif mb-4 text-stone-100">
              Media Gallery
            </h1>
            <p className="text-lg text-stone-300">
              Glimpses of Legal Excellence
            </p>
          </motion.div>
        </div>
      </div>

      {/* Infinite Slider Section */}
      <section className="relative py-20 bg-stone-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-stone-600/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            className="relative h-[600px] overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex gap-6 absolute left-0 right-0">
              <motion.div
                className="flex gap-6"
                animate={{
                  x: `-${currentIndex * (100 / profilePhotos.length)}%`,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {extendedPhotos.map((photo, index) => (
                  <motion.div
                    key={`${photo.id}-${index}`}
                    className="min-w-[400px] md:min-w-[400px] transition-all duration-500"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="backdrop-blur-md bg-stone-800/30 rounded-xl overflow-hidden">
                      <div className="relative h-[400px]">
                        <img
                          src={photo.image}
                          alt={photo.alt}
                          className={`w-full h-full object-cover ${
                            photo.id === 1
                              ? "object-top -translate-y-2 "
                              : "object-center"
                          }`}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Media;
