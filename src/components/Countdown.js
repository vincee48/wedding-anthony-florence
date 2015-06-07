'use strict';

var React = require('react/addons');

//var Actions = require('actions/xxx')

require('styles/Countdown.less');

var Countdown = React.createClass({

    getInitialState: function() {
        return {
            estDate: new Date(2015, 11, 29),
            now: new Date(),
            secondsDiff: (new Date(2015, 11, 29) - new Date()) / 1000
        };
    },
    tick: function() {
        this.setState({
            now: new Date(this.state.now.getTime() + 1000),
            secondsDiff: (this.state.estDate - this.state.now) / 1000,
            days: Math.floor((this.state.secondsDiff % 31536000) / 86400),
            hours: Math.floor(((this.state.secondsDiff % 31536000) % 86400) / 3600),
            minutes: Math.floor((((this.state.secondsDiff % 31536000) % 86400) % 3600) / 60),
            seconds: Math.floor(((this.state.secondsDiff % 31536000) % 86400) % 3600) % 60
        });
    },
    componentDidMount: function() {
        this.interval = setInterval(this.tick, 1000);
    },
    componentWillUnmount: function() {
        clearInterval(this.interval);
    },
    render: function () {
        return (
            <div>
                <h1>{this.state.days} days</h1>
                <h2>{this.state.hours} hours, {this.state.minutes} minutes, {this.state.seconds} seconds to go!</h2>
            </div>
        );
    }
});

module.exports = Countdown;

