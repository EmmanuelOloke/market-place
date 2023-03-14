<template>
  <div class="home">
    <Hero />
  </div>
</template>

<script>

import Hero from '../components/Hero'

export default {
  name: 'HomeView',
  components: {
    Hero
  }
}
</script>

<style>
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>