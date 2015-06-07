'use strict';

var Reflux = require('reflux');

var LoginActionCreators  =  Reflux.createActions([
    'login',
    'logout',
    'createUser'
]);


module.exports = LoginActionCreators;
