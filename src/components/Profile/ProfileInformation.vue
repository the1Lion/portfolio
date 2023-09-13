<script>
import ProfileSocialIcons from "./ProfileSocialIcons.vue";
import ProfileContactInformation from "./ProfileContactInformation.vue";
import ProfileImage from "./ProfileImage.vue";

export default {
  name: "ProfileInformation",
  components: {ProfileImage, ProfileContactInformation, ProfileSocialIcons},
}
</script>

<template>

  <div class="block max-w-fit rounded-2xl px-12 py-12 bg-white dark:bg-[#111111] dark:text-white">
    <div class="mb-5 text-center">
      <ProfileImage/>
      <h5 class="mb-2 text-xl font-medium leading-tight">{{ $constants.USER_NAME }}</h5>
      <p class="text-neutral-500 dark:text-neutral-400">{{ $constants.USER_JOB }}</p>
    </div>
    <ProfileSocialIcons/>
    <ProfileContactInformation/>

  </div>
</template>

<style scoped>

</style>