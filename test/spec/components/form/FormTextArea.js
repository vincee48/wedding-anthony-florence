'use strict';

describe('FormTextArea', function () {
  var React = require('react/addons');
  var FormTextArea, component;

  beforeEach(function () {
    FormTextArea = require('components/form/FormTextArea.js');
    component = React.createElement(FormTextArea);
  });

  it('should create a new instance of FormTextArea', function () {
    expect(component).toBeDefined();
  });
});
