import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MainButton from "../components/MainButton";

export default function OrderSuccessScreen({ route, navigation }) {
  const { name, total } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.emoji}>✅</Text>

      <Text style={styles.title}>Siparişini Aldık!</Text>

      <Text style={styles.text}>
        Teşekkürler <Text style={styles.bold}>{name}</Text>!
      </Text>

      <Text style={styles.text}>Toplam Tutar: {total} TL</Text>

      {/* ⭐ MainButton ile modern dönüş butonu */}
      <MainButton
        title="Ana Sayfaya Dön"
        onPress={() => navigation.navigate("Home")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  emoji: { fontSize: 80, marginBottom: 20 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 18, marginTop: 5, textAlign: "center" },
  bold: { fontWeight: "bold" },
});
