const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { restart } = require('nodemon');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// app.use(bodyParser.urlencoded({ extended: true }));
const clients = [];

app.get('/', (req, res) => {
  // db.collection('clients')
  //   .find()
  //   .toArray()
  //   .then((results) => {
  //     console.log(results);
  //   })
  //   .res()
  //   .catch((error) => console.error(error));
});

app.post('/registerClient', (req, res) => {
  res.send({
    message: 'Registrado com sucesso!'
  });
  // clientsCollection
  //   .insertOne(req.body)
  //   .then((result) => {
  //     res.redirect('/');
  //   })
  //   .catch((error) => console.error(error));
});

app.listen(process.env.PORT || 8081);
