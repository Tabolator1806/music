<template>
  <header>
    <RouterLink to="/">Home</RouterLink>
    <SearchBar/>
  </header>
  <body>
    <RouterView/>
  </body>
  <footer>
    <Player/>
  </footer>
</template>
<script>
  import SearchBar from "@/components/SearchBar.vue";
  import {defineComponent} from "vue";
  import Player from "@/components/Player.vue";

  export default defineComponent({
    components: {SearchBar,Player}
  })

</script>

<style scoped>
</style>
