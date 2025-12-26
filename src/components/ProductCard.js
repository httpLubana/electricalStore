import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from "react-native";
import { useRef } from "react";

export default function ProductCard({ item, onPress }) {
  const scale = useRef(new Animated.Value(1)).current;

  const pressIn = () => {
    Animated.spring(scale, {
      toValue: 0.97,
      useNativeDriver: true,
    }).start();
  };

  const pressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <TouchableOpacity
        style={styles.card}
        onPress={onPress}
        onPressIn={pressIn}
        onPressOut={pressOut}
        activeOpacity={0.9}
      >
        <Image source={item.image} style={styles.image} />

        <Text style={styles.name}>{item.title}</Text>
        <Text style={styles.price}>{item.price} TL</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 14,
    alignItems: "center",
    marginBottom: 16,

    // shadow
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },

  image: {
    width: 90,
    height: 90,
    resizeMode: "contain",
    marginBottom: 10,
  },

  name: {
    fontSize: 15,
    fontWeight: "500",
    color: "#111827",
    marginBottom: 4,
    textAlign: "center",
  },

  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4f8bff",
  },
});
