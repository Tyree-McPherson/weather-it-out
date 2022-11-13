import axios from "axios";
import cities from "~/json/city.json";

export default async function getTimeZone(city: string, serverlessDomain: string) {

  const numberOfCities: number = cities.length
  const domain: string = serverlessDomain
  let cityIp: string = ""

  for (let i = 0; i < numberOfCities; i++) {
    if (cities[i].name === city) {
      cityIp = cities[i].ip
      break
    }
  }

  // Make an HTTP request to the serverless function, to get the time zone abbreviation.
  const data = await axios
    .get(`${domain}/api/world-time?ip=${cityIp}`)
    .then((response) => {

      if (response.data.cod !== "200") throw new Error("HTTP request failed");
      
      return response.data.abbreviation
    })
    .catch((error) => {
      throw error
    })

  return data
};
