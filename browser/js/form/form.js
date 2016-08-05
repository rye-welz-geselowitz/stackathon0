app.config(function ($stateProvider) {

    // Register our *about* state.
    $stateProvider.state('form', {
        url: '/form',
        controller: 'FormController',
        templateUrl: 'js/form/form.html'
    });

});

app.controller('FormController', function ($scope,GameFactory) {
	$scope.addNewGame=function(game){
		console.log(game);
		GameFactory.postGame(game);
	}
});