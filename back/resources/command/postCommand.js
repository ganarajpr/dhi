var wit = require("../../wit.js")

exports.postCommand = function (req, res) {
    var response = {
        input : req.body.command
    };
    var wit_request = wit.request_wit(req.body.command);
    return wit_request.then(function(res) {
        response.output = res;
        return response;
    });



};
