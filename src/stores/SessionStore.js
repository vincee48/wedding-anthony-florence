'use strict';

var Reflux = require('reflux');
var Actions = require('../actions/SessionActionCreators');
var Parse = require('parse').Parse;

var SessionStore = Reflux.createStore({
    listenables: [Actions],
    loggedIn: false,

    getInitialState: function() {
        this.loggedIn = Parse.User.current() !== null;
    },

    onUpdateState: function(status) {
        this.loggedIn = status;
        this.trigger(this.loggedIn);
    }

});

module.exports = SessionStore;
