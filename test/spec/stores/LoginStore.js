'use strict';

describe('LoginStore', function() {
  var store;

  beforeEach(function() {
    store = require('stores/LoginStore.js');
  });

  it('should be defined', function() {
    expect(store).toBeDefined();
  });
});
