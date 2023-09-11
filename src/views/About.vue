<script>
import Navigation from "../components/Navigation.vue";
import Footer from "../components/Footer.vue";
import ProfileInformation from "../components/Profile/ProfileInformation.vue";

export default {
  name: "About",
  components: {ProfileInformation, Footer, Navigation}
}
</script>

<template>
  <div
      class="overflow-auto bg-gradient-to-r from-cyan-500 to-blue-500 dark:bg-gradient-to-r dark:from-violet-500 dark:to-fuchsia-500">
    <div class="container mx-auto flex flex-col h-screen">
      <Navigation/>
      <transition appear :duration="550" name="fade">
        <div class="flex-grow container rounded-2xl px-12 py-12">
          <ProfileInformation/>

        </div>
      </transition>
      <Footer/>
    </div>
  </div>
</template>

<style scoped>
</style>