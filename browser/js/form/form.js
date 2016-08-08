app.config(function ($stateProvider) {

    // Register our *about* state.
    $stateProvider.state('form', {
        url: '/form',
        controller: 'FormController',
        templateUrl: 'js/form/form.html'
    });

});

app.controller('FormController', function ($scope,GameFactory,$state) {
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
		{array: [0,"won't ever stop playing rugby."],POS: 'S'},
		{array: [0,'always wanted to be an astronaut.'],POS: 'S'},
		{array: ["I'll always love",0],POS: 'O'},
		{array: ["This kid knows how to defend",0],POS: 'SR'}
	];
	$scope.gameData.controls=[];
    $scope.gameData.controls[0]={};
	$scope.gameData.controls[0].PGP='neutral';
	$scope.gameData.controls[0].sentences=[
		{array: [0,"didn't mean to burn the pancakes."],POS: 'S'},
		{array: [0,'will always support my other kids.'],POS: 'S'},
		{array: ['I saw that girl high-five',0],POS: 'O'},
		{array: ["That kid clearly loves",0],POS: 'SR'}
	];
	$scope.gameData.subject.associatedWords='ponies, skating, New Yorker, student, biology';
	$scope.gameData.subject.unAssociatedWords='anchovies, hipsters, spiders, chick flicks','exercise';

	$scope.findPrint=function(word,sentence,isControl){
		if(word===0){
			return $scope.getPOS(sentence.POS,isControl)
		}
		if(word){
			return word;
		}
		return '';
	}
	$scope.shouldShow=function(wordIndex,sentence){
		var toReturn=(sentence.array[wordIndex]!==0&&(wordIndex<=(sentence.array.length)-1));
		return toReturn;
	}

	$scope.addNewGame=function(){
		$scope.gameData.subject.associatedWords=$scope.gameData.subject.associatedWords.split(',');
		$scope.gameData.subject.unAssociatedWords=$scope.gameData.subject.unAssociatedWords.split(',');
		GameFactory.postGame($scope.gameData)
		.then(function(game){
			$state.go('game',{hash:game.hash})
		});
	}
	$scope.getPOS=function(key,isControl){
		if(isControl){
			return $scope.gameData.pronouns[$scope.gameData.controls[0].PGP][key].toUpperCase()
		}
		return $scope.gameData.pronouns[$scope.gameData.subject.PGP][key].toUpperCase();
	}
});