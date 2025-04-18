
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useFavorites } from "@/context/FavoritesContext";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const [selectedColor, setSelectedColor] = useState(Object.keys(product.images)[0]);
  const currentImage = product.images[selectedColor];
  const favorited = isFavorite(product.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite({
      id: product.id,
      name: product.name,
      price: product.price,
      image: currentImage,
      model: product.model,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="product-card group"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden pt-6 pb-2 px-4">
          {product.isNew && (
            <span className="absolute top-3 left-3 bg-chronoBlack text-white text-xs px-2 py-1 rounded-full z-10">
              New
            </span>
          )}
          <button
            onClick={handleFavoriteClick}
            className="absolute top-3 right-3 bg-white/80 hover:bg-white text-chronoBlack rounded-full p-1.5 z-10 transition-all"
            aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart
              size={18}
              className={`${favorited ? "fill-chronoRed text-chronoRed" : "text-chronoBlack"}`}
            />
          </button>

          <div className="relative h-60 flex items-center justify-center mb-5">
            <motion.img
              key={currentImage}
              src={currentImage}
              alt={`${product.name} in ${selectedColor}`}
              className="object-contain h-full max-h-60 w-auto transition-all group-hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <div className="flex justify-center space-x-2 mb-3">
            {product.colors.map((color) => (
              <button
                key={color.name}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedColor(color.name);
                }}
                className={`w-5 h-5 rounded-full border ${
                  selectedColor === color.name
                    ? "ring-2 ring-offset-2 ring-chronoBlack"
                    : "ring-1 ring-chronoGray-light"
                }`}
                style={{ backgroundColor: color.value }}
                aria-label={`Select ${color.name} color`}
              />
            ))}
          </div>

          <div className="text-center">
            <h3 className="font-medium text-lg">{product.name}</h3>
            <p className="text-sm text-chronoGray-dark mb-1">{product.model}</p>
            <p className="font-medium text-lg">${product.price}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
