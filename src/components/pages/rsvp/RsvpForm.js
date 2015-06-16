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
            attendees: this.props.invitation.attributes.attendees || '0',
            guest: this.props.invitation.attributes.guest || '',
            attending: this.props.invitation.attributes.attending || false,
            guestAttending: this.props.invitation.attributes.guestAttending || false
        };
    },
	onEmailChange: function(e) {
		this.setState({ email: e.target.value });
	},
    onGuestChange: function(e) {
        this.setState({ guest: e.target.value });
    },
    attending: function() {
        this.setState({ attending: true });
    },
    notAttending: function() {
        this.setState({ attending: false });
    },
    guestAttending: function() {
        this.setState({ guestAttending: true });
    },
    guestNotAttending: function() {
        this.setState({ guestAttending: false });
    },
	onSpecialNeedsChange: function(e) {
		this.setState({ specialNeeds: e.target.value });
	},
	onDietaryReqChange: function(e) {
		this.setState({ dietaryReq: e.target.value });
	},
    /*onAttendeesChange: function(e) {
        this.setState({ attendees: e.target.value });
    },*/
	onSubmit: function(e) {
		e.preventDefault();
		var invitation = this.props.invitation;
		invitation.responded = true;
		invitation.email = this.state.email;
        invitation.guest = this.state.guest;
        invitation.dietaryReq = this.state.dietaryReq;
		invitation.specialNeeds = this.state.specialNeeds;
        invitation.attendees = this.state.attendees;
        invitation.attending = this.state.attending;
        invitation.guestAttending = this.state.guestAttending;
        this.props.updateInvitation(invitation);
	},
    render: function () {
        var attClass = "btn btn-lg ";
        //<FormSelect id="accepted" label="Additional Guests" onChange={this.onAttendeesChange} value={this.state.attendees} options={attendeeOptions} />

        return (
            <TransitionWrapper>
                <div className="row">
                    <form onSubmit={this.onSubmit} className="RsvpForm form-horizontal">

                        <fieldset>
                            <legend>Invitation Information</legend>

                            <div className="col-md-6">
                                <div className="row">
                                    <div className="form-group">
                                        <label className="control-label col-md-3">Name:</label>
                                        <div className="col-md-9">
                                            <span className="pull-left form-control-static">{ this.props.invitation.attributes.name }</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <button type="button" className={this.state.attending ? attClass + "btn-success" : attClass + "btn-default"} onClick={this.attending}>Attending</button>&nbsp;
                                    <button type="button" className={this.state.attending ? attClass + "btn-default" : attClass + "btn-danger"} onClick={this.notAttending}>Not Attending</button>
                                </div>
                            </div>
                            { this.state.guest !== '' ?
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="form-group">
                                        <label className="control-label col-md-3">Name:</label>
                                        <div className="col-md-9">
                                            <span className="pull-left form-control-static">{ this.props.invitation.attributes.guest }</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <button type="button" className={this.state.guestAttending ? attClass + "btn-success" : attClass + "btn-default"} onClick={this.guestAttending}>Attending</button>&nbsp;
                                    <button type="button" className={this.state.guestAttending ? attClass + "btn-default" : attClass + "btn-danger"} onClick={this.guestNotAttending}>Not Attending</button>
                                </div>
                            </div>
                                : null }
                        </fieldset>

                        <fieldset>
                            <legend>Contact Information</legend>
                            <FormText validate={{required: true}} label="Email Address" onChange={this.onEmailChange} value={this.state.email} placeholder="Enter your email address here" id="email" />
                        </fieldset>

                        <fieldset>
                            <legend>Wedding Preferences</legend>


                            <FormTextArea id="dietaryReq" label="Dietary Requirements" onChange={this.onDietaryReqChange} value={this.state.dietaryReq} placeholder="Enter any dietary requirements here" rows="3"/>

                            <FormTextArea id="specialNeeds" label="Special Needs" onChange={this.onSpecialNeedsChange} value={this.state.specialNeeds} placeholder="Enter any special needs here" rows="3"/>

                        </fieldset>

                        <input type="submit" className="btn btn-lg btn-primary" value="Update Preferences" />
                    </form>
                </div>
            </TransitionWrapper>
        );
    }
});

module.exports = RsvpForm;

