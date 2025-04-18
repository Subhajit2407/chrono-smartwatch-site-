
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import QuantityControl from "@/components/ui/quantity-control";
import { useCart } from "@/context/CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, subtotal, clearCart } = useCart();
  const [isClearing, setIsClearing] = useState(false);

  const handleClearCart = () => {
    setIsClearing(true);
    setTimeout(() => {
      clearCart();
      setIsClearing(false);
    }, 300);
  };

  const shippingCost = 0; // Free shipping
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shippingCost + tax;

  return (
    <Layout>
      <div className="py-16">
        <div className="chrono-container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-display font-bold mb-8 text-center"
          >
            Your Cart
          </motion.h1>

          {cartItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-sm p-12 text-center max-w-2xl mx-auto"
            >
              <div className="flex justify-center mb-6">
                <ShoppingBag size={64} className="text-chronoGray-light" />
              </div>
              <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
              <p className="text-chronoGray-dark mb-8">
                Looks like you haven't added any products to your cart yet.
              </p>
              <Link to="/shop" className="chrono-button-primary inline-flex items-center">
                Continue Shopping <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-2"
              >
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-chronoGray-light flex justify-between items-center">
                    <h2 className="font-medium">
                      {cartItems.length} {cartItems.length === 1 ? "Item" : "Items"}
                    </h2>
                    <button
                      onClick={handleClearCart}
                      disabled={isClearing}
                      className="text-sm text-chronoGray-dark hover:text-chronoBlack transition-colors flex items-center gap-1"
                    >
                      <Trash2 size={16} />
                      Clear Cart
                    </button>
                  </div>

                  <ul className="divide-y divide-chronoGray-light">
                    {cartItems.map((item) => (
                      <motion.li
                        key={`${item.id}-${item.color}`}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 flex flex-col sm:flex-row gap-6"
                      >
                        <div className="w-24 h-24 bg-chronoGray-light/10 rounded-lg p-2 flex-shrink-0 mx-auto sm:mx-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        <div className="flex-1 flex flex-col sm:flex-row justify-between">
                          <div>
                            <h3 className="font-medium text-lg">{item.name}</h3>
                            <p className="text-sm text-chronoGray-dark mb-1">
                              {item.model} • {item.color}
                            </p>
                            <p className="font-medium">${item.price}</p>
                          </div>

                          <div className="flex items-center justify-between sm:flex-col sm:items-end mt-4 sm:mt-0">
                            <QuantityControl
                              quantity={item.quantity}
                              onIncrease={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              onDecrease={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              size="sm"
                            />

                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-chronoRed hover:text-chronoRed/80 transition-colors ml-4 sm:ml-0 sm:mt-4"
                              aria-label="Remove item"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="font-medium text-lg mb-6">Order Summary</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-chronoGray-dark">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-chronoGray-dark">Shipping</span>
                      <span>Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-chronoGray-dark">Tax (8%)</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-chronoGray-light pt-4 flex justify-between font-medium">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <Link
                    to="/checkout"
                    className="chrono-button-primary w-full flex justify-center"
                  >
                    Checkout
                  </Link>

                  <Link
                    to="/shop"
                    className="text-center block mt-4 text-chronoBlue font-medium hover:underline"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
