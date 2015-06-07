'use strict';

var React = require('react/addons');
var TransitionWrapper = require('./../TransitionWrapper');
var Countdown = require('../Countdown');
var ImageWrapper = require('../ImageWrapper');

require('styles/pages/Home.less');

var img1 = require('../../images/engagement/1.jpg');
var img2 = require('../../images/engagement/2.jpg');
var img3 = require('../../images/engagement/3.jpg');
var img4 = require('../../images/engagement/4.jpg');
var img5 = require('../../images/engagement/5.jpg');
var img6 = require('../../images/engagement/6.jpg');
var img7 = require('../../images/engagement/7.jpg');
var img8 = require('../../images/engagement/8.jpg');
var img9 = require('../../images/engagement/9.jpg');
var img10 = require('../../images/engagement/10.jpg');
var img11 = require('../../images/engagement/11.jpg');
var img12 = require('../../images/engagement/12.jpg');
var img13 = require('../../images/engagement/13.jpg');

var images = [
    {
        url: img1,
        opened: false
    },
    {
        url: img2,
        opened: false
    },
    {
        url: img3,
        opened: false
    },
    {
        url: img4,
        opened: false
    },
    {
        url: img5,
        opened: false
    },
    {
        url: img6,
        opened: false
    },
    {
        url: img7,
        opened: false
    },
    {
        url: img8,
        opened: false
    },
    /*{
        url: img9,
        opened: false
    },
    {
        url: img10,
        opened: false
    },*/
    {
        url: img11,
        opened: false
    },
    {
        url: img12,
        opened: false
    }/*,
    {
        url: img13,
        opened: false
    }*/
];

var Home = React.createClass({
    getInitialState: function () {
        return {
            images: images
        };
    },
    render: function () {
        return (
            <div className="Home">
                <TransitionWrapper>

                    <div className="large-padding">
                        <div className="container center-align">
                            <div className="logo">
                                <h1 className="logo-text">Anthony &amp; Florence</h1>
                                <hr/>
                                <p>Join us in our wedding celebration on</p>
                                <h1>Tuesday December 29, 2015</h1>
                            </div>

                        </div>
                    </div>

                    <div className="bg-teal">
                        <div className="container">
                            <img src={img1} className="img-responsive" />
                        </div>
                    </div>

                    <div className="large-padding">
                        <div className="container center-align">
                            <h1>Countdown</h1>
                            <hr/>
                            <Countdown />
                        </div>
                    </div>

                    <div className="bg-teal large-padding">
                        <div className="container center-align">
                            <h1>Photos</h1>
                            <hr/>
                            <div>
                                <div className="image-list">
                                    {this.state.images.map(function(image) {
                                        console.log(image);
                                        return (
                                            <div key={image.url}>
                                                <ImageWrapper url={image.url} />
                                            </div>
                                        );
                                    }, this)}
                                </div>
                            </div>
                        </div>
                    </div>

                </TransitionWrapper>
            </div>
        );
    }
});

module.exports = Home;

