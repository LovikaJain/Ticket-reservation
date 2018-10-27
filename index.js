var Hapi = require('hapi');
var mongoose = require('mongoose');

var Config = require('./Config');
var Routes = require('./Routes');
var Controllers = require('./Controllers');
var Services = require('./Services');
var MONGO_DB_URI = Config.dbConfig.mongodbURI;
var MONGO_CRED = Config.dbConfig.mongodbCRED.MONGO_CRED_LOCAL;
var PORT = Config.appConstant.SERVER.PORTS.LOCAL;
console.log("----Envrironment:" + process.env.NODE_ENV + "------");
// Set Env
if (process.env.NODE_ENV === 'LOCAL') {
    PORT = Config.appConstant.SERVER.PORTS.LOCAL;
    MONGO_DB_URI = Config.dbConfig.mongodbURI.local;
    MONGO_CRED = Config.dbConfig.mongodbCRED.MONGO_CRED_LOCAL;
}

// Create Hapi Server
var server = new Hapi.Server({
    app: {
        name : Config.appConstant.SERVER.APP_NAME
    }
})

var connectionOptions = {
    port: process.env.PORT || PORT,
    routes: {
        cors: true,
        log: true
    }
};

server.connection(connectionOptions);

//Connect to MongoDB
mongoose.connect(MONGO_DB_URI.local, MONGO_CRED, function (err) {
    server.log("Mongo connected ", err);
    if (err) {
        server.log("DB Error: ", err);
        process.exit(1);
    } else {
        server.log('MongoDB Connected at', MONGO_DB_URI);
    }
});


//Default Routes
server.route(
    {
        method: 'GET',
        path: '/',
        handler: function (req, res) {
            //TODO Change for production server or other server
            res.view('index')
        }
    }
);

//  API routes
server.route(Routes);

//Start Server
server.start(function () {
    server.log('info', 'Server running at: ' + server.info.uri);
});