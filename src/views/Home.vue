<template>
  <div class="container">
    <h1 class="fs-3 text-center text-white mt-4">Lượt trận hôm nay</h1>
    <div class="mt-2 fs-3 text-center text-white">{{ todayString }}</div>
    <div class="match-schedule mt-5">
      <Match v-for="match in matchSchedule" :key="match.id" 
        :homeClub="match.homeClub" :awayClub="match.awayClub" :date="match.date"
      />
      
    </div>
  </div>
</template>

<script setup>
import Match from '../components/Match.vue';
import ApiService from "../service";
import { ref } from "vue";
const today = new Date();
const todayString = today.getDate() + "/" + (Number(today.getMonth()) + 1) + "/"+today.getFullYear()
const matchSchedule = ref([]);

async function getData() {
  const res = await ApiService.get("/match");
  matchSchedule.value = res.data
  console.log(matchSchedule.value);
}
getData();
</script>

<style scoped>
.match-schedule {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>