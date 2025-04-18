
import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-chronoBlack text-white pt-16 pb-8">
      <div className="chrono-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <Link
              to="/"
              className="text-2xl font-display font-bold tracking-tighter mb-4 inline-block"
            >
              Chrono
            </Link>
            <p className="text-chronoGray-light mt-4 mb-6 max-w-xs">
              Redefining what a smartwatch can be. Innovative technology, 
              elegant design, and unparalleled performance.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-chronoGray-light hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-chronoGray-light hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-chronoGray-light hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-chronoGray-light hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-lg font-medium mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/shop"
                  className="text-chronoGray-light hover:text-white transition-colors"
                >
                  All Watches
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=premium"
                  className="text-chronoGray-light hover:text-white transition-colors"
                >
                  Chrono Ultra
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=sport"
                  className="text-chronoGray-light hover:text-white transition-colors"
                >
                  Chrono Sport
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=essential"
                  className="text-chronoGray-light hover:text-white transition-colors"
                >
                  Chrono SE
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=accessories"
                  className="text-chronoGray-light hover:text-white transition-colors"
                >
                  Bands & Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-lg font-medium mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/support"
                  className="text-chronoGray-light hover:text-white transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/support/warranty"
                  className="text-chronoGray-light hover:text-white transition-colors"
                >
                  Warranty
                </Link>
              </li>
              <li>
                <Link
                  to="/support/repairs"
                  className="text-chronoGray-light hover:text-white transition-colors"
                >
                  Repairs
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-chronoGray-light hover:text-white transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-chronoGray-light hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-chronoGray-light hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-chronoGray-light hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-chronoGray-light hover:text-white transition-colors"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  to="/sustainability"
                  className="text-chronoGray-light hover:text-white transition-colors"
                >
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-chronoGray-dark py-8 my-8">
          <div className="max-w-md">
            <h3 className="text-lg font-medium mb-3">Subscribe to our newsletter</h3>
            <p className="text-chronoGray-light mb-4">
              Get updates on new releases, promotions, and exclusive content.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-chronoGray-dark text-white px-4 py-2 rounded-l-md w-full focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-chronoBlue hover:bg-chronoBlue-dark text-white px-6 py-2 rounded-r-md transition-colors flex items-center"
              >
                <Mail size={16} className="mr-2" />
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Links & Copyright */}
        <div className="border-t border-chronoGray-dark pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-chronoGray-light mb-4 md:mb-0">
            © {currentYear} Chrono. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-chronoGray-light">
            <Link
              to="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/shipping"
              className="hover:text-white transition-colors"
            >
              Shipping Policy
            </Link>
            <Link
              to="/returns"
              className="hover:text-white transition-colors"
            >
              Returns
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
