<template>
    <navbar-router class="animate__animated animate__fadeInDown"></navbar-router>
    <div class="container animate__animated animate__fadeIn" id="posts">
      <post-preview
      @open="openModal"
      @load="loadPosts"
      />
      <post-form
      @close="closeModal"
      @create="createPost"
      @changePost="changePost"
      @changeData="changeData"
      />
      <post-search
      @searchPost="searchPost"
      />
      <post-list 
      @delete="deletePost"
      @openChanges="openChanges"
      />
      <post-pages
      @changePage="changePage"
      />
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  import PostForm from '@/components/posts/PostForm.vue';
  import PostList from '@/components/posts/PostRoster.vue';
  import PostSearch from '@/components/posts/PostSearch.vue';
  import PostPreview from '@/components/posts/PostPreview.vue';
  import PostPages from '@/components/posts/PostPages.vue';
  export default {
    components: {PostForm,PostList,PostSearch,PostPreview,PostPages},
    methods: {
      createPost(post) {
        this.$store.dispatch('buildPost', post);
      },  
      deletePost(post) {
        this.$store.dispatch('removePost', post);
      },
      openChanges(post) {
        this.$store.commit('openChanges', post);
      },
      searchPost(value) {
        this.$store.commit('searchPost', value);
      },
      changeData(event) {
        this.$store.commit('changeData', event);
      },
      changePost() {
        this.$store.commit('changePost');
      },
      openModal() {
        this.$store.commit('openModal');
      },
      closeModal() {
        this.$store.commit('closeModal');
      },
      loadPosts() {
        this.$store.dispatch('loadPosts');
      },
      checkPages() {
        this.$store.commit('checkPages');
      },
      changePage(page) {
        this.$store.commit('changePage', page);
      }
    }
  }
    
  </script>
  
  <style lang="scss">
    #posts {
      padding: 150px 0;
    }
  </style>
  