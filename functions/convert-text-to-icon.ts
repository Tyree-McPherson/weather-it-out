export default function convertTextToIcon(text: string, time: string, oneDayForecast: boolean = true) {

  let icon: string = ""

  if (text === "Thunderstorm") icon = "weather-lightning"
  if (text === "Drizzle") icon = "weather-rainy"
  if (text === "Rain") icon = "weather-pouring"
  if (text === "Snow") icon = "weather-snowy"
  if (text === "Mist") icon = "weather-partly-rainy"
  if (text === "Smoke") icon = "smoke"
  if (text === "Haze") icon = "weather-hazy"
  if (text === "Dust" || text === "Sand" || text === "Ash" || text === "Squall") icon = "weather-dust"
  if (text === "Fog") icon = "weather-fog"
  if (text === "Tornado") icon = "weather-tornado"
  if (text === "Clouds") icon = "weather-cloudy"

  // Use the sun/moon icon as the default catch-all icon.
  if (time.includes("AM") && oneDayForecast) {
    
    if (text === "Clear" || icon === "") icon = "moon-waning-crescent"
    
  } else if (time.includes("PM") || !oneDayForecast) {
    if (text === "Clear" || icon === "") icon = "weather-sunny"
  }

  return `mdi-${icon}`
};
