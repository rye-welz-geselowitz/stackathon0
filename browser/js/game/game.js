app.config(function ($stateProvider) {
    $stateProvider.state('game', {
        url: '/game/:hash',
        controller: 'GameController',
        templateUrl: 'js/game/game.html'
    });

});

app.controller('GameController', function ($scope,$stateParams,GameFactory) {
    var gameWindow=gameframe.contentWindow;
    if($stateParams.hash){
        GameFactory.getGame($stateParams.hash)
        .then(function(game){
            var gameData=eval('(' + game.data+ ')')
            document.querySelector('iframe').onload = function(){
                gameWindow.postMessage(gameData,'/')    
            };
        })
    }else{
        document.querySelector('iframe').onload = function(){
            gameWindow.postMessage(GameFactory.getDemoData(),'/')    
        };       
    }






});