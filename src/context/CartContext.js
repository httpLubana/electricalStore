import { createContext, useState, useEffect, useMemo } from "react";
import { getCart, saveCart, clearCartStorage } from "../storage/cartStorage";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);


  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    const storedCart = await getCart();
    setCart(storedCart);
  };

  const addToCart = async (product) => {
    let updatedCart;

    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart);
    await saveCart(updatedCart); 
  };

  const removeFromCart = async (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    await saveCart(updatedCart);
  };

  const clearCart = async () => {
    setCart([]);
    await clearCartStorage();
  };

  const totalPrice = useMemo(() => {
    return cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalPrice,
        loadCart, 
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
