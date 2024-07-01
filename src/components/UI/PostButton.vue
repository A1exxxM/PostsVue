<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
 name: "post-button"
}
</script>

<style lang="scss">
.button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fefae0;
    font-size: 18px;
    background-color: #1c2541;
    width: 150px;
    height: 50px;
    border: 1px solid #fefae0;
    cursor: pointer;
    transition: 0.5s all;
    &__active {
        border: 1px solid red;
    }
    &:hover {   
      border: 1px solid #1c2541;
      color: #1c2541;
      background-color: #fefae0;    
    }
}
</style>