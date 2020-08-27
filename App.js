import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import TabScreen from "./app/screens/TabScreen";
export default function App() {
  return <TabScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
