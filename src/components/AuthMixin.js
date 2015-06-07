'use strict';

var SessionStore = require('../stores/SessionStore');

var AuthMixin = {
    getInitialState: function() {
        return { loggedIn: SessionStore.loggedIn };
    },

    onLoggedInStateChange: function() {
        this.setState({ loggedIn: SessionStore.loggedIn });
    },

    componentDidMount: function() {
        this.listenTo(SessionStore, this.onLoggedInStateChange);
    }
};

module.exports = AuthMixin;

