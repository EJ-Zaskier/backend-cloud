const cors = require('cors');
const express = require('express');
const app = express();
const routes = require('./src/routes');
const { init } = require('./src/services/serviceLocator/composer');
const port = 8081;

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

init();
routes(app);


app.listen(port, () => {
    console.log('Server is running on port:', port);
});
