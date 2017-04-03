import express from 'express';
import http from 'http';
import path from 'path';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import router from './router';
import mongoose from 'mongoose';
import config from '../config';
const app = express()


//App setup
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*'}));
router(app);

// DB setup 
mongoose.connect(config.db)
//Server setup
app.set('port', (process.env.PORT || 3001))
const server = http.createServer(app)
server.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`)
})