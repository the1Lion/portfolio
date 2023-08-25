<script setup>
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <navigation/>
  <div class="bg-indigo-300 ...">
    <img class="object-cover h-full w-full"
         src="https://www.dlr.de/en/images/2016/4/false-colour-image-of-the-topography-of-the-acheron-fossae_24897/@@images/image-2000-aa65c2d5f90b5a7509ff441269fae9bc.jpeg"
         alt="dino"/><img class="object-cover h-full w-full"
         src="https://www.dlr.de/en/images/2016/4/false-colour-image-of-the-topography-of-the-acheron-fossae_24897/@@images/image-2000-aa65c2d5f90b5a7509ff441269fae9bc.jpeg"
         alt="dino"/><img class="object-cover h-full w-full"
         src="https://www.dlr.de/en/images/2016/4/false-colour-image-of-the-topography-of-the-acheron-fossae_24897/@@images/image-2000-aa65c2d5f90b5a7509ff441269fae9bc.jpeg"
         alt="dino"/>
  </div>
  <div class="container mx-auto py-4">
    <router-view/>
  </div>
</template>

<style scoped>
</style>