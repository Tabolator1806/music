<template>
  <header>
    <SearchBar/>
  </header>
  <body>
    <RouterView/>
  </body>
</template>
<script>
  import SearchBar from "@/components/SearchBar.vue";
  import {defineComponent} from "vue";

  export default defineComponent({
    components: {SearchBar}
  })

</script>

<style scoped>
</style>
