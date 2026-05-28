import {search} from "@/api/index.js";

const searched ={
    state(){
        return {
            bands:[],
            albums:[],
            songs:[],
            searchLoading:false
        }
    },
    mutations: {
        SET_BANDS(state,newBands){
            state.bands = newBands
        },
        SET_ALBUMS(state,newAlbums){
            state.albums = newAlbums
        },
        SET_SONGS(state,newSongs){
            state.songs = newSongs
        },
        SET_SEARCH_LOADING(state,newSearchLoading){
            state.searchLoading = newSearchLoading
        }
    },
    getters: {
        GET_BANDS(state){
            return state.bands
        },
        GET_ALBUMS(state){
            return state.albums
        },
        GET_SONGS(state){
            return state.songs
        },
        GET_SEARCH_LOADING(state){
            return state.searchLoading
        }
    },
    actions: {
        SEARCH({state, commit},name){
        commit("SET_SEARCH_LOADING", true)
        search(name)
            .then(data => {
                commit("SET_BANDS",data.bands)
                commit("SET_ALBUMS",data.albums)
                commit("SET_SONGS",data.songs)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                commit("SET_SEARCH_LOADING", false)
            })
        }
    }
}
export default searched