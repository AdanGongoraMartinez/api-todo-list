import pool from '../db.js';

// Obtener todas las tareas
export const getAllTasks = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM tasks ORDER BY id ASC');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error en el servidor');
    }
};

// Crear una nueva tarea
export const createTask = async (req, res) => {
    const { user_id, title } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO tasks (user_id, title) VALUES ($1,$2) RETURNING *',
            [user_id, title]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error en el servidor');
    }
};


