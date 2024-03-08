<template>
    <div class="rank d-flex flex-column gap-3 my-5">
        <div class="title text-center">
            <h5>YoFin League</h5>
            <h1 class="text-uppercase mt-4">Bảng xếp hạng</h1>
            <div class="btn-group">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false">
              Clickable outside
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Menu item</a></li>
              <li><a class="dropdown-item" href="#">Menu item</a></li>
              <li><a class="dropdown-item" href="#">Menu item</a></li>
            </ul>
          </div>
        </div>
        <div class="content">
            <table class="table table-light text-center">
            <thead>
              <tr>
                <th scope="col">TT</th>
                <th scope="col">Câu lạc bộ</th>
                <th scope="col">Số trận</th>
                <th scope="col">Thắng</th>
                <th scope="col">Hòa</th>
                <th scope="col">Thua</th>
                <th scope="col">Bàn thắng</th>
                <th scope="col">Bàn thua</th>
                <th scope="col">Hiệu số</th>
                <th scope="col">Điểm</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr v-for="( rank , index ) in ranks" :key="rank.id">
                <th scope="row">{{ index + 1 }}</th>
                <td class="col-3 d-flex align-items-center w-100 gap-3" >
                  <img  :src="getImageUrl(rank.club.flag)" alt="">
                  {{ rank.club.name }}
                </td>
                <td>{{ rank.played }}</td>
                <td>{{ rank.won }}</td>
                <td>{{ rank.drawn }}</td>
                <td>{{ rank.lost }}</td>
                <td>{{ rank.goalsFor }}</td>
                <td>{{ rank.goalsAgainst }}</td>
                <td>{{ rank.goalsDifference }}</td>
                <td>{{ rank.points }}</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
</template>

<script setup>
import { ref,defineProps, onUpdated } from 'vue';

const props = defineProps ({
  ranks : {type : Array ,require : true}
})

const sortRank = (a,b)=>{
  props.ranks.sort((a,b) => b.points - a.points || b.goalsDifference - a.goalsDifference || a.club.name.localeCompare(b.club.name))
  props.ranks.forEach((index) => index = index + 1)
}

onUpdated(()=>{
  sortRank();
});

function getImageUrl(imageName) {
  return new URL(`../assets/${imageName}`, import.meta.url)
}
</script>   

<style scoped>
.title{
    color: #fff;
}
img{
  height: 25px;
  width: 25px;
  object-fit: contain;
}
</style>