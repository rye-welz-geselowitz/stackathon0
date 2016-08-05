app.config(function ($stateProvider) {
    $stateProvider.state('game', {
        url: '/game',
        controller: 'GameController',
        templateUrl: 'js/game/game.html'
    });

});

app.controller('GameController', function ($scope, ScriptFactory) {
    var scripts=['phaser.min.js','helperFuncs.js','data.js','boot.js','data.js','end.js','instructions.js','load.js','menu.js','play.js','wordrain-end.js','wordrain-instructions.js','wordrain.js','game.js']

});