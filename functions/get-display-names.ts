import cityData from "~/json/city.json";

export default function getDisplayNames() {
  
  const cities: Array<string> = [];

  cityData.forEach(city => {
    cities.push(city.displayName)
  });

  return cities;
};
