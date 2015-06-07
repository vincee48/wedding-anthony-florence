'use strict';

var React = require('react/addons');

require('styles/pages/Error.less');

var NotFound = React.createClass({

  render: function () {
    return (
        <div className="Error">
            <div className="container">
                <h1>An error has occurred</h1>
            </div>
        </div>
      );
  }
});

module.exports = NotFound;

