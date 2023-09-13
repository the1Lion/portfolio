<script>
export default {
  name: "DownloadPdfButton",
  props: {
    pdfUrl: {
      type: String,
      required: true
    },
    pdfFileName: {
      type: String,
      required: true
    }
  },
  methods: {
    downloadPdf() {
      // create element <a> for download PDF
      const link = document.createElement('a');
      link.href = this.pdfUrl;
      link.target = '_blank';
      link.download = this.pdfFileName;

      // Simulate a click on the element <a>
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}
</script>
<!--"bg-gradient-to-r from-cyan-500 to-blue-500 dark:bg-gradient-to-r dark:from-violet-500 dark:to-fuchsia-500"-->
<template>
  <button @click="downloadPdf" class="group relative h-12 w-48 overflow-hidden rounded-lg
  bg-gradient-to-r from-violet-500 to-fuchsia-500
  dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500
  text-lg shadow">
    <div class="absolute inset-0 w-3
    bg-gradient-to-r from-cyan-500 to-blue-500
    dark:bg-gradient-to-r dark:from-violet-500 dark:to-fuchsia-500
     transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <div class="relative text-black flex ml-8 group-hover:text-white group-hover:fill-white">
      <span>Download CV</span>
      <svg class="animate-bounce mt-1 ml-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
    </div>
  </button>
</template>

<style scoped>

</style>