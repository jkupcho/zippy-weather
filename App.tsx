import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

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
        <PaperProvider>
          <SafeAreaView style={styles.container}>
            <Weather />
            <StatusBar style="auto" />
          </SafeAreaView>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
