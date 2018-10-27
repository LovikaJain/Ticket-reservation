'use strict';

var CustomerRoute = require('./CustomerRoute'),
  CustomerBookingRoute = require('./CustomerBookingRoute');

var all = [].concat(CustomerRoute, CustomerBookingRoute);

module.exports = all;