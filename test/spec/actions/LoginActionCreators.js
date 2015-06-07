'use strict';

describe('LoginActionCreators', function() {
  var action;

  beforeEach(function() {
    action = require('actions/LoginActionCreators.js');
  });

  it('should be defined', function() {
    expect(action).toBeDefined();
  });
});
