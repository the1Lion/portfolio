<script>
import AboutCard from "./AboutCard.vue";

export default {
  name: "AboutDescription",
  components: {AboutCard}
}
</script>

<template>
  <div class="flex-row max-w-fit rounded-2xl px-14 py-14 bg-white dark:bg-[#111111] dark:text-white">
    <p class="text-4xl mb-5 font-bold">About Me </p>
      <span class="text-neutral-500 dark:text-neutral-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </span>

    <p class="text-3xl mt-5 mb-5">My abilities </p>
      <div class="flex flex-wrap gap-5 justify-center">
        <AboutCard card-title="Noteworthy technology acquisitions 2021" card-description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."/>
        <AboutCard card-title="Noteworthy technology acquisitions 2021" card-description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."/>
        <AboutCard card-title="Noteworthy technology acquisitions 2021" card-description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."/>
        <AboutCard card-title="Noteworthy technology acquisitions 2021" card-description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."/>
      </div>
  </div>
</template>

<style scoped>

</style>