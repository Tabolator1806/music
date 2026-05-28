<template>
  <div id="searchbar">
    <span></span>
    <input v-model="searched" @keydown.enter="search(searched)">
  </div>
</template>
<script>

  export default {
    data() {
      return {
        searched: ""
      }
    },
    methods:{
      search(name){
        this.$store.dispatch("SEARCH",name)
      }
    }
  }
</script>

<style scoped>

</style>