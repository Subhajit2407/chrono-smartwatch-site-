
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-chronoBlack text-white relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-chronoBlue opacity-20 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-chronoBlue-light opacity-15 blur-[100px] rounded-full" />
      
      <div className="chrono-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-display font-bold mb-6"
          >
            Ready to Experience the Future?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-chronoGray-light mb-10 max-w-2xl mx-auto"
          >
            Join thousands of satisfied customers who have transformed their lifestyle with Chrono smartwatches. Choose your perfect model today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/shop"
              className="bg-white text-chronoBlack font-medium py-3 px-8 rounded-md hover:bg-chronoGray-light transition-colors flex items-center"
            >
              Shop Collection <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              to="/compare"
              className="bg-transparent text-white border border-white/30 font-medium py-3 px-8 rounded-md hover:bg-white/10 transition-colors"
            >
              Compare Models
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
