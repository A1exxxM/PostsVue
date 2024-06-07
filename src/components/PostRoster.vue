<template>

    <h2>Список постов:</h2>
      <ul class="post__list" v-if="posts.length > 0">
  
        <li class="post__list-block" :key="post" v-for="post in posts">
          <div class="post__list-block_wrapper">
            <div class="post__list-block_title">{{ post.title }}</div>
            <div class="post__list-block_body">{{ post.body }}</div>
          </div>
          <button class="post__list-block_delete button"
          @click="deletePost(post)">
          Удалить</button>
        </li>
          
      </ul>
      <div v-else>Постов пока нет, создайте новый!</div>
  </template>
  
  <script>
  export default {
    emits:['delete'],
    props: {
      posts: {
        type: Array,
        required: true
      }
    },
    methods: {
      deletePost(post) {
        this.$emit('delete',post);
      }
    }
  }
  </script>
  
  <style lang="scss">
  .post__list {
      list-style-type: none;
      margin-top: 20px;
      &-block {
        border: 2px solid red;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        margin-top: 20px;
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