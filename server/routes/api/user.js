'use strict';

var _index = require('../../app/users/index.js');

var express = require('express');
var router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.post('/user/insert',  _index.register);
router.get('/user/:id',  _index.getUser);
router.post('/login',  _index.login);

module.exports = router;
