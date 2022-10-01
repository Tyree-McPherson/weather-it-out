<template>
  <v-row>
    <v-col class="text-center"> </v-col>
  </v-row>
</template>

<script>
import getCityWeatherData from '../../functions/get-city-weather-data'

export default {
  name: 'CityPage',
  data: () => ({
    weather: {},
  }),
  async fetch() {
    this.weather = await getCityWeatherData(this.$route.params.city)
  },
  fetchOnServer: false,
}
</script>
