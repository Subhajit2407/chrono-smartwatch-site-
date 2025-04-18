
import { Heart, Battery, Droplets, Zap, Smartphone, Watch } from "lucide-react";
import { motion } from "framer-motion";
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";
import { ThemeToggle } from "@/components/theme/theme-toggle";

const features: BentoItem[] = [
  {
    icon: <Heart className="w-4 h-4 text-chronoRed" />,
    title: "Advanced Health Tracking",
    description: "Monitor heart rate, blood oxygen levels, and ECG with medical-grade precision.",
    status: "Latest",
    tags: ["Health", "Monitoring"],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    icon: <Battery className="w-4 h-4 text-emerald-500" />,
    title: "All-Day Battery",
    description: "Up to 18 hours of battery life with fast charging capabilities.",
    status: "Updated",
    tags: ["Battery", "Performance"],
  },
  {
    icon: <Droplets className="w-4 h-4 text-blue-500" />,
    title: "Water Resistant",
    description: "Swim-proof and shower-proof with water resistance up to 50 meters.",
    tags: ["Protection", "Sports"],
    colSpan: 2,
  },
  {
    icon: <Watch className="w-4 h-4 text-purple-500" />,
    title: "Powerful Performance",
    description: "Faster processing with our latest chip for seamless experience.",
    status: "Pro",
    tags: ["Performance", "Tech"],
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="chrono-container">
        <div className="flex items-center justify-between mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-display font-bold"
          >
            Packed with Features
          </motion.h2>
          <ThemeToggle />
        </div>
        <BentoGrid items={features} />
      </div>
    </section>
  );
};

export default FeaturesSection;
