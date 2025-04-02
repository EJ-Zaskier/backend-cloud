const axios = require('axios');

class Client {
    client;

    constructor(){
        this.client = axios.create ({
            baseURL: "https://api.cloudflare.com/client/v4/",
            headers: {
                Authorization: `Bearer H8J9eWi-Wb_GC5u4IAq8c7oxOnllIublWsqAou6x`
            }
        })
    }
}

module.exports = Client;