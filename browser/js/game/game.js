app.config(function ($stateProvider) {
    $stateProvider.state('game', {
        url: '/game',
        controller: 'GameController',
        templateUrl: 'js/game/game.html'
    });

});

app.controller('GameController', function ($scope, FullstackPics) {
    $scope.helloWorld='hello world';
});