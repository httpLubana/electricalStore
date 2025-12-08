import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import HomeScreen from "./src/screens/HomeScreen";
import ProductsScreen from "./src/screens/ProductsScreen";
import ProductDetails from "./src/screens/ProductDetails";
import CartScreen from "./src/screens/CartScreen";
import FavoritesScreen from "./src/screens/FavoritesScreen";

import { CartProvider } from "./src/context/CartContext";
import { FavProvider } from "./src/context/FavContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      {}
      <StatusBar hidden />

      <FavProvider>
        <CartProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Products" component={ProductsScreen} />
              <Stack.Screen name="Details" component={ProductDetails} />
              <Stack.Screen name="Cart" component={CartScreen} />
              <Stack.Screen name="Favorites" component={FavoritesScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </CartProvider>
      </FavProvider>
    </>
  );
}
