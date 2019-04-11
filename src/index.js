import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import models from './models';
import routes from './routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1],
  };
  next();
});

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);

app.listen(3000, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
