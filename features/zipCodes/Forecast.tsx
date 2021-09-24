import React, { useState } from "react";
import { View } from "react-native";

import { useGetForecastForZipQuery } from "../../services/weather";
import { ActivityIndicator, Button, Colors, Text } from "react-native-paper";
import { DateForecast } from "../../services/types";

function DailyForecastView({ day }: { day: DateForecast }) {
  return (
    <View style={{ flexDirection: "row" }}>
      <Text>{day.date}</Text>
      <Text>Hi: {day.day.maxtemp_f}</Text>
      <Text>Low: {day.day.mintemp_f}</Text>
    </View>
  );
}

function ForecastDay({ forecastday }: { forecastday?: DateForecast[] }) {
  return (
    <>
      {forecastday?.map((day, i) => (
        <DailyForecastView key={day.date + i} day={day} />
      ))}
    </>
  );
}

export function Forecast({ selected }: { selected: string }) {
  const { data, isError, isFetching } = useGetForecastForZipQuery(selected);
  const [threeDay, setThreeDay] = useState(false);

  if (isError) {
    return <Text>Error while fetching!</Text>;
  }

  if (isFetching) {
    return <ActivityIndicator animating={true} color={Colors.purple50} />;
  }

  let forecastday = data?.forecast.forecastday;

  if (threeDay && forecastday !== undefined) {
    forecastday = forecastday.slice(0, 3);
  }

  return (
    <View>
      <Text style={{ fontWeight: "bold", fontSize: 24 }}>
        {data?.location.name}, {data?.location.country}
      </Text>
      <Text style={{ marginBottom: 24, fontSize: 18 }}>
        {data?.current.condition.text}
      </Text>
      <Text style={{ fontSize: 72, marginBottom: 24 }}>
        {data?.current.temp_f}°
      </Text>
      <ForecastDay forecastday={forecastday} />
      <Button onPress={() => setThreeDay(true)}>Three Day</Button>
      <Button onPress={() => setThreeDay(false)}>Seven Day</Button>
    </View>
  );
}
