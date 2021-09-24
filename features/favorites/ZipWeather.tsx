import React from "react";
import { useGetForecastForZipQuery } from "../../services/weather";

import { Text } from "react-native";

export function ZipWeather({ selected }: { selected: string }) {
  const { data, isError, isFetching } = useGetForecastForZipQuery(selected);

  if (isError) {
    return <Text>Error while fetching!</Text>;
  }

  if (isFetching) {
    return <Text>Loading Weather...</Text>;
  }

  return (
    <>
      <Text>{data?.current.temp_f}F</Text>
      <Text>
        {data?.location.name}, {data?.location.country}
      </Text>
    </>
  );
}
