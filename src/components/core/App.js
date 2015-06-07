'use strict';

var React = require('react/addons');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Header = require('./Header');
var Footer = require('./Footer');
var MessageAlert = require('./MessageAlert');
var MessageAlertStore = require('../../stores/MessageAlertStore');

// CSS
require('styles/main.less');

var App = React.createClass({

    render: function() {
        return (
            <div>
                <MessageAlert />

                <Header/>

                <div className="content">
                    <RouteHandler />
                </div>

                <Footer/>
            </div>
        );
    }
});

module.exports = App;
