import {createStore} from 'vuex';

export default createStore({
    state() {
        return {
            posts: [],
            modal: false,
            actionType: false,
            currentChangingPost: 200,
            postId: 0,
            pages: [1],
            pagesCounter: 0,
            currentPage: 0,
            changingTitle: '',
            changingBody: '',
        }
    },
    mutations: {
        deletePost(state,post) {
            state.posts = state.posts.filter(item => post.id != item.id)
        },
        openChanges(state,post) {
        state.posts.forEach((item,i) => {
            if (item.id == post.id) {
            state.currentChangingPost = i;
            state.changingTitle = item.title;
            state.changingBody = item.body
            }
        })
        state.actionType = false;
        state.modal = true;
        },
        searchPost(state,value) {
        if (state.posts.length > 2) {
            state.posts.forEach(post => {
            if(post.title.includes(value)) {
                post.active = true;
            }
            if (value == '') {
                post.active = false;
            }
        });
        }
        },
        changePost(state) {
        state.posts[state.currentChangingPost].title = state.changingTitle;
        state.posts[state.currentChangingPost].body = state.changingBody;
        state.modal = false;
        },
        openModal(state) {
        state.modal = true;
        state.actionType = true;
        },
        closeModal(state) {
        state.modal = false;
        },
        checkPages(state) {
            const test = state.pagesCounter;
            state.pagesCounter = Math.floor(state.postId / 4.01);
            if (test != state.pagesCounter) {
              state.pages.push(state.pagesCounter + 1);
            }
            state.posts.forEach(post => {
                if (post.page == undefined) {
                  post.page = state.pagesCounter;
                }
              });
        },
        changePage(state,page) {
            state.currentPage = page - 1;
        },
        changeData(state,event) {
          if (event.target.classList.contains('post__form-textarea')) {
            state.changingBody = event.target.value
          } else {
            state.changingTitle = event.target.value
          }
        },
        createPost(state,post) {
            post.id = state.postId++;
            state.posts.push(post);
            const test = state.pagesCounter;
            state.pagesCounter = Math.floor(state.postId / 4.01);
            if (test != state.pagesCounter) {
              state.pages.push(state.pagesCounter + 1);
            }
            state.posts.forEach(post => {
                if (post.page == undefined) {
                  post.page = state.pagesCounter;
                }
              });
            if (state.modal) {
              state.modal = false;
            }
        },
    },
    actions: {
      loadPosts(context) {
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
                id: ''
              }
              context.commit('createPost',post);
            });
          });
      }
    }
},
)