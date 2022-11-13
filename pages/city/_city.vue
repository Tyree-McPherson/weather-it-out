<template>
  <v-container class="city-container">
    <div class="title-and-tabs-section">
      <h1>{{ title }}</h1>
      <p>Last Updated: {{ lastUpdated }}</p>
      <v-tabs centered fixed-tabs style="background-color: #fff">
        <v-tab @click="temperatureForecast(true)">Celsius</v-tab>
        <v-tab @click="temperatureForecast(false)">Fahrenheit</v-tab>
      </v-tabs>
      <v-tabs centered fixed-tabs>
        <v-tab @click="changeForecast('one-day')">1 DAY</v-tab>
        <v-tab @click="changeForecast('five-day')">5 DAY</v-tab>
      </v-tabs>
      <div class="title-icons-container">
        <div>
          <v-icon>mdi-clock-time-three-outline</v-icon>
          <p>{{ timeZone }}</p>
        </div>
        <div>
          <v-icon>mdi-weather-sunset-up</v-icon>
          <p>{{ sunrise }}</p>
        </div>
        <div>
          <v-icon>mdi-weather-sunset-down</v-icon>
          <p>{{ sunset }}</p>
        </div>
      </div>
    </div>
    <v-row justify="center" align="center">
      <v-col>
        <v-card
          class="logo py-4 d-flex justify-center align-center flex-column"
        >
          <h2>Temperature</h2>
          <div class="block-container">
            <WeatherColumn
              v-for="item in temperatureData"
              :key="item.time"
              :time="item.time"
              :description="item.description"
              :icon="item.icon"
              :degree="item.degree"
              :humidity="item.humidity"
            />
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="logo py-4 d-flex justify-center align-center flex-column"
        >
          <h2>Precipitation</h2>
          <div class="block-container">
            <PrecipitationColumn
              v-for="item in precipitationData"
              :key="item.time"
              :time="item.time"
              :description="item.description"
              :percentage="item.percentage"
              :rainfall="item.rainfall"
            />
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="logo py-4 d-flex justify-center align-center flex-column"
        >
          <h2>Wind</h2>
          <div class="block-container">
            <WindColumn
              v-for="item in windData"
              :key="item.time"
              :time="item.time"
              :wind-direction="item.windDirection"
              :icon="item.icon"
              :wind-speed="item.windSpeed"
              :gust-speed="item.gustSpeed"
            />
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import getCityWeatherData from '~/functions/get-city-weather-data'
import capitalizeFirstLetter from '~/functions/capitalize-first-letter'
import getOneDisplayName from '~/functions/get-one-display-name'
import '~/assets/styles/city.css'
import currentDateAndTime from '~/functions/current-date-and-time'
import getTimeZone from '~/functions/get-time-zone'
import getSunriseSunset from '~/functions/get-sunrise-sunset'
import WeatherColumn from '~/components/WeatherColumn.vue'
import PrecipitationColumn from '~/components/PrecipitationColumn.vue'
import getTemperatureForecast from '~/functions/get-temperature-forecast'
import getPrecipitationForecast from '~/functions/get-precipitation-forecast'
import getWindForecast from '~/functions/get-wind-forecast'
import WindColumn from '~/components/WindColumn.vue'

export default {
  name: 'CityPage',
  components: { WeatherColumn, PrecipitationColumn, WindColumn },
  data: () => ({
    weather: {},
    title: '',
    lastUpdated: '',
    timeZone: '',
    sunrise: '',
    sunset: '',
    celsius: true,
    oneDay: true,
    temperatureData: [],
    precipitationData: [],
    windData: [],
  }),
  async fetch() {
    // Get the necessary data.
    const weather = await getCityWeatherData(
      this.$route.params.city,
      this.$config.serverlessDomain
    )
    this.weather = weather
    this.timeZone = await getTimeZone(
      this.$route.params.city,
      this.$config.serverlessDomain
    )
    this.sunrise = getSunriseSunset(
      weather.city.sunrise,
      this.weather.city.timezone
    )
    this.sunset = getSunriseSunset(
      weather.city.sunset,
      this.weather.city.timezone
    )
    this.temperatureData = getTemperatureForecast(weather.list, this.oneDay)
    this.precipitationData = getPrecipitationForecast(weather.list, this.oneDay)
    this.windData = getWindForecast(weather.list, this.oneDay)
  },
  fetchOnServer: false,
  head: {
    title: 'Weather Forecast',
  },
  mounted() {
    document.title = `${capitalizeFirstLetter(
      this.$route.params.city
    )} - Weather It Out`

    // Get the display name for the current city page.
    this.title = getOneDisplayName(this.$route.params.city)

    // Get the current date and time.
    this.lastUpdated = currentDateAndTime()
  },
  methods: {
    temperatureForecast(unit) {
      this.temperatureData = getTemperatureForecast(
        this.weather.list,
        this.oneDay,
        unit
      )

      if (unit) {
        this.celsius = true
      } else {
        this.celsius = false
      }
    },
    changeForecast(forecast) {
      if (forecast === 'one-day') {
        // Change the forecast of the temperature, precipitation, and wind to 1-day.
        this.temperatureData = getTemperatureForecast(
          this.weather.list,
          true,
          this.celsius
        )
        this.precipitationData = getPrecipitationForecast(
          this.weather.list,
          true
        )
        this.windData = getWindForecast(this.weather.list, true)
        this.oneDay = true
      } else {
        // Change the forecast of the temperature, precipitation, and wind to 5-day.
        this.temperatureData = getTemperatureForecast(
          this.weather.list,
          false,
          this.celsius
        )
        this.precipitationData = getPrecipitationForecast(
          this.weather.list,
          false
        )
        this.windData = getWindForecast(this.weather.list, false)
        this.oneDay = false
      }
    },
  },
}
</script>
