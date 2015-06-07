'use strict';

var React = require('react/addons');
var Login = require('./Login');
var Signup = require('./Signup');

//var Actions = require('actions/xxx')

require('styles/pages/login/Portal.less');

var Portal = React.createClass({
    getInitialState: function() {
        return {
            signup: false
        };
    },
    onChange: function() {
        this.setState({ signup: !this.state.signup });
    },
    render: function () {
        return (
            <div className="container">
                <div className="Portal">
                    {this.state.signup ? <Signup toggleMenu={this.onChange} /> : <Login toggleMenu={this.onChange} />}
                </div>
            </div>
        );
    }
});

module.exports = Portal;

