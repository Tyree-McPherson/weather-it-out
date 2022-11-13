export default function getDayOfWeek(date: Date | number) {

  const dayNumber = new Date(date).getDay()

  if (dayNumber === 0) return "Sun"
  if (dayNumber === 1) return "Mon"
  if (dayNumber === 2) return "Tue"
  if (dayNumber === 3) return "Wed"
  if (dayNumber === 4) return "Thu"
  if (dayNumber === 5) return "Fri"
  if (dayNumber === 6) return "Sat"
};
