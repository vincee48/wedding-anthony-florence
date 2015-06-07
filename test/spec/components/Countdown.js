'use strict';

describe('Countdown', function () {
  var React = require('react/addons');
  var Countdown, component;

  beforeEach(function () {
    Countdown = require('components/Countdown.js');
    component = React.createElement(Countdown);
  });

  it('should create a new instance of Countdown', function () {
    expect(component).toBeDefined();
  });
});
