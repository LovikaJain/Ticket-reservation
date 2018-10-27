var Controller = require('../Controllers'),
    Joi = require('joi'),
    _ = require('lodash'),
    universalFunction = require('../Utils/UniversalFunctions');
appConstants = require('../Config/appConstant');

var payloadValidation = {
    _id: Joi.string().optional(),
    name: Joi.string().required(),
    email: Joi.string().optional(),
    phoneNo: Joi.number().required(),
    showName: Joi.string().required(),
    Date: Joi.string().required(),
    seatRow: Joi.string().valid([
        appConstant.seatingStructure.seats.right,
        appConstant.seatingStructure.seats.left,
        appConstant.seatingStructure.seats.center,
        appConstant.seatingStructure.seats.balcony
    ]).required(),
    seatNumbers: Joi.string().valid([
        appConstant.seatingStructure.seatNumbers.right,
        appConstant.seatingStructure.seatNumbers.left,
        appConstant.seatingStructure.seatNumbers.center,
        appConstant.seatingStructure.seatNumbers.balcony
    ]).required(),
    seatPrice: Joi.number().required()
}

module.exports = [{
        method: 'GET',
        path: '/api/customer/{customer_id}/booking/{_id?}',
        handler: function (request, reply) {
            Controller.CustomerBookingController.get(request, function (err, success) {
                console.log(request.params);
                if (err) {
                    return reply(err);
                } else {
                    return reply(success).code(200);
                }
            })
        },
        config: {
            description: 'Get All customers booking details',
            tags: ['api', 'customers-booking'],
            validate: {
                params: {
                    customer_id: Joi.string().required().trim(),
                    _id: Joi.string().optional().trim()
                },
                failAction: universalFunction.failActionFunction
            }
        }
    },
    {
        method: 'POST',
        path: '/api/customer/{customer_id}/booking',
        handler: function (request, reply) {
            Controller.CustomerBookingController.save(request, function (err, success) {
                console.log(request.params);
                if (err) {
                    return reply(err);
                } else {
                    return reply(success).code(200);
                }
            })
        },
        config: {
            description: 'Add new Customer Booking',
            tags: ['api', 'customers-booking'],
            validate: {
                payload: payloadValidation,
                params: {
                    customer_id: Joi.string().required().required.trim()
                },
                failAction: universalFunction.failActionFunction
            }
        }
    }
]