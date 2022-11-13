export default function getRainDescription(weather: any) {
  
  const main: string = weather.main
  const description: string = weather.description

  if (description.includes("rain") || description.includes("Rain")) return description

  if (main.includes("rain") || main.includes("Rain")) return main

  return "No rain"
};
