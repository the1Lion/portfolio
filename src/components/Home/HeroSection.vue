<script>
import TypingAnimation from "../TypingAnimation.vue";

export default {
  name: "HeroSection",
  components: {TypingAnimation}
}
</script>

<template>

  <div class="relative h-screen w-full">
    <img src="https://images.unsplash.com/photo-1494783367193-149034c05e8f" alt="Background Image" class="absolute inset-0 w-full h-full object-cover filter blur-sm">
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    <div class="absolute inset-0 flex flex-col items-center justify-center">
      <h1 class="text-4xl text-white font-bold"><TypingAnimation text="I`m Mohamad Katramez"/></h1>
      <p class="text-xl text-white mt-4"><TypingAnimation text="Welcome to my page"/></p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <a href="/about"
           class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
          started</a>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>