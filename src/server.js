const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
// const contactsRouter = require("./contacts/contacts.routers");
// const AppError = require("./helpers/ErrApp");
// const errorController = require("./helpers/ErrController");
const userRouter = require('./users/user.router');
const mongoose = require('mongoose');
// const ErrorController = require('./helpers/ErrorController');

require('dotenv').config({ path: path.join(__dirname, '../.env') });

class CrudServer {
  constructor() {
    this.server = null;
  }
  start() {
    this.initServer();
    this.initMiddleware();
    this.initRouters();
    this.startListener();
    // this.initDataBase();
    // this.initErrorHandling();
  }

  initServer() {
    this.server = express();
  }
  initMiddleware() {
    this.server.use(express.json());
    this.server.use(cors({ origin: 'http://localhost:3000' }));
    // this.app.use(morgan('combined'));
  }
  initRouters() {
    this.server.use('/users', userRouter);
  }

  // async initDataBase() {
  //   try {
  //     await mongoose.connect(
  //       'mongodb+srv://olha:qwert123@cluster0.9jexjil.mongodb.net/test?retryWrites=true&w=majority',
  //       {
  //         useNewUrlParser: true,
  //         useUnifiedTopology: true,
  //         // useFindAndModify: true,
  //       },
  //     );
  //     const db = client.db('test_db');
  //     console.log(db, 'Database has been started');
  //   } catch (error) {
  //     console.log('Database has NOT been started');
  //     console.log(error);
  //     process.exit(1);
  //   }
  // }

  // initErrorHandling() {
  //   this.server.all('*', (req, res, next) => {
  //     next(new AppError(`Can't fint ${req.originalUrl}`, 404));
  //   });
  //   this.server.use(ErrorController);
  // }

  startListener() {
    this.server.listen(process.env.PORT, () => {
      console.log(process.env.PORT);
      console.log('Server was ran', process.env.PORT);
    });
  }
}

exports.crudServer = new CrudServer();
