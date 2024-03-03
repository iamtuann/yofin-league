<template>
  <div class="wrapper">
    <div class="d-flex align-items-center">
      <div class="logo">
        <img :src="teamOne.logo" :alt="teamOne.name">
      </div>
      <div class="name">{{ teamOne.name }}</div>
      <div class="vs">VS</div>
      <div class="name">{{ teamTwo.name }}</div>
      <div class="logo">
        <img :src="teamTwo.logo" :alt="teamTwo.name">
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: { type: [Number | String] },
  teamOne: { type: Object, required: true },
  teamTwo: { type: Object, required: true },
  date: { type: [String, Date], required: true },
  time: { type: String, required: true }
})
const { teamOne, teamTwo, date, time } = props;
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