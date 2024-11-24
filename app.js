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

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

