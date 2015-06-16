'use strict';

var Reflux = require('reflux');
var Actions = require('../actions/InvitationActionCreators');
var Parse = require('parse').Parse;
var Store = require('./RsvpStore');
var Action = require('../actions/RsvpActionCreators');
var MessageAlertStore = require('../stores/MessageAlertStore');

var InvitationObject = Parse.Object.extend("Invitation");

var InvitationStore = Reflux.createStore({
    mixins: [Reflux.connect(Store)],
    listenables: [Actions],

    onCreate: function(invitation, handler) {
        var invite = new InvitationObject();

        invite.save({
            code: invitation.code,
            name: invitation.name,
            guest: invitation.guest
        }, {
            success: function(inv) {
                handler(false, 'Invitation has been successfully created.');
            },
            error: function(inv, error) {
                handler(true, 'Could not create invitation.');
            }
        });
    },

    onUpdate: function(invitation) {
        var invite = new InvitationObject();

        invite.set('id', invitation.id);
        invite.set('guest', invitation.guest);
        invite.set('email', invitation.email);
        invite.set('dietaryReq', invitation.dietaryReq);
        invite.set('attendees', invitation.attendees);
        invite.set('specialNeeds', invitation.specialNeeds);
        invite.set('responded', invitation.responded);
        invite.set('attending', invitation.attending);
        invite.set('guestAttending', invitation.guestAttending);
        invite.save(null, {
            success: function(invite) {
                MessageAlertStore.handleMessage('Thank you! Your invitation has been updated!');
            },
            error: function(invite, error) {
                MessageAlertStore.genericError();
            }
        });
    },

    onGet: function(code) {
        var query = new Parse.Query(InvitationObject);
        query.equalTo('code', code).find({
            success: function(results) {
                if (results.length !== 0) {
                    MessageAlertStore.closeMessage();
                    Action.get(results[0]);
                } else {
                    MessageAlertStore.handleMessage('We could not found the invitation for ' + code + '. Please try again.');
                }
            },
            error: function(results, error) {
                MessageAlertStore.genericError();
            }
        });
    }

});

module.exports = InvitationStore;
