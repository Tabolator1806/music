
<template>
  <header>
    <SearchBar/>
    <Results/>
  </header>
</template>
<script>
  import SearchBar from "@/components/SearchBar.vue";
  import Results from "@/components/Results.vue"
  import {defineComponent} from "vue";

  export default defineComponent({
    components: {SearchBar, Results}
  })

</script>

<style scoped>
</style>
