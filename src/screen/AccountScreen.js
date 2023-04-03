import { Text, View } from "react-native";
import React from "react";
import LoginForm from "../components/Auth/LoginForm";
import UserData from "../components/Auth/UserData";
// import { SafeAreaView } from "react-native-safe-area-context";

export default function AccountScreen() {
  const auth = null;

  return <View>{auth ? <UserData /> : <LoginForm />}</View>;
}
