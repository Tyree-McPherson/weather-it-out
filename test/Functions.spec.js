import capitalizeFirstLetter from '~/functions/capitalize-first-letter'
import convertDateToTime from '~/functions/convert-date-to-time'
import convertKelvin from '~/functions/convert-kelvin'
import convertMsToKmh from '~/functions/convert-ms-to-kmh'
import convertNumberToMonth from '~/functions/convert-number-to-month'
import convertTextToIcon from '~/functions/convert-text-to-icon'
import determineWindIcon from '~/functions/determine-wind-icon'
import getDayOfWeek from '~/functions/get-day-of-week'
import getOneDisplayName from '~/functions/get-one-display-name'

describe('Test Functions', () => {
  test('Capitalize the first letter of a string', () => {
    const stringToBeCapitalized = 'weather It Out'
    const answer = 'Weather It Out'

    expect(capitalizeFirstLetter(stringToBeCapitalized)).toEqual(answer)
  })

  test('Convert date to time', () => {
    const date = convertDateToTime(new Date('Thu Nov 10 2022 16:48:30'))
    const time = '4:48 PM'

    expect(date).toEqual(time)
  })

  test('Convert kelvin', () => {
    const kelvin = 300
    const celsius = 27
    const fahrenheit = 80

    // This function rounds to the nearest integer.
    expect(convertKelvin(kelvin, true)).toEqual(celsius)

    expect(convertKelvin(kelvin, false)).toEqual(fahrenheit)
  })

  test('Convert ms to kmh', () => {
    const metersPerSecond = 6
    const kilometersPerHour = 22

    expect(convertMsToKmh(metersPerSecond)).toEqual(kilometersPerHour)
  })

  test('Convert number to month', () => {
    const number = 6
    const month = 'June'

    expect(convertNumberToMonth(number)).toEqual(month)
  })

  test('Convert text to icon', () => {
    const time = '6:00 AM'

    expect(convertTextToIcon('Thunderstorm', time)).toEqual(
      'mdi-weather-lightning'
    )
    expect(convertTextToIcon('Drizzle', time)).toEqual('mdi-weather-rainy')
    expect(convertTextToIcon('Rain', time)).toEqual('mdi-weather-pouring')
    expect(convertTextToIcon('Snow', time)).toEqual('mdi-weather-snowy')
    expect(convertTextToIcon('Mist', time)).toEqual('mdi-weather-partly-rainy')
    expect(convertTextToIcon('Smoke', time)).toEqual('mdi-smoke')
    expect(convertTextToIcon('Haze', time)).toEqual('mdi-weather-hazy')
    expect(convertTextToIcon('Dust', time)).toEqual('mdi-weather-dust')
    expect(convertTextToIcon('Sand', time)).toEqual('mdi-weather-dust')
    expect(convertTextToIcon('Ash', time)).toEqual('mdi-weather-dust')
    expect(convertTextToIcon('Squall', time)).toEqual('mdi-weather-dust')
    expect(convertTextToIcon('Fog', time)).toEqual('mdi-weather-fog')
    expect(convertTextToIcon('Tornado', time)).toEqual('mdi-weather-tornado')
    expect(convertTextToIcon('Clouds', time)).toEqual('mdi-weather-cloudy')
  })

  test('Determine wind icon', () => {
    expect(determineWindIcon('Clouds')).toEqual('weather-windy-variant')
    expect(determineWindIcon('Wind')).toEqual('weather-windy')
  })

  test('Get day of week', () => {
    const date1 = new Date(
      'Sun Nov 6 2022 14:48:30 GMT-0500 (Eastern Standard Time)'
    )
    const date2 = new Date(
      'Mon Nov 7 2022 14:48:30 GMT-0500 (Eastern Standard Time)'
    )
    const date3 = new Date(
      'Tue Nov 8 2022 14:48:30 GMT-0500 (Eastern Standard Time)'
    )
    const date4 = new Date(
      'Wed Nov 9 2022 14:48:30 GMT-0500 (Eastern Standard Time)'
    )
    const date5 = new Date(
      'Thu Nov 10 2022 14:48:30 GMT-0500 (Eastern Standard Time)'
    )
    const date6 = new Date(
      'Fri Nov 11 2022 14:48:30 GMT-0500 (Eastern Standard Time)'
    )
    const date7 = new Date(
      'Sat Nov 12 2022 14:48:30 GMT-0500 (Eastern Standard Time)'
    )

    expect(getDayOfWeek(date1)).toEqual('Sun')
    expect(getDayOfWeek(date2)).toEqual('Mon')
    expect(getDayOfWeek(date3)).toEqual('Tue')
    expect(getDayOfWeek(date4)).toEqual('Wed')
    expect(getDayOfWeek(date5)).toEqual('Thu')
    expect(getDayOfWeek(date6)).toEqual('Fri')
    expect(getDayOfWeek(date7)).toEqual('Sat')
  })

  test('Get one display name', () => {
    const city = 'toronto'

    expect(getOneDisplayName(city)).toEqual('Toronto, ON')
  })
})
