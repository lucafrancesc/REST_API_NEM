
import 'dotenv/config';
// import cors from 'cors';
import express from 'express';

const app = express();

// app.use(cors());

let users = {
  1: {
    id: '1',
    username: 'Robin Wieruch',
  },
  2: {
    id: '2',
    username: 'Dave Davids',
  },
};

let messages = {
  1: {
    id: '1',
    text: 'Hello World',
    userId: '1',
  },
  2: {
    id: '2',
    text: 'By World',
    userId: '2',
  },
};

app.get('/users', (req, res) => {
  return res.send('Receive a GET HTTP method.');
});

app.post('/users', (req, res) => {
  return res.send('Receive a POST HTTP method.');
});

app.put('/users/:userId', (req, res) => {
  return res.send(`PUT HTTP method on user/${req.params.userId} resource`);
});

app.delete('/users/:userId', (req, res) => {
  return res.send(`DELETE HTTP method on user/${req.params.userId} resource`);
});

app.listen(3000, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
