var mongoose = require('mongoose');
var softDelete = require('mongoose-delete');
var Schema = mongoose.Schema;

var Booking = new Schema({
    bookingNumber: {type: Number},
    Date: {type: Date, default: Date.now},
    show : {type: String, trim: true}
});

module.exports = mongoose.model('Booking', Booking);


