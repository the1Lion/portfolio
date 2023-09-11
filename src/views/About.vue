<script>
import Navigation from "../components/Navigation.vue";
import Footer from "../components/Footer.vue";
import ProfileInformation from "../components/Profile/ProfileInformation.vue";
import AboutDescription from "../components/About/AboutDescription.vue";

export default {
  name: "About",
  components: {AboutDescription, ProfileInformation, Footer, Navigation}
}
</script>

<template>
  <div
      class="overflow-auto bg-gradient-to-r from-cyan-500 to-blue-500 dark:bg-gradient-to-r dark:from-violet-500 dark:to-fuchsia-500">
    <div class="container mx-auto flex flex-col h-screen">
      <Navigation/>
      <transition appear :duration="550" name="fade">
        <div class="flex-grow container rounded-2xl px-12 py-12">
          <div class="flex flex-row gap-20">
            <div>
              <ProfileInformation/>
            </div>
            <div>
              <AboutDescription/>
            </div>
          </div>

        </div>
      </transition>
      <Footer/>
    </div>
  </div>
</template>

<style scoped>
</style>