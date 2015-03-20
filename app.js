var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
    '$scope',
    function($scope) {

        $scope.posts = [ // if wanted accessible in the template, bind it with $scope!
            {title: 'post 1', upvotes: 5},
            {title: 'post 2', upvotes: 2},
            {title: 'post 3', upvotes: 15},
            {title: 'post 4', upvotes: 9},
            {title: 'post 5', upvotes: 4}
        ];
    }])