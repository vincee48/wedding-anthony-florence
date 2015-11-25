'use strict';

var React = require('react/addons');

//var Actions = require('actions/xxx')

require('styles/core/Footer.less');

var Footer = React.createClass({

    render: function () {
        return (
            <footer className="Footer">
                <div className="container">
                    &copy; 2015 <a href="http://www.vincentsylo.com/">www.vincentsylo.com</a>
                </div>
            </footer>
        );
    }
});

module.exports = Footer;

