'use strict';

describe('RsvpForm', function () {
  var React = require('react/addons');
  var RsvpForm, component;

  beforeEach(function () {
    RsvpForm = require('components/pages/rsvp/RsvpForm.js');
    component = React.createElement(RsvpForm);
  });

  it('should create a new instance of RsvpForm', function () {
    expect(component).toBeDefined();
  });
});
