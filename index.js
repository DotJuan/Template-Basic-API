const express_server = require('express');
const app = express_server();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`Hi!`);
});

app.get('/getRuta', (req, res) => {
  res.json({
    data: {
      name: 'Juan',
      product: 'Ventas',
      price: 2300,
    },
  });
});

app.listen(port, () => {
  console.table({ port });
});
