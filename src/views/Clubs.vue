<template>
  <div class="container">
    <h1 class="fs-3 text-center text-white mt-4">Danh sách CLB</h1>
    <div class="row gx-5">
      <div class="col-12 col-md-6 col-lg-4 mt-5" v-for="club in listClub" :key="club.id">
        <ClubItem
          :id="club.id" :name="club.name" :coachName="club.coachName" :flag="club.flag" :coachImage="club.coachImage"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ApiService from "../service";
import ClubItem from "../components/ClubItem.vue";

const listClub = ref([]);

async function getData() {
  const res = await ApiService.get("/clubs");
  listClub.value = res.data
  console.log(listClub.value);
}
getData();

</script>

<style scoped>

</style>