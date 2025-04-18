
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const featuredProducts = [
  {
    id: "chrono-ultra",
    name: "Chrono Ultra",
    tagline: "The future on your wrist.",
    imageUrl: "/lovable-uploads/fa8da755-6be0-44dc-947d-fa4c5316a543.png",
    color: "bg-gradient-to-r from-red-600 to-blue-700",
  },
  {
    id: "chrono-sport",
    name: "Chrono Sport",
    tagline: "Performance meets elegance.",
    imageUrl: "/lovable-uploads/f2a7509d-32e1-49f4-bf43-2195a7c6363c.png",
    color: "bg-gradient-to-r from-gray-900 to-gray-600",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProduct = featuredProducts[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[90vh] flex items-center relative overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:3px_3px]" />
      </div>

      <div className="chrono-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              key={currentProduct.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-lg mx-auto lg:mx-0"
            >
              <span className={`inline-block ${currentProduct.color} bg-clip-text text-transparent font-medium mb-3`}>
                Next Generation
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-4 text-white">
                {currentProduct.name}
              </h1>
              <p className="text-2xl sm:text-3xl text-gray-300 font-light mb-8">
                {currentProduct.tagline}
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  to={`/product/${currentProduct.id}`}
                  className="chrono-button-primary bg-white text-black hover:bg-gray-100"
                >
                  Buy now <ArrowRight size={18} className="ml-2 inline-block" />
                </Link>
                <Link
                  to="/shop"
                  className="chrono-button-secondary border-white/20 text-white hover:bg-white/10"
                >
                  Explore all models
                </Link>
              </div>

              <div className="mt-10 flex space-x-4 justify-center lg:justify-start">
                {featuredProducts.map((product, index) => (
                  <button
                    key={product.id}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-white scale-110"
                        : "bg-gray-600"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`View ${product.name}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          <div className="relative h-[350px] sm:h-[450px] lg:h-[600px] w-full flex items-center justify-center">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-transparent to-black/50 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.img
              key={currentProduct.imageUrl}
              src={currentProduct.imageUrl}
              alt={currentProduct.name}
              className="relative z-10 object-contain h-full w-auto max-w-full"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotate: 0,
                y: [0, -20, 0]
              }}
              transition={{
                duration: 0.5,
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              }}
            />
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-40 right-[10%] w-40 h-40 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl" />
      <div className="absolute bottom-40 left-[5%] w-60 h-60 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 blur-3xl" />
    </section>
  );
};

export default HeroSection;
