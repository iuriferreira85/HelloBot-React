const api = {
    getECs() {
        var url = 'https://hellobotapi.glitch.me/ECs'
        return fetch(url).then((res) => res.json())    
    }
}

module.exports = api