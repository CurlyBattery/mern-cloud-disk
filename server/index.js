const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const fileUpload = require('express-fileupload');

const authRouter = require('./routes/auth.routes');
const fileRouter = require('./routes/file.routes');

const cors = require('cors');

const app = express();
const PORT = config.get('serverPort');

app.use(fileUpload({}))
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
}));
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/files',  fileRouter);

const start = async () => {
  try {
    await mongoose.connect(config.get('dbUrl'));

    app.listen(PORT, () =>
      console.log(`Server listen to port ${PORT}`)
    );
  } catch (e)  {

  }
}

start();