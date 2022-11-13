import convertDateToTime from "./convert-date-to-time"
import convertMsToKmh from "./convert-ms-to-kmh"
import determineWindIcon from "./determine-wind-icon"
import getDayOfWeek from "./get-day-of-week"

export default function getWindForecast(weatherData: any, oneDay: boolean) {
  const wind = []
  const weatherDataLength = weatherData.length

  for (let i = 0; i < weatherDataLength; i++) {

    // If five-day forecast, get a record every 24 hours.
    if (!oneDay && i % 8 !== 0) continue

    const dateInMilliseconds = weatherData[i].dt * 1000
    const timeInterval = convertDateToTime(dateInMilliseconds, true)

    wind.push({
      time: oneDay ? timeInterval : getDayOfWeek(dateInMilliseconds),
      windDirection: weatherData[i].wind.deg,
      icon: determineWindIcon(weatherData[i].weather[0].main),
      windSpeed: convertMsToKmh(weatherData[i].wind.speed),
      gustSpeed: convertMsToKmh(weatherData[i].wind.gust)
    })

    // Only return the first 5 times for a 1-day forecast.
    if (oneDay && i > 3) break
    if (!oneDay && i > 39) break
  }

  return wind;
};
