app.config(function ($stateProvider) {

    // Register our *about* state.
    $stateProvider.state('form', {
        url: '/form',
        controller: 'FormController',
        templateUrl: 'js/form/form.html'
    });

});

app.controller('FormController', function ($scope,GameFactory) {
	$scope.gameData={};
	$scope.gameData.pronouns={
        //S: subject, O: object: P1: possessive1, P1: possesive2: SR: self-referential 
        male:{S:'he',O:'him',P1:'his',P2:'his',SR:'himself'},
        female:{S:'she',O:'her',P1:'her',P2:'hers',SR:'herself'},
        neutral:{S:'they',O:'them',P1:'their',P2:'theirs',SR:'themself'}
    }
	$scope.addNewGame=function(){
		$scope.gameData.name.associatedWords=$scope.gameData.name.associatedWords.split(',');
		$scope.gameData.name.associatedWords=$scope.gameData.name.unAssociatedWords.split(',');

		GameFactory.postGame($scope.gameData);
	}
});