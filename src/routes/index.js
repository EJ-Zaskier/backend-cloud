const routerImages = require("../network/imageNetwork")

function routes(app){
    app.use("/images" , routerImages);
}

module.exports = routes; 