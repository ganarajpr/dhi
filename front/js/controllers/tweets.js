angular.module('dhi')
.controller('tweetsController', function ($scope, data) {
  $scope.tweets = data.tweets;
});
