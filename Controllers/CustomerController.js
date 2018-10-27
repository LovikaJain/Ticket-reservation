'use strict'

var Services = require('../Services'),
    Models = require('../Models'),
    Config = require('../Config'),
    async = require('async'),
        moment = require('moment')

//  Get User Details
var getObj = function (params, query, callbackRoute) {
    let criteria = {};
    let projection = {};
    var options = {};

    if (params._id) {
        criteria._id = params._id;
    }

    Services.CustomerService.get(criteria, projection, options, function (err, data) {
        if (err) {
            callbackRoute("Sorry, We are Not able to get the Customer Details! Try Again!");
        } else if (data && data.length > 0 && data[0]._id) {
            if (data) {
                data = params._id ? data[0] : data;
                callbackRoute(null, data);
            }
        } else {
            callbackRoute("Customer Doesn't exist!!");
        }
    });
}


// Insert User Details 

var saveObj = function (req, callbackRoute) {
    let payload = req.payload;
    let projection = {};
    let options = {
        limit: 1
    };

    if (req.params._id) {
        Services.CustomerService.update({
            _id: req.params._id
        }, payload, {}, function (err, dataFromDB) {
            if (err) {
                callbackRoute(err)
            } else {
                callbackRoute(err, dataFromDB)
            }
        });
    } else {
        Services.CustomerService.create(payload, function (err, dataFromDB) {
            if (err) {
                callbackRoute(err)
            } else {
                callbackRoute(err, dataFromDB)
            }
        });
    }
}

module.exports = {
    get: getObj,
    save: saveObj
}