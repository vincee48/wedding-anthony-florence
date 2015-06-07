'use strict';

describe('TextFullWidth', function () {
  var React = require('react/addons');
  var TextFullWidth, component;

  beforeEach(function () {
    TextFullWidth = require('components/form/TextFullWidth.js');
    component = React.createElement(TextFullWidth);
  });

  it('should create a new instance of TextFullWidth', function () {
    expect(component).toBeDefined();
  });
});
