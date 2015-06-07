'use strict';

describe('Text', function () {
  var React = require('react/addons');
  var Text, component;

  beforeEach(function () {
    Text = require('components/form/TextLabel.js');
    component = React.createElement(Text);
  });

  it('should create a new instance of Text', function () {
    expect(component).toBeDefined();
  });
});
