'use strict';

describe('SessionStore', function() {
  var store;

  beforeEach(function() {
    store = require('stores/SessionStore.js');
  });

  it('should be defined', function() {
    expect(store).toBeDefined();
  });
});
