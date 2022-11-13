import convertDateToTime from "./convert-date-to-time"
import convertKelvin from "./convert-kelvin"
import convertTextToIcon from "./convert-text-to-icon"
import getDayOfWeek from "./get-day-of-week"

export default function getTemperatureForecast(weatherData: any, oneDay: boolean, celsius: boolean) {
  const weather = []
  const weatherDataLength = weatherData.length

  for (let i = 0; i < weatherDataLength; i++) {

    // If five-day forecast, get a record every 24 hours.
    if (!oneDay && i % 8 !== 0) continue

    const dateInMilliseconds = weatherData[i].dt * 1000
    const timeInterval = convertDateToTime(dateInMilliseconds, true)

    weather.push({
      time: oneDay ? timeInterval : getDayOfWeek(dateInMilliseconds),
      description: weatherData[i].weather[0].main,
      icon: convertTextToIcon(weatherData[i].weather[0].main, timeInterval, oneDay),
      degree: convertKelvin(weatherData[i].main.temp, celsius).toString(),
      humidity: `${weatherData[i].main.humidity}%`
    })

    // Only return the first 5 times for a 1-day forecast.
    if (oneDay && i > 3) break
    if (!oneDay && i > 39) break
  }

  return weather;
};
