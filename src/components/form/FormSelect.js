'use strict';

var React = require('react/addons');

//var Actions = require('actions/xxx')

var FormSelect = React.createClass({

    render: function () {
        return (
            <div className="form-group">
                <label className='control-label col-md-3' htmlFor={this.props.id}>{this.props.label}:</label>
                <div className='col-md-9'>
                    <select className="form-control" id={this.props.id} onChange={this.props.onChange} defaultValue={this.props.value}>
                        {this.props.options.map(function(o) {
                            return <option key={o} value={o}>{o}</option>;
                        })}
                    </select>
                </div>
            </div>
        );
    }
});

module.exports = FormSelect;

