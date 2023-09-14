<script>
import Navigation from "../components/Navigation.vue";
import Footer from "../components/Footer.vue";
import HeroSection from "../components/Home/HeroSection.vue";
import AboutCard from "../components/About/AboutCard.vue";

export default {
  name: "Home",
  components: {AboutCard, HeroSection, Footer, Navigation}
}
</script>

<template>
  <div
      class="overflow-auto bg-gradient-to-r from-cyan-500 to-blue-500 dark:bg-gradient-to-r dark:from-violet-500 dark:to-fuchsia-500">
    <transition appear :duration="550" name="fade">
      <HeroSection/>
    </transition>
    <Footer/>
  </div>
</template>

<style scoped>

</style>