import Constants from "expo-constants";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ForecastApiResponse } from "./types";

const baseUrl = Constants.manifest?.extra?.weatherApiUrl as string;
const key = Constants.manifest?.extra?.weatherApiKey as string;

export function transformForecastResponse(response: ForecastApiResponse) {
  // Cheating here to allow for 7 day forecast
  const forecast = {
    forecast: response.forecast,
    forecastday: [
      ...response.forecast.forecastday,
      ...response.forecast.forecastday,
      response.forecast.forecastday[0],
    ],
  };
  return {
    location: response.location,
    current: response.current,
    forecast,
  };
}

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers: Headers) => {
      headers.append("key", key);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getForecastForZip: builder.query<ForecastApiResponse, string>({
      query: (zip) => ({
        url: `forecast.json`,
        method: "GET",
        params: {
          q: zip,
          days: 3, // just defaulting to 3 here since that's the max that returns
          aqi: "no",
          alerts: "no",
        },
      }),
      transformResponse: transformForecastResponse,
    }),
  }),
});

export const { useGetForecastForZipQuery } = weatherApi;
