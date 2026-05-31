<script>
import AlbumItem from "@/components/AlbumItem.vue";

export default {
  name: "BandView",
  components: {AlbumItem},
  data(){
    return{
      songs:[],
      name:"",
      bandName:"",
      year:0
    }
  },
  created() {
    console.log(this.$route.params.id)
    fetch("http://192.168.1.22/getAlbum/?id="+this.$route.params.id)
        .then(response=>response.json())
        .then(data=>{
          this.songs = data.songs
          this.name = data.album.name
          this.bandName = data.album['band name']
          this.year = data.album.year
        })
    // this.$store.dispatch("GET_BAND_INFO",this.$route.params.id)
  },
  computed:{
    imageSource(){
      return "http://192.168.1.22/static/music/" + this.name + "/cover.jpg"
    }
  }
}
</script>

<template>
  <div class="bandview">
    <div class="bandinfo">
      <img :src="imageSource" :alt="name">
      <div class="info">
        <span class="name">{{name}}</span><br/>
        <span class="band-name">{{bandName}}</span><br/>
        <span class="year">{{year}}</span>
      </div>
    </div>
    <div class="albums">
      <span v-for="song in songs">{{song}}</span>
    </div>
  </div>
</template>

<style scoped>

</style>