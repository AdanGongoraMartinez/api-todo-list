import express from 'express';
import { getAllTasks, createTask, updateTask, deleteTask } from '../controllers/taskController.js';

const router = express.Router();

router.get('/', getAllTasks);
router.get('/:id', getAllTasks);
router.post('/create', createTask);
router.post('/update/:id', updateTask);
router.post('/delete/:id', deleteTask);

export default router;
