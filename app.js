var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
    '$scope',
    function($scope) {

        $scope.posts = [
            {title: 'post 1', upvotes: 5},
            {title: 'post 2', upvotes: 2},
            {title: 'post 3', upvotes: 15},
            {title: 'post 4', upvotes: 9},
            {title: 'post 5', upvotes: 4}
        ];

        //userinput
        $scope.addPost = function() {
            //preventing blank input from the user
            if (!$scope.title || $scope.title === '')
            {
                return;
            }
            $scope.posts.push({title: $scope.title, link: $scope.link, upvotes: 0});
            //after pushing title and link (userinput) to posts, clear the input
            $scope.title = '';
            $scope.link = '';

        };

        //functin to upvote a post
        $scope.incrementUpvotes = function(post) {
            post.upvotes ++;
        };
    }])