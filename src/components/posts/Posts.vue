<template>
    <navbar-router></navbar-router>
    <div class="container" id="posts">
      <post-preview
      :posts="posts"
      @open="openModal"
      @load="loadPosts"
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
      :currentPage="currentPage"
      />
      <post-pages
      :pages="pages"
      :currentPage="currentPage"
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
    data() {
      return {
        posts: [],
        modal: false,
        actionType: false,
        currentChangingPost: 200,
        postId: 0,
        pages: [1],
        pagesCounter: 0,
        currentPage: 0
      }
    },
    methods: {
      createPost(post) {
        post.id = this.postId++;
        this.posts.push(post);
        this.checkPages();
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
      },
      loadPosts() {
        const getResponse = async () =>{
          let response = await fetch('https://jsonplaceholder.typicode.com/posts');
          return response.json();
        }
        getResponse()
          .then(data => {
            data.forEach(item => {
              const post = {
                title: item.title,
                body: item.body,
                id: this.postId++
              }
              this.posts.push(post);
              this.checkPages();
            });
          });
      },
      checkPages() {
        const test = this.pagesCounter;
        this.pagesCounter = Math.floor(this.postId / 4.01);
        if (test != this.pagesCounter) {
          this.pages.push(this.pagesCounter + 1);
        }
        this.posts.forEach(post => {
            if (post.page == undefined) {
              post.page = this.pagesCounter;
            }
          });
      },
      changePage(page) {
        this.currentPage = page - 1;
      }
    }
  }
    
  </script>
  
  <style lang="scss">
    #posts {
      padding: 150px 0;
    }
  </style>
  