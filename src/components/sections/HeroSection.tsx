
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const featuredProducts = [
  {
    id: "chrono-ultra",
    name: "Chrono Ultra",
    tagline: "Our most advanced device ever.",
    imageUrl: "/lovable-uploads/26c805d6-8899-424b-8f25-55103173740c.png",
  },
  {
    id: "chrono-sport",
    name: "Chrono Sport",
    tagline: "Engineered for adventure.",
    imageUrl: "/lovable-uploads/fac1423a-ed6d-4a1b-a9d9-8206e3ee6950.png",
  },
  {
    id: "chrono-se",
    name: "Chrono SE",
    tagline: "All the essentials.",
    imageUrl: "/lovable-uploads/b8fdc549-8692-4a25-89f8-29b7bad2486a.png",
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
    <section className="min-h-screen flex items-center pt-20 pb-12 relative overflow-hidden bg-gradient-to-b from-white to-chronoGray-light">
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
              <span className="inline-block text-chronoBlue font-medium mb-3">
                Introducing
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-4">
                {currentProduct.name}
              </h1>
              <p className="text-2xl sm:text-3xl text-chronoGray-dark font-light mb-8">
                {currentProduct.tagline}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to={`/product/${currentProduct.id}`}
                  className="chrono-button-primary flex items-center"
                >
                  Buy now <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link
                  to="/shop"
                  className="chrono-button-secondary"
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
                        ? "bg-chronoBlack scale-110"
                        : "bg-chronoGray"
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
              className="relative h-[350px] sm:h-[450px] w-full flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <motion.img
                key={currentProduct.imageUrl}
                src={currentProduct.imageUrl}
                alt={currentProduct.name}
                className="object-contain h-full max-h-full w-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-40 right-[10%] w-40 h-40 rounded-full bg-chronoBlue opacity-10 blur-3xl" />
      <div className="absolute bottom-40 left-[5%] w-60 h-60 rounded-full bg-chronoGray opacity-10 blur-3xl" />
    </section>
  );
};

export default HeroSection;
