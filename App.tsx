import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ZipForm } from "./features/favorites/ZipForm";
import { Weather } from "./Weather";
import { Favorites } from "./features/favorites/Favorites";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Favorites />
        <ZipForm />
        <Weather />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
