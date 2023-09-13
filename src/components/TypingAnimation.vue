<script>
export default {
  name: "TypingAnimation",
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
    <div class="w-max">
      <h1 class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-black dark:text-white font-bold">{{text}}</h1>
    </div>
</template>

<style scoped>

</style>