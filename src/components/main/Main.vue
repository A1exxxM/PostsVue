<template>
    <navbar-router></navbar-router>
    <section class="main container">
        <h1 class="main__title">Pet Project "Посты"</h1>
        <h2 class="main__subtitle">В этом проекте реализована возможность создания, редактирования и удаления постов, поиска по названию, загрузки с JSON Placeholder</h2>
        <ul class="main__description">
            <div class="main__description-title">Используемые технологии:</div>
            <div class="main__description-wrapper">
                <li class="main__description-block">
                    <h3 class="main__description-block_title">Vue</h3>
                    <div class="main__description-block_divider"></div>
                    <div class="main__description-block_descr">Применил первый раз, использовал для создания реактивности и разделения блоков по компонентам</div>
                </li>
                <li class="main__description-block">
                    <h3 class="main__description-block_title">Vue router</h3>
                    <div class="main__description-block_divider"></div>
                    <div class="main__description-block_descr">Использовал для постраничной навигации, а также для создания динамического пути к посту</div>
                </li>
                <li class="main__description-block">
                    <h3 class="main__description-block_title">Vuex</h3>
                    <div class="main__description-block_divider"></div>
                    <div class="main__description-block_descr">Немного ознакомился с технологией, использовал для хранения массива posts</div>
                </li>
            </div>
        </ul>
    </section>
  
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .main {
        text-align: center;
        position: relative;
        &__title {
            margin-top: 150px;
        }
        &__subtitle {
            margin-top: 40px;

        }
        &__description {
            margin-top: 20px;
            &-title {
                font-size: 20px;
            }
            &-wrapper {
                display: flex;
                padding: 40px;
                align-items: center;
                justify-content: space-between;
            }
            &-block {
                list-style-type: none;
                background-color: #000;
                border: 2px solid red;
                border-radius: 10px;
                width: 300px;
                height: 400px;
                color: #fff;
                &_title {
                    height: 60px;
                    font-size: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                &_divider {
                    width: 100%;
                    height: 1px;
                    background-color: #fff;
                }
                &_descr {
                    font-size: 20px;
                    margin-top: 20px;
                    padding: 10px;
                }
            }
        }
    }
</style>