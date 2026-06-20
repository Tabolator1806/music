<script>
import song from "@/api/song.js";
export default {
  name: "SongItem",
  props:['song','isalbum'],
  computed: {
    imagesource() {
      return "http://192.168.1.22/static/music/" + this.albumName + "/cover.jpg"
    },
    audiosource() {
      return `http://192.168.1.22/static/music/${this.albumName}/${this.addZero(this.order)} ${this.bandName} - ${this.name}.${this.filetype}`
    }
  },
  data(){
    return{
      name:"",
      order:0,
      albumID:0,
      filetype:"",
      albumName:"",
      bandName:"",
      bandID:0
    }
  },
  created() {
    this.name = this.$props.song[1]
    this.order = this.$props.song[2]
    this.albumID = this.$props.song[3]
    this.filetype = this.$props.song[4]
    fetch("http://192.168.1.22/getAlbum/?id="+this.albumID)
        .then(response=>response.json())
        .then(data=>{
          this.albumName = data.album.name
          this.bandName = data.album['band name']
          this.bandID = data.album['band id']
        })
  },
  methods:{
    setTrack(){
      song.current_track.pause()
      song.current_track = new Audio(this.audiosource)
      song.data = this.$data
      song.imagesrc = this.imagesource
      song.current_track.play()
    },
    addToQueue(){
      song.queue.push({data:this.$data,audio:this.audiosource,image:this.imagesource})
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
<div class="songitem">
  <div class="playSong" @click="setTrack">
    <div class="image" v-if="isalbum">{{order}}.</div>
    <img class="image" :src="imagesource" alt="name" v-else>
    <div class="info">
      <div class="name">{{name}}</div>
      <div class="additional" v-if="!isalbum"> <RouterLink :to="`/bands/${bandID}`">{{bandName}}</RouterLink> - <RouterLink :to="`/albums/${albumID}`">{{albumName}}</RouterLink></div>
    </div>
  </div>
  <button class="addToQueue" @click="addToQueue">add to queue</button>

</div>
</template>

<style scoped>

</style>