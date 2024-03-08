<template>
  <header id="header">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between">
        <RouterLink class="logo" :to="{name: 'Home'}">
          YoFin League
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup>

</script>

<style scoped>
#header {
  height: 70px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  width: 100%;
}
.logo {
  font-size: 24px;
}
</style>