<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'

export default {
  name: "IconsSlider",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  props: {
    slides: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      settings: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 3,
          snapAlign: 'center',
        },
        // 1024 and up
        1024: {
          itemsToShow: 5,
          snapAlign: 'start',
        },
      },
      slides: [
          'icons/tailwindcss.svg',
          'icons/laravel.svg',
          'icons/vueJs.svg',
      ]
    }
  }
}
</script>

<template>
  <Carousel v-bind="settings" :breakpoints="breakpoints" :autoplay="1000" :wrap-around="true" :transition="1000">
    <Slide v-for="slide in slides" :key="slide">
      <img class="w-24 h-24" :src="slide" alt="icon"/>

    </Slide>
    <!--    <template #addons>-->
    <!--      <Navigation/>-->
    <!--      <Pagination/>-->
    <!--    </template>-->
  </Carousel>
</template>

<style>
.carousel__item {
  min-height: auto;
  width: 100%;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
}
</style>

<!--docs: https://ismail9k.github.io/vue3-carousel/configs.html-->