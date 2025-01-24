const { Teams } = require('../models'); // Asegúrate de importar tu modelo correctamente

// Controlador para crear un nuevo equipo
const createTeam = async (req, res) => {
    try {
        // Extraer el nombre del equipo del cuerpo de la solicitud
        const { name } = req.body;

        // Verificar que el nombre esté presente
        if (!name) {
            return res.status(400).json({ message: 'El nombre del equipo es obligatorio.' });
        }

        // Crear el nuevo equipo en la base de datos
        const newTeam = await Teams.create({
            name,
        });

        // Responder con el equipo creado
        return res.status(201).json(newTeam);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Hubo un error al crear el equipo.' });
    }
};

module.exports = { createTeam };
