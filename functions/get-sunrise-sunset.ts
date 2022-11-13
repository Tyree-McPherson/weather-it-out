export default function getSunriseSunset(time: number, timeZone: number) {

  // Convert the seconds from the timeZone property to milliseconds and get rid of the negative
  const timeZoneOffset = Math.abs(timeZone * 1000)
  let formattedTime = new Date((time * 1000) - timeZoneOffset).toUTCString();

  let minutes = formattedTime.split(":")[1];
  let hours = parseInt(formattedTime.split(" ")[4].split(":")[0]);
  const firstDigit = hours.toString().charAt(0);

  if (minutes === "0") minutes = "00";

  // If time is in the AM.
  if (hours <= 12) {
    formattedTime = `${hours}:${minutes} AM`;
    
  } else {
    
    hours = hours - 12;
    
    // Time is in the PM.
    formattedTime = `${hours}:${minutes} PM`;
  };
  
  const formattedTimeLength = formattedTime.length;
  
  // Get rid of 0 if it is the first number.
  if (firstDigit === "0") formattedTime = formattedTime.slice(1, formattedTimeLength);

  return formattedTime;
};
