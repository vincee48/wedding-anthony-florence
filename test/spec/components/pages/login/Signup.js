'use strict';

describe('Signup', function () {
  var React = require('react/addons');
  var Signup, component;

  beforeEach(function () {
    Signup = require('components/pages/login/Signup.js');
    component = React.createElement(Signup);
  });

  it('should create a new instance of Signup', function () {
    expect(component).toBeDefined();
  });
});
