<template>
  <div class="albumitem">
    <img :src="source" :alt="name"/><br/>
    <span>{{name}}</span>
  </div>
</template>

<script>
export default {
  props:{name},
  computed:{
    source(){
      return "http://192.168.1.22/static/music/" + this.name + "/cover.jpg"
    }
  }
}
</script>

<style scoped>

</style>