'use strict';

var Reflux = require('reflux');
var Actions = require('../actions/RsvpActionCreators');

var RsvpStore = Reflux.createStore({
    listenables: [Actions],
    selectedInvitation: null,

    getInitialState: function() {
        this.selectedInvitation = null;
    },

    onGet: function(invitation) {
        this.selectedInvitation = invitation;
        this.trigger(this.selectedInvitation);
    }

});

module.exports = RsvpStore;
