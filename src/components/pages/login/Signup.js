'use strict';

var Reflux = require('reflux');
var React = require('react/addons');
var TransitionWrapper = require('./../../TransitionWrapper');
var FormText = require('../../form/FormText');
var FormPassword = require('../../form/FormPassword');
var Store = require('../../../stores/LoginStore');
var Action = require('../../../actions/LoginActionCreators');

require('styles/pages/login/Signup.less');

var Signup = React.createClass({
    mixins: [Reflux.connect(Store)],

    getInitialState: function(e) {
        return {
            email: '',
            password: '',
            confirmPassword: ''
        };
    },
    onSubmit: function(e) {
        e.preventDefault();

        var user = {
            email: this.state.email,
            password: this.state.password
        };

        Action.createUser(user);
    },
    onEmailChange: function(e) {
        this.setState({ email: e.target.value });
    },
    onPasswordChange: function(e) {
        this.setState({ password: e.target.value });
    },
    onConfirmPasswordChange: function(e) {
        this.setState({ confirmPassword: e.target.value });
    },
    render: function () {
        return (
            <div className="Signup">
                <TransitionWrapper>
                    <h1>Sign-up</h1>
                    <hr/>
                    <form onSubmit={this.onSubmit} className="form-horizontal">
                        <FormText validate={{required: true}} label="Email Address" onChange={this.onEmailChange} value={this.state.email} placeholder="Enter your email address" id="email" />

                        <FormPassword validate={{required: true}} label="Password" onChange={this.onPasswordChange} value={this.state.password} placeholder="Enter your password" id="password" />
                        <FormPassword validate={{required: true, confirm: true}} other={this.state.password} label="Confirm Password" onChange={this.onConfirmPasswordChange} value={this.state.confirmPassword} placeholder="Confirm your password" id="password" />

                        <div className="form-group">
                            <div className="col-lg-9 col-lg-offset-3">
                                <input type="submit" className="btn btn-lg btn-primary" value="Sign-up" /> or <a onClick={this.props.toggleMenu}>login here</a>
                            </div>
                        </div>
                    </form>

                </TransitionWrapper>
            </div>
        );
    }
});

module.exports = Signup;

