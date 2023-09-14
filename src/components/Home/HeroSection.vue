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
      <h1 class="text-4xl text-white font-bold"><TypingAnimation :animation-style="'animate-typing'" :text="'I`m ' + $constants.USER_NAME"/></h1>
      <p class="text-xl text-white mt-4"><TypingAnimation animation-style="animate-slowTyping" text="Welcome to my page"/></p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <a href="/about"
           class="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 bg-gradient-to-r from-violet-500 to-fuchsia-500">Get in touch</a>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>