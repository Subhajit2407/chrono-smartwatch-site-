
import { createContext, useState, useContext, ReactNode, useEffect } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
  };
  phone?: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = user !== null;

  // Mock users for demo
  const mockUsers = [
    {
      id: "user1",
      name: "Demo User",
      email: "demo@example.com",
      password: "password123", // In a real app, passwords would be hashed
      profileImage: "/lovable-uploads/49328ba9-171f-424b-8ae6-3a787a55fafa.png",
      address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001",
        country: "USA",
      },
      phone: "+1 (123) 456-7890",
    },
  ];

  // Check local storage for logged in user on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("chronoUser");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse user from localStorage", error);
      }
    }
  }, []);

  // Save user to local storage when changed
  useEffect(() => {
    if (user) {
      localStorage.setItem("chronoUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("chronoUser");
    }
  }, [user]);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call with timeout
    return new Promise((resolve) => {
      setTimeout(() => {
        const foundUser = mockUsers.find(
          (u) => u.email === email && u.password === password
        );
        
        if (foundUser) {
          // Don't include password in the user state
          const { password, ...userWithoutPassword } = foundUser;
          setUser(userWithoutPassword);
          resolve(true);
        } else {
          resolve(false);
        }
      }, 800); // Simulate network delay
    });
  };

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simulate API call with timeout
    return new Promise((resolve) => {
      setTimeout(() => {
        // Check if email already exists
        const emailExists = mockUsers.some(u => u.email === email);
        
        if (emailExists) {
          resolve(false);
        } else {
          // In a real app, we would create a user in the database
          // and handle proper authentication
          const newUser = {
            id: `user${mockUsers.length + 1}`,
            name,
            email,
          };
          
          setUser(newUser);
          resolve(true);
        }
      }, 800); // Simulate network delay
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("chronoUser");
  };

  const updateProfile = (updates: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        signup,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
