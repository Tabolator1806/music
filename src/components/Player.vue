<script>
import song from "@/api/song.js";
export default {
  name: "Player",
  computed:{
    isAudioPlaying(){
      return this.$store.getters.CHECK_IF_PLAYING
    },
    imagesource(){
      // return this.$store.getters.GET_CURRENT_SONG.computed.imagesource
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
      this.$store.dispatch("playTrack")
      console.log(this.$store.getters.GET_CURRENT_TRACK)
    },
    pauseAudio(){
      this.$store.dispatch("stopTrack")
    },
    changeVolume(){
      this.$store.commit("SET_VOLUME",this.volume)
      this.savedVolume = this.volume
    },
    muteVolume(){
      if (this.volume){
        this.volume = 0
        this.$store.commit("SET_VOLUME",this.volume)
      }
      else{
        this.volume = this.savedVolume
        this.$store.commit("SET_VOLUME",this.volume)
      }
    },
    trackTime(){
      this.current_time = this.$store.getters.GET_CURRENT_TRACK.currentTime
      setTimeout(()=> {
        if (this.isAudioPlaying)
          this.trackTime()
      },100)
    }
  },
  data(){
    return{
      volume:0,
      savedVolume:0,
      current_time:0
    }
  },
  created() {
    this.volume = this.$store.getters.GET_VOLUME
    this.savedVolume = this.volume
    while (this.isAudioPlaying){
      this.trackTime()
    }
  }
}
</script>

<template>
  <div id="musicplayer">
    <div class="songInfo">
      <img :src="imagesource" alt="album image">
      <span>Nazwa</span>
    </div>
    <div class="controls">
      <div class="audioLengthDiv">
        <input type="range" class="audioLength" :max="audioDuration" v-model="current_time"/>
      </div>
      <div class="buttons">
        <button v-if="isAudioPlaying" @click="pauseAudio"></button>
        <button v-else @click="playAudio"></button>
      </div>
    </div>
    <div class="volumeControl">
      <button @click="muteVolume">{{volumeIcon}}</button>
      <input type="range" v-model="volume" @input="changeVolume" step="0.01" max="1">
    </div>
  </div>
</template>

<style scoped>

</style>