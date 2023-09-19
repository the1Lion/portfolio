<script>
export default {
  name: "ProgressBar",
  props: {
    progressPercentage: {
      required: true,
      type: String,
    },
    color: {
      required: false,
      type: String,
      default: 'bg-blue-600'
    },
    backgroundColor: {
      required: false,
      type: String,
      default: 'bg-gray-300'
    },
  }
}
</script>

<template>
  <div>
    <slot name="header"/>
    <div class="w-full rounded-full h-3 dark:bg-neutral-500" :class="backgroundColor">
      <div class=" h-3 rounded-full" :class="color" :style="'width: ' +  progressPercentage + '%'">
      <span class="text-xs relative top-[-0.43rem]" :style="'left: ' +  (parseInt(progressPercentage) >= 90 ? '90' : progressPercentage ) + '%'">
        {{ progressPercentage }}%
      </span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>