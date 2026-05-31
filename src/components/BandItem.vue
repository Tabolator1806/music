<template>

  <RouterLink :to="`/bands/${id}`">
  <div class="banditem">
    <img :src="source" :alt="name"/><br/>
    <span>{{name}}</span>
  </div>
  </RouterLink>
</template>

<script>
  export default {
    props:['info'],
    data(){
      return{
        name:"",
        id:0
      }
    },
    computed:{
      source(){
        return "http://192.168.1.22/static/bands/" + this.name + ".png"
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