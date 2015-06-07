'use strict';

var React = require('react/addons');
var TransitionWrapper = require('./../TransitionWrapper');

require('styles/pages/Wedding.less');

var Wedding = React.createClass({

    render: function () {

        return (

                <div className="Wedding">
                    <div className="container">

                        <TransitionWrapper>

                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-xs-12">
                                        <h1>Ceremony &amp; Reception</h1>
                                        <p>Tuesday December 29, 2015</p>
                                        <p>Le Montage</p>
                                        <p>38 Frazer St,</p>
                                        <p>Lilyfield NSW 2040</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 map">
                                <iframe width="100%" height="450" frameBorder="0" cssStyle="border:0"
                                    src="https://www.google.com/maps/embed/v1/place?q=Le%20Montage%2C%20Lilyfield%2C%20New%20South%20Wales%2C%20Australia&key=AIzaSyBxE72Ln5QgEFG2xwatRLCj0yjOnfJnKII"></iframe>
                            </div>
                        </TransitionWrapper>

                    </div>

                </div>

        );
    }
});

module.exports = Wedding;

