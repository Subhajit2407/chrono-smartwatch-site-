
import React from "react";
import { Plus, Minus } from "lucide-react";

interface QuantityControlProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
  max?: number;
  size?: "sm" | "md" | "lg";
}

const QuantityControl: React.FC<QuantityControlProps> = ({
  quantity,
  onIncrease,
  onDecrease,
  min = 1,
  max = 10,
  size = "md",
}) => {
  const isMinimum = quantity <= min;
  const isMaximum = max !== undefined && quantity >= max;

  const buttonClasses = {
    sm: "p-1",
    md: "p-1.5",
    lg: "p-2",
  };

  const containerClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return (
    <div
      className={`inline-flex items-center border border-chronoGray-light rounded-md overflow-hidden ${containerClasses[size]}`}
    >
      <button
        onClick={onDecrease}
        disabled={isMinimum}
        className={`${buttonClasses[size]} ${
          isMinimum ? "opacity-50 cursor-not-allowed" : "hover:bg-chronoGray-light/20"
        } transition-colors flex items-center justify-center`}
        aria-label="Decrease quantity"
      >
        <Minus size={size === "sm" ? 14 : size === "md" ? 16 : 18} />
      </button>
      
      <div className="px-3 py-1 flex items-center justify-center min-w-[2.5rem]">
        {quantity}
      </div>
      
      <button
        onClick={onIncrease}
        disabled={isMaximum}
        className={`${buttonClasses[size]} ${
          isMaximum ? "opacity-50 cursor-not-allowed" : "hover:bg-chronoGray-light/20"
        } transition-colors flex items-center justify-center`}
        aria-label="Increase quantity"
      >
        <Plus size={size === "sm" ? 14 : size === "md" ? 16 : 18} />
      </button>
    </div>
  );
};

export default QuantityControl;
