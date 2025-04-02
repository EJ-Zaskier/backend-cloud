const express = require('express');
const multer = require('multer');
const Controller = require('../controllers/imageController');

const upload = multer({ dest: 'uploads/' });
const router = express.Router();

async function onNewImage(request, response) {
    const file = request.file;
    const result = await Controller.onNewImage(file.path);
    response.send(result.data);
}

async function onDeleteImage(request, response) {
    const imageId = request.params.imageId;
    const result = await Controller.onDeleteImage(imageId);
    response.send(result.data);
}

async function onListImages(request, response) {
    const result = await Controller.onListImages();
    response.json(result.data);
}

router.post("/upload", upload.single('file'), onNewImage);
router.delete("/:imageId", onDeleteImage);
router.get("/", onListImages); 

module.exports = router;