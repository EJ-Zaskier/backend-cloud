const axios = require('axios');

// El token se lee de variables de entorno (ver .env.example).
class Client {
    client;

    constructor(){
        this.client = axios.create ({
            baseURL: "https://api.cloudflare.com/client/v4/",
            headers: {
                Authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`
            }
        })
    }
}

module.exports = Client;
