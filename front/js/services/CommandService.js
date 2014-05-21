(function () {
    "use strict";

    var services = angular.module("dhi");

    services.factory("CommandService", [
        '$http',
        function ($http) {
            var CommandService = {
                data : {
                    processedCommands : []
                },
                sendCommand : function(command){
                    $http.post("/api/command/command",{command : command})
                        .success(function(data){
                            CommandService.data.processedCommands.push(data);
                        });
                }
            };
            return CommandService;
        }
    ]);
}());
