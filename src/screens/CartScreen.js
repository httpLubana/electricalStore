import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getCart, addToCart, decreaseQuantity, removeFromCart } from "../storage/cartStorage";
import MainButton from "../components/MainButton";

export default function CartScreen({ navigation }) {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const data = await getCart();
    setCart(data);
  };

  useFocusEffect(useCallback(() => { loadCart(); }, []));

  if (cart.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Sepetim 🛒</Text>
        <Text style={styles.empty}>Sepet boş</Text>
        <MainButton title="Ürünlere Git" onPress={() => navigation.navigate("Products")} />
      </SafeAreaView>
    );
  }

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Sepetim 🛒</Text>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price} TL</Text>

            <View style={styles.qtyRow}>
              <TouchableOpacity
                style={styles.qtyBtn}
                onPress={async () => { await decreaseQuantity(item.id); loadCart(); }}
              >
                <Text style={styles.qtyText}>-</Text>
              </TouchableOpacity>

              <Text style={styles.quantity}>{item.quantity}</Text>

              <TouchableOpacity
                style={styles.qtyBtn}
                onPress={async () => { await addToCart(item); loadCart(); }}
              >
                <Text style={styles.qtyText}>+</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.deleteBtn}
              onPress={async () => { await removeFromCart(item.id); loadCart(); }}
            >
              <Text style={styles.deleteText}>Sil</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.totalBox}>
        <Text style={styles.totalText}>Toplam: {totalPrice} TL</Text>
      </View>

      <MainButton title="Satın Al" onPress={() => navigation.navigate("Checkout")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 28, fontWeight: "bold", marginBottom: 15 },
  empty: { fontSize: 18, textAlign: "center", color: "#999" },
  item: { backgroundColor: "#f3f3f3", padding: 15, borderRadius: 12, marginBottom: 15 },
  name: { fontSize: 18, fontWeight: "bold" },
  price: { color: "#4f8bff" },
  qtyRow: { flexDirection: "row", alignItems: "center", marginTop: 10 },
  qtyBtn: { backgroundColor: "#ddd", padding: 8, borderRadius: 6 },
  qtyText: { fontSize: 18, fontWeight: "bold" },
  quantity: { marginHorizontal: 10, fontSize: 18 },
  deleteBtn: { marginTop: 10, backgroundColor: "#ff4f4f", padding: 10, borderRadius: 8 },
  deleteText: { color: "#fff", textAlign: "center" },
  totalBox: { backgroundColor: "#4f8bff", padding: 15, borderRadius: 12 },
  totalText: { color: "#fff", fontSize: 20, textAlign: "center" },
});
