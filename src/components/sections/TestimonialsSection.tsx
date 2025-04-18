
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    title: "Fitness Enthusiast",
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    quote: "The Chrono Ultra completely transformed my fitness routine. The accuracy of the health sensors is incredible, and the battery life is impressive for a device with so many features.",
    rating: 5,
  },
  {
    id: 2,
    name: "Samantha Lee",
    title: "Tech Blogger",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    quote: "As someone who reviews tech for a living, I can confidently say that Chrono Sport delivers exceptional value. The build quality, software experience, and feature set outperform competitors at this price point.",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "Business Executive",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    quote: "The Chrono SE is perfect for my busy lifestyle. It keeps me connected without being distracting, and the elegant design makes it appropriate for both business meetings and casual settings.",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-24 bg-chronoGray-light/10">
      <div className="chrono-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-display font-bold mb-4"
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-chronoGray-dark"
          >
            Discover why thousands of people choose Chrono for their everyday lives.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-md p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3">
                  <div className="aspect-square overflow-hidden rounded-xl">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={i < testimonials[currentIndex].rating ? "text-yellow-400 fill-yellow-400" : "text-chronoGray-light"}
                      />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-6 italic">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <div>
                    <p className="font-medium text-lg">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-chronoGray-dark">
                      {testimonials[currentIndex].title}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-6 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-chronoBlack hover:bg-chronoGray-light/10 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-6 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-chronoBlack hover:bg-chronoGray-light/10 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-chronoBlack scale-110"
                    : "bg-chronoGray-light"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
