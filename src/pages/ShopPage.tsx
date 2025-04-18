
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/ui/product-card";
import { motion } from "framer-motion";
import { Filter, X } from "lucide-react";
import products from "@/data/products";

const categories = [
  { id: "all", name: "All Products" },
  { id: "premium", name: "Premium" },
  { id: "sport", name: "Sport" },
  { id: "essential", name: "Essential" },
  { id: "health", name: "Health & Fitness" },
  { id: "outdoor", name: "Outdoor" },
];

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const categoryParam = searchParams.get("category") || "all";

  // Filter products based on category
  useEffect(() => {
    if (categoryParam === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.categories.includes(categoryParam))
      );
    }
  }, [categoryParam]);

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", categoryId);
    }
    setSearchParams(searchParams);
    setIsFilterOpen(false);
  };

  return (
    <Layout>
      <div className="bg-chronoGray-light/10 py-16">
        <div className="chrono-container">
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-display font-bold mb-4"
            >
              Chrono Collection
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-chronoGray-dark max-w-2xl mx-auto"
            >
              Discover our range of innovative smartwatches designed for every lifestyle.
            </motion.p>
          </div>

          {/* Mobile Filters */}
          <div className="lg:hidden mb-8 flex justify-center">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 py-2 px-4 border border-chronoGray-light/50 rounded-md"
            >
              <Filter size={18} />
              Filter Products
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters - Desktop */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden lg:block w-64 shrink-0"
            >
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="font-medium text-lg mb-4">Categories</h2>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => handleCategoryChange(category.id)}
                        className={`w-full text-left py-2 px-3 rounded-md transition-colors ${
                          categoryParam === category.id
                            ? "bg-chronoBlack text-white"
                            : "hover:bg-chronoGray-light/10"
                        }`}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.aside>

            {/* Mobile Filter Menu */}
            {isFilterOpen && (
              <div className="fixed inset-0 bg-black/50 z-50 lg:hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ duration: 0.3 }}
                  className="w-3/4 max-w-xs h-full bg-white p-6"
                >
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="font-medium text-lg">Filters</h2>
                    <button
                      onClick={() => setIsFilterOpen(false)}
                      className="p-1"
                      aria-label="Close filters"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <h3 className="font-medium mb-3">Categories</h3>
                  <ul className="space-y-2 mb-8">
                    {categories.map((category) => (
                      <li key={category.id}>
                        <button
                          onClick={() => handleCategoryChange(category.id)}
                          className={`w-full text-left py-2 px-3 rounded-md transition-colors ${
                            categoryParam === category.id
                              ? "bg-chronoBlack text-white"
                              : "hover:bg-chronoGray-light/10"
                          }`}
                        >
                          {category.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            )}

            {/* Product Grid */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                  <p className="text-lg text-chronoGray-dark mb-4">
                    No products found for this category.
                  </p>
                  <button
                    onClick={() => handleCategoryChange("all")}
                    className="chrono-button-secondary"
                  >
                    View All Products
                  </button>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShopPage;
