<template>
  <div id="app" >
    <post-form
    @create="createPost"
    />
    <post-list 
    :posts="posts"
    @delete="deletePost"
    />
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostRoster.vue';
export default {
  components: { PostForm,PostList },
  data() {
    return {
      posts: []
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
    },  
    deletePost(post) {
      this.posts = this.posts.filter(item => post.id != item.id)
    }
  }
}
  
</script>

<style lang="scss">
body {
  padding: 20px;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.button {
    color: #fff;
    font-size: 17px;
    background-color: #000;
    width: 150px;
    height: 50px;
    border: 1px solid red;
    cursor: pointer;
}

</style>
