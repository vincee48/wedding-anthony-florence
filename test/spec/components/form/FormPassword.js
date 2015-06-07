'use strict';

describe('FormPassword', function () {
  var React = require('react/addons');
  var FormPassword, component;

  beforeEach(function () {
    FormPassword = require('components/form/FormPassword.js');
    component = React.createElement(FormPassword);
  });

  it('should create a new instance of FormPassword', function () {
    expect(component).toBeDefined();
  });
});
