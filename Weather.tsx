import React from "react";
import { useSelector } from "react-redux";
import { ZipWeather } from "./features/favorites/ZipWeather";
import { Text, View } from "react-native";
import { RootState } from "./app/store";
import { Favorites } from "./features/favorites/Favorites";
import { ZipForm } from "./features/favorites/ZipForm";

export function Weather() {
  const selected = useSelector((state: RootState) => state.favorites.selected);

  return (
    <View>
      <Favorites />
      <ZipForm />
      {selected !== "" ? (
        <ZipWeather selected={selected} />
      ) : (
        <Text>Select or Add a Zip to get started!</Text>
      )}
    </View>
  );
}
