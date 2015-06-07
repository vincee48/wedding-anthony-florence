'use strict';

describe('Wedding', function () {
  var React = require('react/addons');
  var Wedding, component;

  beforeEach(function () {
    Wedding = require('components/pages/Wedding.js');
    component = React.createElement(Wedding);
  });

  it('should create a new instance of Wedding', function () {
    expect(component).toBeDefined();
  });
});
