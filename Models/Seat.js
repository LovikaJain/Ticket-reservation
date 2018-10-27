var mongoose = require('mongoose');
var softDelete = require('mongoose-delete');
var Config = require('../Config');
var Schema = mongoose.Schema;

var Seat = new Schema({
    seatRow : {
        type: String, 
        enum: [
            Config.appConstant.seatingStructure.seats.right,
            Config.appConstant.seatingStructure.seats.left,
            Config.appConstant.seatingStructure.seats.center,
            Config.appConstant.seatingStructure.seats.balcony
        ]
        },
    seatNumbers : {
        type: String,
        enum: [
            Config.appConstant.seatingStructure.seatNumbers.right,
            Config.appConstant.seatingStructure.seatNumbers.left,
            Config.appConstant.seatingStructure.seatNumbers.center,
            Config.appConstant.seatingStructure.seatNumbers.balcony
        ]
    },
    seatPrice : {type: Number, enum: Config.appConstant.seatingStructure.seatPrice}
});

module.exports = mongoose.model('Seat', Seat);


