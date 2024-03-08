<template>
    <div class="container wrapper">
        <form class="row" @submit.prevent="saveClub">
            <div class="col-6">
                <div class="mb-3">
                    <label for="name" class="form-label">Club Name : </label>
                    <input type="text" class="form-control" id="name"  v-model="club.name" required>
                </div> 
                <div class="mb-3">
                    <label for="flag" class="form-label">Club Flag : </label>
                    <input type="text" class="form-control" id="flag" v-model="club.flag" required>
                </div> 
                <div class="mb-3">
                    <label for="logo" class="form-label">Club Logo : </label>
                    <input type="text" class="form-control" id="logo" v-model="club.logo" required>
                </div> 
            </div>
            <div class="col-6">
                <div class="mb-3">
                    <label for="coachName" class="form-label">Coach Name :</label>
                    <input type="text" class="form-control" id="coachName" v-model="club.coachName" required>
                </div> 
                <div class="mb-3">
                    <label for="coachImage" class="form-label">Coach Image :</label>
                    <input type="text" class="form-control" id="coachImage" v-model="club.coachImage" required>
                </div> 
            </div>
            <div class = "box-footer d-flex justify-content-between">
                <button type="submit" class = "btn btn-primary" >
                    Submit
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue"
import ApiService from "../service";


const club = ref({
    name : "",
    coachName : "",
    flag : "",
    coachImage : "",
    logo : ""
});

async function saveClub (){
    const res = await ApiService.post("/clubs/add",club.value)
    console.log(res.data);
    club .value = {
    name : "",
    coachName : "",
    flag : "",
    coachImage : "",
    logo : ""
}
}
</script>

<style scoped>
.wrapper{
    background: #000;
}
</style>