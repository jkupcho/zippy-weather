import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-native-paper";
import { select } from "./zipCodesSlice";

import { RootState } from "../../app/store";
import { StyleSheet } from "react-native";

export function Favorite({ zip }: { zip: string }) {
  const dispatch = useDispatch();

  function handleOnPress() {
    dispatch(select(zip));
  }
  return (
    <Button style={styles.button} onPress={handleOnPress} mode="outlined">
      {zip}
    </Button>
  );
}

export function Favorites() {
  const favorites = useSelector((state: RootState) => state.zipCodes.favorites);

  return (
    <>
      {favorites.map((favorite) => (
        <Favorite key={favorite} zip={favorite} />
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 36,
    justifyContent: "center",
    marginHorizontal: 5,
  },
});
