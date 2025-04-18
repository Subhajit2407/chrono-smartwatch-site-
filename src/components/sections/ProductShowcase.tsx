
import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import products from "@/data/products";

const ProductShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={containerRef} className="py-24 relative overflow-hidden">
      <div className="chrono-container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-display font-bold mb-4"
          >
            Find Your Perfect Match
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-chronoGray-dark max-w-3xl mx-auto"
          >
            Explore our collection of premium smartwatches designed to match your lifestyle.
          </motion.p>
        </div>

        {products.map((product, index) => (
          <ProductShowcaseItem 
            key={product.id} 
            product={product} 
            index={index} 
            progress={scrollYProgress} 
          />
        ))}
      </div>
    </div>
  );
};

interface ProductShowcaseItemProps {
  product: typeof products[0];
  index: number;
  progress: any;
}

const ProductShowcaseItem = ({ product, index, progress }: ProductShowcaseItemProps) => {
  const isEven = index % 2 === 0;
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    isEven ? [-100, 0] : [100, 0]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
  
  // Select a primary color for display
  const primaryColor = Object.keys(product.images)[0];
  const imageUrl = product.images[primaryColor];

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity }}
      className={`mb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
        isEven ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className={isEven ? "lg:order-2" : "lg:order-1"}>
        <motion.div style={{ x }} className="max-w-lg">
          <span className="inline-block text-chronoBlue font-medium mb-3">
            {product.model}
          </span>
          <h2 className="text-4xl font-display font-bold mb-4">{product.name}</h2>
          <p className="text-lg mb-6">{product.description}</p>
          
          <ul className="space-y-3 mb-8">
            {product.features.slice(0, 3).map((feature, i) => (
              <li key={i} className="flex items-start">
                <span className="inline-block bg-chronoGray-light/30 rounded-full w-2 h-2 mt-2.5 mr-3" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            <Link to={`/product/${product.id}`} className="chrono-button-primary flex items-center">
              Shop now <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link to={`/product/${product.id}`} className="chrono-button-secondary">
              Learn more
            </Link>
          </div>
        </motion.div>
      </div>

      <div className={isEven ? "lg:order-1" : "lg:order-2"}>
        <motion.div
          className="flex justify-center"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <img
            src={imageUrl}
            alt={product.name}
            className="object-contain h-[350px] sm:h-[450px] w-auto"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductShowcase;
