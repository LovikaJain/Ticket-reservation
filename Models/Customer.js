var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Customer = new Schema({
    name: {type: String, trim: true, default: "test"},
    phoneNo: {type: String, required: true, index: true, min: 10, max: 15},
    email: {type: String, trim: true, required: true}
});

module.exports = mongoose.model('Customer', Customer);


