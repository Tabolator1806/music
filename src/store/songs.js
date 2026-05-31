const songs = {
    state(){
        return{
            queue:[],
            current_track:new Audio,
            volume:100,
            elapsed_time:0
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
        },
        SET_ELAPSED_TIME(state,newTime){
            state.elapsed_time = newTime
        }
    },
    actions:{
        playTrack({state,commit}){
            state.current_track.play()
        }
    }
}