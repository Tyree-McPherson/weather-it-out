<template>
  <v-skeleton-loader v-if="dataLength === 0" class="suspense" max-width="300" type="card">
    <v-progress-circular
      :size="50"
      color="primary"
      indeterminate
    >
    </v-progress-circular>
  </v-skeleton-loader>
</template>

<script>
import '~/assets/styles/suspense.scss'

export default {
  props: {
    dataLength: {
      type: Number,
      required: true,
    },
  },
}
</script>
