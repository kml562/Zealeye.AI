import * as dotenv from 'dotenv';
import app from './app.js';
import { startServer } from './src/db/mongoose.js';
dotenv.config();

const {PORT,MongoDB_URI}= process.env;
startServer(PORT,MongoDB_URI,app);