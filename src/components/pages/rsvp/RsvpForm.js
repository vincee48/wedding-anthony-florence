'use strict';

var Reflux = require('reflux');
var React = require('react/addons');
var TransitionWrapper = require('../../TransitionWrapper');
var FormText = require('../../form/FormText');
var FormTextArea = require('../../form/FormTextArea');
var FormSelect = require('../../form/FormSelect');
var Store = require('../../../stores/InvitationStore');

require('styles/pages/rsvp/RsvpForm.less');

var attendeeOptions = [0,1,2,3,4,5,6,7,8,9,10];

var RsvpForm = React.createClass({

    getInitialState: function() {
        return {
			email: this.props.invitation.attributes.email || '',
			dietaryReq: this.props.invitation.attributes.dietaryReq || '',
			specialNeeds: this.props.invitation.attributes.specialNeeds || '',
            attendees: this.props.invitation.attributes.attendees || '0'
		};
    },
	onEmailChange: function(e) {
		this.setState({ email: e.target.value });
	},
	onSpecialNeedsChange: function(e) {
		this.setState({ specialNeeds: e.target.value });
	},
	onDietaryReqChange: function(e) {
		this.setState({ dietaryReq: e.target.value });
	},
    onAttendeesChange: function(e) {
        this.setState({ attendees: e.target.value });
    },
	onSubmit: function(e) {
		e.preventDefault();
		var invitation = this.props.invitation;
		invitation.responded = true;
		invitation.email = this.state.email;
		invitation.dietaryReq = this.state.dietaryReq;
		invitation.specialNeeds = this.state.specialNeeds;
        invitation.attendees = this.state.attendees;
		this.props.updateInvitation(invitation);
	},
    render: function () {
        return (
            <TransitionWrapper>
                <form onSubmit={this.onSubmit} className="RsvpForm form-horizontal">

                    <fieldset>
                        <legend>Invitation Information</legend>

                        <div className="form-group">
                            <label className="control-label col-md-3">Name:</label>
                            <div className="col-md-9">
                                <span className="pull-left form-control-static">{ this.props.invitation.attributes.name }</span>
                            </div>
                        </div>

                        <FormText validate={{required: true}} label="Email Address" onChange={this.onEmailChange} value={this.state.email} placeholder="Enter your email address here" id="email" />
                    </fieldset>

                    <fieldset>
                        <legend>Wedding Preferences</legend>

                        <FormSelect id="accepted" label="Number of Guests" onChange={this.onAttendeesChange} value={this.state.attendees} options={attendeeOptions} />

                        <FormTextArea id="dietaryReq" label="Dietary Requirements" onChange={this.onDietaryReqChange} value={this.state.dietaryReq} placeholder="Enter any dietary requirements here" rows="3"/>

                        <FormTextArea id="specialNeeds" label="Special Needs" onChange={this.onSpecialNeedsChange} value={this.state.specialNeeds} placeholder="Enter any special needs here" rows="3"/>

                    </fieldset>

                    <input type="submit" className="btn btn-lg btn-primary" value="Update Preferences" />
                </form>
            </TransitionWrapper>
        );
    }
});

module.exports = RsvpForm;

