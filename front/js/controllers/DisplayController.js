var dhi = angular.module("dhi");

(function () {
    "use strict";

    dhi.controller("DisplayController", [
        '$scope',
        'CommandService',
        function ($scope,CommandService) {
            $scope.data = CommandService.data;
        }
    ]);
}());
