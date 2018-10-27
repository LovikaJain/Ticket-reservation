var Services = require('../Services');
var Config = require('../Config');
var async = require('async');
var moment = require('moment');
var mongoose = require('mongoose');
_ = require('underscore');

//  Get User Details
var getObj = function (params, callback) {
  var projection = {};
  var options = {
    limit: 1
  };
  let bookingDetails;

  if (params._id) {
    let criteria = {
      '_id': params._id
    }
    var projection = {};
    var options = {};

    Services.CustomerBookingService.get(criteria, projection, options, function (err, data) {
      if (err) {
        callback(err);
      } else if (data && data.length > 0 && data[0]._id) {
        bookingDetails = data;
        callback(null, bookingDetails);
      } else {
        callback(err);
      }
    });
  }

}

//  New ticket Request

var newTickeTBooking = function (request, callback) {
  let data = request.payload;
  let customerId;
  var bookingDetails;

  let projection = {};
  let options = {
    limit: 1
  };
  let criteria = {
    '_id': request.params.customer_id,
  }
  data._id = mongoose.Types.ObjectId().toString();
  data.customerId = customerId;
  Services.CustomerBookingService.create(data, function (err, dataFromDB) {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      bookingDetails = dataFromDB._id;
      callback(null, bookingDetails);
    }
  });
}

module.exports = {
  get: getObj,
  newTicket: newTickeTBooking
}