<template>
  <div class="preview">
    <h1 class="preview__title">Приложение для создания постов</h1>
    <h2 class="preview__subtitle">Количество постов: {{posts.length}}</h2>
    <div class="preview__buttons">
        <post-button class="button preview__button" @click="openModal">Создать пост</post-button>
        <post-button class="button preview__button" @click="loadPosts">Загрузить посты</post-button>
    </div>
    
  </div>
</template>

<script>
export default {
    props: {
        posts: {
            type: Array,
            required: true
        }
    },
    methods: {
        openModal() {
            this.$emit('open')
        },
        loadPosts() {
            this.$emit('load')
        }
    }
}
</script>

<style lang="scss">
    .preview {
        height: 200px;
        &__title {
            text-align: center;
        }
        &__subtitle {
            text-align: center;
            margin-top: 15px;
        }
        &__buttons {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &__button {
            margin-top: 20px;
           &:nth-child(1) {
            margin-right: 20px;
           }
           &:nth-child(2) {
            margin-left: 20px;
           }
        }
    }
</style>