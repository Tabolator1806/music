const songs = {
    state(){
        return{
            queue:[],
            current_track:new Audio,
            volume:1,
            elapsed_time:0,
            playing:0,
            song:{
                data:{},
                computed:{
                    imagesource:"http://192.168.1.22/static/bands/noAudio.png"
                }
            }
        }
    },
    getters:{
        GET_CURRENT_TRACK(state){
            return state.current_track
        },
        GET_QUEUE(state){
            return state.queue
        },
        GET_VOLUME(state){
            return state.volume
        },
        GET_ELAPSED_TIME(state){
            return state.elapsed_time
        },
        CHECK_IF_PLAYING(state){
            return state.playing
        },
        GET_CURRENT_SONG(state){
            return state.song
        }
    },
    mutations:{
        SET_CURRENT_TRACK(state,newTrack){
            state.current_track = newTrack
        },
        SET_QUEUE(state,newQueue){
            state.queue = newQueue
        },
        ADD_TO_QUEUE(state,newTrack){
            state.queue.push(newTrack)
        },
        SET_VOLUME(state,newVolume){
            state.volume = newVolume
            state.current_track.volume = state.volume
        },
        SET_ELAPSED_TIME(state,newTime){
            state.elapsed_time = newTime
        },
        SET_CURRENT_SONG(state,newSong){
            state.song = newSong
        }
    },
    actions:{
        playTrack({state,commit}){
            state.current_track.pause()
            state.current_track.volume = state.volume
            state.playing = 1
            state.current_track.play()
        },
        stopTrack({state,commit}){
            state.playing = 0
            state.current_track.pause()
        }
    }
}
export default songs