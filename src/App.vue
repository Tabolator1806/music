<template>
  <header>
    <RouterLink to="/">Home</RouterLink>
    <SearchBar/>
  </header>
  <body>
    <RouterView/>
    <QueueBar/>
  </body>
  <footer>
    <Player/>
  </footer>
</template>
<script>
  import SearchBar from "@/components/SearchBar.vue";
  import {defineComponent} from "vue";
  import Player from "@/components/Player.vue";
  import QueueBar from "@/components/QueueBar.vue";

  export default defineComponent({
    components: {SearchBar,Player,QueueBar}
  })

</script>

<style scoped>
</style>
