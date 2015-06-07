'use strict';

describe('ImageWrapper', function () {
  var React = require('react/addons');
  var ImageWrapper, component;

  beforeEach(function () {
    ImageWrapper = require('components/ImageWrapper.js');
    component = React.createElement(ImageWrapper);
  });

  it('should create a new instance of ImageWrapper', function () {
    expect(component).toBeDefined();
  });
});
