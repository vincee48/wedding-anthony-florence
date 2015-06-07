'use strict';

describe('TransitionWrapper', function () {
  var React = require('react/addons');
  var TransitionWrapper, component;

  beforeEach(function () {
    TransitionWrapper = require('components/TransitionWrapper.js');
    component = React.createElement(TransitionWrapper);
  });

  it('should create a new instance of TransitionWrapper', function () {
    expect(component).toBeDefined();
  });
});
