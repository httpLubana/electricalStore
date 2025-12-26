import { addToCart } from "../storage/cartStorage";
import { Alert } from "react-native";

const handleAddToCart = async () => {
  await addToCart(product);
  Alert.alert("Başarılı", "Ürün sepete eklendi 🛒");
};
<MainButton title="Sepete Ekle" onPress={handleAddToCart} />
