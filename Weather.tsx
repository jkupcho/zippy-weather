import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Forecast } from "./features/zipCodes/Forecast";
import { StyleSheet, Text, View } from "react-native";
import { RootState } from "./app/store";
import { Favorites } from "./features/zipCodes/Favorites";
import { ZipFormDialog } from "./features/zipCodes/ZipForm";
import { FAB } from "react-native-paper";

export function Weather() {
  const selected = useSelector((state: RootState) => state.zipCodes.selected);
  const [dialogVisible, setDialogVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.favoritesContainer}>
        <Favorites />
      </View>
      <ZipFormDialog
        visible={dialogVisible}
        hideDialog={() => setDialogVisible(false)}
      />
      <View style={styles.forecastContainer}>
        {selected !== "" ? (
          <Forecast selected={selected} />
        ) : (
          <Text>Select or Add a Zip to get started!</Text>
        )}
      </View>
      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => setDialogVisible(true)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  favoritesContainer: {
    flexGrow: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  forecastContainer: {
    flexGrow: 10,
    paddingVertical: 25,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
