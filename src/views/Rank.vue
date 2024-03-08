<template>
    <div class="container">
        <RankTable :ranks ="season.ranks"/>
        <!-- <AddClub /> -->
        <!-- <button @click="writeJsonFile">write</button> -->
    </div>
</template>

<script setup>
import { ref } from "vue";
import RankTable from "../components/RankTable.vue";
import AddClub from "../views/AddClub.vue";
import ApiService from "../service";

const season = ref([]);

async function getData(){
    const res = await ApiService.get("/season/newest");
    season.value = res.data;
    console.log(season.value)
}
getData();
</script>

<style>

</style>