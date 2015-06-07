'use strict';

var React = require('react/addons');

//var Actions = require('actions/xxx')

var TextLabel = React.createClass({

    getInitialState: function() {
        return {
            showErrors: false
        };
    },
    onChange: function(e) {
        this.setState({showErrors: true});
        this.props.onChange(e);
    },
    render: function () {
        var error = false;
        var errorMsg = '';
        var errorClass = 'form-control';
        var formGroupClass = 'form-group';

		if (this.state.showErrors) {
			if (this.props.validate.required) {
				error = this.props.value.length === 0;
				if (error) {
					errorMsg = this.props.label + ' field is required.';
					errorClass += ' warning';
					formGroupClass += ' has-warning has-feedback';
				}
			}
		}

        return (
             <div className={formGroupClass}>
                <label className='control-label col-md-3' htmlFor={this.props.id}>{this.props.label}:</label>
                <div className='col-md-9'>
                    <input className={errorClass} type="text" id={this.props.id} onChange={this.onChange} defaultValue={this.props.value} placeholder={this.props.placeholder} aria-describedby={this.props.id + 'Status'} />
                    {error ? <span className="glyphicon glyphicon-warning-sign form-control-feedback" aria-hidden="true"></span> : ''}
                    {error ? <span id={this.props.id + 'Status'} className="sr-only">({errorMsg})</span> : '' }
                </div>
            </div>
        );
    }
});

module.exports = TextLabel;

