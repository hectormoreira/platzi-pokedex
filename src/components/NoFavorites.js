import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function NoFavorites() {
  const navigation = useNavigation();
  return (
    <View style={styles.navigation}>
      <Text style={styles.text}>No tienes favoritos</Text>
      <Button
        title="Ir a Pokedex"
        onPress={() => navigation.navigate("Pokedex")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 20,
  },
  text: {
    marginTop: 20,
    textAlign: "center",
    marginBottom: 10,
  },
});
