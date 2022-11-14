<template>
  <div
    class="city-button-container"
    @mouseover="changeBackgroundImage"
    @click="cityPage(cityName)"
  >
    <v-img :src="imageSource" :alt="cityName" width="300" height="60" rounded />
    <div class="image-small-overlay"></div>
    <h2>{{ cityNameDisplay }}</h2>
  </div>
</template>

<script>
import '~/assets/styles/city-button.scss'

export default {
  props: {
    cityName: {
      type: String,
      required: true,
    },
    cityNameDisplay: {
      type: String,
      required: true,
    },
    imageSource: {
      type: String,
      required: true,
    },
  },
  methods: {
    changeBackgroundImage() {
      // On hover, change the background image, based on the hovered image.
      document
        .getElementById('background-image')
        .children[1].setAttribute(
          'style',
          `background-image: url("${this.$config.frontendDomain}${this.imageSource}"); background-position: center center;`
        )
    },
    cityPage(city) {
      // Redirect to the clicked city page.
      this.$router.push(`/city/${city}`)
    },
  },
}
</script>
