<script>
import song from "@/api/song.js";
export default {
  name: "Player",
  computed:{
    song() {
      return song
    },
    volumeIcon(){
      if (this.volume>0.5) return "󰕾"
      if (this.volume<=0.5&&this.volume!=0) return "󰖀"
      if (this.volume==0) return "󰝟"
    },
    audioDuration(){
      return this.$store.getters.GET_CURRENT_TRACK.audioDuration
    },
  },
  methods:{
    playAudio(){
      this.paused = 0
      song.current_track.volume = this.savedVolume
      song.current_track.play()
    },
    pauseAudio(){
      this.paused = 1
      song.current_track.pause()
    },
    changeVolume(){
      this.savedVolume = song.current_track.volume
    },
    muteVolume(){
      if (song.current_track.volume){
        song.current_track.volume=0
      }
      else{
        song.current_track.volume=this.savedVolume
      }
    },
    trackTime(){
      this.current_time = song.current_track.currentTime
    }
  },
  data(){
    return{
      volume:1,
      savedVolume:1,
      current_time:0,
      name:"",
      imagesource:"http://192.168.1.22/static/bands/noAudio.png",
      albumID:0,
      albumName:"",
      bandName:"",
      bandID:0,
      paused:0
    }
  },
  created() {
    this.savedVolume = this.volume
    setInterval(()=> {
      if (!song.current_track.paused){
        this.audioDuration = song.current_track.duration
        this.name = song.data.name
        this.imagesource = song.imagesrc
        this.albumID = song.data.albumID
        this.albumName = song.data.albumName
        this.bandName = song.data.bandName
        this.bandID = song.data.bandID
        this.trackTime()
      }
    },100)
  }
}
</script>

<template>
  <div id="musicplayer">
    <div class="songInfo">
      <img :src="imagesource" alt="album image">
      <div class="info">
        <div class="songName">{{name}}</div>
        <div>Band: <RouterLink :to="`/bands/${bandID}`">{{bandName}}</RouterLink></div>
        <div>Album: <RouterLink :to="`/albums/${albumID}`">{{albumName}}</RouterLink></div>
      </div>
    </div>
    <div class="controls">
      <div class="audioLengthDiv">
        <input type="range" class="audioLength" :max="song.current_track.duration" :value="current_time" v-model="song.current_track.currentTime"/>
      </div>
      <div class="buttons">
        <button v-if="!paused" @click="pauseAudio"></button>
        <button v-else @click="playAudio"></button>
      </div>
    </div>
    <div class="volumeControl">
      <button @click="muteVolume">{{volumeIcon}}</button>
      <input type="range" v-model="song.current_track.volume" @input="changeVolume" step="0.01" max="1">
    </div>
  </div>
</template>

<style scoped>

</style>