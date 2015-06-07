'use strict';

var React = require('react/addons');
var Store = require('../../stores/MessageAlertStore');
var Reflux = require('reflux');

require('styles/core/MessageAlert.less');

var MessageAlert = React.createClass({
    mixins: [Reflux.connect(Store)],

    onClick: function() {
        Store.closeMessage();
    },
    render: function () {
        var msgBoxClass = "msg-box";
        var msgAlertClass = "MessageAlert";

        if (!Store.opened) {
            msgBoxClass += " closed";
            msgAlertClass += " fade-out";
        } else {
            msgBoxClass += " opened";
            msgAlertClass += " fade-in";
        }

        return (
            <div>
                {
                    !Store.loading ?

                    <div>
                        <div className={msgAlertClass} onClick={this.onClick}></div>
                        <div className={msgBoxClass}>
                            <h1>Message
                                <button type="button" onClick={this.onClick} className="close"
                                        aria-label="Close"><span aria-hidden="true" className="large-font">&times;</span></button>
                            </h1>
                            <hr/>
                            <p>{Store.message}</p>
                        </div>
                    </div>
                    :
                    <div>
                        <div className={msgAlertClass}></div>
                        <div className="loading">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                }

            </div>
        );
    }
});

module.exports = MessageAlert;

