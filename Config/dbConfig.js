'use strict';

var local = 'mongodb://localhost/diesel-local';

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
