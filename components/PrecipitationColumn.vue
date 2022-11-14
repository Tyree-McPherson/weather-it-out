<template>
  <div class="weather-column-container">
    <h3>{{ time }}</h3>
    <p>{{ description }}</p>
    <div class="precipitation-bar-container">
      <div class="precipitation-bar" :style="`height: ${percentage}%`"></div>
    </div>
    <h3>{{ percentage }}%</h3>
    <div class="weather-column-bottom d-flex justify-center align-center">
      <v-icon color="var(--colourBlackToWhite)">mdi-water</v-icon>
      <p>{{ rainfall }}</p>
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
    description: {
      type: String,
      required: true,
    },
    percentage: {
      type: Number,
      required: true,
    },
    rainfall: {
      type: String,
      required: true,
    },
  },
}
</script>
