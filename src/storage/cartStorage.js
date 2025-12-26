import AsyncStorage from "@react-native-async-storage/async-storage";

const CART_KEY = "@cart";

export const getCart = async () => {
  const data = await AsyncStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveCart = async (cart) => {
  await AsyncStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const addToCart = async (product) => {
  const cart = await getCart();
  const exists = cart.find((item) => item.id === product.id);

  let updatedCart;

  if (exists) {
    updatedCart = cart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    updatedCart = [...cart, { ...product, quantity: 1 }];
  }

  await saveCart(updatedCart);
};

export const decreaseQuantity = async (id) => {
  const cart = await getCart();

  const updatedCart = cart
    .map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
    .filter((item) => item.quantity > 0);

  await saveCart(updatedCart);
};

export const removeFromCart = async (id) => {
  const cart = await getCart();
  await saveCart(cart.filter((item) => item.id !== id));
};

export const clearCart = async () => {
  await AsyncStorage.removeItem(CART_KEY);
};
