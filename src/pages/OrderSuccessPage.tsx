
import { motion } from "framer-motion";
import { CheckCircle, Package, ArrowLeft, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const OrderSuccessPage = () => {
  // Generate a random order number
  const orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
  
  // Estimated delivery date (7 days from now)
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 7);
  const formattedDeliveryDate = deliveryDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Layout>
      <div className="py-16">
        <div className="chrono-container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-sm p-8 md:p-12 text-center"
          >
            <div className="mb-6 flex justify-center">
              <CheckCircle size={80} className="text-green-500" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Order Confirmed!
            </h1>
            
            <p className="text-xl text-chronoGray-dark mb-8">
              Thank you for your purchase. Your order has been received and is being processed.
            </p>
            
            <div className="border border-chronoGray-light rounded-lg p-6 mb-8">
              <div className="flex flex-wrap gap-6 justify-center md:justify-between">
                <div className="text-center md:text-left">
                  <p className="text-sm text-chronoGray-dark mb-1">Order Number</p>
                  <p className="font-medium">{orderNumber}</p>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-chronoGray-dark mb-1">Estimated Delivery</p>
                  <p className="font-medium">{formattedDeliveryDate}</p>
                </div>
                
                <div className="text-center md:text-right">
                  <p className="text-sm text-chronoGray-dark mb-1">Shipping Method</p>
                  <p className="font-medium">Express Delivery</p>
                </div>
              </div>
            </div>
            
            <div className="text-left mb-12">
              <h2 className="font-medium text-lg mb-4 flex items-center gap-2">
                <Truck size={20} /> Delivery Information
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4 py-1">
                  <p className="font-medium">Order Confirmation</p>
                  <p className="text-sm text-chronoGray-dark">
                    Your order has been confirmed and will be shipped soon.
                  </p>
                </div>
                
                <div className="border-l-4 border-chronoGray-light pl-4 py-1">
                  <p className="font-medium">Order Processing</p>
                  <p className="text-sm text-chronoGray-dark">
                    Your order is being prepared for shipment.
                  </p>
                </div>
                
                <div className="border-l-4 border-chronoGray-light pl-4 py-1">
                  <p className="font-medium">On The Way</p>
                  <p className="text-sm text-chronoGray-dark">
                    Your order will be on its way to you soon.
                  </p>
                </div>
                
                <div className="border-l-4 border-chronoGray-light pl-4 py-1">
                  <p className="font-medium">Delivered</p>
                  <p className="text-sm text-chronoGray-dark">
                    Your package will be delivered to your doorstep.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="chrono-button-secondary flex items-center justify-center gap-2">
                <ArrowLeft size={18} />
                Back to Home
              </Link>
              
              <Link to="/shop" className="chrono-button-primary flex items-center justify-center gap-2">
                <Package size={18} />
                Track Order
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderSuccessPage;
