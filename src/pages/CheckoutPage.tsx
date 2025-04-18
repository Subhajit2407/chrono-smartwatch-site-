
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useCart } from "@/context/CartContext";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems, subtotal, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate order processing
    setTimeout(() => {
      clearCart();
      navigate("/order-success");
    }, 1500);
  };

  if (cartItems.length === 0) {
    navigate("/cart");
    return null;
  }

  const shipping = 0; // Free shipping
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  return (
    <Layout>
      <div className="py-16">
        <div className="chrono-container max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">Checkout</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-medium mb-6">Shipping Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-4 py-2 border border-chronoGray-light rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-4 py-2 border border-chronoGray-light rounded-md"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-chronoGray-light rounded-md"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-chronoGray-light rounded-md"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="address" className="block text-sm font-medium mb-1">Street Address</label>
                  <input 
                    type="text" 
                    id="address" 
                    className="w-full px-4 py-2 border border-chronoGray-light rounded-md"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium mb-1">City</label>
                    <input 
                      type="text" 
                      id="city" 
                      className="w-full px-4 py-2 border border-chronoGray-light rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium mb-1">State</label>
                    <input 
                      type="text" 
                      id="state" 
                      className="w-full px-4 py-2 border border-chronoGray-light rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="zip" className="block text-sm font-medium mb-1">ZIP Code</label>
                    <input 
                      type="text" 
                      id="zip" 
                      className="w-full px-4 py-2 border border-chronoGray-light rounded-md"
                      required
                    />
                  </div>
                </div>

                <h2 className="text-xl font-medium mb-6 mt-8">Payment Method</h2>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="cardPayment" 
                      name="paymentMethod" 
                      value="card"
                      className="mr-2"
                      defaultChecked
                    />
                    <label htmlFor="cardPayment">Credit/Debit Card</label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="upiPayment" 
                      name="paymentMethod" 
                      value="upi"
                      className="mr-2"
                    />
                    <label htmlFor="upiPayment">UPI</label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="codPayment" 
                      name="paymentMethod" 
                      value="cod"
                      className="mr-2"
                    />
                    <label htmlFor="codPayment">Cash on Delivery</label>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="chrono-button-primary w-full py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Place Order"}
                </button>
              </form>
            </div>

            <div>
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <h2 className="font-medium text-lg mb-4">Order Summary</h2>
                
                <div className="max-h-60 overflow-y-auto mb-6 pr-2">
                  {cartItems.map((item) => (
                    <div key={`${item.id}-${item.color}`} className="flex gap-3 mb-4">
                      <div className="w-12 h-12 bg-chronoGray-light/10 rounded-md p-1 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-xs text-chronoGray-dark">{item.color} • Qty: {item.quantity}</p>
                      </div>
                      <div className="text-sm font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 border-t border-chronoGray-light pt-4 mb-6">
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
                  <div className="border-t border-chronoGray-light pt-3 flex justify-between font-medium">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
