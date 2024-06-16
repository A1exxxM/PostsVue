<template>

    <h2>Список постов:</h2>
      <ul class="post__list" v-if="posts.length > 0">
  
        <post-block :posts="posts" @testing="deletePost" @openChangePopup="openChangePopup"/> 
          
      </ul>
      <div v-else>Постов пока нет, создайте новый!</div>
  </template>
  
  <script>
  export default {
    emits:['delete', 'openChanges'],
    props: {
      posts: {
        type: Array,
        required: true
      }
    },
    methods: {
      deletePost(post) {
        this.$emit('delete', post);
      },
      openChangePopup(post) {
        this.$emit('openChanges', post)
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