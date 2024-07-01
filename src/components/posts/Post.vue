<template>
  <navbar-router class="animate__animated animate__fadeInDown"></navbar-router>
  <div class="post container">
    <div class="post__item animate__animated animate__fadeInUp">
      <h2 class="post__item-title">{{ $store.getters.getPost($route.params.id).title }}</h2>
      <div class="post__item-body">{{ $store.getters.getPost($route.params.id).body }}</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
  .post {
    padding: 150px 0;
    &__item {
      padding: 20px;
      background-color: #1c2541;
      width: 50%;
      margin: 0 auto;
      min-height: 600px;
      border: 2px solid #fefae0;
      border-radius: 8px;
      color: #fefae0;
      &-title {
        text-align: center;
        font-size: 40px;
      }
      &-body {
        margin-top: 30px;
        text-align: center;
        font-size: 25px;
      }
    }
  }
</style>