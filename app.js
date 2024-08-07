const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const util = require('./util'); // Import the util module

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/add', util.addNumbers); // Use the imported function

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
