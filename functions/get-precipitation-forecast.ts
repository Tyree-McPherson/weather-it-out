import convertDateToTime from "./convert-date-to-time"
import getDayOfWeek from "./get-day-of-week"
import getRainDescription from "./get-rain-description"

export default function getPrecipitationForecast(weatherData: any, oneDay: boolean) {
  const precipitation = []
  const weatherDataLength = weatherData.length

  for (let i = 0; i < weatherDataLength; i++) {

    // If five-day forecast, get a record every 24 hours.
    if (!oneDay && i % 8 !== 0) continue

    const dateInMilliseconds = weatherData[i].dt * 1000
    const timeInterval = convertDateToTime(dateInMilliseconds, true)

    precipitation.push({
      time: oneDay ? timeInterval : getDayOfWeek(dateInMilliseconds),
      description: getRainDescription(weatherData[i].weather[0]),
      percentage: Math.round(weatherData[i].pop * 100),
      rainfall: `${Math.round((weatherData[i].rain && weatherData[i].rain["3h"]) || 0)}mm`
    })

    // Only return the first 5 times for a 1-day forecast.
    if (oneDay && i > 3) break
    if (!oneDay && i > 39) break
  }

  return precipitation;
};
