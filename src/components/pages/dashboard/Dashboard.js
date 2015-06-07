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
            records: (new Parse.Query('Invitation'))
        };
    },
    getInitialState: function() {
        return {
            name: ''
        };
    },
    handleMessage: function(err, result) {
        MessageAlertStore.handleMessage(result);

        if (!err) {
            this.refreshQueries();
        }
    },
    onChange: function(e) {
        this.setState({ name: e.target.value });
    },
    onSubmit: function(e) {
        e.preventDefault();
        MessageAlertStore.showLoadingMessage();
        Action.create(this.state, this.handleMessage);
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

            if (record.responded && parseInt(record.attendees) === 0) {
                declined.value++;
            } if (record.responded) {
                responded.value++;
                attendees.value += parseInt(record.attendees);
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
                                    <tr><th>Declined</th><td>{ declined.value }</td></tr>
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
                            <PaginatedTable records={this.data.records} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="dashboard-content-wrapper text-center">
                            <h1>Add to Invite List</h1>
                            <hr/>
                            <form className="form-horizontal" onSubmit={this.onSubmit}>
                                <FormText id="invite" label="Full Name" fullwidth="true" placeholder="Enter the name of the invitation here" value={this.state.name} onChange={this.onChange} />
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

