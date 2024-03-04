<template>
    <div class="rank d-flex flex-column gap-3 my-5">
        <div class="title text-center">
            <h5>YoFin League</h5>
            <h1 class="text-uppercase mt-4">Bảng xếp hạng</h1>
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
              <tr v-for="(team, index) in teams" :key="team.id">
                <th scope="row">{{ team.position }}</th>
                <td class="col-3 d-flex align-items-center w-100 gap-3">
                  <img  :src="getImageUrl(team.flag)" alt="">
                  {{ team.name }}
                </td>
                <td>{{ team.played }}</td>
                <td>{{ team.won }}</td>
                <td>{{ team.drawn }}</td>
                <td>{{ team.lost }}</td>
                <td>{{ team.goalsFor }}</td>
                <td>{{ team.goalsAgainst }}</td>
                <td>{{ team.goalDifference }}</td>
                <td>{{ team.points }}</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps ({
  teams : {type : Object,require : true}
})

const {teams} = props;

console.log(teams)

function getImageUrl(imageName) {
  return new URL(`../assets/${imageName}`, import.meta.url)
}



// const matches = [
//   { home: teams[0], away: teams[1], goalsHome: 0, goalsAway: 1 },
//   { home: teams[1], away: teams[0], goalsHome: 4, goalsAway: 1 },
//   { home: teams[0], away: teams[2], goalsHome: 4, goalsAway: 1 },
// ];
// const updateMatchResults = (matches) => {
//   matches.forEach(match => {
//     const { home, away, goalsHome, goalsAway } = match;
    
//     if (home && away) {
//       home.played += 1;
//       away.played += 1;

//       home.goalsFor += goalsHome;
//       away.goalsFor += goalsAway;

//       home.goalsAgainst += goalsAway;
//       away.goalsAgainst += goalsHome;

//       home.goalDifference = home.goalsFor - home.goalsAgainst;
//       away.goalDifference = away.goalsFor - away.goalsAgainst;

//       if (goalsHome > goalsAway) {
//         home.won += 1;
//         home.points += 3;
//         away.lost += 1;
//       } else if (goalsHome < goalsAway) {
//         away.won += 1;
//         away.points += 3;
//         home.lost += 1;
//       } else {
//         home.drawn += 1;
//         home.points += 1;
//         away.drawn += 1;
//         away.points += 1;
//       }
//     }
//   });
// };
// updateMatchResults(matches);

// const sortTeamsByPoints = () => {
//   teams.sort((a, b) => b.points - a.points || b.goalDifference - a.goalDifference || a.name.localeCompare(b.name));
//   teams.forEach((team, index) => team.position = index + 1);
// };
// sortTeamsByPoints();
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