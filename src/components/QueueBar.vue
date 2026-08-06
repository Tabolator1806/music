<script>
import song from "@/api/song.js";
import songItem from "@/components/SongItem.vue";
export default {
  name: "QueueBar",
  computed: {
    song() {
      return song
    }
  },
  components:songItem,
  data(){
    return{
      queue:[]
    }
  },
  created() {
    setInterval(()=>{
      
    },100)
  }
}
</script>

<template>
  Queue
  <song-item v-for="element in queue" :song="element"></song-item>
</template>

<style scoped>

</style>