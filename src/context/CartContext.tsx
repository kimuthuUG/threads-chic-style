import React, { createContext, useContext, useState, ReactNode } from "react";
import { CartItem, Product } from "@/types/product";
import { toast } from "@/hooks/use-toast";

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, size: string, color: string, quantity?: number) => void;
  removeFromCart: (productId: string, size: string, color: string) => void;
  updateQuantity: (productId: string, size: string, color: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product, size: string, color: string, quantity: number = 1) => {
    setCart((prev) => {
      const existingItem = prev.find(
        (item) => item.id === product.id && item.selectedSize === size && item.selectedColor === color
      );

      if (existingItem) {
        toast({ title: "Cart updated", description: `${product.name} quantity updated` });
        return prev.map((item) =>
          item.id === product.id && item.selectedSize === size && item.selectedColor === color
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      toast({ title: "Added to cart", description: `${product.name} added to your cart` });
      return [...prev, { ...product, selectedSize: size, selectedColor: color, quantity }];
    });
  };

  const removeFromCart = (productId: string, size: string, color: string) => {
    setCart((prev) => prev.filter(
      (item) => !(item.id === productId && item.selectedSize === size && item.selectedColor === color)
    ));
    toast({ title: "Removed from cart", description: "Item removed from your cart" });
  };

  const updateQuantity = (productId: string, size: string, color: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, size, color);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId && item.selectedSize === size && item.selectedColor === color
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};
