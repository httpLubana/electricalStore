import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Electrical Store</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Products")}
      >
        <Text style={styles.buttonText}>Ürünlere Git</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#4f8bff" }]}
        onPress={() => navigation.navigate("Cart")}
      >
        <Text style={styles.buttonText}>Sepetim 🛒</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#4f8bff" }]}
        onPress={() => navigation.navigate("Favorites")}
      >
        <Text style={styles.buttonText}>Favorilerim </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
  title: { fontSize: 32, fontWeight: "bold", marginBottom: 20 },
  button: {
    backgroundColor: "#4f8bff",
    padding: 15,
    borderRadius: 10,
    width: 200,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
