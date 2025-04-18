
import { createContext, useState, useContext, ReactNode, useEffect } from "react";

export type FavoriteItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  model: string;
};

type FavoritesContextType = {
  favorites: FavoriteItem[];
  addToFavorites: (item: FavoriteItem) => void;
  removeFromFavorites: (id: string) => void;
  toggleFavorite: (item: FavoriteItem) => void;
  isFavorite: (id: string) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  // Load favorites from localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem("chronoFavorites");
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (error) {
        console.error("Failed to parse favorites from localStorage", error);
      }
    }
  }, []);

  // Save favorites to localStorage when updated
  useEffect(() => {
    localStorage.setItem("chronoFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const isFavorite = (id: string) => favorites.some((item) => item.id === id);

  const addToFavorites = (item: FavoriteItem) => {
    if (!isFavorite(item.id)) {
      setFavorites([...favorites, item]);
    }
  };

  const removeFromFavorites = (id: string) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  const toggleFavorite = (item: FavoriteItem) => {
    if (isFavorite(item.id)) {
      removeFromFavorites(item.id);
    } else {
      addToFavorites(item);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
