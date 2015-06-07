'use strict';

describe('MessageAlert', function () {
  var React = require('react/addons');
  var MessageAlert, component;

  beforeEach(function () {
    MessageAlert = require('components/core/MessageAlert.js');
    component = React.createElement(MessageAlert);
  });

  it('should create a new instance of MessageAlert', function () {
    expect(component).toBeDefined();
  });
});
