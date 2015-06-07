'use strict';

var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

//var Actions = require('actions/xxx')

require('styles/TransitionWrapper.less');

var TransitionWrapper = React.createClass({
    getInitialState: function() {
        return {
            mounted: false
        };
    },
    componentDidMount: function() {
        this.setState({ mounted: true });
    },
    render: function () {
        var children = this.state.mounted ? this.props.children : null;

        return (
            <div className="TransitionWrapper">
                <ReactCSSTransitionGroup transitionName="fade">
                    {children}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
});

module.exports = TransitionWrapper;

