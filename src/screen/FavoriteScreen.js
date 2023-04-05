import { Button, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonsFavoriteApi } from "../api/favorite";

export default function FavoriteScreen() {
  const checkFavorites = async () => {
    const response = await getPokemonsFavoriteApi();
    console.log(response);
  };

  return (
    <SafeAreaView>
      <Text>Favorite</Text>
      <Button title="Obtener favoritos" onPress={checkFavorites} />
    </SafeAreaView>
  );
}
