<template>
  <div id="app" >
    <post-form
    @create="createPost"
    />
    <post-search
    :posts="posts"
    @searchPost="searchPost"
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
import PostSearch from '@/components/PostSearch.vue';
export default {
  components: { PostForm,PostList,PostSearch },
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
    },
    searchPost(value) {
      this.posts.forEach(post => {
        post.active = false;
        if(post.title.includes(value)) {
          post.active = true
        }
        if (value == '') {
          post.active = false
        }
      })
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


</style>
