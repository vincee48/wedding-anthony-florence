'use strict';

describe('DashboardChart', function () {
  var React = require('react/addons');
  var DashboardChart, component;

  beforeEach(function () {
    DashboardChart = require('components/pages/dashboard/DashboardChart.js');
    component = React.createElement(DashboardChart);
  });

  it('should create a new instance of DashboardChart', function () {
    expect(component).toBeDefined();
  });
});
