import './database';
import 'reflect-metadata';
import express from 'express';
import routes from './routes';
import upload from './config/upload';

const app = express();
app.use(express.json());
app.use('/files', express.static(upload.directory));
app.use(routes);

app.listen(3334, () => {
  console.log('🚀 Server started on port 3334!');
});
