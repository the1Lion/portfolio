<script>
export default {
  name: "ProfileImage"
}
</script>

<template>
  <a :download=$constants.USER_IMAGE :href=$constants.USER_IMAGE title="Download Image">
    <img
        :src=$constants.USER_IMAGE
        class="mx-auto mb-4 w-36 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
        alt="Avatar"/>
  </a>
</template>

<style scoped>

</style>