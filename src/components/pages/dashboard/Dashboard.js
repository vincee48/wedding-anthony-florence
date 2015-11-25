'use strict';

var Reflux = require('reflux');
var React = require('react/addons');
var Navigation = require('react-router').Navigation;
var FormText = require('../../form/FormText');
var Store = require('../../../stores/InvitationStore');
var Action = require('../../../actions/InvitationActionCreators');
var PaginatedTable = require('./PaginatedTable');
var AuthMixin = require('../../AuthMixin');
var DashboardChart = require('./DashboardChart');
var MessageAlertStore = require('../../../stores/MessageAlertStore');

var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
require('styles/pages/dashboard/Dashboard.less');

var Dashboard = React.createClass({
    mixins: [
        Reflux.connect(Store),
        AuthMixin,
        Navigation,
        ParseReact.Mixin],

    observe: function() {
        return {
            records: (new Parse.Query('Invitation')).limit(1000)
        };
    },
    getInitialState: function() {
        return {
            name: '',
            guest: '',
            code: ''
        };
    },
    handleMessage: function(err, result) {
        MessageAlertStore.handleMessage(result);

        if (!err) {
            this.refreshQueries();
        }
    },
    onCodeChange: function(e) {
        this.setState({ code: e.target.value });
    },
    onNameChange: function(e) {
        this.setState({ name: e.target.value });
    },
    onGuestChange: function(e) {
        this.setState({ guest: e.target.value });
    },
    onSubmit: function(e) {
        e.preventDefault();
        MessageAlertStore.showLoadingMessage();

        if (this.state.code !== '' && this.state.code !== '') {
            Action.create(this.state, this.handleMessage);
        } else {
            MessageAlertStore.handleMessage('Name and Code fields are required.');
        }
    },
    onRemove: function(id) {
        MessageAlertStore.showLoadingMessage();
        Action.delete(id, this.handleMessage);
    },
    componentWillMount: function() {
        if (!this.state.loggedIn) {
            this.transitionTo('app');
        }
    },
    render: function () {

        var responded = {
            value: 0,
            color: '#46bfbd',
            highlight: '#5ad3d1',
            label: 'Responded'
        };
        var attendees = {
            value: 0,
            color: '#46bfbd',
            highlight: '#5ad3d1',
            label: 'Attending'
        };
        var declined = {
            value: 0,
            color: '#F7464A',
            highlight: '#FF5A5E',
            label: 'Declined'
        };
        var awaiting = {
            value: 0,
            color: '#FDB45C',
            highlight: '#FFC870',
            label: 'Awaiting'
        };

        for (var i = 0; i < this.data.records.length; i++ ) {
            var record = this.data.records[i];

            if (record.responded) {
                responded.value++;
                attendees.value += parseInt(record.attendees);
                attendees.value += record.attending ? 1 : 0;
				
				var guestsAttending = record.guestAttending.slice(0).split(';');
				if (guestsAttending) {
					guestsAttending.forEach(function(g, i) {
						attendees.value += g === 'Yes' ? 1 : 0;
					});
				}
            } else {
                awaiting.value++;
            }
        }

        var respondedData = [responded, awaiting];
        var attendeeData = [attendees, declined];

        return (
            <div className="Dashboard">

                <div className="row">
                    <div className="col-md-4">
                        <DashboardChart label="Responses" data={respondedData} />
                    </div>
                    <div className="col-md-4">
                        <DashboardChart label="Attendees" data={attendeeData} />
                    </div>
                    <div className="col-md-4">
                        <div className="dashboard-content-wrapper">
                            <h1 className="text-center">Summary</h1>
                            <hr/>
                            <table className="table table-striped">
                                <tbody>
                                    <tr><th>Invitations</th><td>{ this.data.records.length }</td></tr>
                                    <tr><th>Responded</th><td>{ responded.value }</td></tr>
                                    <tr><th>Awaiting</th><td>{ awaiting.value }</td></tr>
                                    <tr><th>Attendees</th><td>{ attendees.value }</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8">
                        <div className="dashboard-content-wrapper">
                            <h1 className="text-center">Invitation List</h1>
                            <hr/>
                            <PaginatedTable records={this.data.records} onRemove={this.onRemove} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="dashboard-content-wrapper text-center">
                            <h1>Add to Invite List</h1>
                            <hr/>
                            <form className="form-horizontal" onSubmit={this.onSubmit}>
                                <FormText validate={{required: true}} label="Name" onChange={this.onNameChange} value={this.state.name} placeholder="Enter name" id="name" />
                                <FormText validate={{required: false}} label="Guests" onChange={this.onGuestChange} value={this.state.guest} placeholder="Enter guests name. Separate multiple guests with semicolons." id="guest" />

                                <FormText validate={{required: true}} id="code" label="Code" placeholder="Enter code" value={this.state.code} onChange={this.onCodeChange} />
                                <button type="submit" className="btn btn-lg btn-primary">
                                    <span className="glyphicon glyphicon-plus"></span> Add
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
});

module.exports = Dashboard;

