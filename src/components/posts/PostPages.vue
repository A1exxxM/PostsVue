<template>
  <ul class="post__pages" v-show="$store.state.pages.length > 1">
    <post-page class="post__pages-block" 
    :class="{'post__pages-block_active': page == ($store.state.currentPage + 1)}"
    @click="changePage(page)"  
    :key="page" 
    v-for="page in $store.state.pages">{{ page }}</post-page>
  </ul>
</template>

<script>
export default {
    methods: {
        changePage(page) {
            this.$emit('changePage', page)
        }
    }
}
</script>

<style lang="scss">
    .post__pages {
        width: fit-content;
        padding: 0 10px;
        margin-top: 30px;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        &-block {
            margin-top: 5px;
            border: 1px solid #fefae0;
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fefae0;
            font-size: 20px;
            background-color: #1c2541;
            margin-right: 10px;
            cursor: pointer;
            &_active {
                border: 1px solid #1c2541;
                color: #1c2541;
                background-color: #fefae0;
            }
        }
    }
</style>