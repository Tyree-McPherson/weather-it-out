import axios from 'axios'
import cities from '../json/city.json'

export default async function getCityWeatherData(city: string) {
  try {
    const domain: string = "https://weatheritout.azurewebsites.net";
    let lat: string = ''
    let lon: string = ''

    // Get the latitude and longitude for the respective city.
    cities.forEach((cityObject) => {
      if (cityObject.name === city) {
        lat = cityObject.lat
        lon = cityObject.lon
      }
    })

    const data = await axios
      .get(`${domain}/api/open-weather?lat=${lat}&lon=${lon}`)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        throw error
      })
    console.log(data)
    return data
  } catch {
    return {
      cod: '400',
    }
  }
}
