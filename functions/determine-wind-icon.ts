export default function determineWindIcon(weather: string) {

  if (weather === "Clouds") return "weather-windy-variant"

  return "weather-windy"
};
