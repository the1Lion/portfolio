<script>
import Navigation from "../components/Navigation.vue";
import Footer from "../components/Footer.vue";
import AboutCard from "../components/About/AboutCard.vue";
import ProgressBar from "../components/ProgressBars/ProgressBar.vue";
import Card from "../components/Card.vue";

export default {
  name: "Resume",
  components: {Card, ProgressBar, AboutCard, Footer, Navigation}
}
</script>

<template>
  <div
      class="overflow-auto bg-gradient-to-r from-cyan-500 to-blue-500 dark:bg-gradient-to-r dark:from-violet-500 dark:to-fuchsia-500">
    <div class="container mx-auto flex flex-col h-screen">
      <Navigation/>
      <transition appear :duration="550" name="fade">
        <div class="flex-grow container rounded-2xl px-12 py-12 bg-white dark:bg-[#111111] dark:text-white">

          <div class="flex gap-12 flex-wrap">
            <Card title="Noteworthy technology acquisitions 2021" description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.">
              <ProgressBar class="mt-5" progress-percentage="45" color="bg-red-400" background-color="bg-black" dark-background-color="bg-white"></ProgressBar>
            </Card>
            <AboutCard card-url="/about" card-title="Noteworthy technology acquisitions 2021"
                       card-description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.">
              <ProgressBar progress-percentage="45" color="bg-red-400" background-color="bg-black" dark-background-color="bg-white"></ProgressBar>
            </AboutCard>
            <AboutCard card-url="/about" card-title="Noteworthy technology acquisitions 2021"
                       card-description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.">

            </AboutCard>
            <AboutCard card-url="/about" card-title="Noteworthy technology acquisitions 2021"
                       card-description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.">

            </AboutCard>
            <AboutCard card-url="/about" card-title="Noteworthy technology acquisitions 2021"
                       card-description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.">

            </AboutCard>
          </div>
        </div>
      </transition>
      <Footer/>
    </div>
  </div>
</template>

<style scoped>

</style>