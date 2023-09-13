<script>
import Navigation from "../components/Navigation.vue";
import Footer from "../components/Footer.vue";
import HeroSection from "../components/Home/HeroSection.vue";

export default {
  name: "Home",
  components: {HeroSection, Footer, Navigation}
}
</script>

<template>
  <div
      class="overflow-auto bg-gradient-to-r from-cyan-500 to-blue-500 dark:bg-gradient-to-r dark:from-violet-500 dark:to-fuchsia-500">
    <div class="container mx-auto flex flex-col h-screen">
      <Navigation/>
      <transition appear :duration="550" name="fade">
        <div class="flex-grow container rounded-2xl px-12 py-12 bg-white dark:bg-[#111111] dark:text-white">
          <HeroSection/>
        </div>
      </transition>
      <Footer/>
    </div>
  </div>
</template>

<style scoped>

</style>