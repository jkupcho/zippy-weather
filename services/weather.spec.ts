import forecastResponse from "./forecastResponse.json";
import { transformForecastResponse } from "./weather";

describe("getForecastForZip", () => {
  describe("transformForecastResponse", () => {
    it("should parse response correctly", () => {
      const transformed = transformForecastResponse(forecastResponse);

      expect(transformed.forecast).toBeDefined();
      expect(transformed.location).toBeDefined();
      expect(transformed.current).toBeDefined();

      expect(transformed.forecast.forecastday.length).toBe(7);
    });
  });
});
