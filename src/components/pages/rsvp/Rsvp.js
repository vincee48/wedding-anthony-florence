'use strict';

var React = require('react/addons');
var TransitionWrapper = require('./../../TransitionWrapper');
var Reflux = require('reflux');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

var RsvpForm = require('./RsvpForm');
var Invitation = require('./Invitation');
var RsvpStore = require('../../../stores/RsvpStore');
var RsvpAction = require('../../../actions/RsvpActionCreators');
var InvitationStore = require('../../../stores/InvitationStore');
var InvitationAction = require('../../../actions/InvitationActionCreators');
var MessageAlertStore = require('../../../stores/MessageAlertStore');

require('styles/pages/rsvp/Rsvp.less');

var Rsvp = React.createClass({
    mixins: [Reflux.ListenerMixin,
        Reflux.connect(RsvpStore, 'rsvpstore'),
        Reflux.connect(InvitationStore, 'invitationstore'),
        ParseReact.Mixin],

    observe: function() {
        return {
            invitationList: (new Parse.Query('Invitation'))
        };
    },
    componentDidMount: function() {
        this.listenTo(RsvpStore, this.onStoreChange);
    },
    onStoreChange: function() {
        this.setState({
            found: RsvpStore.selectedInvitation !== null,
            invitation: RsvpStore.selectedInvitation
        });
    },
    getInitialState: function() {
        return {
            found: false,
            invitation: null
        };
    },
    updateInvitation: function(invitation) {
        MessageAlertStore.showLoadingMessage();
        InvitationAction.update(invitation);
    },
    onInvitationSubmit: function(invitationCode) {
        MessageAlertStore.showLoadingMessage();
        InvitationAction.get(invitationCode);
    },
    render: function () {

		var date = new Date();
		var expiryDate = new Date('2015/12/01');
		var showForm = date.valueOf() < expiryDate.valueOf();
		var display = showForm ? (this.state.found ? <RsvpForm invitation={this.state.invitation} updateInvitation={this.updateInvitation} /> :
                        <Invitation onSubmit={this.onInvitationSubmit} invitationList={this.data.invitationList} />)
						: <p className="text-center">Sorry, RSVPs are now closed. Please contact Anthony or Florence.</p>;
        return (
            <div className="container">

                <div className="Rsvp">
                    { display }
                </div>

            </div>
        );
    }
});

module.exports = Rsvp;

