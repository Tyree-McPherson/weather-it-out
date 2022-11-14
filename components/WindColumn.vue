<template>
  <div class="weather-column-container">
    <h3>{{ time }}</h3>
    <v-icon
      color="var(--colourBlackToWhite)"
      :style="`transform: rotate(${windDirection}deg)`"
      >mdi-arrow-up-thin</v-icon
    >
    <v-icon color="var(--colourBlackToWhite)" class="weather-icon" size="80"
      >mdi-{{ icon }}</v-icon
    >
    <h3>{{ windSpeed }}Km/h</h3>
    <div class="weather-column-bottom d-flex justify-center align-center">
      <v-icon color="var(--colourBlackToWhite)">mdi-weather-dust</v-icon>
      <p>{{ gustSpeed }}Km/h</p>
    </div>
  </div>
</template>

<script>
import '~/assets/styles/weather-column.scss'
export default {
  props: {
    time: {
      type: String,
      required: true,
    },
    windDirection: {
      type: Number,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    windSpeed: {
      type: Number,
      required: true,
    },
    gustSpeed: {
      type: Number,
      required: true,
    },
  },
}
</script>
