var Models = require('../Models');

// Get Customer Details from DB
var getObj = function(criteria, projection, options, callback) {
    options.lean = true;
    Models.Customer.find(criteria, projection, options, callback);
};

// Insert Customer Details into DB

var createObj = function(CustomerData, callback) {
    new Models.Customer(CustomerData).save(function(err, resp) {
        if(err){
            return callback(err);
        } else {
            callback(err, resp);
        }
    })
}

module.exports = {
    get: getObj,
    create: createObj,
}