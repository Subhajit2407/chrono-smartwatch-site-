
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ShoppingCart } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useFavorites } from "@/context/FavoritesContext";
import { useCart } from "@/context/CartContext";

const FavoritesPage = () => {
  const { favorites, removeFromFavorites } = useFavorites();
  const { addToCart } = useCart();

  const handleAddToCart = (favorite: any) => {
    addToCart({
      id: favorite.id,
      name: favorite.name,
      price: favorite.price,
      color: "Default",
      model: favorite.model,
      image: favorite.image,
    });
  };

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
            Your Favorites
          </motion.h1>

          {favorites.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-sm p-12 text-center max-w-2xl mx-auto"
            >
              <div className="flex justify-center mb-6">
                <Heart size={64} className="text-chronoGray-light" />
              </div>
              <h2 className="text-2xl font-medium mb-4">No favorites yet</h2>
              <p className="text-chronoGray-dark mb-8">
                Start adding products to your favorites to keep track of items you love.
              </p>
              <Link to="/shop" className="chrono-button-primary">
                Browse Products
              </Link>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {favorites.map((favorite) => (
                <motion.div
                  key={favorite.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  <Link to={`/product/${favorite.id}`} className="block">
                    <div className="h-48 bg-chronoGray-light/10 p-4 flex items-center justify-center">
                      <img
                        src={favorite.image}
                        alt={favorite.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </Link>

                  <div className="p-4">
                    <Link
                      to={`/product/${favorite.id}`}
                      className="block hover:underline"
                    >
                      <h3 className="font-medium text-lg truncate">{favorite.name}</h3>
                    </Link>
                    <p className="text-sm text-chronoGray-dark mb-2">{favorite.model}</p>
                    <p className="font-medium text-lg mb-4">${favorite.price}</p>

                    <div className="flex gap-2">
                      <button
                        onClick={() => handleAddToCart(favorite)}
                        className="flex-1 py-2 bg-chronoBlack text-white rounded-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                      >
                        <ShoppingCart size={16} />
                        Add to Cart
                      </button>
                      <button
                        onClick={() => removeFromFavorites(favorite.id)}
                        className="p-2 border border-chronoGray-light rounded-md text-chronoRed hover:bg-chronoGray-light/10 transition-colors"
                        aria-label="Remove from favorites"
                      >
                        <Heart size={18} className="fill-chronoRed" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default FavoritesPage;
