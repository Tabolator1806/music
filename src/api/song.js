import global from "@/api/global.js";
const song = {
    current_track: new Audio(),
    imagesrc: `http://${global.server_ip}/static/bands/noAudio.png`,
    data: {
        name: "No Song",
        order: 0,
        albumID: 0,
        filetype: "",
        albumName: "No Album",
        bandName: "No Band",
        bandID: 0,
        queueIndex:0
    },
    queue: [],
    history: []
}
export default song
