import {createStore} from 'vuex';


export default createStore({

    state() {
        return {
            posts: [],
            postId: 0,
            postsCounter: 0,
            currentChangingPost: 200,
            changingTitle: '',
            changingBody: '',
            modal: false,
            actionType: false,
            pages: [1],
            pagesCounter: 0,
            currentPage: 0,
            addDeleteClass: false,
        }
    },

    getters: {
        getPost: state => id => {
            return state.posts.filter(post => post.id == id)[0]
        }
    },

    mutations: {
        deletePost(state,post) {
            state.posts = state.posts.filter(item => post.id != item.id);
            state.postsCounter--;
        },
        createPost(state,post) {
            post.id = state.postId++;
            state.postsCounter++;
            state.posts.push(post);
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
            })}
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
        openModal(state) {
            state.modal = true;
            state.actionType = true;
        },

        closeModal(state) {
            state.modal = false;
        },

        switchDeleteClass(state) {
            state.addDeleteClass = !state.addDeleteClass;
        },

        checkPages(state) {
            const test = state.pagesCounter;
            state.pagesCounter = Math.floor(state.postsCounter / 4.01);
            if (test < state.pagesCounter) {
              state.pages.push(state.pagesCounter + 1);
              state.currentPage++;
            } else if(test > state.pagesCounter) {
                state.pages.pop();
                if (state.currentPage != 0) {
                    state.currentPage--;
                }
                let currentPost = 0;
                for (let i = 0; i++; i <= state.pagesCounter) {
                    let counter = 0;
                    for (currentPost; counter++; counter < 4) {
                        try {
                            state.posts[currentPost].page = i;
                            currentPost++;
                        } catch {}
                    }
                }
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
                context.dispatch('buildPost',post);
              });
            });
        },

        buildPost(context, post) {
          context.commit('createPost', post);
          context.commit('closeModal');
          context.commit('checkPages');  
        },
        removePost(context,post) {
            context.commit('switchDeleteClass');
            setTimeout(()=> {
                context.commit('deletePost', post);
                context.commit('checkPages');
                context.commit('switchDeleteClass');
            },700)
        }
      }
})