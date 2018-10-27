var Services = require('../Services');
var Config = require('../Config');
var async = require('async');
var moment = require('moment');
var mongoose = require('mongoose');

//  Get User Details
var getObj = function (params, query, callback) {
  let customerId;
  let bookingDetails;

  if (params._id) {
    criteria._id = params._id;
  }

  async.series([
    function (cb) {
      let criteria = {};
      let projection = {};
      var options = {
        limit: 1
      };

      Services.CustomerService.get(criteria, projection, options, function (err, data) {
        if (err) {
          cb("Sorry, We are Not able to get the Customer Details! Try Again!");
        } else if (data && data.length > 0 && data[0]._id) {
          if (data) {
            customerId = data[0]._id;
            cb();
          }
        } else {}
        cb("Customer Doesn't exist!!");
      });
    },
    function (cb) {
      let criteria = {};
      let projection = {};
      var options = {
        limit: 1
      };

      Services.CustomerBookingService.get(criteria, projection, options, function (err, data) {
        if (err) {
          cb(err);
        } else if (data && data.length > 0) {
          bookingDetails = data;
          cb();
        } else {
          cb();
        }
      });
    }
  ], function (err, success) {
    if (err) {
      callback(err);
    } else {
      callback(null, bookingDetails);
    }
  })
}

//  New ticket Request

var newTickeTBooking = function (payload, callback) {
  let data = payload;
  let customerId;
  var bookingDetails;
  async.series([
    function (cb) {
      let projection = {};
      let options = {
        limit: 1
      };
      Services.CustomerService.get({}, projection, options, function (err, data) {
        if (err) {
          cb(err);
        } else if (data && data.length > 0 && data[0]._id) {
          customerId = data[0]._id;
          cb();
        } else {
          cb('Error while retreiving customer details!!');
        }
      });
    },
    function (cb) {
      data.customerId = customerId;
      Services.CustomerBookingService.create(data, function (err, dataFromDB) {
        if (err) {
          console.log(err);
          cb(err);
        } else {
          bookingDetails = dataFromDB._id;
          cb();
        }
      });
    }
  ], function (err, response) {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      callback(null, bookingDetails);
    }
  })
}

module.exports = {
  get: getObj,
  newTicket: newTickeTBooking
}