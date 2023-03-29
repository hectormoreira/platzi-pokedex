import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PokedexScreen from "../screen/PokedexScreen";
import PokemonScreen from "../screen/PokemonScreen";

const Stack = createStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PokedexStack"
        component={PokedexScreen}
        options={{
          title: "Pokedex",
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
    </Stack.Navigator>
  );
}
