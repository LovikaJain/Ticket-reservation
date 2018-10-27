var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Booking = new Schema({
    showName : {type: String, trim: true},
    Date: {type: Date, default: Date.now},
    name: {type: String, ref: 'Customer'},
    email: {type: String, ref: 'Customer'},
    phoneNo: {type: Number, ref: 'Customer'},
    seatRow: {type: String, ref: 'Seat'},
    seatNumbers: {type: String, ref: 'Seat'},
    seatPrice : {type: Number, ref: 'Seat'}
});

module.exports = mongoose.model('Booking', Booking);