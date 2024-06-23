import Posts from '@/components/posts/Posts.vue';
import Post from '@/components/posts/Post.vue';
import Main from '@/components/main/Main.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/posts',
      component: Posts
    },
    {
      path: '/',
      component: Main
    },
    {
      path: '/posts/:id',
      component: Post
    }
    
  ]
})

export default router;
