import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Weather } from "./Weather";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  const persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <View style={styles.container}>
          <Weather />
          <StatusBar style="auto" />
        </View>
      </PersistGate>
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
