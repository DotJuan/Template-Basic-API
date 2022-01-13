const express_server = require('express');
const app = express_server();
const port = 3000;

app.get('/prod', (req, res) => {
  res.send(`Hi!`);
});

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Chorizo San Carlitano',
      price: 15000,
      units: 6,
    },
    { name: 'Chorizo Mini San Carlitano', price: 15000, units: 12 },
    { name: 'Carne Res San Carlitano', price: 15000, units: 1 },
  ]);
});

app.listen(port, () => {
  console.table({ port });
});
