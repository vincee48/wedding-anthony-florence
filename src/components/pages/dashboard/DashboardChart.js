'use strict';

var React = require('react/addons');

require('styles/pages/dashboard/DashboardChart.less');

var DashboardChart = React.createClass({

    getInitialState: function() {
        return {
            context: null
        };
    },
    componentDidMount: function() {
        this.setState({
            context: React.findDOMNode(this.refs.context).getContext('2d')
        });
    },
    render: function () {

        if (this.state.context !== null) {
            new Chart(this.state.context).Pie(this.props.data, {animateScale: true});
        }

        return (
            <div className="dashboard-content-wrapper text-center">
                <h1>{ this.props.label }</h1>
                <hr/>
                <canvas ref="context"></canvas>
            </div>
        );
    }
});

module.exports = DashboardChart;

