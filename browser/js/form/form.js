app.config(function ($stateProvider) {

    // Register our *about* state.
    $stateProvider.state('form', {
        url: '/form',
        controller: 'FormController',
        templateUrl: 'js/form/form.html'
    });

});

app.controller('FormController', function ($scope,GameFactory) {
	// $scope.preData={};
	// $scope.preData.subjSentences=["won't ever stop playing rugby.","always wanted to be an astronaut.","a vegan cupcake, plz.","won't stop taking care of"];

	$scope.gameData={};
	$scope.gameData.pronouns={
        //S: subject, O: object: P1: possessive1, P1: possesive2: SR: self-referential 
        male:{S:'he',O:'him',P1:'his',P2:'his',SR:'himself'},
        female:{S:'she',O:'her',P1:'her',P2:'hers',SR:'herself'},
        neutral:{S:'they',O:'them',P1:'their',P2:'theirs',SR:'themself'}
    }
    $scope.gameData.subject={};
	$scope.gameData.subject.PGP='neutral';
	$scope.gameData.subject.sentences=[
		{array: [null,"won't ever stop playing rugby."],POS: 'S'},
		{array: [null,'always wanted to be an astronaut.'],POS: 'S'},
		{array: ['Give',null,'a vegan cupcake, plz'],POS: 'O'},
		{array: ["This kid knows how to defend",null],POS: 'SR'}
	];
	$scope.getEmptyIndex=function(arr){
		for(var i=0; i<arr.length; i++){
			if(arr[i]){
				return i
			}
		}
	}



	$scope.addNewGame=function(){
		$scope.gameData.name.associatedWords=$scope.gameData.name.associatedWords.split(',');
		$scope.gameData.name.associatedWords=$scope.gameData.name.unAssociatedWords.split(',');

		GameFactory.postGame($scope.gameData);
	}
	$scope.getPOS=function(key){
		return $scope.gameData.pronouns[$scope.gameData.subject.PGP][key].toUpperCase();
	}
});