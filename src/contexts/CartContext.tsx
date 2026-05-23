import { createContext, useContext, useState, type ReactNode } from 'react';
import type { CartItem, Pizza } from '../types';

interface CartContextType {
  items: CartItem[];
  addToCart: (pizza: Pizza, size: 'P' | 'M' | 'G') => void;
  removeFromCart: (id: string, size: 'P' | 'M' | 'G') => void;
  updateQuantity: (id: string, size: 'P' | 'M' | 'G', quantity: number) => void;
  total: number;
  itemCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (pizza: Pizza, size: 'P' | 'M' | 'G') => {
    setItems((prev) => {
      const existing = prev.find((i) => i.pizza.id === pizza.id && i.size === size);
      if (existing) {
        return prev.map((i) =>
          i.pizza.id === pizza.id && i.size === size
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { pizza, size, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string, size: 'P' | 'M' | 'G') => {
    setItems((prev) => prev.filter((i) => !(i.pizza.id === id && i.size === size)));
  };

  const updateQuantity = (id: string, size: 'P' | 'M' | 'G', quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id, size);
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.pizza.id === id && i.size === size ? { ...i, quantity } : i
      )
    );
  };

  const total = items.reduce((sum, item) => sum + item.pizza.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        total,
        itemCount,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
