app.config(function ($stateProvider) {
    $stateProvider.state('game', {
        url: '/game',
        controller: 'GameController',
        templateUrl: 'js/game/game.html'
    });

});

app.controller('GameController', function ($scope) {
    var gameWindow=gameframe.contentWindow;
    document.querySelector('iframe').onload = function(){
        //TODO: This SHOULD make sure the data gets sent only once the iframe is loaded. But make sure!
        gameWindow.postMessage({name:'bob'},'/')         
    };

});