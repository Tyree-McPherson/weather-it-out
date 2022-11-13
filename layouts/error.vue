<template>
  <div class="d-flex justify-center align-center flex-column">
    <h1>404 Page Not Found</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  head() {
    const title = '404 Not Found'
    return {
      title,
    }
  },
}
</script>
