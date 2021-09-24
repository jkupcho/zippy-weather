import React from "react";
import { useSelector } from "react-redux";
import { Text } from "react-native";
import { RootState } from "../../app/store";

export function Favorite({ zip }: { zip: string }) {
  return <Text>{zip}</Text>;
}

export function Favorites() {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  return (
    <>
      {favorites.map((favorite) => (
        <Favorite key={favorite} zip={favorite} />
      ))}
    </>
  );
}
