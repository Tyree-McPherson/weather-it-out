export default function convertDateToTime(date: Date | number, sliceMinutes?: boolean) {
  let formattedTime = new Date(date)
  .toTimeString()
  .split(" ")[0] // HH:MM:SS
  .slice(0, 5); // HH:MM

  const firstDigit = formattedTime.toString().charAt(0);
  let hours = parseInt(formattedTime.split(":")[0], 10);
  let minutes: string | number = parseInt(formattedTime.split(":")[1], 10);
  
  // If time is in the AM.
  if (hours < 12) {

    if (sliceMinutes) {
      
      formattedTime = `${hours} AM`;
    
    } else {
      formattedTime = `${formattedTime} AM`;
    }
    
  } else {
    
    hours = hours - 12;

    if (sliceMinutes) {

      formattedTime = `${hours} PM`;
    
    } else {

      if (minutes < 10) minutes = `0${minutes}`
      
      // Time is in the PM.
      formattedTime = `${hours}:${minutes} PM`;
    };
  };
  
  const formattedTimeLength = formattedTime.length;
  
  // Get rid of 0 if it is the first number.
  if (firstDigit === "0" && !sliceMinutes) {
    formattedTime = formattedTime.slice(1, formattedTimeLength);
  };

  return formattedTime;
};
