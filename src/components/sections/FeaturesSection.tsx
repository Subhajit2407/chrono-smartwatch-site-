
import { Heart, Clock, Battery, Droplets, Zap, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Heart,
    title: "Advanced Health Tracking",
    description:
      "Monitor heart rate, blood oxygen levels, and ECG with medical-grade precision.",
  },
  {
    icon: Clock,
    title: "All-Day Battery",
    description:
      "Up to 18 hours of battery life with fast charging for all-day use.",
  },
  {
    icon: Droplets,
    title: "Water Resistant",
    description:
      "Swim-proof and shower-proof with water resistance up to 50 meters.",
  },
  {
    icon: Zap,
    title: "Powerful Performance",
    description:
      "Faster processing with our latest chip for seamless experience.",
  },
  {
    icon: Smartphone,
    title: "Seamless Connectivity",
    description:
      "Stay connected to calls, texts, and apps even without your phone.",
  },
  {
    icon: Battery,
    title: "Power Reserve",
    description:
      "Low power mode extends battery life when you need it most.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="chrono-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-display font-bold mb-6"
          >
            Packed with Powerful Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-chronoGray-dark"
          >
            Chrono smartwatches combine cutting-edge technology with elegant design
            to deliver an exceptional experience that enhances your everyday life.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-chronoGray-light/10 p-8 rounded-2xl hover-scale"
            >
              <div className="bg-gradient-to-br from-chronoBlack to-chronoBlue/80 text-white p-3 rounded-xl inline-flex mb-5">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-chronoGray-dark">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
