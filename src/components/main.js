'use strict';

var App = require('./core/App');
var Home = require('./pages/Home');
var Wedding = require('./pages/Wedding');
var Rsvp = require('./pages/rsvp/Rsvp');
var Portal = require('./pages/login/Portal');
var Dashboard = require('./pages/dashboard/Dashboard');
var NotFound = require('./pages/NotFound');

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var Parse = require('parse').Parse;

var content = document.getElementById('content');

var Routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="wedding" handler={Wedding} />
        <Route name="rsvp" handler={Rsvp} />
        <Route name="portal" handler={Portal} />
        <Route name="dashboard" handler={Dashboard} />
        <NotFoundRoute handler={NotFound} />
        <DefaultRoute handler={Home} />
    </Route>
);

// Replace the following with your Parse App ID and Private Key
Parse.initialize("APP ID", "PRIVATE KEY");

Router.run(Routes, function (Handler) {
    React.render(<Handler/>, content);
});

