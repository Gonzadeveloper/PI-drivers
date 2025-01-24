const supertest = require('supertest');
const app = require('../index'); // Asegúrate de importar el archivo que inicializa tu servidor

describe('POST /postTeams', () => {
  it('should create a team named Prost', async () => {
    const response = await supertest(app)
      .post('/postTeams')
      .send({ name: 'Prost' })  // El cuerpo de la solicitud
      .expect('Content-Type', /json/)
      .expect(201); // Verificamos que se haya creado (código 201)

    expect(response.body.name).toBe('Prost');
  });

  it('should create a team named McLaren', async () => {
    const response = await supertest(app)
      .post('/postTeams')
      .send({ name: 'McLaren' })  // El cuerpo de la solicitud
      .expect('Content-Type', /json/)
      .expect(201); // Verificamos que se haya creado (código 201)

    expect(response.body.name).toBe('McLaren');
  });
});

describe('POST /postDrivers', () => {
  it('should create a driver Lewis Hamilton with team Mc Laren', async () => {
    const newDriver = {
      name: 'Lewis',
      last_name: 'Hamilton',
      description: '7-time World Champion, known for his incredible skill and consistency.',
      image: 'https://www.formula1.com/content/dam/fom-website/drivers/L/Lewis_Hamilton/image.jpg',
      birthdate: '1985-01-07',
      nationality: 'United Kingdom',
      teams: ['McLaren'], // Aquí le asignamos un equipo
    };

    const response = await supertest(app)
      .post('/postDrivers')
      .send(newDriver)
      .expect('Content-Type', /json/)
      .expect(201); // Esperamos que el código de respuesta sea 201 (creación)

      expect(response.body.message).toBe('Driver created successfully');
  });
});

it('should create another driver with teams Mc Laren and Prost', async () => {
  const secondDriver = {
    name: 'Sebastian',
    last_name: 'Vettel',
    description: '4-time World Champion, known for his domination at Red Bull and comeback at Ferrari.',
    image: 'https://www.formula1.com/content/dam/fom-website/drivers/V/Vettel/image.jpg',
    birthdate: '1987-07-03',
    nationality: 'Germany',
    teams: ['McLaren', 'Prost'],  // Este conductor pertenece a dos equipos
  };

  const response = await supertest(app)
    .post('/postDrivers')
    .send(secondDriver)
    .expect('Content-Type', /json/)
    .expect(201); // Esperamos que el código de respuesta sea 201

  expect(response.body.message).toBe('Driver created successfully');
});


describe('GET /drivers', () => {
  it('should return a list of drivers, including Lewis and Sebastian', async () => {
    const response = await supertest(app).get('/drivers');
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThanOrEqual(2);

    // Verifica que ambos nombres estén en el resultado sin preocuparte por el orden
    const names = response.body.map(driver => driver.name);
    expect(names).toEqual(expect.arrayContaining(['Lewis', 'Sebastian']));  // Comprobamos que ambos estén en la lista
  });
});
