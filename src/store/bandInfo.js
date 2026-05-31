import {bandInformation} from "@/api/index.js";

const bandInfo = {
    state(){
        return {
            albums:[],
            loading:[],
            band:[]
        }
    },
    getters:{
        GET_BAND_ALBUMS(state){
            return state.albums
        },
        GET_BAND(state){
            return state.band
        },
        GET_BAND_LOADING(state){
            return state.loading
        }
    },
    mutations:{
        SET_BAND_ALBUMS(state, newAlbums){
            state.albums = newAlbums
        },
        SET_BAND(state,newBand){
            state.band = newBand
        },
        SET_BAND_LOADING(state, newLoading){
            state.loading = newLoading
        },
    },
    actions:{
        GET_BAND_INFO({state, commit}, id){
            console.log("start")
            commit("SET_BAND_LOADING", true)
            bandInformation(id)
                .then(data =>{
                    console.log(data)
                    commit("SET_BAND_ALBUMS",data.albums)
                    commit("SET_BAND",data.band)
                })
                .catch(error=>{
                    console.error(error)
                })
                .finally(()=>{
                    commit("SET_BAND_LOADING", false)
                })
        }
    }
}
export default bandInfo