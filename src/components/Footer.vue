<script>
export default {
  name: "Footer"
}
</script>

<template>
  <!-- This is an example component -->
    <footer class="text-white p-4 rounded-lg md:flex md:items-center md:justify-between md:p-6 ">
		<span class="text-sm sm:text-center">© 2023 <a href="/" class="hover:underline" target="_blank">Mohamad Katramez™</a>. All Rights Reserved.
    </span>
      <ul class="flex flex-wrap items-center mt-3 sm:mt-0">
        <li>
          <a href="/" class="mr-4 text-sm hover:underline md:mr-6">Home</a>
        </li>
        <li>
          <a href="/about" class="mr-4 text-sm hover:underline md:mr-6">About</a>
        </li>
        <li>
          <a href="/resume" class="mr-4 text-sm hover:underline md:mr-6">Resume</a>
        </li>
        <li>
          <a href="/works" class="mr-4 text-sm hover:underline md:mr-6">Works</a>
        </li>
        <li>
          <a href="/contact" class="mr-4 text-sm hover:underline md:mr-6">Contact</a>
        </li>
<!--        <li>-->
<!--          <a href="#" class="mr-4 text-sm hover:underline md:mr-6">Privacy Policy</a>-->
<!--        </li>-->
<!--        <li>-->
<!--          <a href="#" class="mr-4 text-sm hover:underline md:mr-6">Licensing</a>-->
<!--        </li>-->
      </ul>
    </footer>
</template>

<style scoped>

</style>