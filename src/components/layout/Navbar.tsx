
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Heart, User, Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md py-3 shadow-sm"
          : "bg-transparent py-4"
      }`}
    >
      <div className="chrono-container flex items-center justify-between">
        {/* Logo - Updated styling */}
        <Link
          to="/"
          className="text-3xl font-display font-bold tracking-tighter text-chronoBlack uppercase"
        >
          CHRONO
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
          <Link to="/compare" className="nav-link">
            Compare
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </nav>

        {/* Action Icons */}
        <div className="hidden md:flex items-center space-x-5">
          <Link to="/search" className="text-chronoBlack hover:text-chronoBlue transition-colors">
            <Search size={20} />
          </Link>
          <Link to="/favorites" className="text-chronoBlack hover:text-chronoBlue transition-colors">
            <Heart size={20} />
          </Link>
          <Link to="/profile" className="text-chronoBlack hover:text-chronoBlue transition-colors">
            <User size={20} />
          </Link>
          <Link to="/cart" className="relative text-chronoBlack hover:text-chronoBlue transition-colors">
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-chronoRed text-white text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-chronoBlack"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="chrono-container py-4 flex flex-col">
              <nav className="flex flex-col space-y-4 mb-6">
                <Link to="/" className="text-lg font-medium text-chronoBlack">
                  Home
                </Link>
                <Link to="/shop" className="text-lg font-medium text-chronoBlack">
                  Shop
                </Link>
                <Link to="/compare" className="text-lg font-medium text-chronoBlack">
                  Compare
                </Link>
                <Link to="/contact" className="text-lg font-medium text-chronoBlack">
                  Contact
                </Link>
              </nav>

              <div className="flex items-center justify-around py-4 border-t border-chronoGray-light">
                <Link to="/search" className="text-chronoBlack">
                  <Search size={20} />
                </Link>
                <Link to="/favorites" className="text-chronoBlack">
                  <Heart size={20} />
                </Link>
                <Link to="/profile" className="text-chronoBlack">
                  <User size={20} />
                </Link>
                <Link to="/cart" className="relative text-chronoBlack">
                  <ShoppingCart size={20} />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-chronoRed text-white text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
