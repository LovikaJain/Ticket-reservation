'use strict';

// mlab database link
var local = 'mongodb://lovika:test123@ds143573.mlab.com:43573/ticket_reservation';

var mongodbURI = {
    local: local
};

var mongodbCRED = {
    MONGO_CRED_LOCAL: {user: '', pass: ''}
};

module.exports = {
    mongodbURI: mongodbURI,
    mongodbCRED: mongodbCRED
};
