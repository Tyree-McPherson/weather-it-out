import cities from "~/json/city.json"

export default function getOneDisplayName(city: string) {
  
  const numberOfCities: number = cities.length
  let cityDisplayName: string = ""

  for (let i = 0; i < numberOfCities; i++) {
    if (city === cities[i].name) {
      cityDisplayName = cities[i].displayName
      break
    }
  }

  return cityDisplayName
};
