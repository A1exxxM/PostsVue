<template>
    <form class="post__form">
      <div class="post__form-wrapper">
        <input type="text" required name="title" placeholder="Название поста" class="post__form-input"
        v-model="title">
        <input type="text" required name="body" placeholder="Содержание поста" class="post__form-input"
        v-model="body">
      </div>
      <button class="post__form-button button" @click.prevent="createPost">Создать</button>
    </form>
</template>

<script>
export default {
    data() {
      return {
      body: '',
      title: '',
      id: 0
    }
    },
    methods: {
      createPost() {
      const post = {
        body: this.body,
        title: this.title,
        id: this.id++
      }
      this.$emit('create',post);
      this.body = '';
      this.title = '';
    }
    }
}
</script>

<style lang="scss">
.post__form {
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid red;
    margin-bottom: 20px;
    &-wrapper {
      display: flex;
      width: 50%;
      justify-content: space-between;
    }
    &-input {
      border: 1px solid #000;
      color: #000;
      font-size: 17px;
      padding: 5px;
    }
  }
</style>