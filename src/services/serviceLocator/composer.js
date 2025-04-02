const Cloudflare = require('../cloudflare');
const ServiceLocator = require('./dependencyLocator');

const cloudflareService = Cloudflare.getInstance();
const di = ServiceLocator.getInstance();

function init(){
    di.bindLazySingleton('cloudFlare', () => cloudflareService);
}

function getCloudFlare(){
    return di.get('cloudFlare')
}

module.exports = { init, getCloudFlare };