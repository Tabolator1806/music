<template>
  <BandItem :name="band[0]" v-for="band in get_bands"/>
  <AlbumItem :name="album[0]" v-for="album in get_albums"/>
<span v-for="song in get_songs">{{song[0]}}</span>
</template>

<script>
import BandItem from "@/components/BandItem.vue";
import AlbumItem from "@/components/AlbumItem.vue";
export default {
  data(){
    return {
      bands:[],
      albums:[],
      songs:[]
    }
  },
  computed:{ //<img src="http://192.168.1.22/static/music/Hybrid%20Theory/cover.jpg" alt="aaa">
    get_bands(){
      return this.$store.getters.GET_BANDS
    },
    get_albums(){
      return this.$store.getters.GET_ALBUMS
    },
    get_songs(){
      return this.$store.getters.GET_SONGS
    },
  },
  components:{
    BandItem, AlbumItem
  }
}
</script>

<style scoped>

</style>