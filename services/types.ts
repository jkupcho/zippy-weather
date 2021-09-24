export interface ForecastApiResponse {
  location: Location;
  current: CurrentForecast;
  forecast: Forecast;
}

export interface Forecast {
  forecastday: DailySummary[];
}

export interface Location {
  name: string;
  region: string;
  country: string;
}

export interface CurrentForecast {
  temp_f: number;
  temp_c: number;
}

export interface DailySummary {}
