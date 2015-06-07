'use strict';

describe('PaginatedTable', function () {
  var React = require('react/addons');
  var PaginatedTable, component;

  beforeEach(function () {
    PaginatedTable = require('components/pages/dashboard/PaginatedTable.js');
    component = React.createElement(PaginatedTable);
  });

  it('should create a new instance of PaginatedTable', function () {
    expect(component).toBeDefined();
  });
});
