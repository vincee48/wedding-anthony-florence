'use strict';

describe('FormSelect', function () {
  var React = require('react/addons');
  var FormSelect, component;

  beforeEach(function () {
    FormSelect = require('components/form/FormSelect.js');
    component = React.createElement(FormSelect);
  });

  it('should create a new instance of FormSelect', function () {
    expect(component).toBeDefined();
  });
});
