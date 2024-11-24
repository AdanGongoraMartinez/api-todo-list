import express from 'express';
import { getAllTasks, createTask, updateTask } from '../controllers/taskController.js';

const router = express.Router();

router.get('/', getAllTasks);
router.post('/create', createTask);
router.post('/update/:id', updateTask);

export default router;
