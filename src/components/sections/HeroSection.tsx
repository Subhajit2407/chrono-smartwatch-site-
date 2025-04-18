
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const featuredProducts = [
  {
    id: "chrono-ultra-red",
    name: "Chrono Ultra Red",
    tagline: "Bold design meets advanced technology.",
    imageUrl: "/lovable-uploads/8e6ac80c-5ebd-4da6-aa57-1e42d4083fe3.png",
  },
  {
    id: "chrono-ultra-black",
    name: "Chrono Ultra Black",
    tagline: "Sleek performance in midnight black.",
    imageUrl: "/lovable-uploads/196e009e-0808-42a6-8640-90bac56c845f.png",
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
    <section className="min-h-screen flex items-center pt-20 pb-12 relative overflow-hidden bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="chrono-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              key={currentProduct.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-lg"
            >
              <span className="inline-block text-blue-400 font-medium mb-3">
                Introducing
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-4 text-white">
                {currentProduct.name}
              </h1>
              <p className="text-2xl sm:text-3xl text-gray-300 font-light mb-8">
                {currentProduct.tagline}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to={`/product/${currentProduct.id}`}
                  className="chrono-button-primary flex items-center bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Buy now <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link
                  to="/shop"
                  className="chrono-button-secondary bg-transparent border-white/20 hover:bg-white/10"
                >
                  Explore all models
                </Link>
              </div>

              <div className="mt-10 flex space-x-4">
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

          <div className="order-1 lg:order-2 flex justify-center">
            <motion.div
              className="relative h-[450px] sm:h-[550px] w-full flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <motion.img
                key={currentProduct.imageUrl}
                src={currentProduct.imageUrl}
                alt={currentProduct.name}
                className="object-contain h-full max-h-full w-auto shadow-2xl rounded-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-40 right-[10%] w-40 h-40 rounded-full bg-blue-500 opacity-20 blur-3xl" />
      <div className="absolute bottom-40 left-[5%] w-60 h-60 rounded-full bg-gray-500 opacity-20 blur-3xl" />
    </section>
  );
};

export default HeroSection;

