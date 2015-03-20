var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
    '$scope',
    function($scope) {
        $scope.test = 'Hello World!'; // binds to the {{test}} in index.html
    }])