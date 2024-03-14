const express = require('express');
const routes = require('./routes');
const dotenv = require("dotenv");

const app = express();
app.use(express.json());
dotenv.config();

// Iterasi melalui array routes dan mendaftarkan setiap rute
routes.forEach(route => {
    app[route.method.toLowerCase()](route.path, route.handler);
});

const PORT = process.env.PORT || 3000;
const HOST = process.env.APP_ENV !== 'production' ? 'localhost' : '192.168.43.68';

app.listen(PORT, HOST, () => {
    console.log(`Server berjalan pada http://${HOST}:${PORT}`);
});
