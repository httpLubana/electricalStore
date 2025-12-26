import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PRODUCTS } from "../data/products"
export default function ProductsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.header}>Ürünler</Text>

      <FlatList
        data={PRODUCTS}
        numColumns={2}
        showsVerticalScrollIndicator={false}
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
  },

  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#2d2d2d",
  },

  card: {
    width: "48%",
    backgroundColor: "#a5a3a3ff",
    borderRadius: 14,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 18,
    alignItems: "center",

  
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },

  image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 12,
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },

  price: {
    fontSize: 16,
    color: "#4f8bff",
    fontWeight: "bold",
  },
});
