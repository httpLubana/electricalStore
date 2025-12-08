import { View, Text, Image, StyleSheet, TouchableOpacity, ToastAndroid } from "react-native";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FavContext } from "../context/FavContext";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductDetails({ route }) {
  const { product } = route.params;
  const { addToCart } = useContext(CartContext);
  const { favorites, toggleFavorite } = useContext(FavContext);

  const handleAddToCart = () => {
    addToCart(product);
    ToastAndroid.show("Ürün sepete eklendi 🛒", ToastAndroid.SHORT);
  };

  const isFav = favorites.find((i) => i.id === product.id);

  return (
    <SafeAreaView style={styles.container}>

      {/* ❤️ Favori butonu */}
      <TouchableOpacity
        style={styles.favBtn}
        onPress={() => toggleFavorite(product)}
      >
        <Text style={{ fontSize: 30 }}>
          {isFav ? "❤️" : "🤍"}
        </Text>
      </TouchableOpacity>

      <Image source={product.image} style={styles.image} />

      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price} TL</Text>
      <Text style={styles.desc}>{product.description}</Text>

      <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
        <Text style={styles.buttonText}>Sepete Ekle 🛒</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: "center", backgroundColor: "#fff" },

  favBtn: {
    position: "absolute",
    top: 25,
    right: 25,
    zIndex: 20,
    padding: 5,
  },

  image: { width: 200, height: 200, resizeMode: "contain", marginBottom: 20 },
  name: { fontSize: 24, fontWeight: "bold" },
  price: { fontSize: 22, color: "#4f8bff", marginVertical: 10 },
  desc: { fontSize: 16, textAlign: "center", color: "#555", marginBottom: 20 },

  button: {
    backgroundColor: "#4f8bff",
    padding: 15,
    borderRadius: 10,
    width: 200,
    alignItems: "center",
  },

  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
