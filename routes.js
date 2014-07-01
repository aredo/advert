"use strict";

var express = require('express');
var Route = express.Router();
var config = require('./app/config/config');
var passport = require('passport');
var lodash = require('lodash')
var Auth = require(config.root + '/app/helper/authorization');
var fs = require('fs');

var userController = require(config.root + '/app/controllers/users');
var campaignController = require(config.root + '/app/controllers/campaigns');

Route
  .get('/login', userController.login)
  .get('/signup', userController.signup)
  .get('/logout', userController.logout)
  .post('/users/create', userController.create)
  .post('/users/session',
    passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: true
  }), userController.session)
  .get('/campaigns', campaignController.index)
  .get('/', function(req, res) {
    res.render('index')
  })
module.exports = Route
