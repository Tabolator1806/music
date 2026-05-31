<script>
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
    }
  },
  methods:{
    playAudio(){
      this.$store.dispatch("playTrack")
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
    }
  },
  data(){
    return{
      volume:0,
      savedVolume:0
    }
  },
  created() {
    this.volume = this.$store.getters.GET_VOLUME
    this.savedVolume = this.volume
  }
}
</script>

<template>
  <div id="musicplayer">
    <img :src="imagesource" alt="album image">
    <button v-if="isAudioPlaying" @click="pauseAudio"></button>
    <button v-else @click="playAudio"></button>
    <button @click="muteVolume">{{volumeIcon}}</button>
    <input type="range" v-model="volume" @input="changeVolume" step="0.01" max="1">
  </div>
</template>

<style scoped>

</style>