<template>
  <header id="header">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between">
        <RouterLink class="logo" :to="{name: 'Home'}">
          YoFin League
        </RouterLink>
        <nav class="nav h-100 d-none d-md-flex align-items-center">
        <div class="nav-items">
          <RouterLink :to="{ name: 'ListClub' }" class="menuItem-active-link">Câu lạc bộ</RouterLink>
        </div>
        <div class="nav-items">
          <RouterLink :to="{ name: 'Rank' }" class="menuItem-active-link">Bảng xếp hạng</RouterLink>
        </div>
      </nav>
      </div>
    </div>
  </header>
</template>

<script setup>

</script>

<style scoped>
#header {
  height: 70px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
}
.logo {
  font-size: 24px;
}
.nav {
  column-gap: 40px;
}
.nav-items {
  height: 100%;
  display: flex;
  align-items: center;
}
.nav-items a {
  padding: 16px 0;
  color: #FFF;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
}
.nav-items a:hover, .router-link-exact-active.menuItem-active-link {
  color: #5873bb;
}
.router-link-exact-active.header-mobile-link {
  color: #5873bb;
}
</style>