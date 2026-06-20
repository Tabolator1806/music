import {createStore} from "vuex";
import searched from "@/store/searched.js";
import bandInfo from "@/store/bandInfo.js";
const modules = {
    searched,
    bandInfo
}

export default createStore({
    modules
})