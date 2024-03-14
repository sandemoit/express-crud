const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const dotenv = require('dotenv');

dotenv.config();

const init = async () => {
    const server = Hapi.server({
        port: process.env.PORT || 3000, // Menetapkan port default 3000 jika tidak ada PORT yang didefinisikan dalam file .env
        host: process.env.APP_ENV !== 'production' ? 'localhost' : '192.168.43.68',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    server.route(routes);

    try {
        await server.start();
        console.log(`Server berjalan pada ${server.info.uri}`);
    } catch (error) {
        console.error('Terjadi kesalahan saat menjalankan server:', error);
    }
};

init();