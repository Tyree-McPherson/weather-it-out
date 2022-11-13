<template>
  <div class="weather-column-container">
    <h3>{{time}}</h3>
    <p>{{description}}</p>
    <v-icon class="weather-icon" size="80" color="var(--colourBlackToWhite)">{{icon}}</v-icon>
    <h3>{{degree}} &deg;</h3>
    <div class="weather-column-bottom d-flex justify-center align-center">
      <v-icon color="var(--colourBlackToWhite)">mdi-water-percent</v-icon>
      <p>{{humidity}}</p>
    </div>
  </div>
</template>

<script>

  import "~/assets/styles/weather-column.css"
  export default {
    props: {
      time: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      icon: {
        type: String,
        required: true
      },
      degree: {
        type: String,
        required: true
      },
      humidity: {
        type: String,
        required: true
      },
    },
  }
</script>
