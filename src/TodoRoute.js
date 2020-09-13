import express from 'express';
import ToDo from './ToDoController';

const router = express.Router();
router.post('/ToDo', ToDo.create);
router.get('/ToDo',ToDo.readAll);
router.get('/ToDo/:id',ToDo.readById);
router.put('/ToDo/:id', ToDo.update);
router.delete('/ToDo/:id', ToDo.deleteToDo);
export default router;