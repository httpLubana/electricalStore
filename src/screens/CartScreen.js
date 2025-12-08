import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartScreen() {
  const { cart, addToCart, decreaseQuantity, removeFromCart, totalPrice } =
    useContext(CartContext);

  return (
    <View style={styles.container}>
        <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Sepetim 🛒</Text>

      {cart.length === 0 && <Text style={styles.empty}>Sepet boş</Text>}

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price} TL</Text>
            </View>

            <View style={styles.qtyRow}>
              <TouchableOpacity
                style={styles.qtyBtn}
                onPress={() => decreaseQuantity(item.id)}
              >
                <Text style={styles.qtyText}>-</Text>
              </TouchableOpacity>

              <Text style={styles.quantity}>{item.quantity}</Text>

              <TouchableOpacity
                style={styles.qtyBtn}
                onPress={() => addToCart(item)}
              >
                <Text style={styles.qtyText}>+</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.deleteBtn}
              onPress={() => removeFromCart(item.id)}
            >
              <Text style={styles.deleteText}>Sil</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      </SafeAreaView>

      {/* TOPLAM FİYAT */}
      {cart.length > 0 && (
        <View style={styles.totalBox}>
          <Text style={styles.totalText}>Toplam: {totalPrice} TL</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 28, fontWeight: "bold", marginBottom: 15 },
  empty: { fontSize: 18, marginTop: 40, textAlign: "center", color: "#999" },
  item: {
    backgroundColor: "#f3f3f3",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },
  name: { fontSize: 18, fontWeight: "bold" },
  price: { marginTop: 4, color: "#ff4f8b" },
  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  qtyBtn: {
    backgroundColor: "#ddd",
    padding: 8,
    borderRadius: 6,
    marginHorizontal: 5,
  },
  qtyText: { fontSize: 18, fontWeight: "bold" },
  quantity: { fontSize: 18, fontWeight: "bold" },
  deleteBtn: {
    marginTop: 10,
    backgroundColor: "#ff4f4f",
    padding: 10,
    borderRadius: 8,
    width: 80,
    alignItems: "center",
  },
  deleteText: { color: "#fff", fontWeight: "bold" },
  totalBox: {
    backgroundColor: "#4f8bff",
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
  },
  totalText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
