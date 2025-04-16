<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  width: 95%;
}
@media (min-width: 700px) {
  .container {
    width: 85%;
  }
}
@media (min-width: 850px) {
  .container {
    width: 80%;
  }
}
@media (min-width: 1000px) {
  .container {
    width: 75%;
  }
}
</style>
