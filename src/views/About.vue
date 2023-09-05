<script>
import Navigation from "../components/Navigation.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "About",
  components: {Footer, Navigation}
}
</script>

<template>
  <div
      class="bg-gradient-to-r from-cyan-500 to-blue-500 dark:bg-gradient-to-r dark:from-violet-500 dark:to-fuchsia-500">
    <div class="container mx-auto flex flex-col h-screen">
      <Navigation/>
      <div class="flex-grow container lg:rounded-2xl px-12 py-12 bg-white dark:bg-[#111111] dark:text-white">
        <h1>About</h1>
      </div>
      <Footer/>
    </div>
  </div>
</template>

<style scoped>

</style>