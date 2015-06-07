'use strict';

var React = require('react/addons');

//var Actions = require('actions/xxx')

var FormTextArea = React.createClass({

    render: function () {

        return (
            <div className="form-group">
                <label className='control-label col-md-3' htmlFor={this.props.id}>{this.props.label}:</label>
                <div className='col-md-9'>
                    <textarea id={this.props.id} onChange={this.props.onChange} placeholder={this.props.placeholder} value={this.props.value} className="form-control"></textarea>
                </div>
            </div>
        );
    }
});

module.exports = FormTextArea;

