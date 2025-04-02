const FormData = require('form-data');
const fs = require('fs');
const Client = require('./axios');

class Cloudflare extends Client {

    static instance;

    constructor () {
        super();
    }

    static getInstance(){
        if (!Cloudflare.instance){
            Cloudflare.instance = new Cloudflare();
        }
        return Cloudflare.instance;
    }

    uploadImage (path){
        const formData = new FormData();
        const image  = fs.createReadStream(path);
        formData.append('file', image);
        return this.client.post("/accounts/f28e470763cc6bf04c800600db561c8a/images/v1", formData);
    }

    removeImage(imageId){
        return this.client.delete(`/accounts/f28e470763cc6bf04c800600db561c8a/images/v1/${imageId}`);
    }

    listImages(){
        return this.client.get("/accounts/f28e470763cc6bf04c800600db561c8a/images/v1");
    }
}

module.exports = Cloudflare;