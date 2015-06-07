'use strict';

describe('FormInput', function () {
  var React = require('react/addons');
  var FormInput, component;

  beforeEach(function () {
    FormInput = require('components/form/FormText.js');
    component = React.createElement(FormInput);
  });

  it('should create a new instance of FormInput', function () {
    expect(component).toBeDefined();
  });
});
