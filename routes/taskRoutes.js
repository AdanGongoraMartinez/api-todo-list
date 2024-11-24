import express from 'express';
import { getAllTasks, createTask } from '../controllers/taskController.js';

const router = express.Router();

router.get('/', getAllTasks);
router.post('/create', createTask);

export default router;
