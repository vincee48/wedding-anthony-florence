'use strict';

describe('NotFound', function () {
  var React = require('react/addons');
  var Error, component;

  beforeEach(function () {
    Error = require('components/pages/NotFound.js');
    component = React.createElement(Error);
  });

  it('should create a new instance of NotFound', function () {
    expect(component).toBeDefined();
  });
});
