var express = require('express'),
    Pushover = require('pushover-notifications'),
    http = require('http'),
    https = require('https'),
    XDate = require('xdate'),
    config = require('./config');

var pusher = new Pushover({
    token: config.pushover_token
});

var app = express();

app.configure(function () {
    app.set('port', process.env.VCAP_APP_PORT || 3000);
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(function (err, req, res, next) {
        if (~err.message.indexOf('not found')) {
            return next();
        }
        console.error(err.stack);
        res.status(500).send();
    });

    app.use(function (req, res, next) {
        res.status(404).send();
    });

});

app.post('/:userkey', function (req, res) {

    var timestamp = new XDate((req.body.up_at || req.body.down_at) * 1000),
        msg = {
            message: "The endpoint " + req.body.endpoint + " is " + req.body.type + " from " + timestamp.toString("MMM d, yyyy hh:mm:ss TT"),
            title: req.body.name + " is " + req.body.type + "!",
            sound: 'siren', // optional
            priority: (req.body.type === "up") ? -1 : 1, // optional
            user: req.params.userkey,
            timestamp: req.body.up_at || req.body.down_at
        };

    pusher.send(msg, function (err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
        res.status(200).send();
    });
});

http.createServer(app).listen(app.get('port'));
console.log('Express server listening on port ' + app.get("port"));