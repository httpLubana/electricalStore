import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MainButton from "../components/MainButton";

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/home-bg.jpg")}
      style={styles.bg}
      resizeMode="cover"
    >
      {/* Overlay */}
      <View style={styles.overlay}>
        <SafeAreaView style={styles.container}>
          
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>⚡ Electrical Store</Text>
            <Text style={styles.subtitle}>
              Elektroniğin en güvenilir adresi
            </Text>
          </View>

          {/* Buttons */}
          <View style={styles.buttons}>
            <MainButton
              title=" Ürünlere Git"
              onPress={() => navigation.navigate("Products")}
            />
            <MainButton
              title=" Sepetim"
              onPress={() => navigation.navigate("Cart")}
            />
            <MainButton
              title=" Favorilerim"
              onPress={() => navigation.navigate("Favorites")}
            />
          </View>

        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.30)", 
  },

  container: {
    flex: 1,
    paddingHorizontal:40,
  },

 header: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 200,   
},


  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },

subtitleBox: {
  backgroundColor: "rgba(255,255,255,0.15)",
  paddingHorizontal: 16,
  paddingVertical: 6,
  borderRadius: 20,
  marginTop: 8,
},

subtitle: {
  fontSize: 15,
  color: "#fff",
},



  buttons: {
    flex: 1,
    justifyContent: "center",
  },
});
