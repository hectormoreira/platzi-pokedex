# Notas del [Curso Práctico de React Native: Manejo de Listas y Consumo de APIs](https://platzi.com/cursos/react-native-listas-apis/)

Platzi: Ruta **Desarrollo de Apps Multiplataforma**

## Docs

- [React navigation](https://reactnavigation.org/docs/getting-started)

## Depencias

```
yarn add @react-navigation/native

expo install react-native-screens react-native-safe-area-context
npx expo install react-native-gesture-handler

yarn add @react-navigation/native-stack
yarn add @react-navigation/stack

yarn add @react-navigation/bottom-tabs
yarn add react-native-vector-icons

yarn add lodash
```

## safeAreaView

```
npm install react-native-safe-area-context
```

## Run dev

```
yarn start
```

## Styles platform

using: `import { Platform } from "react-native";`

> `Platform` permite saber el OS del dispositivo

```
const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android" ? 30 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 90 : 60,
  },
});

```

## Apis & docs

- [Pokemon API](https://pokeapi.co/)
