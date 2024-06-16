<template>
  <div id="app" >
    <post-preview
    :posts="posts"
    @open="openModal"
    />
    <post-form
    :modal="modal"
    :posts="posts"
    :actionType="actionType"
    :changingPost="currentChangingPost"
    @close="closeModal"
    @create="createPost"
    @changePost="changePost"
    />
    <post-search
    :posts="posts"
    @searchPost="searchPost"
    />
    <post-list 
    :posts="posts"
    @delete="deletePost"
    @openChanges="openChanges"
    />
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostRoster.vue';
import PostSearch from '@/components/PostSearch.vue';
import PostPreview from '@/components/PostPreview.vue';
export default {
  components: {PostForm,PostList,PostSearch,PostPreview},
  data() {
    return {
      posts: [],
      modal: false,
      actionType: false,
      currentChangingPost: 200
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.modal = false;
    },  
    deletePost(post) {
      console.log(post)
      this.posts = this.posts.filter(item => post.id != item.id)
    },
    openChanges(post) {
      this.posts.forEach((item,i) => {
        if (item.id == post.id) {
          this.currentChangingPost = i;
        }
      })
      this.actionType = false;
      this.modal = true;
    },
    searchPost(value) {
      if (this.posts.length > 2) {
        this.posts.forEach(post => {
        if(post.title.includes(value)) {
          post.active = true
        }
        if (value == '') {
          post.active = false
        }
      })
      }
    },
    changePost(changedPost) {
      this.posts.forEach(post => {
        if (post.id == changedPost.id) {
          post.title = changedPost.title;
          post.body = changedPost.body;
        }
        this.closeModal();
      })
    },
    openModal() {
      this.modal = true;
      this.actionType = true;
    },
    closeModal() {
      this.modal = false;
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
#app {
  width: 1400px;
  margin: 0 auto;
}


</style>
