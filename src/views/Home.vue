<template>
  <div class="container">
    <h1 class="fs-3 text-center text-white mt-4">Lượt trận hôm nay</h1>
    <div class="mt-2 fs-3 text-center text-white">{{ todayString }}</div>
    <div class="match-schedule mt-5">
      <Match :match = matchSchedule
      />
      
    </div>
  </div>
</template>

<script setup>
import Match from '../components/Match.vue';
import matchSchedule from '../data/matchSchedule.json'
const today = new Date();
const todayString = today.getDate() + "/" + (Number(today.getMonth()) + 1) + "/"+today.getFullYear()
// const matchSchedule = [
//   {
//     id: "1",
//     teamOne: {
//       id: "1",
//       name: "Nguyễn Dũng Tuấn",
//       coach: "Carlo AnceloTuan",
//       logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png"
//     },
//     teamTwo: {
//       id: "2",
//       name: "Trịnh Văn Quyết",
//       coach: "Erik ten Quyet",
//       logo: "https://static.bongda24h.vn/medias/standard/2021/11/6/213700-5.jpg"
//     },
//     date: today,
//     time: "12:15"
//   }
// ]
</script>

<style scoped>
.match-schedule {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>