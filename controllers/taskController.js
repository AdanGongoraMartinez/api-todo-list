import pool from '../db.js';

// Obtener todas las tareas
export const getAllTasks = async (req, res) => {
    console.log('Aqui toy')
    try {
        const result = await pool.query('SELECT * FROM tasks ORDER BY id ASC');
        console.log('successful');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error en el servidor');
    }
};


