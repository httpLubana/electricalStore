import { View, FlatList, StyleSheet } from "react-native";
import { PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";


export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            onPress={() => navigation.navigate("Details", { product: item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
console.log("TEST PATH:", require("../components/ProductCard"));
