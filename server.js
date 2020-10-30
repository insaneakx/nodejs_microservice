const dotenv = require('dotenv');
const express = require('express');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const routes = require('./api/routes');

routes(app);

app.listen(port, () => console.log('Server started on port: ' + port));