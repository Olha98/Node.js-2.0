const express = require('express')
const users =[
  {
    id: '1',
    name: 'Vital',
    email: 'hhhf@gmail.com',
    password: '1123'
  },
  {
     id: '2',
    name: 'Vital 2',
    email: 'hhhf@gmail.com',
    password: '1123'
  }
]

module.exports = class UserController {
  static getUsers(req, res, next) {
    return res.send(users);
  }

  static createUsers(req, res,next){
    
  }
  static 
};


