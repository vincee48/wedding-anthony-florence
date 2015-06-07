'use strict';

var Reflux = require('reflux');
var React = require('react');
var Actions = require('../actions/LoginActionCreators');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var Store = require('./SessionStore');
var Action = require('../actions/SessionActionCreators');
var MessageAlertStore = require('../stores/MessageAlertStore');

var LoginStore = Reflux.createStore({
    mixins: [Reflux.connect(Store)],
    listenables: [Actions],

    onLogin: function(user) {
        Parse.User.logIn(user.email, user.password, {
            success: function(u) {
                Action.updateState(true);
                MessageAlertStore.closeMessage();
                window.location.href = '#/dashboard';
            },
            error: function(u, err) {
                MessageAlertStore.handleMessage('Invalid login! Please try again.');
            }
        });
    },

    onLogout: function() {
        Action.updateState(false);
        Parse.User.logOut();
    },

    onCreateUser: function(user) {
        Parse.User.signUp(user.email, user.password, { ACL: new Parse.ACL() }, {
            success: function(u) {
                Action.updateState(true);
            },
            error: function(u, err) {
                console.log(err);
            }
        });
    }
});

module.exports = LoginStore;
