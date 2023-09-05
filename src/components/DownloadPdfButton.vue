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
    <span class="relative text-black group-hover:text-white">Download CV</span>
  </button>
</template>

<style scoped>

</style>