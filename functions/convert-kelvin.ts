export default function convertKelvin(temperature: number, celsius: boolean = true) {

  let newTemperature: number = 0
  
  // Convert Kelvin to Celsius.
  if (celsius) newTemperature = temperature - 273.15

  // Convert Kelvin to Fahrenheit.
  if (!celsius) newTemperature = (temperature - 273.15) * 9/5 + 32

  return Math.round(newTemperature)
};
