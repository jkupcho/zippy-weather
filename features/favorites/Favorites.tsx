import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-native";
import { select } from "./favoritesSlice";

import { RootState } from "../../app/store";

export function Favorite({ zip }: { zip: string }) {
  const dispatch = useDispatch();

  function handleOnPress() {
    dispatch(select(zip));
  }
  return <Button onPress={handleOnPress} title={zip} />;
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
