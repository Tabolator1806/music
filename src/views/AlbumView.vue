<script>
import AlbumItem from "@/components/AlbumItem.vue";
import SongItem from "@/components/SongItem.vue";
import global from "@/api/global.js";
import song from "@/api/song.js";
export default {
  name: "BandView",
  components: {SongItem, AlbumItem},
  data(){
    return{
      songs:[],
      name:"",
      bandName:"",
      year:0,
      bandID:0
    }
  },
  created() {
    fetch("http://"+global.server_ip+"/getAlbum/?id="+this.$route.params.id)
        .then(response=>response.json())
        .then(data=>{
          this.songs = data.songs
          this.name = data.album.name
          this.bandName = data.album['band name']
          this.bandID = data.album['band id']
          this.year = data.album.year
        })
  },
  computed:{
    imageSource(){
      return "http://"+global.server_ip+"/static/music/" + this.name + "/cover.jpg"
    }
  },
  methods:{
    playAlbum(){
      this.songs.forEach(element=>{
        const songElement = {
          data:{
            bandName:this.bandName,
            bandID:this.bandID,
            albumName:this.name,
            albumID:this.$route.params.id,
            name:element[1],
            order:element[2],
            filetype:element[4]
          },
          audio:`http://${global.server_ip}/static/music/${this.name}/${this.addZero(element[2])} ${this.bandName} - ${element[1]}.${element[4]}`,
          image:`http://${global.server_ip}/static/music/${this.name}/cover.jpg`
        }
        song.queue.push(songElement)
      })
      if(song.data.name=="No Song"){
        song.current_track.pause()
        song.data = song.queue[0].data
        song.current_track = new Audio(song.queue[0].audio)
        song.imagesrc = song.queue[0].image
        song.queue.shift()
        song.current_track.play()
      }
    },
    addZero(inttime) {
      const time = String(inttime)
      if (time.length == 1) {
        return `0${time}`
      }
      return time
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
        <RouterLink class="band-name" :to="`/bands/${bandID}`">{{bandName}}</RouterLink><br/>
        <span class="year">{{year}}</span><br/><br/>
        <button class="playButton" @click="playAlbum">Play</button>
      </div>
    </div>
    <div class="songs">
      <SongItem v-for="song in songs" :song="song" :isalbum="true"/>
    </div>
  </div>
</template>

<style scoped>

</style>