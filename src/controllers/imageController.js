const CloudflareService = require('../services/serviceLocator/composer');

function onNewImage(path){
  const cloudflareService = CloudflareService.getCloudFlare();
  return cloudflareService.uploadImage(path);
}

function onDeleteImage(imageId){
  const cloudflareService = CloudflareService.getCloudFlare();
  return cloudflareService.removeImage(imageId);
}

function onListImages(){
  const cloudflareService = CloudflareService.getCloudFlare();
  return cloudflareService.listImages();
}

module.exports = {
    onNewImage,
    onDeleteImage,
    onListImages
}