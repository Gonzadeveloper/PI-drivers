const fs = require('fs');
const path = require('path');
const { Driver } = require('./src/models/index');  // Asegúrate de importar tus modelos correctamente

// Ruta al archivo JSON
const filePath = path.join(__dirname, './api/db.json');  // Cambia la ruta según el archivo que tengas

// Leer el archivo JSON
fs.readFile(filePath, 'utf8', async (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }

  // Convertir el contenido del archivo JSON a un objeto
  const jsonData = JSON.parse(data);

  // Iterar sobre cada elemento y guardarlo en la base de datos
  try {
    for (const driver of jsonData) {
      // Puedes ajustar los campos según las propiedades que tenga tu modelo Driver
      await Driver.create({
        id: driver.id,
        name: driver.name,
        last_name: driver.last_name,
        description: driver.description,
        image: driver.image,
        birthdate: driver.birthdate,
        nationality: driver.nationality,
      });

      console.log(`Driver ${driver.name} added successfully.`);
    }
  } catch (error) {
    console.error('Error inserting data into database:', error);
  }
});
