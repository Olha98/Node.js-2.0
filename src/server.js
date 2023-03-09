const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
// const contactsRouter = require("./contacts/contacts.routers");
// const AppError = require("./helpers/ErrApp");
// const errorController = require("./helpers/ErrController");
const { appendFile } = require('fs');
const userRouter = require('./users/user.router');
// const ErrorController = require('./helpers/ErrorController');
require('dotenv').config();


class CrudServer {
  constructor() {
    this.server = null;
  }
  start() {
    this.initServer();
    this.initMiddleware();
    this.initRouters();
    this.startListener();
    // this.initErrorHandling();
  }

  initServer() {
    this.server = express();
  }
  initMiddleware() {
    this.server.use(express.json());
    this.server.use(cors({ origin: 'http://localhost:3000' }));
  }
  initRouters() {
    this.server.use('/users', userRouter);
  }

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
