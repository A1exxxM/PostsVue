<template>
    <li class="post__list-block animate__animated animate__fadeIn"
    :key="post" 
    v-for="post in $store.state.posts" 
    :class="{'post__list-block_active' : post.active}"
    
    v-show="post.page == $store.state.currentPage"
    @click="$router.push(`/posts/${post.id}`)"
    >
        <div class="post__list-block_wrapper">
            <div class="post__list-block_title">{{ post.title }}</div>
            <div class="post__list-block_body">{{ post.body }}</div>
        </div>
        <div class="post__list-block_buttons">
            <post-button class="post__list-block_button button"
            :class="{'button__active' : post.active }"
            @click.stop="deletePost(post)">
            Удалить</post-button>
            <post-button class="post__list-block_button button"
            :class="{'button__active' : post.active }"
            @click.stop="openChangePopup(post)">
            Изменить</post-button>
        </div>
        
        
    </li>
</template>

<script>
export default {
    emits:['testing','openChangePopup'],
    name: 'post-block',
    methods: {
        deletePost(post) {
            this.$emit('testing', post);
        },
        openChangePopup(post) {
        this.$emit('openChangePopup', post)
        }
    }
    
}
</script>


<style lang="scss">
.post__list {
    min-height: 500px;
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
        &_buttons {
            display: flex;
            justify-content: space-between;
            width: 25%;
            
        }
        &_body {
            font-size: 17px;
            margin-top: 10px;
        }
    }
    }
</style>
