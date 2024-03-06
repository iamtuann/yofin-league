<template>
  <div class="wrapper">
    <div class="d-flex align-items-end">
      <img class="avatar" :src="getImageUrl(coachImage)" :alt="coachName">
      <div class="info text-white d-flex flex-column align-items-center">
        <div class="text-uppercase" style="font-size: 14px;">Coach</div>
        <h2 class="fs-6 text-center">{{ coachName }}</h2>
        <img class="flag-img" :src="getImageUrl(flag)" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: { type: [ String, Number ] },
  name: { type: String, required: true },
  coachName: { type: String, required: true },
  flag: { type: String, required: true },
  coachImage: { type: String, required: true },
})
const { id, name, coachName, flag, coachImage } = props
function getImageUrl(imageName) {
  return new URL(`../assets/${imageName}`, import.meta.url)
}
</script>

<style scoped>
.wrapper {
  height: 180px;
  display: flex;
  align-items: flex-end;
  transform-origin: bottom;
  transform: rotateX(90deg);
  animation: flip-up ease-in-out .6s forwards 0.4s;
}
.avatar {
  /* width: 50%; */
  /* max-width: 50%; */
  width: 50%;
  flex-shrink: 0;
  max-height: 180px;
  object-fit: contain;
  /* object-fit: contain; */
}
.flag-img {
  width: 100%;
}

@keyframes flip-up {
  0% {
    /* transform: rotateX(90deg); */
  }
  100% {
    transform: rotateX(0deg);
  }
}
</style>