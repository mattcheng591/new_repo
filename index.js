const express = require("express");
const app = express();
const port = 3000;
const testData = require('./test/stuff.json');
const axios = require('axios');

app.use(express.json());

app.post('/', (req, res) => {
  // Handle the incoming data
  console.log(req.body.string);
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);

  // Make the axios request after the server has started
  axios.post(`http://localhost:${port}`, testData)
    .then(function (res) {
      console.log(res.data);
    })
    .catch(function (err) {
      console.error(err);
    });
});