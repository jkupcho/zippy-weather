import React from "react";
import { useSelector } from "react-redux";
import { ZipWeather } from "./features/favorites/ZipWeather";
import { Text } from "react-native";
import { RootState } from "./app/store";

export function Weather() {
  const selected = useSelector((state: RootState) => state.favorites.selected);

  return (
    <>
      {selected !== "" ? (
        <ZipWeather selected={selected} />
      ) : (
        <Text>Select or Add a Zip to get started!</Text>
      )}
    </>
  );
}
