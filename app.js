const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


const { authRouter } = require('./routes/api/auth');
const { usersRouter } = require('./routes/api/users');
const { tasksRouter } = require('./routes/api/tasks');

dotenv.config({ path: './.env'});

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'



app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));


app.use('/api/auth', authRouter);
app.use('/api/user', usersRouter);
app.use('/api/tasks', tasksRouter);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.all('*', (req, res) => {
  res.status(404).json({ message: 'Not found' })
});

app.use((error, req, res, next) => {
  console.log(error);
  const msg = Array.isArray(error.message) ? error.message.join(';') : error.message;
  
   res.status(error.status || 500).json({ 
    msg,
    stack: error.stack
    });
});

module.exports = app;