<template>
    <li class="post__list-block" :key="post" v-for="post in posts" :class="{ 'post__list-block_active' : post.active }">
        <div class="post__list-block_wrapper">
            <div class="post__list-block_title">{{ post.title }}</div>
            <div class="post__list-block_body">{{ post.body }}</div>
        </div>
        <post-button class="post__list-block_delete button"
        :class="{'button__active' : post.active }"
        @click="deletePost(post)">
        Удалить</post-button>
    </li>
</template>

<script>
export default {
    emits:['testing'],
    name: 'post-block',
    props: {
        posts: {
            type: Array,
            required: true
        }
    },
    methods: {
        deletePost(post) {
            this.$emit('testing', post);
        }
    }
}
</script>


<style lang="scss">
.post__list {
    &-block {
        border: 2px solid red;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        margin-top: 20px;
        &_active {
            border: 2px solid green;
        }
        &_title {
            font-size: 25px;
        }
        &_wrapper {
            width: 80%;
        }
        &_body {
            font-size: 17px;
            margin-top: 10px;
        }
    }
    }
</style>
