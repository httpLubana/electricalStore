import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FavContext } from "../context/FavContext";
import MainButton from "../components/MainButton";

export default function FavoritesScreen({ navigation }) {
  const { favorites, toggleFavorite, clearFavorites } = useContext(FavContext);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Favorilerim </Text>

      {favorites.length === 0 && (
        <Text style={styles.empty}>Henüz favori ürün yok 🤍</Text>
      )}

      <FlatList
        data={favorites}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Details", { product: item })}
          >
            {}
            <TouchableOpacity
              style={styles.favBtn}
              onPress={(e) => {
                e.stopPropagation();
                toggleFavorite(item);
              }}
            >
              <Text style={{ fontSize: 26 }}>❤️</Text>
            </TouchableOpacity>

            <Image source={item.image} style={styles.image} />
            <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
            <Text style={styles.price}>{item.price} TL</Text>
          </TouchableOpacity>
        )}
      />

      {}
      {favorites.length > 0 && (
        <MainButton
          title="Favorileri Temizle"
          onPress={clearFavorites}
        />
      )}

      {}
      <MainButton
        title="Ürünlere Git"
        onPress={() => navigation.navigate("Products")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: "#c2c2c2ff" },
  header: { fontSize: 28, fontWeight: "bold", marginBottom: 15 },
  empty: { fontSize: 18, textAlign: "center", marginTop: 40, color: "#777" },

  card: {
    width: "48%",
    backgroundColor: "#f3f3f3",
    padding: 10,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
    alignItems: "center",
    position: "relative",
  },

  favBtn: {
    position: "absolute",
    top: 8,
    right: 8,
    zIndex: 10,
  },

  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
  },
  name: { fontSize: 16, fontWeight: "600" },
  price: { fontSize: 15, color: "#ff4f8b", marginTop: 4 },
});
