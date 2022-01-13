const express_server = require('express');
const app = express_server();
const port = 3000;

app.get('/', (req, res) => {
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

app.get('/products/:id', (req,res) =>{
  const {id} = req.params;
  res.json({
    name: 'Chorizo San Carlitano',
    id
  })
})

app.listen(port, () => {
  console.table({ port });
});
