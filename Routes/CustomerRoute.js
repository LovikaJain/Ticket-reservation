var Controller = require('../Controllers'),
  Joi = require('joi'),
  _ = require('lodash'),
  universalFunction = require('../Utils/UniversalFunctions');
appConstants = require('../Config/appConstant');

var payloadValidation = {
  _id: Joi.string().optional(),
  name: Joi.string().required(),
  email: Joi.string().optional(),
  phoneNo: Joi.number().required()
}

module.exports = [{
    method: 'GET',
    path: '/api/customer/{_id?}',
    handler: function (request, reply) {
      Controller.CustomerController.get(request.params, function (err, success) {
        console.log(request.params);
        if (err) {
          return reply(err);
        } else {
          return reply(success).code(200);
        }
      })
    },
    config: {
      description: 'Get All Customers',
      tags: ['api', 'customers'],
      validate: {
        params: {
          _id: Joi.string().optional().trim()
        },
        failAction: universalFunction.failActionFunction
      }
    }
  },
  {
    method: 'POST',
    path: '/api/customer',
    handler: function (request, reply) {
      Controller.CustomerController.save(request, function (err, success) {
        console.log(request.params);
        if (err) {
          return reply(err);
        } else {
          return reply(success).code(200);
        }
      })
    },
    config: {
      description: 'Add new Customer',
      tags: ['api', 'customers'],
      validate: {
        payload: payloadValidation,
        failAction: universalFunction.failActionFunction
      }
    }
  }
]