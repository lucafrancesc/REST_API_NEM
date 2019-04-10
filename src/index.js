
import 'dotenv/config';
// import cors from 'cors';
import express from 'express';

const app = express();

// app.use(cors());

app.get('/users', (req, res) => {
  return res.send('Receive a GET HTTP method.');
});

app.post('/users', (req, res) => {
  return res.send('Receive a POST HTTP method.');
});

app.put('/users', (req, res) => {
  return res.send('Receive a PUT HTTP method.');
});

app.delete('/users', (req, res) => {
  return res.send('Receive a DELETE HTTP method.');
});

app.listen(3000, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
