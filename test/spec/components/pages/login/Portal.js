'use strict';

describe('Portal', function () {
  var React = require('react/addons');
  var Portal, component;

  beforeEach(function () {
    Portal = require('components/pages/login/Portal.js');
    component = React.createElement(Portal);
  });

  it('should create a new instance of Portal', function () {
    expect(component).toBeDefined();
  });
});
