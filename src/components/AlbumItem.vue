<template>
  <RouterLink :to="`/albums/${id}`">
  <div class="albumitem">
    <img :src="source" :alt="name"/><br/>
    <span>{{name}}</span>
  </div>
  </RouterLink>
</template>

<script>
export default {
  props:['info'],
  computed:{
    source(){
      return "http://192.168.1.22/static/music/" + this.name + "/cover.jpg"
    }
  },
  data(){
    return{
      name:"",
      id:0
    }
  },
  created() {
    this.name = this.$props.info[1]
    this.id = this.$props.info[0]
  }
}
</script>

<style scoped>

</style>