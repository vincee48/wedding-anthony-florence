'use strict';

describe('Footer', function () {
  var React = require('react/addons');
  var Footer, component;

  beforeEach(function () {
    Footer = require('components/core/Footer.js');
    component = React.createElement(Footer);
  });

  it('should create a new instance of Footer', function () {
    expect(component).toBeDefined();
  });
});
