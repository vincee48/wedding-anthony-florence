'use strict';

var React = require('react/addons');
var TextLabel = require('./TextLabel');
var TextFullWidth = require('./TextFullWidth');

/*
// Properties: id, label, fullwidth (default: false), value, placeholder, onChange event
*/
var FormInput = React.createClass({

    render: function () {

        return (
            <div>
                {this.props.fullwidth ?
                <TextFullWidth validate={{required: true}} onChange={this.props.onChange} value={this.props.value} placeholder={this.props.placeholder} id={this.props.id} /> :
                <TextLabel validate={{required: true}} label={this.props.label} onChange={this.props.onChange} value={this.props.value} placeholder={this.props.placeholder} id={this.props.id} />}
            </div>
        );
    }
});

module.exports = FormInput;

