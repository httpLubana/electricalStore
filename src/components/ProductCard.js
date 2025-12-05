import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function ProductCard({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={item.image} style={styles.image} />

      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price} TL</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 140,
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
  },
  price: {
    fontSize: 14,
    marginTop: 5,
    color: "green",
  },
});
