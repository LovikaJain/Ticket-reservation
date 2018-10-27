var Models = require('../Models');

// Get Booking Details from DB
var getObj = function(criteria, projection, options, callback) {
    options.lean = true;
    Models.Booking.find(criteria, projection, options, callback);
};

// Insert Booking Details into DB

var createObj = function(CustomerData, callback) {
    new Models.Booking(CustomerData).save(function(err, resp) {
        if(err){
            return callback(err);
        } else {
            callback(err, resp);
        }
    })
}

module.exports = {
    get: getObj,
    create: createObj
}