'use strict';

var Reflux = require('reflux');

var MessageAlertStore = Reflux.createStore({
    opened: false,
    message: '',
    loading: false,

    handleMessage: function(msg) {
        this.opened = true;
        this.message = msg;
        this.loading = false;
        this.trigger(this);
    },

    showLoadingMessage: function() {
        this.opened = true;
        this.loading = true;
        this.trigger(this);
    },

    closeMessage: function() {
        this.opened = false;
        this.loading = false;
        this.trigger(this);
    },

    genericError: function() {
        this.handleMessage('An error has occurred. Please try again.');
    }
});

module.exports = MessageAlertStore;
