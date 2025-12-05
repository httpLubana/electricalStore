import { View, Text, Image, StyleSheet } from "react-native";

export default function ProductDetails({ route }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />

      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price} TL</Text>
      <Text style={styles.desc}>{product.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 12,
  },
  name: {
    marginTop: 15,
    fontSize: 22,
    fontWeight: "bold",
  },
  price: {
    fontSize: 18,
    marginTop: 10,
    color: "green",
  },
  desc: {
    marginTop: 15,
    fontSize: 16,
    color: "#444",
  },
});
