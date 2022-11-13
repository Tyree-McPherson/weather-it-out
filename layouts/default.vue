<template>
  <v-app>
    <v-app-bar fixed app dense>
      <div class="header">
        <NuxtLink to="/" class="header-logo">
          <WeatherItOutLogo />
        </NuxtLink>
        <v-spacer></v-spacer>
        <div class="cities-dropdown">
          <v-select
            label="Cities"
            :items="cities"
            dense
            hide-details="auto"
            hide-selected
            single-line
            solo
            background-color="transparent"
            width="100%"
            @change="(city) => selectCity(city)"
          >
          </v-select>
        </div>
        <v-spacer></v-spacer>
        <v-switch
          id="theme-switch"
          v-model="$vuetify.theme.dark"
          flat
          hide-details
          @click="theme($vuetify.theme.dark)"
        >
        </v-switch>
      </div>
    </v-app-bar>
    <v-main class="main-container">
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import setTheme from '~/functions/set-theme'
import darkThemeEnabled from '~/functions/dark-theme-enabled'
import '~/assets/styles/layout.css'
import getDisplayNames from '~/functions/get-display-names'
import cityData from '~/json/city.json'

export default {
  name: 'DefaultLayout',
  data() {
    return {
      cities: getDisplayNames(),
    }
  },
  mounted() {
    // On mount, check if Dark Theme is enabled. If so, set the theme to dark.
    const isDarkThemeEnabled = darkThemeEnabled()

    if (isDarkThemeEnabled) {
      document
        .getElementById('theme-switch')
        .setAttribute('aria-checked', 'true')
      document.getElementsByTagName('html')[0].setAttribute('theme', 'dark')
      this.$vuetify.theme.dark = true
    }
  },
  methods: {
    theme(theme) {
      setTheme(theme)
    },
    selectCity(city) {
      const cityDataLength = cityData.length
      let route = ''

      // Use the city from the parameter to look for the corresponding city name
      // in the JSON (from the "name" key-value pair).
      for (let i = 0; i < cityDataLength; i++) {
        const currentCity = cityData[i]
        if (currentCity.displayName === city) {
          route = currentCity.name
          break
        }
      }

      // Redirect to the city weather page to get the current weather.
      this.$router.push(`/city/${route}`)
    },
  },
}
</script>
