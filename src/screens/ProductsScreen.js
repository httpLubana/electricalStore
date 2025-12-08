import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PRODUCTS } from "../data/products";

export default function ProductsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.header}>Ürünler</Text>

      <FlatList
        data={PRODUCTS}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Details", { product: item })}
          >
            <Image source={item.image} style={styles.image} />

            <Text style={styles.name} numberOfLines={1}>
              {item.name}
            </Text>

            <Text style={styles.price}>{item.price} TL</Text>
          </TouchableOpacity>
        )}
      />

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    paddingTop: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  card: {
    backgroundColor: "#f3f3f3",
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
    width: "48%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    resizeMode: "contain",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 6,
  },
  price: {
    fontSize: 15,
    color: "#ff4f8b",
    fontWeight: "bold",
  },
});
