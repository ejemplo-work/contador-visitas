const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

let visitas = 0;

app.get('/api/visitas', (req, res) => {
  visitas++;
  console.log(`Visita número ${visitas}`);
  res.json({ visitas });
});

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Contador de visitas API' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
