import {createStore} from "vuex";
import searched from "@/store/searched.js";
import bandInfo from "@/store/bandInfo.js";
import songs from "@/store/songs.js";
const modules = {
    searched,
    bandInfo,
    songs
}

export default createStore({
    modules
})