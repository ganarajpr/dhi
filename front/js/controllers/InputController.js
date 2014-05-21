var dhi = angular.module("dhi");

(function () {
    "use strict";

    dhi.controller("InputController", [
        '$scope',
        'DataService',
        'CommandService',
        function ($scope,DataService,CommandService) {
            $scope.data = DataService.data;

            $scope.onKey = function(){
                if( $scope.data.userInput != ""){
                    CommandService.sendCommand($scope.data.userInput);
                    $scope.data.userInput = "";
                }
            };
        }
    ]);
}());
