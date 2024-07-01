<template>
  <div class="navbar">
    <ul class="navbar__menu container">
        <li class="navbar__menu-item" @click="$router.push('/')">Главная</li>
        <li class="navbar__menu-item" @click="$router.push('/posts')">Посты</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navbar-router'
}
</script>

<style lang="scss">
  .navbar {
    position: absolute;
    top: 0;
    height: 80px;
    width: 100%;
    background-color: #1c2541;
    z-index: 100;
    &__menu {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20%;
      height: 100%;
      &-item {
        list-style-type: none;
        color: #fefae0;
        font-size: 25px;
        cursor: pointer;
      }
    }
  }
</style>