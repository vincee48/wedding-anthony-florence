'use strict';

describe('RsvpStore', function() {
  var store;

  beforeEach(function() {
    store = require('stores/RsvpStore.js');
  });

  it('should be defined', function() {
    expect(store).toBeDefined();
  });
});
