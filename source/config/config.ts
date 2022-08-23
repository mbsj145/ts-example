import dotenv from 'dotenv';

dotenv.config();

const MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    poolSize: 50,
    autoIndex: false,
    retryWrites: false
};

const MONGO = {
    options: MONGO_OPTIONS,
    url: `mongodb+srv://${process['env']['dev_db_url']}`
};

const SERVER_HOSTNAME = process['env']['server_name'] || 'localhost';
const SERVER_PORT = process['env']['port'] || 4000;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    mongo: MONGO,
    server: SERVER
};

export default config;
