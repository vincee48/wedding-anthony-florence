'use strict';

var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;
var Parse = require('parse').Parse;
var Store = require('../../stores/LoginStore');
var Reflux = require('reflux');
var Action = require('../../actions/LoginActionCreators');
var AuthMixin = require('../AuthMixin');

require('styles/core/Header.less');

var Header = React.createClass({
    mixins: [Reflux.ListenerMixin, Reflux.connect(Store), AuthMixin],

    logout: function() {
        Action.logout();
    },

    render: function () {
        var loginLink;
        var dashboardLink;

        if (!this.state.loggedIn) {
            //loginLink = <li><Link to="portal">LOGIN</Link></li>;
        } else {
            dashboardLink = <li><Link to="dashboard">DASHBOARD</Link></li>;
            loginLink = <li><a href="#" onClick={this.logout}>LOGOUT</a></li>;
        }

        return (
            <header className="Header">

                <div className="nav">
                    <ul>
                        <li><Link to="app">HOME</Link></li>
                        <li><Link to="wedding">EVENT</Link></li>
                        <li><Link to="rsvp">RSVP</Link></li>
                        { dashboardLink }
                        { loginLink }
                    </ul>
                </div>
            </header>
        );
    }
});

module.exports = Header;

