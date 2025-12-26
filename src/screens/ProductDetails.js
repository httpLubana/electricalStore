import { View, Text, Image, StyleSheet, TouchableOpacity, ToastAndroid } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext } from "react";

import MainButton from "../components/MainButton";
import { FavContext } from "../context/FavContext";
import { CartContext } from "../context/CartContext";

export default function ProductDetails({ route }) {
  const { product } = route.params;

  const { addToCart } = useContext(CartContext);
  const { favorites, toggleFavorite } = useContext(FavContext);

  const handleAddToCart = async () => {
    await addToCart(product);
    ToastAndroid.show("Ürün sepete eklendi 🛒", ToastAndroid.SHORT);
  };

  const isFav = favorites.some((i) => i.id === product.id);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.favBtn}
        onPress={() => toggleFavorite(product)}
      >
        <Text style={{ fontSize: 30 }}>{isFav ? "❤️" : "🤍"}</Text>
      </TouchableOpacity>

      <Image source={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price} TL</Text>
      <Text style={styles.desc}>{product.description}</Text>

      <MainButton title="Sepete Ekle 🛒" onPress={handleAddToCart} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  favBtn: {
    position: "absolute",
    top: 25,
    right: 25,
  },
  image: {
    width: 220,
    height: 220,
    resizeMode: "contain",
    marginBottom: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
  },
  price: {
    fontSize: 22,
    color: "#4f8bff",
    marginBottom: 10,
  },
  desc: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
  },
});
