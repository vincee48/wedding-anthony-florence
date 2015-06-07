'use strict';

describe('Invitation', function () {
  var React = require('react/addons');
  var Invitation, component;

  beforeEach(function () {
    Invitation = require('components/pages/rsvp/Invitation.js');
    component = React.createElement(Invitation);
  });

  it('should create a new instance of Invitation', function () {
    expect(component).toBeDefined();
  });
});
