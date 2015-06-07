'use strict';

describe('Rsvp', function () {
  var React = require('react/addons');
  var Rsvp, component;

  beforeEach(function () {
    Rsvp = require('components/pages/rsvp/Rsvp.js');
    component = React.createElement(Rsvp);
  });

  it('should create a new instance of Rsvp', function () {
    expect(component).toBeDefined();
  });
});
