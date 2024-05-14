import cities from "~/json/city.json";

export default function getTimeZone(city: string) {

  const numberOfCities: number = cities.length
  let cityTimezone: string = ""

  for (let i = 0; i < numberOfCities; i++) {
    if (cities[i].name === city) {
      cityTimezone = cities[i].timezone
      break
    }
  }

  return cityTimezone
}
