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
        $scope.linkText='Link to share:';
        $scope.link=window.location.href||'https://re-spect.herokuapp.com/game/'+$stateParams.hash;
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