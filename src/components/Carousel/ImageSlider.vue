<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'

export default {
  name: "ImageSlider",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  props: {
    slides: []
  },
  data() {
    return {
      slides: [
        'https://images.unsplash.com/photo-1513735539099-cf6e5d559d82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80',
        'https://images.unsplash.com/photo-1509225770129-fbcf8a696c0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2272&q=80',
        'https://images.unsplash.com/photo-1601236414929-677713b2d078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2190&q=80',
        'https://images.unsplash.com/photo-1501082183835-b7b33db89c3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2320&q=80',
        'https://images.unsplash.com/photo-1583004313509-086a16d5e415?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2027&q=80',
      ]
    }
  }
}
</script>

<template>
  <Carousel :breakpoints="breakpoints" :autoplay="3000" :wrap-around="true" :transition="1000">
    <Slide v-for="slide in slides" :key="slide">
      <img class="rounded-xl" :src="slide" alt="slider_image">
    </Slide>
    <template #addons>
      <Navigation/>
      <Pagination/>
    </template>
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