import express from 'express';
import ToDoRoute from './TodoRoute';
import 'dotenv/config';

const server = express();
server.use(express.json());
server.use('/',ToDoRoute);
const port = process.env.PORT || 1000;
server.use(express.urlencoded({ extended: true }));
server.get('/', (req, res) => res.status(200).json({ message: 'Welcome to ToDo-App' }));

server.listen(process.env.PORT || 1000, console.log(`server listening on ${port}`));

export default server;