<template>
  <div id="searchbar">
    <input v-model="searched" @keydown.enter="search" @input="show_bands">
    <button @click="search"></button>
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
      search(){
        name = this.searched
        this.$store.dispatch("SEARCH",name)
      },
      show_bands(){
        if (this.searched.length==0){
          this.$store.dispatch("SEARCH_BANDS")
        }
      }
    }
  }
</script>

<style scoped>

</style>