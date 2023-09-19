<script>
import ProgressBar from "./ProgressBars/ProgressBar.vue";
import Card from "./Card.vue";
import AboutCard from "./About/AboutCard.vue";

export default {
  name: "Examples",
  components: {AboutCard, Card, ProgressBar}
}
</script>

<template>
<!--  -->
  <Card title="Noteworthy technology acquisitions 2021"
        description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.">
    <template v-slot:image>
      <img class="w-12 h-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png" alt="">
    </template>

    <ProgressBar class="mt-5 mb-5" progress-percentage="99" color="bg-red-400" background-color="bg-black">
      <template v-slot:header>
        <span>text</span>
      </template>
    </ProgressBar>
  </Card>

<!--  -->

  <div class="container mx-auto flex flex-col h-screen">
    <div data-aos="fade-up-right">
      <AboutCard card-url="/about" card-title="Noteworthy technology acquisitions 2021"
                 card-description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."/>
    </div>
    <div data-aos="fade-up-left">
      <AboutCard card-url="/about" card-title="Noteworthy technology acquisitions 2021"
                 card-description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."/>
    </div>
    <div data-aos="fade-down-right">
      <AboutCard card-url="/about" card-title="Noteworthy technology acquisitions 2021"
                 card-description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."/>
    </div>
    <div data-aos="fade-down-left">
      <AboutCard card-url="/about" card-title="Noteworthy technology acquisitions 2021"
                 card-description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."/>
    </div>
  </div>


</template>

<style scoped>

</style>