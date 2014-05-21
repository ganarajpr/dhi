var https = require('https');
var Q = require("q");

var request_wit = function(user_text) {
    var future = Q.defer();
    var options = {
        host: 'api.wit.ai',
        path: '/message?q=' + encodeURIComponent(user_text),
        headers: {'Authorization': 'Bearer W2LVJZXJAG5KTEIO7HEJVEW44TPODOHI',
        'Accept': 'application/vnd.wit.20140401'}
};

https.request(options, function(res) {
    var response = '';

    res.on('data', function (chunk) {
        response += chunk;
    });

    res.on('end', function () {
        future.resolve(JSON.parse(response));
    });
}).on('error', function(e) {
        future.reject(undefined);
    }).end();

    return future.promise;
}

module.exports.request_wit = request_wit;
