(function () {
    "use strict";

    var services = angular.module("dhi");

    services.factory("DataService", [
        function () {
            return {
                data : {}
            };
        }
    ]);
}());
