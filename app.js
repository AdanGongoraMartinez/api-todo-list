import express from 'express';
import bodyParser from 'body-parser';
// import cors from 'cors';

import taskRoutes from './routes/taskRoutes.js';

// Configuración de la base de datos
import pool from './db.js';

const app = express();
app.disable('x-powered-by');
const port = 3000;

// Middleware
// app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/tasks', taskRoutes);

// Actualizar una tarea
app.put('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;
    try {
        const result = await pool.query(
            'UPDATE tasks SET completed = $1 WHERE id = $2 RETURNING *',
            [completed, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).send('Tarea no encontrada');
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error en el servidor');
    }
});

// Eliminar una tarea
app.delete('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).send('Tarea no encontrada');
        }
        res.json({ message: 'Tarea eliminada con éxito' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error en el servidor');
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

