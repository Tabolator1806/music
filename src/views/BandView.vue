<script>
import AlbumItem from "@/components/AlbumItem.vue";
import global from "@/api/global.js";
export default {
  name: "BandView",
  components: {AlbumItem},
  data(){
    return{
      albums:[],
      name:"",
      desc:"",
      year:0
    }
  },
  created() {
    console.log(this.$route.params.id)
    fetch("http://"+global.server_ip+"/getBand/?id="+this.$route.params.id)
        .then(response=>response.json())
        .then(data=>{
          this.albums = data.albums
          this.name = data.band.name
          this.desc = data.band.description
          this.year = data.band.year
        })
    // this.$store.dispatch("GET_BAND_INFO",this.$route.params.id)
  },
  computed:{
  //   get_albums(){
  //     return this.$store.getters.GET_BAND_ALBUMS
  //   },
  //   get_name(){
  //     return this.$store.getters.GET_BAND.name
  //   },
  //   get_desc(){
  //     return this.$store.getters.GET_BAND.description
  //   },
  //   get_year(){
  //     return this.$store.getters.GET_BAND.year
  //   },
    imageSource(){
      return "http://"+global.server_ip+"/static/bands/" + this.name + ".png"
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
        <span class="year">{{year}}</span>
      </div>
    </div>
    <div class="albums">
      <AlbumItem :info="album" v-for="album in albums"/>
    </div>
  </div>
</template>

<style scoped>

</style>