export interface ForecastApiResponse {
  location: Location;
  current: CurrentForecast;
  forecast: Forecast;
}

export interface Forecast {
  forecastday: DateForecast[];
}

export interface Location {
  name: string;
  region: string;
  country: string;
}

export interface CurrentForecast {
  temp_f: number;
  temp_c: number;
  condition: Condition;
}

export interface Condition {
  text: string;
}

export interface DateForecast {
  date: string;
  day: DayForecast;
}

export interface DayForecast {
  maxtemp_f: number;
  mintemp_f: number;
}
