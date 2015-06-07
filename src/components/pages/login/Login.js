'use strict';

var Reflux = require('reflux');
var React = require('react/addons');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var TransitionWrapper = require('../../TransitionWrapper');
var Store = require('../../../stores/LoginStore');
var Action = require('../../../actions/LoginActionCreators');
var MessageAlertStore = require('../../../stores/MessageAlertStore');

var FormText = require('../../form/FormText');
var FormPassword = require('../../form/FormPassword');

require('styles/pages/login/Login.less');

var Login = React.createClass({
    mixins: [Reflux.connect(Store)],

    getInitialState: function() {
        return {
            email: '',
            password: ''
        };
    },
    onEmailChange: function(e) {
        this.setState({ email: e.target.value });
    },
    onPasswordChange: function(e) {
        this.setState({ password: e.target.value });
    },
    onSubmit: function(e) {
        e.preventDefault();

        var user = {
            email: this.state.email,
            password: this.state.password
        };

        MessageAlertStore.showLoadingMessage();
        Action.login(user);
    },
    render: function () {
        return (
            <div className="Login">
                <TransitionWrapper>
                    <h1>Login</h1>
                    <hr/>
                    <form className="form-horizontal" onSubmit={this.onSubmit}>
                        <FormText validate={{required: true}} label="Email Address" onChange={this.onEmailChange} value={this.state.email} placeholder="Enter your email address" id="email" />

                        <FormPassword validate={{required: true}} label="Password" onChange={this.onPasswordChange} value={this.state.password} placeholder="Enter your password" id="password" />

                        <div className="form-group">
                            <div className="col-lg-9 col-lg-offset-3">
                                <input type="submit" className="btn btn-lg btn-primary" value="Login" />
                            </div>
                        </div>
                    </form>

                </TransitionWrapper>
            </div>
        );
    }
});

module.exports = Login;

