<script>
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
      albumName:"aaa",
      bandName:""
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
        })
  },
  methods:{
    setTrack(){
      const audio = new Audio(this.audiosource)
      audio.play()
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
<div class="songitem" @click="setTrack">
  <div class="image" v-if="isalbum">{{order}}.</div>
  <img class="image" :src="imagesource" alt="name" v-else>
  <div class="name">{{name}}</div>

</div>
</template>

<style scoped>

</style>