
import { useState } from "react";
import { motion } from "framer-motion";
import { User, Package, LogOut, ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const { user, isAuthenticated, logout, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");

  if (!isAuthenticated) {
    return (
      <Layout>
        <div className="py-16">
          <div className="chrono-container max-w-md">
            <h1 className="text-3xl font-display font-bold mb-8 text-center">My Account</h1>
            
            <div className="bg-white rounded-xl shadow-sm p-8">
              <form className="space-y-4">
                <h2 className="text-xl font-medium mb-4">Login</h2>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    defaultValue="demo@example.com"
                    className="w-full px-4 py-2 border border-chronoGray-light rounded-md" 
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
                  <input 
                    type="password" 
                    id="password" 
                    defaultValue="password123"
                    className="w-full px-4 py-2 border border-chronoGray-light rounded-md" 
                  />
                </div>
                
                <button 
                  type="button" 
                  onClick={() => console.log("Login demo user")}
                  className="chrono-button-primary w-full"
                >
                  Login
                </button>
                
                <p className="text-center text-sm mt-4">
                  Don't have an account? <a href="#" className="text-chronoBlue hover:underline">Create Account</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

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
            My Account
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 flex items-center gap-4 border-b border-chronoGray-light">
                  <div className="w-14 h-14 rounded-full bg-chronoGray-light/50 flex items-center justify-center">
                    {user?.profileImage ? (
                      <img
                        src={user.profileImage}
                        alt={user.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <User size={24} className="text-chronoGray-dark" />
                    )}
                  </div>
                  <div>
                    <h2 className="font-medium">{user?.name}</h2>
                    <p className="text-sm text-chronoGray-dark">{user?.email}</p>
                  </div>
                </div>

                <nav className="p-2">
                  <button
                    onClick={() => setActiveTab("profile")}
                    className={`flex items-center justify-between w-full p-3 rounded-md ${
                      activeTab === "profile"
                        ? "bg-chronoGray-light/10 text-chronoBlack"
                        : "text-chronoGray-dark hover:bg-chronoGray-light/10"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <User size={18} />
                      Profile Details
                    </span>
                    <ChevronRight size={16} />
                  </button>
                  <button
                    onClick={() => setActiveTab("orders")}
                    className={`flex items-center justify-between w-full p-3 rounded-md ${
                      activeTab === "orders"
                        ? "bg-chronoGray-light/10 text-chronoBlack"
                        : "text-chronoGray-dark hover:bg-chronoGray-light/10"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <Package size={18} />
                      Order History
                    </span>
                    <ChevronRight size={16} />
                  </button>
                </nav>

                <div className="p-4 border-t border-chronoGray-light">
                  <button
                    onClick={() => logout()}
                    className="flex items-center gap-2 text-chronoRed hover:text-chronoRed/80 transition-colors p-2"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3"
            >
              {activeTab === "profile" ? (
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-medium mb-6">Profile Details</h2>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          defaultValue={user?.name} 
                          className="w-full px-4 py-2 border border-chronoGray-light rounded-md" 
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          defaultValue={user?.email} 
                          className="w-full px-4 py-2 border border-chronoGray-light rounded-md" 
                          disabled 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        defaultValue={user?.phone || ""} 
                        className="w-full px-4 py-2 border border-chronoGray-light rounded-md" 
                      />
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-3">Address</h3>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="street" className="block text-sm font-medium mb-1">Street Address</label>
                          <input 
                            type="text" 
                            id="street" 
                            defaultValue={user?.address?.street || ""} 
                            className="w-full px-4 py-2 border border-chronoGray-light rounded-md" 
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label htmlFor="city" className="block text-sm font-medium mb-1">City</label>
                            <input 
                              type="text" 
                              id="city" 
                              defaultValue={user?.address?.city || ""} 
                              className="w-full px-4 py-2 border border-chronoGray-light rounded-md" 
                            />
                          </div>
                          <div>
                            <label htmlFor="state" className="block text-sm font-medium mb-1">State</label>
                            <input 
                              type="text" 
                              id="state" 
                              defaultValue={user?.address?.state || ""} 
                              className="w-full px-4 py-2 border border-chronoGray-light rounded-md" 
                            />
                          </div>
                          <div>
                            <label htmlFor="zip" className="block text-sm font-medium mb-1">ZIP Code</label>
                            <input 
                              type="text" 
                              id="zip" 
                              defaultValue={user?.address?.zip || ""} 
                              className="w-full px-4 py-2 border border-chronoGray-light rounded-md" 
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <button 
                        type="button" 
                        className="chrono-button-primary"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-medium mb-6">Order History</h2>
                  
                  <div className="border border-chronoGray-light rounded-lg overflow-hidden">
                    <div className="text-center py-12">
                      <Package size={48} className="mx-auto text-chronoGray-light mb-4" />
                      <h3 className="text-lg font-medium mb-2">No orders yet</h3>
                      <p className="text-chronoGray-dark mb-6">When you place orders, they'll appear here</p>
                      <a 
                        href="/shop" 
                        className="chrono-button-primary inline-block"
                      >
                        Start Shopping
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
