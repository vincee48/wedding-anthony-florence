'use strict';

var React = require('react/addons');

//var Actions = require('actions/xxx')

require('styles/ImageWrapper.less');

var ImageWrapper = React.createClass({

    render: function () {
        var imgClass = 'img-responsive';
        if (this.props.solid) {
            imgClass += ' solid';
        } else {
            imgClass += ' opaque';
        }

        var title;
        if (this.props.title) {
            title = <div className="title">{this.props.title}</div>;
        }

        return (
            <div className="ImageWrapper">
                <div className="image-pin-wrapper">
                    <img src={this.props.url} className={imgClass} />
                </div>
                <div className="image-pin-break"></div>
            </div>
        );
    }
});

module.exports = ImageWrapper;

