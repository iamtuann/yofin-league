<template>
  <div class="wrapper">
    <div class="d-flex align-items-center">
      <div class="logo">
        <img :src="getImageUrl(homeClub.flag)" :alt="homeClub.name">
      </div>
      <div class="name">{{ homeClub.name }}</div>
      <div class="vs">VS</div>
      <div class="name">{{ awayClub.name }}</div>
      <div class="logo">
        <img :src="getImageUrl(awayClub.flag)" :alt="awayClub.name">
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: { type: [Number, String] },
  homeClub: { type: Object, required: true },
  awayClub: { type: Object, required: true },
  date: { type: [String, Date], required: false },
  time: { type: String, required: false }
})
const { homeClub, awayClub, date, time } = props;
function getImageUrl(imageName) {
  return new URL(`../assets/${imageName}`, import.meta.url)
}
</script>

<style scoped>
.logo {
  width: 60px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
  /* border-radius: 50%; */
  overflow: hidden;
}
.logo img {
  width: 44px;
  height: 44px;
  object-fit: contain;
}
.name {
  background-color: #15161A;
  color: #fff;
  font-weight: 500;
  padding: 8px;
  width: 220px;
  text-align: center;
  overflow: hidden;
  height: 36px;
  line-height: 1;
}
.vs {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 24px;
  width: 60px;
  height: 70px;
  background-color: #091F5A;
  color: #fff;
  clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
}
</style>