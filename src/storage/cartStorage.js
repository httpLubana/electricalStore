import AsyncStorage from "@react-native-async-storage/async-storage";

const CART_KEY = "@cart_items";

// جلب السلة
export const getCart = async () => {
  const json = await AsyncStorage.getItem(CART_KEY);
  return json ? JSON.parse(json) : [];
};

// حفظ السلة
const saveCart = async (cart) => {
  await AsyncStorage.setItem(CART_KEY, JSON.stringify(cart));
};

// إضافة / زيادة منتج
export const addToCart = async (product) => {
  const cart = await getCart();
  const existing = cart.find((i) => i.id === product.id);

  let updatedCart;

  if (existing) {
    updatedCart = cart.map((i) =>
      i.id === product.id
        ? { ...i, quantity: i.quantity + 1 }
        : i
    );
  } else {
    updatedCart = [...cart, { ...product, quantity: 1 }];
  }

  await saveCart(updatedCart);
};

// إنقاص الكمية
export const decreaseQuantity = async (id) => {
  const cart = await getCart();
  const item = cart.find((i) => i.id === id);

  let updatedCart;

  if (item.quantity === 1) {
    updatedCart = cart.filter((i) => i.id !== id);
  } else {
    updatedCart = cart.map((i) =>
      i.id === id
        ? { ...i, quantity: i.quantity - 1 }
        : i
    );
  }

  await saveCart(updatedCart);
};

// حذف منتج
export const removeFromCart = async (id) => {
  const cart = await getCart();
  const updatedCart = cart.filter((i) => i.id !== id);
  await saveCart(updatedCart);
};
