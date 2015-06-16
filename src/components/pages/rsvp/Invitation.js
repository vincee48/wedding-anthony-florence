'use strict';

var Reflux = require('reflux');
var React = require('react/addons');
var TransitionWrapper = require('./../../TransitionWrapper');
var Store = require('../../../stores/InvitationStore');
var Action = require('../../../actions/InvitationActionCreators');
var FormText = require('../../form/FormText');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

require('styles/pages/rsvp/Invitation.less');

var Invitation = React.createClass({

    getInitialState: function() {
        return {
            invitationCode: ''
        };
    },

    onSubmit: function(e) {
        e.preventDefault();

        this.props.onSubmit(this.state.invitationCode);
    },

    changeInvitationCode: function(e) {
        this.setState({
            invitationCode: e.target.value
        });
    },
    render: function () {

        return (
            <div className="Invitation">
                <TransitionWrapper>
                    <h1>Enter the code on your invitation</h1>
                    <hr/>
                    <form onSubmit={this.onSubmit} className='form-horizontal'>
                        <FormText validate={{required: true}} fullwidth={true} label="" onChange={this.changeInvitationCode} value={this.state.invitationCode} placeholder="e.g. John Smith" id="invitationCode" />

                        <button type="submit" className="btn btn-lg btn-primary">
                            <span className="glyphicon glyphicon-search"></span> Find Invitation
                        </button>
                    </form>
                </TransitionWrapper>
            </div>
        );
    }
});

module.exports = Invitation;

