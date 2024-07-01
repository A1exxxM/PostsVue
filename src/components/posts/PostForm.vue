<template>
    <div class="post__modal animate__animated animate__fadeIn" v-show="$store.state.modal" @click="closeModal()">
      <form @click.stop class="post__form" v-if="$store.state.actionType">
      <h2 class="post__form-title">Создание поста №{{ $store.state.posts.length + 1 }}</h2>
      <div class="post__form-wrapper">
        <div class="post__form-inputs">
          <label for="title">Название поста</label>
          <input type="text" required="true" name="title" placeholder="Название поста" class="post__form-input"
          v-model="title">
        </div>
        <div class="post__form-inputs">
          <label for="body">Содержание поста</label>
          <textarea type="text" required="true" name="body" placeholder="Содержание поста" class="post__form-input post__form-textarea"
        v-model="body"></textarea>
        </div>
        
      </div>
      <post-button class=" button post__form-button" @click.prevent="createPost">Создать</post-button>
    </form>
    <form @click.stop class="post__form" v-else>
      <h2 class="post__form-title">Изменение поста № {{ $store.state.currentChangingPost + 1 }}</h2>
      <div class="post__form-wrapper">
        <div class="post__form-inputs">
          <label for="title">Название поста</label>
          <input type="text" required="true" name="title" placeholder="Название поста" class="post__form-input"
          v-model="$store.state.changingTitle" @input="changeData"
          >
        </div>
        <div class="post__form-inputs">
          <label for="body">Содержание поста</label>
          <textarea type="text" required="true" name="body" placeholder="Содержание поста" class="post__form-input post__form-textarea"
          v-model="$store.state.changingBody" @input="changeData"
          ></textarea>
        </div>
        
      </div>
      <post-button class=" button post__form-button" @click.prevent="changePost">Изменить</post-button>
    </form>
    </div>
    
</template>

<script>
export default {
    
    data() {
      return {
      body: '',
      title: '',
      postCheck: 0
    }
    }, 
    methods: {
      createPost() {
      const post = {
        body: this.body,
        title: this.title,
        active: false
      }
      this.$emit('create',post);
      this.body = '';
      this.title = '';
    },
    changeData(event) {
      this.$emit('changeData', event)
    },
    closeModal() {
      this.$emit('close')
    },
    changePost() {
      this.$emit('changePost')
    },
    }
}
</script>

<style lang="scss">
.post__modal {
  position: fixed;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba($color: #000000, $alpha: 0.8);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
.post__form {
    position: relative;
    width: 400px;
    height: 600px;
    background-color: #b8b8ff;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    border: 2px solid #1c2541;
    margin: 0 auto;
    margin-top: 100px;
    border-radius: 10px;
    &-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-around;
    }
    &-input {
      background-color: #1c2541;
      border: 1px solid #fefae0;
      color: #fefae0;
      font-size: 17px;
      padding: 5px;
      width: 100%;
    }
    &-textarea {
      resize: none;
      min-height: 200px;
    }
    
  }
  label {
    display: block;
    margin-bottom: 10px;
  }
</style>