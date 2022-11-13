import convertDateToTime from "./convert-date-to-time"
import convertNumberToMonth from "./convert-number-to-month"

// Get the current date and time.
export default function currentDateAndTime() {

  const date = new Date()
  const monthNumber = date.getMonth() + 1
  const month = convertNumberToMonth(monthNumber)
  const day = date.getDate().toString()
  const year = date.getFullYear()
  const time = convertDateToTime(date)

  return `${month} ${day}, ${year} | ${time}`
};
