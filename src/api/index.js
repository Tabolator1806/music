import axios from "axios"

const get = (url) => new Promise((resolve, reject) => {
    setTimeout(() => {
        axios.get(url)
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error)
            })

    }, 500 + Math.random() * 1000);

})
const post = (url, userObject) => new Promise((resolve, reject) => {
    console.log(userObject)
    setTimeout(() => {
        axios.post(url, userObject, {withCredentials:true}) // nagłówek obsługiwany na serwerze
            .then(response => {
                console.log("data", response.data);
                resolve(response.data)
            })
            .catch(error => {
                reject(error)
            })
    }, 500 + Math.random() * 1000);
})
const search = (name) => get("http://192.168.1.22/search/?name="+name)
const bandInformation = (id) => get("http://192.186.1.22/getBand/?id="+id)
export {
    search,
    bandInformation
}