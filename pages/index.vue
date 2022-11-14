<template>
  <div>
    <v-img
      id="background-image"
      class="background-image"
      src="/images/toronto.jpg"
      alt="Toronto"
      height="calc(100vh - 48px)"
      width="auto"
    />
    <div class="image-overlay"></div>
    <div class="title-container">
      <div class="title">
        <h1>Weather It Out</h1>
        <p>Get your city's weather forecast</p>
      </div>
    </div>
    <div class="city-selection-container">
      <div class="city-selection-skeleton">
        <div class="city-selection-items">
          <CityButton
            v-for="item in data"
            :key="item.name"
            :city-name="item.name"
            :city-name-display="item.displayName"
            :image-source="item.imageSource"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '~/assets/styles/index.scss'
import CityButton from '~/components/CityButton.vue'
import cityData from '~/json/city.json'

export default {
  name: 'IndexPage',
  components: { CityButton },
  data() {
    return {
      data: cityData,
    }
  },
  metaInfo: {
    title: 'Home',
  },
}
</script>
