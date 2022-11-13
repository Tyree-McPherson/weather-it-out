import axios from 'axios'
import cities from '../json/city.json'

export default async function getCityWeatherData(city: string, serverlessDomain: string) {
  try {
    const domain: string = serverlessDomain
    let lat: string = ''
    let lon: string = ''

    // Get the latitude and longitude for the respective city.
    cities.forEach((cityObject) => {
      if (cityObject.name === city) {
        lat = cityObject.lat
        lon = cityObject.lon
      }
    })

    // Fetch all the city data, to populate the temperature, precipitation, and wind sections.
    const data = await axios
      .get(`${domain}/api/open-weather?lat=${lat}&lon=${lon}`)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        throw error
      })
      
    return data
  } catch {
    return {
      cod: '400',
    }
  }
}
