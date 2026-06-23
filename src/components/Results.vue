<template>
  <span v-if="get_loading">Loading</span>
  <div v-else>
    <BandItem :info="band" v-for="band in get_bands"/>
    <AlbumItem :info="album" v-for="album in get_albums"/>
    <SongItem v-for="song in get_songs" :song="song"/>
  </div>
  <BandItem :info="band" v-for="band in bands"/>

</template>

<script>
import BandItem from "@/components/BandItem.vue";
import AlbumItem from "@/components/AlbumItem.vue";
import SongItem from "@/components/SongItem.vue";
export default {
  computed:{
    get_bands(){
      return this.$store.getters.GET_BANDS
    },
    get_albums(){
      return this.$store.getters.GET_ALBUMS
    },
    get_songs(){
      return this.$store.getters.GET_SONGS
    },
    get_loading(){
      return this.$store.getters.GET_SEARCH_LOADING
    }
  },
  components:{
    SongItem,
    BandItem, AlbumItem
  },
  created() {
    this.$store.dispatch("SEARCH_BANDS")
    this.bands = this.$store.GET_BANDS
  },
  data(){
    return{
      bands:[]
    }
  }
}
</script>

<style scoped>

</style>