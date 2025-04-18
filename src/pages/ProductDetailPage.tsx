
import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, ChevronRight, Check } from "lucide-react";
import Layout from "@/components/layout/Layout";
import QuantityControl from "@/components/ui/quantity-control";
import { useCart } from "@/context/CartContext";
import { useFavorites } from "@/context/FavoritesContext";
import products from "@/data/products";

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  
  const product = products.find((p) => p.id === productId);
  
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedStrap, setSelectedStrap] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("features");
  const specsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0].name);
      setSelectedStrap(product.strapOptions[0].id);
    } else {
      // Product not found, redirect to shop
      navigate("/shop");
    }
  }, [product, navigate]);
  
  if (!product) {
    return null; // Will redirect in useEffect
  }
  
  const favorited = isFavorite(product.id);
  const currentImage = product.images[selectedColor];
  const currentStrap = product.strapOptions.find((strap) => strap.id === selectedStrap);
  
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price + (currentStrap?.price || 0),
      color: selectedColor,
      model: product.model,
      image: currentImage,
    });
  };
  
  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/checkout");
  };
  
  const handleToggleFavorite = () => {
    toggleFavorite({
      id: product.id,
      name: product.name,
      price: product.price,
      image: currentImage,
      model: product.model,
    });
  };
  
  const scrollToSpecs = () => {
    specsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      <div className="py-16">
        <div className="chrono-container">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="flex text-sm">
              <a href="/" className="text-chronoGray-dark hover:text-chronoBlack">
                Home
              </a>
              <ChevronRight size={16} className="mx-2" />
              <a href="/shop" className="text-chronoGray-dark hover:text-chronoBlack">
                Shop
              </a>
              <ChevronRight size={16} className="mx-2" />
              <span className="text-chronoBlack font-medium">{product.name}</span>
            </nav>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 flex items-center justify-center h-[500px]"
              >
                <motion.img
                  key={currentImage}
                  src={currentImage}
                  alt={`${product.name} in ${selectedColor}`}
                  className="object-contain max-h-full max-w-full animate-float"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <div className="mt-6 flex gap-4 justify-center">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedColor === color.name
                        ? "border-chronoBlack"
                        : "border-transparent hover:border-chronoGray-light"
                    }`}
                    aria-label={`Select ${color.name} color`}
                  >
                    <img
                      src={color.image}
                      alt={color.name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {product.isNew && (
                  <span className="inline-block bg-chronoBlack text-white text-xs px-3 py-1 rounded-full mb-4">
                    New
                  </span>
                )}
                <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
                  {product.name}
                </h1>
                <p className="text-lg text-chronoGray-dark mb-4">{product.model}</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-2xl font-bold">
                    ${product.price + (currentStrap?.price || 0)}
                  </span>
                  {currentStrap && currentStrap.price > 0 && (
                    <span className="text-sm text-chronoGray-dark ml-2">
                      (Includes ${currentStrap.price} for {currentStrap.name})
                    </span>
                  )}
                </div>

                <p className="text-lg mb-8">{product.description}</p>

                <div className="mb-8">
                  <h3 className="font-medium mb-3">Color: {selectedColor}</h3>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`w-8 h-8 rounded-full ${
                          selectedColor === color.name
                            ? "ring-2 ring-offset-2 ring-chronoBlack"
                            : ""
                        }`}
                        style={{ backgroundColor: color.value }}
                        aria-label={`Select ${color.name} color`}
                      />
                    ))}
                  </div>

                  <h3 className="font-medium mb-3">Band:</h3>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {product.strapOptions.map((strap) => (
                      <button
                        key={strap.id}
                        onClick={() => setSelectedStrap(strap.id)}
                        className={`flex items-center border rounded-lg p-3 transition-all ${
                          selectedStrap === strap.id
                            ? "border-chronoBlack bg-chronoGray-light/10"
                            : "border-chronoGray-light hover:border-chronoGray"
                        }`}
                      >
                        <div className="flex-1 text-left">
                          <p className="font-medium">{strap.name}</p>
                          <p className="text-sm text-chronoGray-dark">
                            {strap.material}
                          </p>
                        </div>
                        <div className="text-right">
                          {strap.price > 0 && <p className="text-sm">+${strap.price}</p>}
                          {selectedStrap === strap.id && (
                            <Check size={16} className="ml-auto text-chronoBlack" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mb-8">
                    <span className="font-medium">Quantity:</span>
                    <QuantityControl
                      quantity={quantity}
                      onIncrease={() => setQuantity(quantity + 1)}
                      onDecrease={() => quantity > 1 && setQuantity(quantity - 1)}
                    />
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={handleAddToCart}
                      className="flex-1 chrono-button-secondary flex items-center justify-center gap-2"
                    >
                      <ShoppingCart size={18} />
                      Add to Cart
                    </button>
                    <button
                      onClick={handleBuyNow}
                      className="flex-1 chrono-button-primary"
                    >
                      Buy Now
                    </button>
                    <button
                      onClick={handleToggleFavorite}
                      className={`p-3 border rounded-md ${
                        favorited
                          ? "bg-chronoGray-light/10 border-chronoRed"
                          : "border-chronoGray-light"
                      }`}
                      aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
                    >
                      <Heart
                        size={20}
                        className={favorited ? "text-chronoRed fill-chronoRed" : ""}
                      />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-16">
            <div className="border-b border-chronoGray-light">
              <div className="flex gap-8">
                <button
                  onClick={() => setActiveTab("features")}
                  className={`py-3 relative ${
                    activeTab === "features"
                      ? "text-chronoBlack font-medium"
                      : "text-chronoGray-dark hover:text-chronoBlack"
                  }`}
                >
                  Features
                  {activeTab === "features" && (
                    <motion.div
                      layoutId="tabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-chronoBlack"
                    />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("specs")}
                  className={`py-3 relative ${
                    activeTab === "specs"
                      ? "text-chronoBlack font-medium"
                      : "text-chronoGray-dark hover:text-chronoBlack"
                  }`}
                >
                  Specifications
                  {activeTab === "specs" && (
                    <motion.div
                      layoutId="tabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-chronoBlack"
                    />
                  )}
                </button>
              </div>
            </div>

            <div className="py-8">
              {activeTab === "features" ? (
                <div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="inline-block bg-chronoBlack text-white rounded-full p-1 mt-0.5">
                          <Check size={14} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={scrollToSpecs}
                    className="text-chronoBlue font-medium mt-6 hover:underline"
                  >
                    View full specifications
                  </button>
                </div>
              ) : (
                <div ref={specsRef}>
                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                    {Object.entries(product.specs).map(([key, value], index) => (
                      <div key={index}>
                        <dt className="text-chronoGray-dark capitalize mb-1">{key}</dt>
                        <dd className="font-medium">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
