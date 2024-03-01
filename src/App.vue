<template>
  <div class="main">
    <Header />
    <Router-view></Router-view>
  </div>
</template>
<script setup>
import Header from './components/Header.vue';
</script>

<style scoped>
.main {
  min-width: 100vw;
  min-height: 100vh;
  background-image: url(./assets/Yofin-leage-banner.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
