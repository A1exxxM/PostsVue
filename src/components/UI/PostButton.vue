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
    color: #fff;
    font-size: 18px;
    background-color: #000;
    width: 150px;
    height: 50px;
    border: 1px solid red;
    cursor: pointer;
    &__active {
        border: 1px solid green;
    }
}
</style>