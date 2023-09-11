<script>
import ProfileSocialIcons from "./ProfileSocialIcons.vue";

export default {
  name: "ProfileInformation",
  components: {ProfileSocialIcons},
}
</script>

<template>

    <div class="block max-w-fit rounded-2xl px-12 py-12 bg-white dark:bg-[#111111] dark:text-white">
      <div class="mb-5 text-center">
        <a download="MKatramez.jpg" href="MKatramez.jpg" title="Download Image">
          <img
            src="MKatramez.jpg"
            class="mx-auto mb-4 w-36 rounded-lg"
            alt="Avatar"/>
        </a>
        <h5 class="mb-2 text-xl font-medium leading-tight">{{ $constants.USER_NAME }}</h5>
        <p class="text-neutral-500 dark:text-neutral-400">{{ $constants.USER_JOB }}</p>
      </div>
      <ProfileSocialIcons/>
    </div>
</template>

<style scoped>

</style>