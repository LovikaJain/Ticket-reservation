'use strict'

var Services = require('../Services'),
  Models = require('../Models'),
  Config = require('../Config'),
  async = require('async'),
  moment = require('moment');

//  Get User Details
var getObj = function (params, callbackRoute) {
  let criteria = {};
  let projection = {};
  var options = {};
  let customerData = [];

  if (params._id) {
    criteria._id = params._id;
  }

  Services.CustomerService.get(criteria, projection, options, function (err, data) {
    console.log(data);
    if (err) {
      callbackRoute("Sorry, We are Not able to get the Customer Details! Try Again!");
    } else if (data && data.length > 0 && data[0]._id) {
      if (data) {
        customerData = data[0];
        callbackRoute(null, customerData);
      }
    } else {
      callbackRoute("Customer Doesn't exist!!");
    }
  });
}


// Insert User Details 

var saveObj = function (req, callbackRoute) {
  let payload = req.payload;
  if (payload.email) {
    payload.email = payload.email.toLowerCase();
  }
  let projection = {};
  let options = {
    limit: 1
  };

  Services.CustomerService.create(payload, function (err, dataFromDB) {
    if (err) {
      callbackRoute(err)
    } else {
      callbackRoute(err, dataFromDB)
    }
  });

}

module.exports = {
  get: getObj,
  save: saveObj
}