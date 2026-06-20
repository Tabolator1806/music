const song = {
    current_track: new Audio(),
    imagesrc: "http://192.168.1.22/static/bands/noAudio.png",
    data:{
        name:"No Song",
        order:0,
        albumID:0,
        filetype:"",
        albumName:"No Album",
        bandName:"No Band",
        bandID:0
    },
    queue:[]
}
export default song