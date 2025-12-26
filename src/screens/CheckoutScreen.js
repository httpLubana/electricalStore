import { View, Text, StyleSheet, TextInput, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import MainButton from "../components/MainButton";

export default function CheckoutScreen({ navigation }) {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleOrder = () => {
    if (!name || !phone || !address) {
      Alert.alert("Hata", "Lütfen tüm bilgileri doldurun");
      return;
    }

    if (cart.length === 0) {
      Alert.alert("Sepet boş", "Sepetinde ürün yok");
      return;
    }

    clearCart();

    navigation.navigate("OrderSuccess", {
      name,
      total: totalPrice,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Sipariş Bilgileri</Text>

        <TextInput
          style={styles.input}
          placeholder="Ad Soyad"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Telefon"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />

        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Adres"
          multiline
          value={address}
          onChangeText={setAddress}
        />

        <View style={styles.totalBox}>
          <Text style={styles.totalText}>
            Toplam: {totalPrice} TL
          </Text>
        </View>

        <MainButton title="Siparişi Onayla" onPress={handleOrder} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
  },

  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#f3f3f3",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },

  totalBox: {
    padding: 15,
    backgroundColor: "#4f8bff",
    borderRadius: 12,
    marginVertical: 20,
  },

  totalText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});
