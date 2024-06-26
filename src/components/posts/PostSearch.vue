<template>
  <input v-model="value" v-if="$store.state.posts.length > 2" @input="searchPost(value)" type="text" placeholder="Введите название поста">
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    },
    methods: {
        searchPost(value) {
            value = this.value;
            this.$emit('searchPost', value)
        }
    }
}
</script>

<style lang="scss" scoped>
    input {
        border: 2px solid red;
        color: #000;
        font-size: 18px;
        padding: 5px;
        display: block;
        width: 100%;
    }
</style>