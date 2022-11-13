import months from "~/json/month.json"

export default function convertNumberToMonth(monthNumber: number) {
  
  const numberOfMonths: number = months.length
  let currentMonth: string = ""

  for (let i = 0; i < numberOfMonths; i++) {
    if (monthNumber === months[i].monthNumber) {
      currentMonth = months[i].month
    }
  }

  return currentMonth
};
